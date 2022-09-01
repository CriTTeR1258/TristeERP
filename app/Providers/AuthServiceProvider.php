<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Auth\CustomUserProvider;
use App\Http\Controllers\Auth\CustomSessionGuard;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Auth::extend('customSession', function ($app, $name, array $config) {
            // Return an instance of Illuminate\Contracts\Auth\Guard...
            return new CustomSessionGuard($name, Auth::createUserProvider($config['provider'] ?? null), $app['session.store']);
        });

        Auth::provider('customUser', function ($app, array $config) {
            // Return an instance of Illuminate\Contracts\Auth\UserProvider...
            return new CustomUserProvider($app['hash'], $config['model']);
        });

    }
}
