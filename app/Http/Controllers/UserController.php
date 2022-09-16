<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $user = User::with('role')->get()->all();

        return response(UserResource::collection($user),200);
    }

    public function edit(User $user)
    {

    }

    public function delete(User $user)
    {

    }


}
