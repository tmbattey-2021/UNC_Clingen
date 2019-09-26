<?php

namespace App\Console\Commands\StreamingService;

use App\StreamMessage;
use Illuminate\Console\Command;
use App\Jobs\StreamingService\PushMessage;

class PushUnsentMessages extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'streaming-service:push-pending';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Pushes all StreamMessages that do not have a sent_at date';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        StreamMessage::unsent()
            ->get()
            ->each(function ($msg) {
               PushMessage::dispatch($msg); 
            });
    }
}