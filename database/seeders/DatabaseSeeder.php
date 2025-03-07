<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Todo;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        $user = User::first();  
        if($user){
            Todo::create([
                "todo" => "テスト",
                "user_id" => $user->id,
            ]);
            Todo::create([
                "todo" => "テスト",
                "user_id" => $user->id,
            ]);
            Todo::create([
                "todo" => "テスト",
                "user_id" => $user->id,
            ]);
            Todo::create([
                "todo" => "テスト",
                "user_id" => $user->id,
            ]);
        }
    }
}
