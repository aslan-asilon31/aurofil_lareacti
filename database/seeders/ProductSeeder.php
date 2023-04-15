<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::create([
            'name'	=> 'Product 1',
            'detail'	=> 'Detail 1',
        ]);

        Product::create([
            'name'	=> 'Product 2',
            'detail'	=> 'Detail 2',
        ]);

        Product::create([
            'name'	=> 'Product 3',
            'detail'	=> 'Detail 3',
        ]);
    }
}
