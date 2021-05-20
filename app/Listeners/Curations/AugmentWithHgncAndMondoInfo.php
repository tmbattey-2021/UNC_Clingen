<?php

namespace App\Listeners\Curations;

use App\Events\Curation\Saved;
use App\Exceptions\HttpNotFoundException;
use App\Jobs\Curations\AugmentWithHgncInfo;
use App\Jobs\Curations\AugmentWithMondoInfo;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class AugmentWithHgncAndMondoInfo
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  Saved  $event
     * @return void
     */
    public function handle(Saved $event)
    {
        if ($event->curation->isDirty('mondo_id')) {
            try {
                AugmentWithMondoInfo::dispatch($event->curation);
            } catch (HttpNotFoundException $e) {
                \Log::warning($e->getMessage());
            }
        }
    }
}
