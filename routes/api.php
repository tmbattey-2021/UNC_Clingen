<?php


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'middleware' => ['auth:api'],
    'namespace' => 'Api'
], function () {

    // Resources
    Route::resource('/expert-panels', 'ExpertPanelController');
    Route::resource('/topics', 'TopicController');
    Route::resource('/users', 'UserController')->only(['index']);
    Route::resource('/topic-statuses', 'TopicStatusController')->only(['index']);
    Route::resource('/working-groups', 'WorkingGroupsController')->only(['index']);
    Route::resource('/curation-types', 'CurationTypeController')->only(['index']);

    // OMIM
    Route::get('/omim/entry', 'OmimController@entry');
    Route::get('/omim/search', 'OmimController@search');
    Route::get('/omim/gene', 'OmimController@gene');
});
