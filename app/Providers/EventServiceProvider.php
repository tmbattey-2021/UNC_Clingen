<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;
use App\Events\Curation\Created;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        'App\Events\Event' => [
            'App\Listeners\EventListener',
        ],
        'App\Events\User\Created' => [
            'App\Listeners\SendWelcomeEmail',
        ],
        'App\Events\Curation\Saved' => [
            'App\Listeners\Curations\AugmentWithHgncAndMondoInfo'
        ],
        'App\Events\Curation\Created' => [
            'App\Listeners\Curations\MakeCurationCreatedStreamMessage'
        ],
        'App\Events\Curation\Updated' => [
            'App\Listeners\Curations\MakeCurationUpdatedStreamMessage'
        ],
        'App\Events\Curation\Deleted' => [
            'App\Listeners\Curations\MakeCurationDeletedStreamMessage'
        ],
        'App\Events\Genes\GeneSymbolChanged' => [
            'App\Listeners\Genes\UpdateCurations',
            'App\Listeners\Genes\NotifyGeneSymbolChanged'
        ],
        'App\Events\StreamMessages\Created' => [
            'App\Listeners\StreamMessages\PushMessage'
        ],
        'App\Events\StreamMessages\Received' => [
            'App\Listeners\Curations\UpdateFromStreamMessage',
            'App\Listeners\SteamMessages\SetTopicOffset'
        ],
        'Illuminate\Mail\Events\MessageSent' => [
            'App\Listeners\Mail\StoreMailInDatabase'
        ]
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();
    }
}
