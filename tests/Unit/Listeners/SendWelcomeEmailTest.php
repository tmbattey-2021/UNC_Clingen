<?php

namespace Tests\Unit\Listeners;

use App\Events\User\Created;
use App\Listeners\SendWelcomeEmail;
use App\Mail\UserWelcome;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * @group users
 * @group mail
 */
class SendWelcomeEmailTest extends TestCase
{
    use RefreshDatabase;
    /**
     * @test
     */
    public function sends_welcome_email_to_user()
    {
        \Mail::fake();
        \Event::fake();
        $u = factory(\App\User::class)->create();
        $listener = new SendWelcomeEmail();
        $event = new Created($u);
        $listener->handle($event);

        \Mail::assertSent(UserWelcome::class);
    }
}
