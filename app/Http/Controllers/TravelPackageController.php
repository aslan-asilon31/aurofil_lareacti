<?php

namespace App\Http\Controllers;

use App\Models\TravelPackage;
use Illuminate\Http\Request;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;


class TravelPackageController extends Controller
{
    public function index()
    {
        return TravelPackage::select('id','image','title','slug','location','about','featured_event','language','foods','departure_date','duration','type','price','created_at')->get();
    }

    function search($key)
    {
        return TravelPackage::where('name', 'like', "%$key%")->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'image'=>'required|image',
            'title'=>'required',
            'slug'=>'required',
            'location'=>'required',
            'featured_event'=>'required',
            'language'=>'required',
            'foods'=>'required',
            'departure_date'=>'required',
            'duration'=>'required',
            'type'=>'required',
            'price'=>'required',
        ]);

        try{
            $imageName = Str::random().'.'.$request->image->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('travelpackage/image', $request->image,$imageName);
            TravelPackage::create($request->post()+['image'=>$imageName]);

            return response()->json([
                'message'=>'Travel package Created Successfully!!'
            ]);
        }catch(\Exception $e){
            \Log::error($e->getMessage());
            return response()->json([
                'message'=>'Something goes wrong while creating a Travel package!!'
            ],500);
        }
    }

    public function show(Travelpackage $travelpackage)
    {
        return response()->json([
            'travelpackage'=>$travelpackage
        ]);
    }

    public function update(Request $request, Travelpackage $travelpackage)
    {
        $request->validate([
            'image'=>'required|image',
            'title'=>'required',
            'slug'=>'required',
            'location'=>'required',
            'featured_event'=>'required',
            'language'=>'required',
            'foods'=>'required',
            'departure_date'=>'required',
            'duration'=>'required',
            'type'=>'required',
            'price'=>'required',
        ]);

        try{

            $travelpackage->fill($request->post())->update();

            if($request->hasFile('image')){

                // remove old image
                if($travelpackage->image){
                    $exists = Storage::disk('public')->exists("travelpackage/image/{$travelpackage->image}");
                    if($exists){
                        Storage::disk('public')->delete("travelpackage/image/{$travelpackage->image}");
                    }
                }

                $imageName = Str::random().'.'.$request->image->getClientOriginalExtension();
                Storage::disk('public')->putFileAs('product/image', $request->image,$imageName);
                $travelpackage->image = $imageName;
                $travelpackage->save();
            }

            return response()->json([
                'message'=>'Product Updated Successfully!!'
            ]);

        }catch(\Exception $e){
            \Log::error($e->getMessage());
            return response()->json([
                'message'=>'Something goes wrong while updating a product!!'
            ],500);
        }
    }

    public function destroy(Travelpackage $travelpackage)
    {
        try {

            if($travelpackage->image){
                $exists = Storage::disk('public')->exists("travelpackage/image/{$travelpackage->image}");
                if($exists){
                    Storage::disk('public')->delete("travelpackage/image/{$travelpackage->image}");
                }
            }

            $travelpackage->delete();

            return response()->json([
                'message'=>'Product Deleted Successfully!!'
            ]);
            
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
            return response()->json([
                'message'=>'Something goes wrong while deleting a product!!'
            ]);
        }
    }
}
