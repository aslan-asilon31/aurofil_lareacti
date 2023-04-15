<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'travel_package_id',
        'user_id',
        'additional_visa',
        'transaction_total',
        'transaction_status',
    ];
}
