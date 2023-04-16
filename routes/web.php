<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/place', function () {
    return Inertia::render('place/Place');
})->middleware(['auth', 'verified'])->name('place');

Route::get('/product', function () {
    return Inertia::render('product/Product');
})->middleware(['auth', 'verified'])->name('product');
Route::get('/product/create', function () {
    return Inertia::render('product/ProductAdd');
})->middleware(['auth', 'verified'])->name('productAdd');

Route::get('/transaction', function () {
    return Inertia::render('transaction/Transaction');
})->middleware(['auth', 'verified'])->name('transaction');

Route::get('/transactiondetail', function () {
    return Inertia::render('transactiondetail/transactionDetail');
})->middleware(['auth', 'verified'])->name('transactiondetail');

Route::get('/travelpackage', function () {
    return Inertia::render('travelpackage/travelPackage');
})->middleware(['auth', 'verified'])->name('travelpackage');
Route::get('/travelpackage/create', function () {
    return Inertia::render('travelpackage/travelPackageAdd');
})->middleware(['auth', 'verified'])->name('travelpackageAdd');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
