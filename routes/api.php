<?php

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

Route::name('api.')->group(function (){

    Route::name('users.')->prefix('/user')->group(function (){
        Route::get('/', [UserController::class,'index'])->name('get');
        Route::post('/edit/{user}', [UserController::class,'edit'])->name('edit');
        Route::delete('/delete/{user}', [UserController::class,'delete'])->name('delete');
    });

});
