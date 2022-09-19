<?php

use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::name('api.')->group(function () {

    Route::controller(UserController::class)->name('users.')->prefix('/user')->group(function () {
        Route::get('/', 'index')->name('get');
        Route::post('/add', 'add')->name('add');
        Route::post('/edit/{user}', 'edit')->name('edit');
        Route::delete('/delete/{user}', 'delete')->name('delete');
        Route::post('/changeStatus/{user}', 'changeStatus')->name('changeStatus');
    });

    Route::get('/roles',[RoleController::class, 'index'])->name('getRoles');

});
