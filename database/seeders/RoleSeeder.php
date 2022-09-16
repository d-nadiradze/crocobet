<?php

namespace Database\Seeders;

use App\Enums\UserRolesEnum;
use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::create(['name' => UserRolesEnum::USER->name]);
        Role::create(['name' => UserRolesEnum::ADMIN->name]);
    }
}
