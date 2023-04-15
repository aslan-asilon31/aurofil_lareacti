<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Transaction;

class TransactionController extends Controller
{
    public function index()
    {
        return Transaction::select('id','travel_package_id','user_id','additional_visa','transaction_total','transaction_status')->get();
    }

    function search($key)
    {
        return Transaction::where('additional_visa', 'like', "%$key%")->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'travel_package_id'=>'required',
            'user_id'=>'required',
            'additional_visa'=>'required',
            'transaction_total'=>'required',
            'transaction_status'=>'required',
        ]);


        Transaction::create($request->post());

        return response()->json([
            'message'=>'Transaction Created Successfully!!'
        ]);
    }

    public function show(Transaction $transaction)
    {
        return response()->json([
            'transaction'=>$transaction
        ]);
    }

    public function update(Request $request, Transaction $transaction)
    {
        //set validation
        $request->validate([
            'travel_package_id'=>'required',
            'user_id'=>'required',
            'additional_visa'=>'required',
            'transaction_total'=>'required',
            'transaction_status'=>'required',
        ]);

        //update post
        $transaction->update([
            'travel_package_id'     => $request->travel_package_id,
            'user_id'   => $request->user_id,
            'additional_visa'   => $request->additional_visa,
            'transaction_total'   => $request->transaction_total,
            'transaction_status'   => $request->transaction_status,
        ]);

        return response()->json([
            'message'=>'Transaction Updated Successfully!!'
        ]);

    }

    public function destroy(Transaction $transaction)
    {

            $transaction->delete();

            return response()->json([
                'message'=>'Transaction Deleted Successfully!!'
            ]);
    }
}
