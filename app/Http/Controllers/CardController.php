<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Link;

use App\Http\Requests\LinkUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
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

    // public function edit(Request $request)
    // {
    //     $links = $request->user()->links()->get();
    //     return view('dashboard',compact('links'));
    // }
    public function edit(Request $request)
    {
        $links = $request->user()->links()->get();
        return Inertia::render('Dashboard', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'links' => $links,
        ]);
    }

    public function update(LinkUpdateRequest $request)
    {
        $request->user()->links()->fill($request->validated());

        // TODO: add serialize
        // $request->user()->links()->save();

        return Redirect::route('dashboard');
    
    }
}
