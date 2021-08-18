<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/org-chart', 'Api\OrgChartController@index');

Route::group(['middleware' => ['auth']], function () {
    Route::get('auth/timeout-test', 'Api\TimeoutTestController@index');
});

Route::group(['middleware' => 'auth'], function () {
    Route::get('/', 'MainController@index');
    Route::get('/home', 'MainController@index');

    Route::get('/omim/entry', 'Api\OmimController@entry');
    Route::get('/omim/search', 'Api\OmimController@search');
    Route::get('/omim/gene', 'Api\OmimController@gene');

    Route::get('logs', '\Rap2hpoutre\LaravelLogViewer\LogViewerController@index')->name('logs');
    Route::get('bulk-uploads', 'BulkUploadController@show')->name('bulk-uploads.show');
    Route::post('bulk-uploads', 'BulkUploadController@upload')->name('bulk-uploads.upload');

    Route::get('curations/export/form', 'CurationExportController@getForm')->name('curations.export');
    Route::get('curations/export', 'CurationExportController@getCsv')->name('curations.export.download');

    // Route::get('bulk-omim-lookup', 'BulkOmimLookupController@index')->name('bulk-omim-lookup');

    Route::impersonate();
});

Auth::routes();

Route::get('admin/password/reset/{token}', 'Auth\ResetPasswordController@showResetForm');

Route::get('{page}/{subs?}', ['uses' => 'PageController@index'])
    ->where(['page' => '^((?!admin).)*$', 'subs' => '.*']);
