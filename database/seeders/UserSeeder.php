<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'name' => '筏千丸',
                'email' => Str::random(10).'@gmail.com',
                'password' => Hash::make('password'),
                'role' => 5,
            ],
            [
                'name' => '松本隼也',
                'email' => Str::random(10).'@gmail.com',
                'password' => Hash::make('password'),
                'role' => 5,
            ],
            [
                'name' => 'admin',
                'email' => 'admin@email.com',
                'password' => bcrypt('matsumotokefictiondiary'),
                'role' => 1,
            ]
        ]);
    }
}
