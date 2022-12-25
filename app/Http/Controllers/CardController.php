<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Link;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CardController extends Controller
{
    public function show($handlename)
    {
        $user = User::where('handlename', '=', $handlename)->first();
        $links = $user->links()->get();
        return Inertia::render('Card/Show',
            compact('user', 'links'));
    }
}
