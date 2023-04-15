<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        return Product::select('id','name','detail','created_at')->get();
    }

    function search($key)
    {
        return Product::where('name', 'like', "%$key%")->get();
    }

    // public function searchdate(Request $r)
    // {
    //     if ($r->input('start_date') || $r->input('start_date')) {
    //         $start_date = Carbon::parse($r->input('start_date'))->toDateTimeString();
    //         $end_date = Carbon::parse($r->input('end_date'))->toDateTimeString();
    //         $transaksis = Transaksi::whereBetween('created_at',[$start_date,$end_date])->get();
    //     } else {
    //         $transaksis = Transaksi::latest()->get();
    //     }
    //     $raw_start_date=$r->input('start_date');
    //     $raw_end_date=$r->input('end_date');

    //     return view('/admin/laporan/index', compact('transaksis'))->with('raw_start_date',$raw_start_date)->with('raw_end_date',$raw_end_date);
    // }

    public function store(Request $request)
    {
        $request->validate([
            'name'=>'required',
            'detail'=>'required',
        ]);


        Product::create($request->post());

        return response()->json([
            'message'=>'Product Created Successfully!!'
        ]);
    }

    public function show(Product $product)
    {
        return response()->json([
            'product'=>$product
        ]);
    }

    public function update(Request $request, Product $product)
    {
        //set validation
        $request->validate([
            'name'   => 'required',
            'detail' => 'required',
        ]);

        //update post
        $product->update([
            'name'     => $request->name,
            'detail'   => $request->detail
        ]);

        return response()->json([
            'message'=>'Product Updated Successfully!!'
        ]);

    }

    public function destroy(Product $product)
    {

            $product->delete();

            return response()->json([
                'message'=>'Product Deleted Successfully!!'
            ]);
    }
}
