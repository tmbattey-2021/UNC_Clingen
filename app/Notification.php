<?php

namespace App;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use App\Model;
use Illuminate\Notifications\DatabaseNotification;

class Notification extends DatabaseNotification
{
    use CrudTrait;

    public function getReadableTypeAttribute()
    {
        $parts = explode('\\', $this->type);
        return $parts[count($parts)-1];
    }
}
