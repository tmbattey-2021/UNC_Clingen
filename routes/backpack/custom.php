<?php

// --------------------------
// Custom Backpack Routes
// --------------------------
// This route file is loaded automatically by Backpack\Base.
// Routes you generate using Backpack\Generators will be placed here.

Route::group([
    'prefix'     => config('backpack.base.route_prefix', 'admin'),
    'middleware' => ['web', config('backpack.base.middleware_key'), 'auth', 'role:admin|programmer'],
    'namespace'  => 'App\Http\Controllers\Admin',
], function () { // custom admin routes
    Route::get('logs', '\Rap2hpoutre\LaravelLogViewer\LogViewerController@index')->name('logs');
    Route::get('dashboard', '\Backpack\Base\app\Http\Controllers\AdminController@dashboard')
        ->name('backpack.dashboard');
    Route::get('/', '\Backpack\Base\app\Http\Controllers\AdminController@redirect')
        ->name('backpack');
    
    Route::get('/user/{id}/deactivate', 'UserCrudController@deactivate')
        ->name('user-deactivate');

    Route::get('/user/{id}/reactivate', 'UserCrudController@reactivate')
        ->name('user-reactivate');

    CRUD::resource('user', 'UserCrudController');
    CRUD::resource('expert-panel', 'ExpertPanelCrudController');
    CRUD::resource('curation-status', 'CurationStatusCrudController');
    CRUD::resource('working-group', 'WorkingGroupCrudController');
    CRUD::resource('curation-type', 'CurationTypeCrudController');
    CRUD::resource('rationale', 'RationaleCrudController');
    CRUD::resource('email', 'EmailCrudController');

    Route::get('tests/slack-notification', function () {
        throw new \Exception('Testing Slack error notifications');
    });
}); // this should be the absolute last line of this file

Route::get('admin/login', function () {
    return redirect('login');
});

Route::get('admin/logout', function () {
    return redirect('logout');
});
