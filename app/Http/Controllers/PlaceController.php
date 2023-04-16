<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Place;

class PlaceController extends Controller
{
    public function index()
    {
        return Place::select('id','name','location','description','created_at')->get();
    }

    
    function search($key)
    {
        return Place::where('name', 'like', "%$key%")->get();
    }
}
