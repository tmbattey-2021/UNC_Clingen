<?php

namespace App\Notifications;

use Illuminate\Support\Collection;

interface DigestibleNotificationInterface
{
    public static function getUnique(Collection $collection):Collection;
    public static function filterInvalid(Collection $collection):Collection;
    public static function getValidUnique(Collection $collection):Collection;
}