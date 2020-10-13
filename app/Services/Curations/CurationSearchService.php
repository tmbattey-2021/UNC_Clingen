<?php

namespace App\Services\Curations;

use App\Contracts\SearchService;
use App\Curation;
use App\User;

class CurationSearchService implements SearchService
{
    protected $validFilters = [
        'gene_symbol',
        'expert_panel_id',
        'curator_id',
        'phenotype',
        'mondo_id',
        'mondo_name',
        'hgnc_id',
        'hgnc_name',
        'moi_id',
    ];

    public function search($params)
    {
        $pageSize = (isset($params['perPage']) && !is_null($params['perPage'])) ? $params['perPage'] : 25;
        $query = $this->buildQuery($params);

        $data = (isset($params['page'])) ? $query->paginate($pageSize) : $query->get();

        return $data;
    }

    public function buildQuery($params)
    {
        $query = Curation::with('curationStatuses', 'rationales', 'curator', 'expertPanel', 'modeOfInheritance')
                    ->select('curations.*')
                    ->join('expert_panels', 'curations.expert_panel_id', '=', 'expert_panels.id')
                    ->leftJoin('users', 'curations.curator_id', '=', 'users.id')
                    ->leftJoin('mode_of_inheritances', 'mode_of_inheritances.id', '=', 'curations.moi_id')
                    ;

        foreach ($params as $key => $value) {
            if ($key == 'with') {
                $query->with($value);
            }
            if (in_array($key, $this->validFilters)) {
                $values = array_map(function ($item) {
                    return trim($item);
                }, preg_split("/,|\n| /", $value));
                $query->whereIn($key, array_filter($values));
            }

            if ($key == 'user_id') {
                $user = User::find($value);
                if (!$user->hasRole('programmer|admin')) {
                    $query->where(function ($q) use ($user) {
                        $editorPanels = $user->coordinatorOrEditorPanels;
                        $q->where('curator_id', $user->id)
                            ->orWhereIn('expert_panel_id', $editorPanels->pluck('id'));
                    });
                }
            }
        }
        $sortField = 'gene_symbol';
        $sortDir = 'asc';

        if (isset($params['filter'])) {
            $query->where('gene_symbol', 'like', '%'.$params['filter'].'%')
                ->orWhere('expert_panels.name', 'like', '%'.$params['filter'].'%')
                ->orWhere('users.name', 'like', '%'.$params['filter'].'%')
                ->orWhere('hgnc_id', $params['filter'])
                ->orWhere('hgnc_name', 'like', '%'.$params['filter'].'%')
                ->orWhere('mondo_id', 'like', '%'.$params['filter'].'%')
                ->orWhere('mondo_name', 'like', '%'.$params['filter'].'%')
                ->orWhereHas('phenotypes', function ($q) use ($params) {
                    $q->where('mim_number', $params['filter']);
                })
                ->orWhereHas('modeOfInheritance', function ($q) use ($params) {
                    $q->where('abbreviation', 'like', '%'.$params['filter'].'%')
                        ->orWhere('name', 'like', '%'.$params['filter'].'%');
                })
                ;
            if (preg_match('/hgnc:/i', $params['filter'])) {
                $hgncId = substr($params['filter'], 5);
                // dd($hgncId);
                $query->orWhere('hgnc_id', $hgncId);
            }
        }

        if (isset($params['sortBy'])) {
            $sortField = $params['sortBy'];
            if ($sortField == 'expert_panel') {
                $sortField = 'expert_panels.name';
            }
            if ($sortField == 'mode_of_inheritance') {
                $sortField = 'mode_of_inheritances.name';
            }
            if ($sortField == 'curator') {
                $sortField = 'users.name';
            }
            if ($params['sortDesc'] === 'true') {
                $sortDir = 'desc';
            }
        }
        $query->orderBy($sortField, $sortDir);

        return $query;
    }
}
