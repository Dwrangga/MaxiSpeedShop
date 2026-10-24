<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        DB::table('categories')->insert([
            ['category' => 'Part & Aksesori Motor', 'created_at' => now(), 'updated_at' => now()],
            ['category' => 'Suspensi & Pengereman', 'created_at' => now(), 'updated_at' => now()],
            ['category' => 'Performa & Knalpot', 'created_at' => now(), 'updated_at' => now()],
            ['category' => 'Penerangan & LED', 'created_at' => now(), 'updated_at' => now()],
            
        ]);
    }
}