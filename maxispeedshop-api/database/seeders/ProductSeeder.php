<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('products')->insert([
            [
                'name' => 'Shockbreaker Öhlins NMAX 155',
                'slug' => Str::slug('Shockbreaker Ohlins NMAX 155'),
                'description' => 'Shockbreaker tabung atas performa tinggi untuk NMAX 155.',
                'category_id' => 1,
                'price' => 7500000,
                'img' => 'products/ohlins-nmax.jpg',
                'stock' => 5,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Knalpot R9 Drake NMAX 155',
                'slug' => Str::slug('Knalpot R9 Drake NMAX 155'),
                'description' => 'Knalpot Full System bahan Stainless Steel anti karat.',
                'category_id' => 2,
                'price' => 1850000,
                'img' => 'products/r9-drake.jpg',
                'stock' => 10,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}