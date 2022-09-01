@extends('Layouts.Basic')
@section('head')
<script type="text/javascript" src="{{ asset('js/jquery.js') }}"></script>
<style>
    html, body {
        margin: 0;
        height: 100%;
        background: #0F1019;
        overflow: hidden;
        perspective: 10rem;
    }
</style>
@endsection
@section('body')
<div class="h-100 row align-items-center" id='content'>
<login
    @if(session('status'))
    :errors="['{{ session('status') }}']"
    @endif
    frm_method='POST'
    frm_action='/login'
    btn_submit='Iniciar Sesion'
    et_user='Usuario'
    et_pass='Password'
    ph_user='Ingrese Usuario'
    ph_pass='Ingrese Password'
    :user_minimum_digits='6'
    :user_maximum_digits='35'
    :pass_maximum_digits='23' />
    
</div>
@endsection
@section('footer')
    <script type="text/javascript" src="{{ asset('js/vue.js') }}"></script>
@endsection