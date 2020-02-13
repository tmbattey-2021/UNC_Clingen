<?php

namespace App\Providers;

use Laravel\Passport\Passport;
use Illuminate\Support\Facades\Auth;
use App\Auth\ActivatedEloquentUserProvider;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Curation' => 'App\Policies\CurationPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
        
        Auth::provider('activatedusers', function ($app, array $config) {
            $provider = new ActivatedEloquentUserProvider(app()->make(app()->make(\Illuminate\Contracts\Hashing\Hasher::class)), \App\User::class);
            dd($provider);
            return $provider;
        });
        
        Passport::routes();
    }
}
