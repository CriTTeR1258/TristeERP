<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

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

Route::get('/', function(){
    return view('Body.Index');
})->middleware(['userm:user']);
Route::get('/home', 'HomeController@index')->name('home');
Route::get('/login', 'LoginController@index')->name('login');
Route::get('/empresa', 'EmpresaController@index')->name('empresa');
Route::get('/logout', 'LoginController@logout')->name('logout');

Route::post('/', 'HomeController@addEmpresa');
Route::post('/login', 'LoginController@login');
Route::post('/empresa', 'DBConsult\EmpresaController@transaction');