<?php

namespace App\Providers;

use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class ComposerServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        View::composer('*', function ($view) {
            if (Auth::guest()) {
                $user = [
                    'roles' => [],
                    'expert_panels' => [],
                    'permissions' => []
                ];
                $view->with('user', compact('user'));

                return;
            }

            $userModel = Auth::user();
            $userModel->load(['roles', 'expertPanels']);
            $user = $userModel->toArray();
            $user['permissions'] = $userModel->getAllPermissions()->toArray();
            $user['panel_summary'] = $userModel->panel_summary;

            $impersonatable = collect();
            if (Auth::user()->canImpersonate()) {
                $impersonatable = User::with('roles')->get()->filter(function ($user) {
                    return $user->canBeImpersonated();
                });
            }
            $view->with('impersonatable', $impersonatable);
            $view->with('user', compact('user'));
        });
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
    }
}
