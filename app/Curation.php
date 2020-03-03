<?php

namespace App;

use Backpack\CRUD\CrudTrait;
use App\Events\Curation\Saved;
use App\Events\Curation\Created;
use App\Events\Curation\Deleted;
use App\Events\Curation\Updated;
use Illuminate\Database\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class Curation extends Model
{
    use CrudTrait;
    use RevisionableTrait;

    protected $revisionCreationsEnabled = true;

    protected $fillable = [
        'gdm_uuid',
        'gene_symbol',
        'hgnc_name',
        'hgnc_id',
        'expert_panel_id',
        'curator_id',
        'notes',
        'mondo_id',
        'mondo_name',
        'curation_date',
        'disease_entity_notes',
        'curation_status_id',
        'curation_type_id',
        'rationale_other',
        'rationale_notes',
        'pmids',
        'moi_id',
        'affiliation_id',
    ];

    protected $dates = [
        'curation_date',
    ];

    protected $casts = [
        'pmids' => 'array',
    ];

    protected $with = [
        // 'currentStatus'
    ];

    protected $dispatchesEvents = [
        'saved' => Saved::class,
        'created' => Created::class,
        'updated' => Updated::class,
        'deleted' => Deleted::class,
    ];

    public static function boot()
    {
        parent::boot();

        static::created(function ($curation) {
            if (CurationStatus::count() > 0 && !config('app.bulk_uploading')) {
                $curation->curationStatuses()->attach(CurationStatus::find(1));
            }
        });
    }

    public function expertPanel()
    {
        return $this->belongsTo(ExpertPanel::class);
    }

    public function affiliation()
    {
        return $this->belongsTo(Affiliation::class);
    }

    public function curator()
    {
        return $this->belongsTo(User::class, 'curator_id');
    }

    public function phenotypes()
    {
        return $this->belongsToMany(Phenotype::class);
    }

    public function curationStatuses()
    {
        return $this->belongsToMany(CurationStatus::class)
                ->using(CurationCurationStatus::class)
                ->withPivot('id', 'status_date', 'created_at', 'updated_at')
                ->withTimestamps();
    }

    public function statuses()
    {
        return $this->curationStatuses();
    }

    public function getCurrentStatusAttribute()
    {
        return $this->curationStatuses
                ->sortByDesc(function ($item) {
                    return $item->pivot->status_date->timestamp.'.'.$item->id;
                })
                ->first();
    }

    public function getNumericMondoIdAttribute()
    {
        if (is_null($this->mondo_id)) {
            return null;
        }

        return preg_replace('/mondo: ?(\d+)/i', '$1', $this->mondo_id);
    }

    public function curationType()
    {
        return $this->belongsTo(CurationType::class);
    }

    public function rationales()
    {
        return $this->belongsToMany(Rationale::class);
    }

    public function classifications()
    {
        return $this->belongsToMany(Classification::class)
                ->withPivot('id', 'classification_date')
                ->withTimestamps()
                ->using(CurationClassification::class);
    }

    public function getCurrentClassificationAttribute()
    {
        return $this->classifications
                    ->sortByDesc(function ($item) {
                        return $item->pivot->classification_date->timestamp.'.'.$item->id;
                    })
                    ->first()
                ?? new Classification();
    }

    public function scopeGene($query, $geneSymbol)
    {
        return $query->where('gene_symbol', $geneSymbol);
    }

    public function scopeHgncId($query, $hgncId)
    {
        if (is_array($hgncId)) {
            return $query->whereIn(
                'hgnc_id',
                array_map(
                    function ($item) {
                        return preg_replace('/HGNC:/i', '', trim($item));
                    },
                    $hgncId
                )
            );
        }
        $formattedId = preg_replace('/HGNC:/i', '', trim($hgncId));
        return $query->where('hgnc_id', $formattedId);
    }

    public function scopeMondoId($query, $mondoId)
    {
        if (is_array($mondoId)) {
            return $query->whereIn(
                'mondo_id',
                array_map(
                    function ($item) {
                        return 'MONDO:'.str_pad(trim($item), 7, '0', STR_PAD_LEFT);
                    },
                    $mondoId
                )
            );
        }

        $mondoId = trim($mondoId);
        if (is_numeric($mondoId)) {
            $formattedId = 'MONDO:'.str_pad($mondoId, 7, '0', STR_PAD_LEFT);
        }
        return $query->where('mondo_id', $formattedId);
    }

    public function loadForMessage()
    {
        $this->load('curationType', 'curationStatuses', 'rationales', 'curator', 'phenotypes');

        return $this;
    }

    public function findByUuid($uuid)
    {
        return self::where('gdm_uuid', $uuid)->first();
    }
}
