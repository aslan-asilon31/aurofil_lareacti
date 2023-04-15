<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Transaction;

class TransactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Transaction::create([
            'travel_package_id'	=> 1,
            'user_id'	=> 1,
            'additional_visa'	=> 19832745,
            'transaction_total'	=> 938247,
            'transaction_status'	=> 0,
        ]);

        Transaction::create([
            'travel_package_id'	=> 2,
            'user_id'	=> 2,
            'additional_visa'	=> 2392847,
            'transaction_total'	=> 1284323,
            'transaction_status'	=> 2,
        ]);

        Transaction::create([
            'travel_package_id'	=> 3,
            'user_id'	=> 3,
            'additional_visa'	=> 30329480,
            'transaction_total'	=> 3874384,
            'transaction_status'	=> 1,
        ]);
    }
}
