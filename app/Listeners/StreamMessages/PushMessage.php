<?php

namespace App\Listeners\StreamMessages;

use Carbon\Carbon;
use App\DataExchange\Contracts\MessagePusher;
use App\DataExchange\Events\Created;
use Illuminate\Queue\InteractsWithQueue;
use App\DataExchange\Jobs\PushMessage as PushMessageJob;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\DataExchange\Exceptions\StreamingServiceException;

class PushMessage
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Handle the event.
     *
     * @param  Created  $event
     * @return void
     */
    public function handle(Created $event)
    {
        PushMessageJob::dispatch($event->streamMessage);
    }
}
