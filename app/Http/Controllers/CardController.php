<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CardController extends Controller
{
    public function show($handlename)
    {
        $card = User::where('handlename', '=', $handlename)->first();
        return Inertia::render('Card/Show', [
            'user' => $card,
        ]);
    }
}
