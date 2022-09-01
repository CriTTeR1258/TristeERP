<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller{
    public function index(Request $request){
        return view('Home.Index', [
        ]);
    }

    public function addEmpresa(Request $request){
        $userID = '';
        if(Auth::check()){
            $userID = Auth::user()->id;
            $id = '';
            if($request->has('id')){
                $id = $request->id;
            }
            $name = '';
            if($request->has('name')){
                $name = $request->name;
            }
            if($id != '' && $userID != ''){
                $result = app('App\Http\Controllers\DBConsult\EmpresaController')->checkEmpresa($id, $userID);
                if(count($result) == 1){
                    $request->session()->put('idEmpresa', $id);
                    $request->session()->put('nomEmpresa', $name);
                    return redirect('/');
                }
            }
        }
        return redirect('/empresa')->with('status', 'ID de empresa Invalida');
    }
}