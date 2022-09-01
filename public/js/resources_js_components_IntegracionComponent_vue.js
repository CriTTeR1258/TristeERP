"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_IntegracionComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IntegracionComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IntegracionComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      url_report: '',
      cash_account: '',
      tax_credit_account: '',
      tax_debit_account: '',
      purchase_account: '',
      sale_account: '',
      it_account: '',
      it_per_pay_account: '',
      integration: false,
      cash_account_reserve: '',
      tax_credit_account_reserve: '',
      tax_debit_account_reserve: '',
      purchase_account_reserve: '',
      sale_account_reserve: '',
      it_account_reserve: '',
      it_per_pay_account_reserve: '',
      integration_reserve: false
    };
  },
  props: {
    errors: Array,
    account_data: Array,
    cash_id: Number,
    tax_credit_id: Number,
    tax_debit_id: Number,
    purchase_id: Number,
    sale_id: Number,
    it_id: Number,
    it_per_pay_id: Number,
    integration_result: Boolean,
    et_cash_account: String,
    et_tax_credit_account: String,
    et_tax_debit_account: String,
    et_purchase_account: String,
    et_sale_account: String,
    et_it_account: String,
    et_it_per_pay_account: String,
    et_integration: String,
    placeholder_cash_account: String,
    placeholder_tax_credit_account: String,
    placeholder_tax_debit_account: String,
    placeholder_purchase_account: String,
    placeholder_sale_account: String,
    placeholder_it_account: String,
    placeholder_it_per_pay_account: String,
    mssg_cash_account_noselect: String,
    mssg_tax_credit_account_noselect: String,
    mssg_tax_debit_account_noselect: String,
    mssg_purchase_account_noselect: String,
    mssg_sale_account_noselect: String,
    mssg_it_account_noselect: String,
    mssg_it_per_pay_account_noselect: String,
    mssg_account_not_repeat: String,
    mssg_not_detect_change: String,
    mssg_success_add: String,
    mssg_fail: String
  },
  methods: {
    validateField: function validateField() {
      var cash_account = $("#" + $('#cash_account').attr('list') + " option[value='" + this.cash_account + "']");

      if (cash_account.length == 0) {
        toastr.error(this.mssg_cash_account_noselect);
        return false;
      }

      var tax_credit_account = $("#" + $('#tax_credit_account').attr('list') + " option[value='" + this.tax_credit_account + "']");

      if (tax_credit_account.length == 0) {
        toastr.error(this.mssg_tax_credit_account_noselect);
        return false;
      }

      var tax_debit_account = $("#" + $('#tax_debit_account').attr('list') + " option[value='" + this.tax_debit_account + "']");

      if (tax_debit_account.length == 0) {
        toastr.error(this.mssg_tax_debit_account_noselect);
        return false;
      }

      var purchase_account = $("#" + $('#purchase_account').attr('list') + " option[value='" + this.purchase_account + "']");

      if (purchase_account.length == 0) {
        toastr.error(this.mssg_purchase_account_noselect);
        return false;
      }

      var sale_account = $("#" + $('#sale_account').attr('list') + " option[value='" + this.sale_account + "']");

      if (sale_account.length == 0) {
        toastr.error(this.mssg_sale_account_noselect);
        return false;
      }

      var it_account = $("#" + $('#it_account').attr('list') + " option[value='" + this.it_account + "']");

      if (it_account.length == 0) {
        toastr.error(this.mssg_it_account_noselect);
        return false;
      }

      var it_per_pay_account = $("#" + $('#it_per_pay_account').attr('list') + " option[value='" + this.it_per_pay_account + "']");

      if (it_per_pay_account.length == 0) {
        toastr.error(this.mssg_it_per_pay_account_noselect);
        return false;
      }

      var array = [cash_account.attr('data_id'), tax_credit_account.attr('data_id'), tax_debit_account.attr('data_id'), purchase_account.attr('data_id'), sale_account.attr('data_id'), it_account.attr('data_id'), it_per_pay_account.attr('data_id')];
      var e = this;
      var result = 0;
      $.each(array, function (inx, val) {
        result = 0;
        $.each(array, function (inx2, val2) {
          if (val == val2) {
            result++;
          }
        });

        if (result > 1) {
          return false; //mssg_not_detect_change
        }
      });

      if (result > 1) {
        toastr.error(e.mssg_account_not_repeat);
        return false;
      }

      var array2 = [this.cash_account_reserve, this.tax_credit_account_reserve, this.tax_debit_account_reserve, this.purchase_account_reserve, this.sale_account_reserve, this.it_account_reserve, this.it_per_pay_account_reserve];
      $.each(array, function (inx, val) {
        result = 0;

        if (val == array2[inx]) {
          return true;
        }

        result++;
        return false;
      });

      if (result == 0 && this.integration == this.integration_reserve) {
        toastr.error(e.mssg_not_detect_change);
        return false;
      }

      return true;
    },
    actionAdd: function actionAdd() {
      var _this = this;

      if (this.validateField()) {
        var cashAccountID = $("#" + $('#cash_account').attr('list') + " option[value='" + this.cash_account + "']").attr('data_id');
        var taxCreditAccountID = $("#" + $('#tax_credit_account').attr('list') + " option[value='" + this.tax_credit_account + "']").attr('data_id');
        var taxDebitAccountID = $("#" + $('#tax_debit_account').attr('list') + " option[value='" + this.tax_debit_account + "']").attr('data_id');
        var purchaseAccountID = $("#" + $('#purchase_account').attr('list') + " option[value='" + this.purchase_account + "']").attr('data_id');
        var saleAccountID = $("#" + $('#sale_account').attr('list') + " option[value='" + this.sale_account + "']").attr('data_id');
        var itAccountID = $("#" + $('#it_account').attr('list') + " option[value='" + this.it_account + "']").attr('data_id');
        var itPerPayAccountID = $("#" + $('#it_per_pay_account').attr('list') + " option[value='" + this.it_per_pay_account + "']").attr('data_id');
        var integration = this.integration == true ? 0 : 1;
        $.ajaxSetup({
          headers: {
            'X-CSRF-TOKEN': this.csrf
          }
        });
        $.ajax({
          type: 'POST',
          url: '/integracion',
          data: {
            'update': 'true',
            'cashAccountID': cashAccountID,
            'taxCreditAccountID': taxCreditAccountID,
            'taxDebitAccountID': taxDebitAccountID,
            'purchaseAccountID': purchaseAccountID,
            'saleAccountID': saleAccountID,
            'itAccountID': itAccountID,
            'itPerPayAccountID': itPerPayAccountID,
            'integration': integration
          },
          success: function success(data) {
            if (data.Success == true) {
              toastr.success(_this.mssg_success_add);
              _this.cash_account_reserve = cashAccountID;
              _this.tax_credit_account_reserve = taxCreditAccountID;
              _this.tax_debit_account_reserve = taxDebitAccountID;
              _this.purchase_account_reserve = purchaseAccountID;
              _this.sale_account_reserve = saleAccountID;
              _this.it_account_reserve = itAccountID;
              _this.it_per_pay_account_reserve = itPerPayAccountID;
              _this.integration_reserve = _this.integration;
            } else {
              toastr.error(data.content);
            }
          },
          error: function error(data) {
            console.log(data);
            toastr.error(this.mssg_fail);
            $('#modal').modal('hide');
          }
        });
      }
    }
  },
  mounted: function mounted() {
    console.log('Component mounted.');
    var e = this;
    $(document).ready(function () {
      e.cash_account = $("#" + $('#cash_account').attr('list') + " option[data_id='" + e.cash_id + "']").val();
      e.tax_credit_account = $("#" + $('#tax_credit_account').attr('list') + " option[data_id='" + e.tax_credit_id + "']").val();
      e.tax_debit_account = $("#" + $('#tax_debit_account').attr('list') + " option[data_id='" + e.tax_debit_id + "']").val();
      e.purchase_account = $("#" + $('#purchase_account').attr('list') + " option[data_id='" + e.purchase_id + "']").val();
      e.sale_account = $("#" + $('#sale_account').attr('list') + " option[data_id='" + e.sale_id + "']").val();
      e.it_account = $("#" + $('#it_account').attr('list') + " option[data_id='" + e.it_id + "']").val();
      e.it_per_pay_account = $("#" + $('#it_per_pay_account').attr('list') + " option[data_id='" + e.it_per_pay_id + "']").val();
      e.integration = e.integration_result;
      e.cash_account_reserve = e.cash_id;
      e.tax_credit_account_reserve = e.tax_credit_id;
      e.tax_debit_account_reserve = e.tax_debit_id;
      e.purchase_account_reserve = e.purchase_id;
      e.sale_account_reserve = e.sale_id;
      e.it_account_reserve = e.it_id;
      e.it_per_pay_account_reserve = e.it_per_pay_id;
      e.integration_reserve = e.integration_result;
    });
  }
});

/***/ }),

/***/ "./resources/js/components/IntegracionComponent.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/IntegracionComponent.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IntegracionComponent_vue_vue_type_template_id_361cdbe3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IntegracionComponent.vue?vue&type=template&id=361cdbe3& */ "./resources/js/components/IntegracionComponent.vue?vue&type=template&id=361cdbe3&");
/* harmony import */ var _IntegracionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IntegracionComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/IntegracionComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _IntegracionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IntegracionComponent_vue_vue_type_template_id_361cdbe3___WEBPACK_IMPORTED_MODULE_0__.render,
  _IntegracionComponent_vue_vue_type_template_id_361cdbe3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/IntegracionComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/IntegracionComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/IntegracionComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IntegracionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IntegracionComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IntegracionComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IntegracionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/IntegracionComponent.vue?vue&type=template&id=361cdbe3&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/IntegracionComponent.vue?vue&type=template&id=361cdbe3& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IntegracionComponent_vue_vue_type_template_id_361cdbe3___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IntegracionComponent_vue_vue_type_template_id_361cdbe3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IntegracionComponent_vue_vue_type_template_id_361cdbe3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IntegracionComponent.vue?vue&type=template&id=361cdbe3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IntegracionComponent.vue?vue&type=template&id=361cdbe3&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IntegracionComponent.vue?vue&type=template&id=361cdbe3&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/IntegracionComponent.vue?vue&type=template&id=361cdbe3& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "breadcome-list text-light row justify-content-center" },
    [
      _c(
        "div",
        {
          staticClass:
            "col-12 col-sm-11 col-md-10 col-xl-8 d-flex flex-row flex-wrap justify-content-between mb-2",
          staticStyle: { padding: "0" },
        },
        [
          _c("div", { staticClass: "col-12 col-md-5" }, [
            _c(
              "label",
              { staticClass: "form-label", attrs: { for: "cash_account" } },
              [_vm._v(_vm._s(_vm.et_cash_account))]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.cash_account,
                  expression: "cash_account",
                },
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                list: "data_list_cash_account",
                id: "cash_account",
                placeholder: _vm.placeholder_cash_account,
              },
              domProps: { value: _vm.cash_account },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.cash_account = $event.target.value
                },
              },
            }),
            _vm._v(" "),
            _c(
              "datalist",
              { attrs: { id: "data_list_cash_account" } },
              _vm._l(_vm.account_data, function (v) {
                return _c("option", {
                  key: v.id,
                  attrs: { data_id: v.id },
                  domProps: { value: v.Codigo + " " + v.Nombre },
                })
              }),
              0
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 col-md-5" }, [
            _c(
              "label",
              {
                staticClass: "form-label",
                attrs: { for: "tax_credit_account" },
              },
              [_vm._v(_vm._s(_vm.et_tax_credit_account))]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.tax_credit_account,
                  expression: "tax_credit_account",
                },
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                list: "data_list_tax_credit_account",
                id: "tax_credit_account",
                placeholder: _vm.placeholder_tax_credit_account,
              },
              domProps: { value: _vm.tax_credit_account },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.tax_credit_account = $event.target.value
                },
              },
            }),
            _vm._v(" "),
            _c(
              "datalist",
              { attrs: { id: "data_list_tax_credit_account" } },
              _vm._l(_vm.account_data, function (v) {
                return _c("option", {
                  key: v.id,
                  attrs: { data_id: v.id },
                  domProps: { value: v.Codigo + " " + v.Nombre },
                })
              }),
              0
            ),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "col-12 col-sm-11 col-md-10 col-xl-8 d-flex flex-row flex-wrap justify-content-between mb-2",
          staticStyle: { padding: "0" },
        },
        [
          _c("div", { staticClass: "col-12 col-md-5" }, [
            _c(
              "label",
              {
                staticClass: "form-label",
                attrs: { for: "tax_debit_account" },
              },
              [_vm._v(_vm._s(_vm.et_tax_debit_account))]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.tax_debit_account,
                  expression: "tax_debit_account",
                },
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                list: "data_list_tax_debit_account",
                id: "tax_debit_account",
                placeholder: _vm.placeholder_tax_debit_account,
              },
              domProps: { value: _vm.tax_debit_account },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.tax_debit_account = $event.target.value
                },
              },
            }),
            _vm._v(" "),
            _c(
              "datalist",
              { attrs: { id: "data_list_tax_debit_account" } },
              _vm._l(_vm.account_data, function (v) {
                return _c("option", {
                  key: v.id,
                  attrs: { data_id: v.id },
                  domProps: { value: v.Codigo + " " + v.Nombre },
                })
              }),
              0
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 col-md-5" }, [
            _c(
              "label",
              { staticClass: "form-label", attrs: { for: "purchase_account" } },
              [_vm._v(_vm._s(_vm.et_purchase_account))]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.purchase_account,
                  expression: "purchase_account",
                },
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                list: "data_list_purchase_account",
                id: "purchase_account",
                placeholder: _vm.placeholder_purchase_account,
              },
              domProps: { value: _vm.purchase_account },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.purchase_account = $event.target.value
                },
              },
            }),
            _vm._v(" "),
            _c(
              "datalist",
              { attrs: { id: "data_list_purchase_account" } },
              _vm._l(_vm.account_data, function (v) {
                return _c("option", {
                  key: v.id,
                  attrs: { data_id: v.id },
                  domProps: { value: v.Codigo + " " + v.Nombre },
                })
              }),
              0
            ),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "col-12 col-sm-11 col-md-10 col-xl-8 d-flex flex-row flex-wrap justify-content-between mb-2",
          staticStyle: { padding: "0" },
        },
        [
          _c("div", { staticClass: "col-12 col-md-5" }, [
            _c(
              "label",
              { staticClass: "form-label", attrs: { for: "sale_account" } },
              [_vm._v(_vm._s(_vm.et_sale_account))]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.sale_account,
                  expression: "sale_account",
                },
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                list: "data_list_sale_account",
                id: "sale_account",
                placeholder: _vm.placeholder_sale_account,
              },
              domProps: { value: _vm.sale_account },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.sale_account = $event.target.value
                },
              },
            }),
            _vm._v(" "),
            _c(
              "datalist",
              { attrs: { id: "data_list_sale_account" } },
              _vm._l(_vm.account_data, function (v) {
                return _c("option", {
                  key: v.id,
                  attrs: { data_id: v.id },
                  domProps: { value: v.Codigo + " " + v.Nombre },
                })
              }),
              0
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 col-md-5" }, [
            _c(
              "label",
              { staticClass: "form-label", attrs: { for: "it_account" } },
              [_vm._v(_vm._s(_vm.et_it_account))]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.it_account,
                  expression: "it_account",
                },
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                list: "data_list_it_account",
                id: "it_account",
                placeholder: _vm.placeholder_it_account,
              },
              domProps: { value: _vm.it_account },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.it_account = $event.target.value
                },
              },
            }),
            _vm._v(" "),
            _c(
              "datalist",
              { attrs: { id: "data_list_it_account" } },
              _vm._l(_vm.account_data, function (v) {
                return _c("option", {
                  key: v.id,
                  attrs: { data_id: v.id },
                  domProps: { value: v.Codigo + " " + v.Nombre },
                })
              }),
              0
            ),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "col-12 col-sm-11 col-md-10 col-xl-8 d-flex flex-row flex-wrap mb-2 align-items-end",
          staticStyle: { padding: "0" },
        },
        [
          _c("div", { staticClass: "col-12 col-md-5" }, [
            _c(
              "label",
              {
                staticClass: "form-label",
                attrs: { for: "it_per_pay_account" },
              },
              [_vm._v(_vm._s(_vm.et_it_per_pay_account))]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.it_per_pay_account,
                  expression: "it_per_pay_account",
                },
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                list: "data_list_it_per_pay_account",
                id: "it_per_pay_account",
                placeholder: _vm.placeholder_it_per_pay_account,
              },
              domProps: { value: _vm.it_per_pay_account },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.it_per_pay_account = $event.target.value
                },
              },
            }),
            _vm._v(" "),
            _c(
              "datalist",
              { attrs: { id: "data_list_it_per_pay_account" } },
              _vm._l(_vm.account_data, function (v) {
                return _c("option", {
                  key: v.id,
                  attrs: { data_id: v.id },
                  domProps: { value: v.Codigo + " " + v.Nombre },
                })
              }),
              0
            ),
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "col-12 col-md-5 mt-4 mb-2 justify-content-center offset-md-2 d-flex flex-row",
            },
            [
              _c("div", {}, [
                _c("div", { staticClass: "form-check form-switch ms-3" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.integration,
                        expression: "integration",
                      },
                    ],
                    staticClass: "form-check-input ps-3 pe-3",
                    attrs: { type: "checkbox", id: "flexSwitchCheckDefault" },
                    domProps: {
                      checked: Array.isArray(_vm.integration)
                        ? _vm._i(_vm.integration, null) > -1
                        : _vm.integration,
                    },
                    on: {
                      change: function ($event) {
                        var $$a = _vm.integration,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 && (_vm.integration = $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              (_vm.integration = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.integration = $$c
                        }
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "form-check-label",
                      attrs: { for: "flexSwitchCheckDefault" },
                    },
                    [_vm._v(_vm._s(_vm.et_integration))]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary ms-3 col-4",
                  attrs: { type: "button" },
                  on: { click: _vm.actionAdd },
                },
                [_vm._v("Guardar")]
              ),
            ]
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);