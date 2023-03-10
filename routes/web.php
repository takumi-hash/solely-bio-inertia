<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CardController;
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

Route::get('/u/{handlename}', [CardController::class, 'show'])->name(
    'card.show'
);

Route::get('/ogp_images/{handlename}/ogp.jpg', [CardController::class, 'getOgp'])->name('ogp.get');

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })
//     ->middleware(['auth', 'verified'])
//     ->name('dashboard');

Route::get('/dashboard', [CardController::class, 'edit'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::put('/links/{id}', [CardController::class, 'updateById'])
    ->middleware(['auth'])
    ->name('links.updateById');

Route::patch('/links', [CardController::class, 'update'])
    ->middleware(['auth'])
    ->name('links.update');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name(
        'profile.edit'
    );
    Route::patch('/profile', [ProfileController::class, 'update'])->name(
        'profile.update'
    );
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name(
        'profile.destroy'
    );
});

require __DIR__ . '/auth.php';
