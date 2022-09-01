<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-9 col-sm-8 col-lg-6 col-xl-5">
                <div class="card login-box">
                    <div class="row g-0">
                        <div class="col-md-5">
                          <img src="images/login.png" class="img-fluid rounded-start image-login" >
                        </div>
                        <div class="col-md-7">
                            <div class="card-body card-body-login">
                                <div class="text-black fs-2 fw-bold text-uppercase text-center pb-3">Login</div>
                                <div class="message-box p-1 text-center text-danger text-uppercase fs-6" v-for="error in errors" v-bind:key="error" ><span class='ms-2' >{{ error }}</span></div>
                                <form :action="frm_action" :method="frm_method" @submit="checkForm" >
                                    <input type="hidden" name="_token" :value="csrf">
                                    <table cellpadding="10" >
                                        <tr>
                                            <td>
                                                <label class="text-uppercase fst-italic" >{{ et_user }}</label>
                                            </td>
                                            <td class='col-12' >
                                                <input id="lg_user" name="lg_user" class="form-control" type="text" v-model="user_field" :placeholder="ph_user" :maxlength="user_maximum_digits" required />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label class="text-uppercase fst-italic" >{{ et_pass }}</label>
                                            </td>
                                            <td class='col-12'>
                                                <input id="lg_pass" class="form-control" type="password" v-model="pass_field" :placeholder="ph_pass" :maxlength="pass_maximum_digits" required />
                                                <input name="lg_pass" class="form-control" type="hidden" v-model="pass_encrypt_field" /> <!--type="text"-->
                                            </td>
                                        </tr>
                                    </table>
                                    <div class="row p-2">
                                        <button type="submit" class="btn btn-primary mt-3" >{{ btn_submit }}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                user_field: null,
                pass_field: null,
                pass_encrypt_field: null,
            };
        },
        props: {
            errors: Array,
            btn_submit: String,
            et_user: String,
            et_pass: String,
            ph_user: String,
            ph_pass: String,
            frm_method: String,
            frm_action: String,
            user_minimum_digits: Number,
            user_maximum_digits: Number,
            pass_maximum_digits: Number,
        },
        methods: {
            checkForm: function(e){
                this.pass_encrypt_field = md5(this.pass_field);
                return true;
                //e.preventDefault();
                /* descomentar para ver password */
            }
        },
        mounted() {
            $(document).ready(function(){
                setTimeout(function(){
                  $('#lg_user').focus();
                }, 345);
            });
            console.log('Component mounted.')
        }
    }
</script>
<style>
    .image-login {
        height: 100%;
    }
    .login-box {
        width: 60%;
        background: white;
        color: black;
        top: 50%;
        left: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
        box-sizing: border-box;
        
    }
    .login-box::before  {
        content: "";
        width: 100%;
        height: 100%;
        background: rgb(248, 249, 250, 0.5);
        color: red;
        font-weight: bold;
        position: absolute;
        z-index: -10;
    }
    .card-body-login {
        padding: 15.503875968992247vh 50px 100px 50px;
    }

    .message-box {
        margin: 0px 0px 0px 0px !important;
    }
</style>