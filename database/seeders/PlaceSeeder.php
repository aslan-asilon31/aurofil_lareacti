<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Place;

class PlaceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Place::create([
            'name'	=> 'Name 1',
            'location'	=> 'Location 1',
            'description'	=> 'Description 1',
        ]);

        Place::create([
            'name'	=> 'Name 2',
            'location'	=> 'Location 2',
            'description'	=> 'Description 2',
        ]);
    }
}
