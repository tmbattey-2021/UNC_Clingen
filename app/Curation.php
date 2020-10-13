<?php

namespace App;

use App\Events\Curation\Created;
use App\Events\Curation\Deleted;
use App\Events\Curation\Saved;
use App\Events\Curation\Updated;
use App\Jobs\Curations\AddStatus;
use Backpack\CRUD\CrudTrait;
use Illuminate\Database\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

/**
 * @property Classification $currentClassificiation
 * @property CurationStatus $currentStatus
 * @property string numericMondoId
 *
 **/
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
                AddStatus::dispatch($curation, CurationStatus::find(1));
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
                ->orderBy('curation_curation_status.created_at')
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

    public function uploads()
    {
        return $this->hasMany(Upload::class);
    }

    public function modeOfInheritance()
    {
        return $this->belongsto(ModeOfInheritance::class, 'moi_id', 'id');
    }

    public function moi()
    {
        return $this->modeOfInheritance();
    }

    /**
     * ACCESSORS.
     */
    public function getCurrentClassificationAttribute()
    {
        return $this->classifications
                    ->sortByDesc(function ($item) {
                        return $item->pivot->classification_date->timestamp.'.'.$item->id;
                    })
                    ->first()
                ?? new Classification();
    }

    /**
     * SCOPES.
     */
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

    public function scopeHgncAndMondo($query, $hgncId, $mondoId)
    {
        $hgncId = preg_replace('/HGNC:/', '', $hgncId);

        return $query->where([
            'hgnc_id' => $hgncId,
            'mondo_id' => $mondoId,
        ]);
    }

    public function scopeNoUuid($query)
    {
        return $query->whereNull('gdm_uuid');
    }

    public function scopeHasUuid($query)
    {
        return $query->whereNotNull('gdm_uuid');
    }

    public function getNumericMondoIdAttribute()
    {
        if (is_null($this->mondo_id)) {
            return null;
        }

        return preg_replace('/mondo: ?(\d+)/i', '$1', $this->mondo_id);
    }

    /**
     * MUTATORS.
     */
    public function setGeneSymbolAttribute($value)
    {
        $this->attributes['gene_symbol'] = trim($value);
    }

    public function setMondoIdAttribute($value)
    {
        $formattedValue = $value;
        if (is_numeric($value)) {
            $formattedValue = 'MONDO:'.$value;
        }

        if (preg_match('/mondo:/i', $value)) {
            $formattedValue = strtoupper($value);
        }

        $this->attributes['mondo_id'] = $formattedValue;
    }

    /**
     * DOMAIN METHODS.
     */
    public static function findByUuid($uuid)
    {
        return static::where('gdm_uuid', $uuid)->first();
    }

    public static function findByHgncAndMondo($hgncId, $mondoId)
    {
        $hgncId = preg_replace('/HGNC:/', '', $hgncId);

        return static::where([
            'hgnc_id' => $hgncId,
            'mondo_id' => $mondoId,
        ])->first();
    }

    public function addUpload(Upload $upload): void
    {
        $this->uploads()->save($upload);
    }

    public function removeUpload(Upload $upload): void
    {
        $upload->delete();
    }
}
