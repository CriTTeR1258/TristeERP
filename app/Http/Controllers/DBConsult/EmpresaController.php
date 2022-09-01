<?php

namespace App\Http\Controllers\DBConsult;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class EmpresaController extends Controller{

    /**
     * Display a listing of the myformPost.
     *
     * @return \Illuminate\Http\Response
     */
    public function selectName(Request $request){
        $userID = 0;
        $update = false;
        if(Auth::check()){
            $userID = Auth::user()->id;
            if($request->has('insert')){
                if($request->insert == 'true'){
                    $name = '';
                    if($request->has('name')){
                        $name = $request->name;
                    }
                    $nit = '';
                    if($request->has('nit')){
                        $nit = $request->nit;
                    }
                    $acronym = '';
                    if($request->has('acronym')){
                        $acronym = $request->acronym;
                    }
                    $ph_number = '';
                    if($request->has('ph_number')){
                        $ph_number = ($request->ph_number == '') ? '' : $request->ph_number;
                    }
                    $email = '';
                    if($request->has('email')){
                        $email = ($request->email == '') ? '' : $request->email;
                    }
                    $address = '';
                    if($request->has('address')){
                        $address = ($request->address == '') ? '' : $request->address;
                    }
                    $level = '3';
                    if($request->has('level')){
                        $level = intval($request->level);
                    }
                    return $this->insert($name, $nit, $acronym, $ph_number, $email, $address, $level, $userID);
                }
            }
            if($request->has('id')){
                $id = $request->id;
                if($request->has('update')){
                    if($request->update == 'true'){
                        $name = '';
                        if($request->has('name')){
                            $name = $request->name;
                        }
                        $nit = '';
                        if($request->has('nit')){
                            $nit = $request->nit;
                        }
                        $acronym = '';
                        if($request->has('acronym')){
                            $acronym = $request->acronym;
                        }
                        $ph_number = '';
                        if($request->has('ph_number')){
                            $ph_number = ($request->ph_number == '') ? '' : $request->ph_number;
                        }
                        $email = '';
                        if($request->has('email')){
                            $email = ($request->email == '') ? '' : $request->email;
                        }
                        $address = '';
                        if($request->has('address')){
                            $address = ($request->address == '') ? '' : $request->address;
                        }
                        $level = '3';
                        if($request->has('level')){
                            $level = intval($request->level);
                        }
                        return $this->updateById($id, $userID, $name, $nit, $acronym, $ph_number, $email, $address, $level);
                    }
                }
                if($request->has('delete')){
                    if($request->delete == 'true'){
                        return $this->delete($id, $userID);
                    }
                }
                return $this->selectById($id, $userID);
            }
            $query = "SELECT IdEmpresa as id, Nombre FROM Empresa WHERE IdUsuario=? AND Estado=0";
            $data = [$userID];
            $result = app('App\Http\Controllers\DBController')->select($query, $data);
            return response()->json(['Success'=>true, 'content'=>$result]);
        }
        return response()->json(['Success'=>false, 'content'=>'Acceso no autorizado']);
    }
    public function selectById($id, $userID){
        $moneyValid = false;
        $moneyID=[];
        $query = "SELECT e.IdEmpresa as id, e.Nombre as Nombre, e.NIT as NIT, e.Sigla as Sigla, e.Telefono as Telefono, e.Correo as Correo, e.Direccion as Direccion, e.Niveles as Niveles FROM Empresa as e WHERE e.IdEmpresa=? AND e.IdUsuario=? AND e.Estado=0 GROUP BY e.IdEmpresa LIMIT 1";
        $data = [$id, $userID];
        $result = app('App\Http\Controllers\DBController')->select($query, $data);
        return response()->json(['Success'=>true, 'content'=>$result[0], 'moneyValid'=>$moneyValid, 'moneyID'=>$moneyID]);
    }
    public function updateById($id, $userID, $name, $nit, $acronym, $ph_number, $email, $address, $level){
        $inspectQuery = "SELECT * FROM Empresa WHERE (Nombre=? OR NIT=? OR Sigla=?) AND IdUsuario=? AND IdEmpresa!=? AND estado=0";
        $inspectData = [$name, $nit, $acronym, $userID, $id];
        $inspectResult = app('App\Http\Controllers\DBController')->select($inspectQuery, $inspectData);
        if(count($inspectResult) == 0){
            $query = "UPDATE Empresa SET Nombre=?, NIT=?, Sigla=?, Telefono=?, Correo=?, Direccion=?, Niveles=? WHERE IdEmpresa=? AND IdUsuario=?";
            $data = [$name, $nit, $acronym, $ph_number, $email, $address, $level, $id, $userID];
            $result = app('App\Http\Controllers\DBController')->update($query, $data);
            return response()->json(['Success'=>true, 'content'=>$result]);
        }
        return response()->json(['Success'=>false, 'content'=>'Ya existe una empresa registrada con esas caracteristicas']);
    }

    public function insert($name, $nit, $acronym,  $ph_number, $email, $address, $level, $userID) {
        $inspectQuery = "SELECT * FROM Empresa WHERE (Nombre=? OR NIT=? OR Sigla=?) AND IdUsuario=? AND estado=0";
        $inspectData = [$name, $nit, $acronym, $userID];
        $inspectResult = app('App\Http\Controllers\DBController')->select($inspectQuery, $inspectData);
        if(count($inspectResult) == 0){
            $data = array('Nombre'=>$name, 'NIT'=>$nit, 'Sigla'=>$acronym, 'Telefono'=>$ph_number, 'Correo'=>$email, 'Direccion'=>$address, 'Niveles'=>$level, 'Estado'=>0, 'IdUsuario'=>$userID);
            $result = app('App\Http\Controllers\DBController')->insertGetId('Empresa', $data);
            if($result > 0){
                $companyID = $result;
                return response()->json(['Success'=>true, 'content'=>true]);
            }
        }
        return response()->json(['Success'=>false, 'content'=>'Ya existe una empresa registrada con esas caracteristicas']);
    }

    public function checkEmpresa($id, $userID){
        $query = "SELECT * FROM Empresa WHERE IdEmpresa=? AND IdUsuario=? LIMIT 1";
        $data = [$id,$userID];
        $result = app('App\Http\Controllers\DBController')->select($query, $data);
        return $result;
    }

    public function delete($id, $userID){
        $query = "UPDATE Empresa SET Estado=1 WHERE IdEmpresa=? AND IdUsuario=?";
        $data = [$id, $userID];
        $result = app('App\Http\Controllers\DBController')->update($query, $data);
        return response()->json(['Success'=>true, 'content'=>$result]);
    }
    
    public function transaction(Request $request){
        return app('App\Http\Controllers\DBController')->transaction([$this, 'selectName'], $request);  
    }
}