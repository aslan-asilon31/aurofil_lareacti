<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PlaceController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\TravelPackageController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Place
Route::resource('places',PlaceController::class);
Route::get('searchplace/{key}', [PlaceController::class, 'search']);

// Product
Route::resource('products',ProductController::class);
Route::get('searchproduct/{key}', [ProductController::class, 'search']);

// Transaction
Route::resource('transactions',TransactionController::class);
Route::get('searchtransaction/{key}', [TransactionController::class, 'search']);

// Travel Package
Route::resource('travelpackages',TravelPackageController::class);
Route::get('searchtravelpackage/{key}', [TravelPackageController::class, 'search']);


Auth::routes();

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
