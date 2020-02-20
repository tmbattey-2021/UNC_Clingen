<?php

namespace App;

use Backpack\CRUD\CrudTrait;
use App\Contracts\IsAffiliation;
use App\Traits\IsAffiliationTrait;
use Illuminate\Database\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class ExpertPanel extends Model implements IsAffiliation
{
    use RevisionableTrait, CrudTrait, IsAffiliationTrait;

    protected $revisionCreationsEnabled = true;
    protected $fillable = [
        'name',
        'working_group_id',
        'affiliation_id',
    ];

    public function workingGroup()
    {
        return $this->belongsTo(WorkingGroup::class);
    }

    public function curations()
    {
        return $this->hasMany(Curation::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function curators()
    {
        return $this->belongsToMany(User::class)
                ->withPivot('can_edit_curations', 'is_curator', 'is_coordinator')
                ->wherePivot('is_curator', 1);
    }

    public function coordinators()
    {
        return $this->belongsToMany(User::class)
                ->withPivot('can_edit_curations', 'is_curator', 'is_coordinator')
                ->wherePivot('is_coordinator', 1);
    }

    public function getFileSafeNameAttribute()
    {
        return preg_replace('/[\\:\\/\*\?"<>\| ]/', '-', $this->name);
    }
}
