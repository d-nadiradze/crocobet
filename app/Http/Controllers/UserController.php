<?php

namespace App\Http\Controllers;

use App\Enums\UserRolesEnum;
use App\Enums\UserStatusesEnum;
use App\Http\Requests\AddUserRequest;
use App\Http\Requests\ChangeUserStatusRequest;
use App\Http\Requests\EditUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        $user = User::with('role')->orderByDesc('id')->get();

        return response(UserResource::collection($user), 200);
    }

    public function add(AddUserRequest $request)
    {
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'status' => UserStatusesEnum::ACTIVE->value,
            'role_id' => $request->role,
        ]);

        return [
            'success' => 'User successfully added'
        ];
    }

    public function edit(User $user, EditUserRequest $request)
    {
        $user->updateOrFail([
            'name' => $request->name,
            'email' => $request->email,
            'status' => UserStatusesEnum::ACTIVE->name == $request->status ? UserStatusesEnum::ACTIVE->value : UserStatusesEnum::BLOCKED->value,
            'role_id' => $request->role,
        ]);

        return [
            'success' => 'User successfully updated'
        ];
    }

    public function delete(User $user)
    {
        $user->delete();

        return [
            'success' => 'User successfully deleted'
        ];
    }

    public function changeStatus(User $user, ChangeUserStatusRequest $request)
    {

        $user->updateOrFail([
            'status' => $request->status
        ]);

        return [
            'success' => 'User successfully updated'
        ];
    }

}
