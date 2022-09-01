<?php
namespace App\Http\Controllers;

//use Illuminate\Support\Str;
//use Illuminate\Support\Facades\Crypt;
//use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Session;

class LoginController extends Controller {

    use AuthenticatesUsers;

    public function __construct() {
        $this->middleware('guest')->except('logout');
    }

        /**
     * Where to redirect users after login.
     *
     * @return string
     */
    protected function redirectTo()
    {
        return '/empresa';
    }

    /**
     * Get the maximum number of attempts to allow.
     *
     * @return int
     */
    public function maxAttempts()
    {
        return config('app.max_login_attemts', 5);
    }

    /**
     * Get the number of minutes to throttle for.
     *
     * @return int
     */
    public function decayMinutes()
    {
        return config('app.lockout_time', 1);
    }

    public function index(){
        return view('Login.Index');
    }

    public function verify_auth($user,$pass){
        return false;
    }
    public function secure($credentials){
        $user = Auth::guard('user')->getProvider()->retrieveByCredentials($credentials);
        Auth::guard('user')->login($user, false);
    }

    public function login(Request $request){
        if($request->has('lg_user')){
            $user = $request->lg_user;
        }
        if($request->has('lg_pass')){
            $pass = $request->lg_pass;
        }
        if(strlen($user) == 0 || strlen($pass) == 0){
            return redirect('/login')->with('status', 'Error al loguear');
        }

        $credentials = ['Usuario'=>$user, 'password'=>$pass];
    	if(Auth::guard('user')->attempt($credentials, false)){
    	    Auth::authenticate($credentials);
            return redirect($this->redirectTo())->with('status', 'Bienvenido '.$user);
    	}else{
            return redirect('login')->with('status', 'El Usuario o la Contraseña es incorrecta');
        }
    }

    public function logout(Request $request){
        Auth::logout();
        $request->session()->flush();
        $request->session()->regenerate();
        return redirect('/login');
    }
}