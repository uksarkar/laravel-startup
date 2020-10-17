<?php

use Illuminate\Support\Facades\Route;

Route::get('/logout',[App\Http\Controllers\Admin\Auth\LoginController::class,'logout'])->name('logout');

Route::get('/','DashboardController@index')->name('dashboard');