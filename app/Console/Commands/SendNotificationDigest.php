<?php

namespace App\Console\Commands;

use App\Notifications\CurationNotificationsDigest;
use App\User;
use Carbon\Carbon;
use Illuminate\Console\Command;

class SendNotificationDigest extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'send-notifications';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sends digests of curation notifications as email; marks notifications read_at to time sent.';

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
        // Make sure notifications have been created for all unsent streaming service errors
        $this->call('streaming-service:notify-errors');

        $users = User::has('unreadNotifications')
                    ->with('unreadNotifications')
                    ->get();
        
        $users->each(function ($user) {
            $user->notify(new CurationNotificationsDigest($user->unreadNotifications));
            $user->unreadNotifications
                ->each
                ->update([
                    'read_at' => Carbon::now()
                ]);
        });
    }
}
