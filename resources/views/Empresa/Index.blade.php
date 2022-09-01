@extends('Layouts.Basic')
@section('head')
<script type="text/javascript" src="{{ asset('js/jquery.js') }}"></script>
<style>
    html, body {
        background-color: #0F1019;
    }
</style>
@endsection
@section('body')
<div class="row" id='content'>
    <div style="padding-top:35vh;" ></div>
    <empresa class=""
        title='Seleccione una empresa'
        frm_method='POST'
        frm_action='/'
        btn_add='Nuevo'
        btn_modify='Modificar'
        btn_delete='Eliminar'
        et_name='Nombre'
        et_nit='Nit'
        et_acronym='Sigla'
        et_ph_number='Nro Celular'
        et_email='Email'
        et_address='Direccion'
        et_level='Nivel'
        :name_maximum_digits='65'
        :nit_maximum_digits='15'
        :acronym_maximum_digits='8'
        :ph_number_maximum_digits='18'
        :email_maximum_digits='45'
        :address_maximum_digits='360'
        title_add='Nueva Empresa'
        title_modify='Modificar Empresa'
        btn_add_accept='Agregar'
        btn_modify_accept='Modificar'
        mssg_success_add='Registrado'
        mssg_success_modify='Modificado'
        mssg_error_select='Debe seleccionar una empresa'
        mssg_error_name_empty='El nombre es obligatorio'
        mssg_error_nit_empty='El Nit es obligatorio'
        mssg_error_acronym_empty='La Sigla es obligatorio'
        mssg_error_email_invalid='El email es obligatorio'
        opt_default='Elija una empresa'
     />
</div>
@endsection
@section('footer')
    <script type="text/javascript" src="{{ asset('js/vue.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/toastr.min.js') }}"></script>
@endsection