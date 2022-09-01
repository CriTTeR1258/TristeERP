<template>
    <div class="container">
        <div class='d-flex fixed-top justify-content-end' style='z-index: 9999;' >
          <div id="toast_error" class="toast text-light bg-danger" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
              <div class="toast-body">
                {{ toast_message_error }}
              </div>
              <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
          </div>
        </div>
        <div class='d-flex fixed-top justify-content-end' style='z-index: 9999;' >
          <div id="toast_success" class="toast text-light bg-success" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
              <div class="toast-body">
                {{ toast_message_success }}
              </div>
              <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-10 col-sm-9 col-lg-7 col-xl-6">
              <div class="card">
                  <div class="card-header"><a href='/logout' ><i class="bi bi-arrow-return-left"></i></a><span class='float-end' >{{ title }}</span></div>
                  <div class="card-body">
                      <form :method="frm_method" :action="frm_action" @submit="checkForm" id='form' >
                        <table class='col-12' cellpadding="3" cellspacing="1" >
                          <tr>
                          </tr>
                          <tr>
                            <td class="col-6" >
                              <select class="form-select" id='empresa' >
                              </select>
                              <input type='hidden' name='id'>
                              <input type='hidden' name='name'>
                            </td>
                            <td class="col-1" >
                              <button id='btn_submit' type="button" class="btn btn-success col-12 float-end" @click='actionAccept' ><i class="bi bi-check">Continuar</i></button>
                            </td>
                          </tr>
                        </table>
                        <input type="hidden" name="_token" :value="csrf">
                        <div class='col-12 mt-3 d-flex bd-highlight text-end' >
                          <button type="button" class="btn mx-1 btn-add flex-grow-1 bd-highlight text-light" data-bs-toggle="offcanvas" data-bs-target="#sidebar" aria-controls="sidebar" @click='actionAdd' >{{ btn_add }}</button>
                          <button id='btn_modify' type="button" class="btn mx-1 btn-warning flex-grow-1 bd-highlight" @click='actionModify' >{{ btn_modify }}</button>
                          <button id='btn_delete' type="button" class="btn mx-1 btn-delete flex-grow-1 bd-highlight" @click='actionDelete' >{{ btn_delete }}</button>
                        </div>
                      </form>
                  </div>
              </div>
            </div>
        </div>
        <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="sidebar" aria-labelledby="sidebarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">{{ sidebar_title }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <form >
              <input type="hidden" name="_token" :value="csrf">
              <div class='col-12' >
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" v-model="name" id="name" name="name" oninput="this.value = this.value.replace(/[^a-zA-Z0-9\ \-+-]/g, '').replace(/(\..*)\./g, '$1');" :maxlength='name_maximum_digits' >
                    <label class="form-floating-text" >{{ et_name }}</label>
                  </div>
                  <div class='d-flex justify-content-start'>
                    <div class="form-floating mb-3 me-4 col-7">
                      <input type="text" class="form-control" v-model="nit" id="nit" name="nit" oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');" :maxlength='nit_maximum_digits' >
                      <label class="form-floating-text" >{{ et_nit }}</label>
                    </div>
                    <div class="form-floating mb-3 col-4">
                      <select class="form-select" id="level">
                        <option value="3" selected>3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                      </select>
                      <label for="floatingSelect">{{ et_level }}</label>
                    </div>
                  </div>
                  <div class='d-flex justify-content-start'>
                    <div class="form-floating mb-3 me-4 col-5">
                      <input type="text" class="form-control" v-model="acronym" id="acronym" name="acronym" oninput="this.value = this.value.replace(/[^a-zA-Z0-9\.\-\ +-]/g, '').replace(/(\..*)\./g, '$1');" :maxlength='acronym_maximum_digits' >
                      <label class="form-floating-text" >{{ et_acronym }}</label>
                    </div>
                    <div class="form-floating mb-3 col-6">
                      <input type="text" class="form-control" v-model="ph_number" id="ph_number" name="ph_number" oninput="this.value = this.value.replace(/[^0-9+-]/g, '').replace(/(\..*)\./g, '$1');" :maxlength='ph_number_maximum_digits' >
                      <label class="form-floating-text" >{{ et_ph_number }}</label>
                    </div>
                  </div>
                  <div :class="['form-floating', 'mb-3', 'col-12']">
                    <input type="email" :class="['form-control', 'border' , 'border-1']" v-model="email" id="email" name="email" :maxlength='email_maximum_digits' >
                    <label class="form-floating-text" >{{ et_email }}</label>
                  </div>
                  <div class="form-floating">
                    <textarea class="form-control" v-model="address" id="address" name="address" style="resize: none;" :maxlength="address_maximum_digits" oninput='this.style.height = "";this.style.height = this.scrollHeight+5 + "px"'  ></textarea>
                    <label for="address">{{ et_address }}</label>
                  </div>
                  <div class="text-center">
                    <button type="button" id='btn_accept' class="btn btn-warning col-6 mt-3">{{ btn_accept }}</button>
                  </div>
              </div>
            </form>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                url_report: document.querySelector('meta[name="url_report"]').getAttribute('content'),
                name: '',
                nit: '',
                acronym: '',
                ph_number: '',
                email: '',
                address: '',
                sidebar_title: '',
                btn_accept: '',
                toast_error: '',
                toast_success: '',
                sidebar: '',
                toast_message_error: '',
                toast_message_success: '',
            };
        },
        props: {
            title: String,
            frm_method: String,
            frm_action: String,
            btn_add: String,
            btn_delete: String,
            btn_modify: String,
            et_name: String,
            et_nit: String,
            et_acronym: String,
            et_ph_number: String,
            et_email: String,
            et_address: String,
            et_level: String,
            name_maximum_digits: Number,
            nit_maximum_digits: Number,
            acronym_maximum_digits: Number,
            ph_number_maximum_digits: Number,
            email_maximum_digits: Number,
            address_maximum_digits: Number,
            title_add: String,
            title_modify: String,
            btn_add_accept: String,
            btn_modify_accept: String,
            mssg_success_add: String,
            mssg_success_modify: String,
            mssg_error_select: String,
            mssg_error_name_empty: String,
            mssg_error_nit_empty: String,
            mssg_error_acronym_empty: String,
            mssg_error_email_invalid: String,
            opt_default: String,
        },
        methods: {
          reload: function(){
            $('#empresa').empty();
            $('#empresa').append($('<option>', {
              value: '0',
              text: this.opt_default,
              selected: "selected"
            }));
            $.ajaxSetup({
                headers: {
                	'X-CSRF-TOKEN': this.csrf
                }
            });
            return new Promise((resolve, reject) => {
              $.ajax({
                 type:'POST',
                 url:'/empresa',
                 data: {},
                 success:function(data) {
                    $.each(data.content,function(inx, result) {
                        $('#empresa').append($('<option>', { 
                          value: result.id,
                          text : result.Nombre 
                      }));
                    });
                    resolve(true);
                 },
                 error: function(data){
                   console.log(data);
                   reject(data);
                 }
              });
            });
          },
          validateField: function() {
            if($("#name").val().trim() == ''){
              this.toast_message_error = this.mssg_error_name_empty;
              this.toast_error.show();
              return false;
            }
            else if($("#nit").val().trim() == ''){
              this.toast_message_error = this.mssg_error_nit_empty;
              this.toast_error.show();
              return false;
            }
            else if($("#acronym").val().trim() == ''){
              this.toast_message_error = this.mssg_error_acronym_empty;
              this.toast_error.show();
              return false;
            }
            else if((this.email == "")? false : (new RegExp(this.regex_email).test(this.email)) ? false : true){
              this.toast_message_error = this.mssg_error_email_invalid;
              this.toast_error.show();
              return false;
            }
            return true;
          },
          clearField: function(){
            this.name = '';
            this.nit = '';
            this.acronym = '';
            this.ph_number = '';
            this.email = '';
            this.address = '';
            $("#level").val('3');
          },
          checkForm: function(e) {
            e.preventDefault();
          },
          actionAdd: function() {
            this.clearField();
            this.sidebar_title = this.title_add;
            this.btn_accept = this.btn_add_accept;
            $('#btn_accept').off().click(this.actionAddAccept);
            setTimeout(function(){
              $('#name').focus();
            }, 545);
          },
          actionAddAccept: function() {
            if(this.validateField()){
              $.ajax({
                 type:'POST',
                 url:'/empresa',
                 data: {'insert': 'true', 'name': this.name.trim(), 'nit': this.nit.trim(), 'acronym': this.acronym.trim(), 'ph_number': this.ph_number.trim(), 'email': this.email.trim(), 'address': this.address.trim(), 'level': $('#level :selected').val() },
                 success: async data => {
                    if(data.Success == true){
                      await this.reload();
                      $('#empresa').val($('#empresa option:last').val());
                      this.sidebar.hide();
                      this.toast_message_success = this.mssg_success_add;
                      this.toast_success.show();
                      this.clearField();
                    }else{
                      this.toast_message_error = data.content;
                      this.toast_error.show();
                    }
                 },
                 error: function(data){
                    console.log(data);
                 }
              });
            }
          },
          actionModify: function() {
            if($('#empresa :selected').val() != '0' && $('#empresa :selected').val() != undefined ){
              this.clearField();
              $.ajaxSetup({
              headers: {
              	'X-CSRF-TOKEN': this.csrf
              }
              });
              $.ajax({
                 type:'POST',
                 url:'/empresa',
                 data: {'id': $('#empresa :selected').val()},
                 success:data => {
                   if(data.Success == true){
                    this.name = data.content.Nombre;
                    this.nit = data.content.NIT;
                    this.acronym = data.content.Sigla;
                    this.ph_number = data.content.Telefono;
                    this.email = data.content.Correo;
                    this.address = data.content.Direccion;
                    $('#level').val(data.content.Niveles);
                    if(data.content.tieneCuenta){
                      $('#level').attr('disabled', true);
                    }
                    $('#level').val(data.content.Niveles);
                    $('#modal').modal('show');
                    setTimeout(function(){
                      $('#name').focus();
                    }, 545);
                  }else{
                    toastr.error(data.content);
                  }
                 },
                 error: function(data){
                     console.log(data);
                 }
              });
              this.sidebar_title = this.title_modify;
              this.btn_accept = this.btn_modify_accept;
              $('#btn_accept').off().click(this.actionModifyAccept);
              setTimeout(function(){
                $('#name').focus();
              }, 545);
              this.sidebar.show();
            }else{
              this.toast_message_error = this.mssg_error_select;
              this.toast_error.show();
            }
          },
          actionModifyAccept: function() {
            if(this.validateField()){
              $.ajaxSetup({
                headers: {
                	'X-CSRF-TOKEN': this.csrf
                }
              });
              $.ajax({
                 type:'POST',
                 url:'/empresa',
                 data: {'id': $('#empresa :selected').val(), 'update': 'true', 'name': this.name.trim(), 'nit': this.nit.trim(), 'acronym': this.acronym.trim(), 'ph_number': this.ph_number.trim(), 'email': this.email.trim(), 'address': this.address.trim(), 'level': $('#level :selected').val(), 'principalMoneyID': $('#pr_money').val()},
                 success: async data => {
                    if(data.Success == true){
                      this.toast_message_success = this.mssg_success_modify;
                      this.toast_success.show();
                      var id = $('#empresa :selected').val();
                      await this.reload();
                      $('#empresa').val(id);
                      this.sidebar.hide();
                      this.clearField();
                    }else{
                      toastr.error(data.content);
                    }
                 },
                 error: function(data){
                    console.log(data);
                    $('#modal').modal('hide');
                 }
              });
            }
          },
          actionDelete: function() {
            // 
          },
          actionAccept: function(e){
              if($('#empresa :selected').val() != '0'){
                $('input[name="id"]').val($('#empresa :selected').val());
                $('input[name="name"]').val($('#empresa :selected').text());
                $('#form').submit();
              }else{
                this.toast_message_error = this.mssg_error_select;
                this.toast_error.show();
              }
            },
        },
        mounted() {
          const toast_error_element = document.getElementById('toast_error')
          const toast_error = new window.bootstrap.Toast(toast_error_element);
          this.toast_error = toast_error;
          const toast_success_element = document.getElementById('toast_success')
          const toast_success = new window.bootstrap.Toast(toast_success_element);
          this.toast_success = toast_success;
          var sidebar_element = document.getElementById('sidebar');
          var sidebar = new bootstrap.Offcanvas(sidebar_element);
          this.sidebar = sidebar;
          this.reload();
        }
    }
</script>

<style>
  .fs-7 {
      font-size: 0.675rem !important;
  }
</style>