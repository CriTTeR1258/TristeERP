<?php
namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;


class DBController extends Controller {

    public function select($query, $data){
        $result = DB::select($query, $data);
        return $result;
    }

    public function insert($query, $data){
        $result = DB::insert($query, $data);
        return $result;
    }

    public function insertGetId($table_name, $data){
        $result = DB::table($table_name)->insertGetId($data);
        return $result;
    }

    public function update($query, $data){
        $result = DB::update($query, $data);
        return $result;
    }

    public function delete($query, $data){
        $result = DB::delete($query, $data);
        return $result;
    }

    public function transaction(callable $function, Request $request){
        try{
            DB::beginTransaction();
            $result = $function($request);
            $resultArray = json_decode(json_encode($result->getData()), true);
            if($resultArray['Success']){
                DB::commit();
            }else{
                DB::rollback();
            }
            return $result;
        }catch(Exception $e){
            DB::rollback();
            return response()->json(['false'=>false, 'content'=>$e]);
        }
    }
}