(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_EmpresaComponent_vue"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EmpresaComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EmpresaComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
      url_report: document.querySelector('meta[name="url_report"]').getAttribute('content'),
      name: '',
      nit: '',
      acronym: '',
      ph_number: '',
      email: '',
      address: ''
    };
  },
  props: {
    errors: Array,
    frm_method: String,
    frm_action: String,
    title: String,
    title_add: String,
    title_modify: String,
    opt_default: String,
    btn_add: String,
    btn_modify: String,
    btn_delete: String,
    btn_accept_add: String,
    btn_accept_modify: String,
    btn_close: String,
    ph_name: String,
    ph_nit: String,
    ph_acronym: String,
    ph_ph_number: String,
    ph_email: String,
    ph_address: String,
    et_name: String,
    et_nit: String,
    et_acronym: String,
    et_ph_number: String,
    et_email: String,
    et_address: String,
    et_level: String,
    et_money: String,
    regex_email: String,
    name_maximum_digits: Number,
    nit_maximum_digits: Number,
    acronym_maximum_digits: Number,
    ph_number_maximum_digits: Number,
    email_maximum_digits: Number,
    address_maximum_digits: Number,
    mssg_error_select: String,
    mssg_error_name_empty: String,
    mssg_error_nit_empty: String,
    mssg_error_acronym_empty: String,
    mssg_error_email_invalid: String,
    mssg_success_add: String,
    mssg_success_modify: String,
    mssg_error_pr_money_noselect: String,
    delete_confirm_title: String,
    delete_confirm_btn_cancel: String,
    delete_confirm_btn_next: String,
    delete_confirm_text_invalid: String,
    delete_confirm_mssg_success: String,
    delete_confirm_mssg_fail: String,
    opt_pr_money_default: String,
    data_money: Array
  },
  methods: {
    checkForm: function checkForm(e) {
      this.errors = [];
      e.preventDefault();
    },
    isEmailValid: function isEmailValid() {
      return this.email == "" ? "" : new RegExp(this.regex_email).test(this.email) ? 'border-success' : 'border-danger';
    },
    clearField: function clearField() {
      this.name = '';
      this.nit = '';
      this.acronym = '';
      this.ph_number = '';
      this.email = '';
      this.address = '';
      $("#level").attr('disabled', false);
      $('#pr_money').attr('disabled', false);
      $("#level").val('3');
      $("#pr_money").val('0');
    },
    reload: function reload() {
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
      return new Promise(function (resolve, reject) {
        $.ajax({
          type: 'POST',
          url: '/empresa',
          data: {},
          success: function success(data) {
            $.each(data.content, function (inx, result) {
              $('#empresa').append($('<option>', {
                value: result.id,
                text: result.Nombre
              }));
            });
            resolve(true);
          },
          error: function error(data) {
            console.log(data);
            reject(data);
          }
        });
      });
    },
    validateField: function validateField() {
      if ($("#name").val().trim() == '') {
        toastr.error(this.mssg_error_name_empty);
        return false;
      }

      if ($("#nit").val().trim() == '') {
        toastr.error(this.mssg_error_nit_empty);
        return false;
      }

      if ($("#acronym").val().trim() == '') {
        toastr.error(this.mssg_error_acronym_empty);
        return false;
      }

      if (this.email == "" ? false : new RegExp(this.regex_email).test(this.email) ? false : true) {
        toastr.error(this.mssg_error_email_invalid);
        return false;
      }

      return true;
    },
    actionAccept: function actionAccept(e) {
      if ($('#empresa :selected').val() != '0') {
        $('input[name="id"]').val($('#empresa :selected').val());
        $('input[name="name"]').val($('#empresa :selected').text());
        $('#form').submit();
      } else {
        toastr.error(this.mssg_error_select);
      }
    },
    actionAcceptAdd: function () {
      var _actionAcceptAdd = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(e) {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.validateField()) {
                  _context2.next = 5;
                  break;
                }

                if (!($('#pr_money').val() == 0)) {
                  _context2.next = 4;
                  break;
                }

                toastr.error(this.mssg_error_pr_money_noselect);
                return _context2.abrupt("return");

              case 4:
                $.ajax({
                  type: 'POST',
                  url: '/empresa',
                  data: {
                    'insert': 'true',
                    'name': this.name.trim(),
                    'nit': this.nit.trim(),
                    'acronym': this.acronym.trim(),
                    'ph_number': this.ph_number.trim(),
                    'email': this.email.trim(),
                    'address': this.address.trim(),
                    'level': $('#level :selected').val(),
                    'principalMoneyID': $('#pr_money').val()
                  },
                  success: function () {
                    var _success = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(data) {
                      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              if (!(data.Success == true)) {
                                _context.next = 9;
                                break;
                              }

                              toastr.success(_this.mssg_success_add);
                              _context.next = 4;
                              return _this.reload();

                            case 4:
                              $('#empresa').val($('#empresa option:last').val());

                              if ($('#empresa :selected').val() != '0') {
                                _this.enableButton();
                              } else {
                                _this.disableButton();
                              }

                              $('#modal').modal('hide');
                              _context.next = 10;
                              break;

                            case 9:
                              toastr.error(data.content);

                            case 10:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));

                    function success(_x2) {
                      return _success.apply(this, arguments);
                    }

                    return success;
                  }(),
                  error: function error(data) {
                    console.log(data);
                    $('#modal').modal('hide');
                  }
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function actionAcceptAdd(_x) {
        return _actionAcceptAdd.apply(this, arguments);
      }

      return actionAcceptAdd;
    }(),
    actionAcceptModify: function () {
      var _actionAcceptModify = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(e) {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (this.validateField()) {
                  $.ajaxSetup({
                    headers: {
                      'X-CSRF-TOKEN': this.csrf
                    }
                  });
                  $.ajax({
                    type: 'POST',
                    url: '/empresa',
                    data: {
                      'id': $('#empresa :selected').val(),
                      'update': 'true',
                      'name': this.name.trim(),
                      'nit': this.nit.trim(),
                      'acronym': this.acronym.trim(),
                      'ph_number': this.ph_number.trim(),
                      'email': this.email.trim(),
                      'address': this.address.trim(),
                      'level': $('#level :selected').val(),
                      'principalMoneyID': $('#pr_money').val()
                    },
                    success: function () {
                      var _success2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(data) {
                        var id;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                if (!(data.Success == true)) {
                                  _context3.next = 10;
                                  break;
                                }

                                toastr.success(_this2.mssg_success_modify);
                                id = $('#empresa :selected').val();
                                _context3.next = 5;
                                return _this2.reload();

                              case 5:
                                $('#empresa').val(id);

                                if ($('#empresa :selected').val() != '0') {
                                  _this2.enableButton();
                                } else {
                                  _this2.disableButton();
                                }

                                $('#modal').modal('hide');
                                _context3.next = 11;
                                break;

                              case 10:
                                toastr.error(data.content);

                              case 11:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3);
                      }));

                      function success(_x4) {
                        return _success2.apply(this, arguments);
                      }

                      return success;
                    }(),
                    error: function error(data) {
                      console.log(data);
                      $('#modal').modal('hide');
                    }
                  });
                }

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function actionAcceptModify(_x3) {
        return _actionAcceptModify.apply(this, arguments);
      }

      return actionAcceptModify;
    }(),
    actionAdd: function actionAdd(e) {
      $('#title_modal').empty();
      $('#title_modal').html(this.title_add);
      $('#btn_accept').empty();
      $('#btn_accept').off();
      $('#btn_accept').click(this.actionAcceptAdd);
      $('#btn_accept').html(this.btn_accept_add);
      this.clearField();
      setTimeout(function () {
        $('#name').focus();
      }, 545);
    },
    actionModify: function actionModify(e) {
      var _this3 = this;

      if ($('#empresa :selected').val() != '0') {
        this.clearField();
        $('#title_modal').empty();
        $('#title_modal').html(this.title_modify);
        $('#btn_accept').empty();
        $('#btn_accept').off();
        $('#btn_accept').click(this.actionAcceptModify);
        $('#btn_accept').html(this.btn_accept_modify);
        $.ajaxSetup({
          headers: {
            'X-CSRF-TOKEN': this.csrf
          }
        });
        $.ajax({
          type: 'POST',
          url: '/empresa',
          data: {
            'id': $('#empresa :selected').val()
          },
          success: function success(data) {
            if (data.Success == true) {
              if (data.moneyValid) {
                $('#pr_money').val(data.moneyID);
              } else {
                $('#pr_money').attr('disabled', true);
                $('#pr_money').val(data.moneyID);
              }

              _this3.name = data.content.Nombre;
              _this3.nit = data.content.NIT;
              _this3.acronym = data.content.Sigla;
              _this3.ph_number = data.content.Telefono;
              _this3.email = data.content.Correo;
              _this3.address = data.content.Direccion;
              $('#level').val(data.content.Niveles);

              if (data.content.tieneCuenta) {
                $('#level').attr('disabled', true);
              }

              $('#level').val(data.content.Niveles);
              $('#modal').modal('show');
              setTimeout(function () {
                $('#name').focus();
              }, 545);
            } else {
              toastr.error(data.content);
            }
          },
          error: function error(data) {
            console.log(data);
          }
        });
      } else {
        toastr.error(this.mssg_error_select); //this.$swal.fire({
        //  icon: 'error',
        //  title: this.mssg_error_select,
        //  showConfirmButton: false,
        //  timer: 1500
        //});
      }
    },
    actionReport: function actionReport(e) {
      window.open(this.url_report, '_blank');
    },
    actionDelete: function actionDelete(e) {
      var _this4 = this;

      if ($('#empresa :selected').val() != '0') {
        this.$swal.fire({
          title: this.delete_confirm_title.replace('"name"', "'".concat($('#empresa :selected').text(), "'")),
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText: this.delete_confirm_btn_cancel,
          confirmButtonText: this.delete_confirm_btn_next
        }).then(function (result) {
          if (result.isConfirmed) {
            var name = $('#empresa :selected').text();
            var disableButton = _this4.disableButton;
            $.ajaxSetup({
              headers: {
                'X-CSRF-TOKEN': _this4.csrf
              }
            });
            $.ajax({
              type: 'POST',
              url: '/empresa',
              data: {
                'id': $('#empresa :selected').val(),
                'delete': 'true'
              },
              success: function () {
                var _success3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(data) {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          if (!(data.Success == true)) {
                            _context5.next = 7;
                            break;
                          }

                          disableButton();
                          _context5.next = 4;
                          return _this4.reload();

                        case 4:
                          toastr.success(_this4.delete_confirm_mssg_success.replace('"name"', "'".concat(name, "'")));
                          _context5.next = 8;
                          break;

                        case 7:
                          toastr.error(_this4.delete_confirm_mssg_fail);

                        case 8:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                function success(_x5) {
                  return _success3.apply(this, arguments);
                }

                return success;
              }(),
              error: function error(data) {
                console.log(data);
                $('#modal').modal('hide');
              }
            });
          }
        });
      } else {
        toastr.error(this.mssg_error_select);
      }
    },
    disableButton: function disableButton() {
      $('#btn_submit').attr('disabled', true);
      $('#btn_modify').attr('disabled', true);
      $('#btn_delete').attr('disabled', true);
    },
    enableButton: function enableButton() {
      $('#btn_submit').attr('disabled', false);
      $('#btn_modify').attr('disabled', false);
      $('#btn_delete').attr('disabled', false);
    }
  },
  mounted: function mounted() {
    var data_money = this.data_money;
    $('#btn_modify').attr('disabled', true);
    $('#btn_delete').attr('disabled', true);
    $('#btn_submit').attr('disabled', true);
    var enableButton = this.enableButton;
    var disableButton = this.disableButton;
    $(document).ready(function () {
      $.each(data_money, function (inx, result) {
        $('#pr_money').append($('<option>', {
          value: result.ID,
          text: result.Nombre
        }));
      });
      $('#empresa').change(function () {
        if ($('#empresa :selected').val() != 0) {
          enableButton();
        } else {
          disableButton();
        }
      });
    });
    this.reload();
    console.log('Component mounted.');
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EmpresaComponent.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EmpresaComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.fs-7 {\n    font-size: 0.675rem !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EmpresaComponent.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EmpresaComponent.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmpresaComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EmpresaComponent.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/js/components/EmpresaComponent.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/EmpresaComponent.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EmpresaComponent_vue_vue_type_template_id_b1248242___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmpresaComponent.vue?vue&type=template&id=b1248242& */ "./resources/js/components/EmpresaComponent.vue?vue&type=template&id=b1248242&");
/* harmony import */ var _EmpresaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmpresaComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/EmpresaComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _EmpresaComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmpresaComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/EmpresaComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EmpresaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmpresaComponent_vue_vue_type_template_id_b1248242___WEBPACK_IMPORTED_MODULE_0__.render,
  _EmpresaComponent_vue_vue_type_template_id_b1248242___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/EmpresaComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/EmpresaComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/EmpresaComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmpresaComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EmpresaComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/EmpresaComponent.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/EmpresaComponent.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmpresaComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EmpresaComponent.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/EmpresaComponent.vue?vue&type=template&id=b1248242&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/EmpresaComponent.vue?vue&type=template&id=b1248242& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaComponent_vue_vue_type_template_id_b1248242___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaComponent_vue_vue_type_template_id_b1248242___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaComponent_vue_vue_type_template_id_b1248242___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmpresaComponent.vue?vue&type=template&id=b1248242& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EmpresaComponent.vue?vue&type=template&id=b1248242&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EmpresaComponent.vue?vue&type=template&id=b1248242&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EmpresaComponent.vue?vue&type=template&id=b1248242& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-10 col-sm-9 col-lg-7 col-xl-6" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [
            _vm._v(_vm._s(_vm.title)),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "form",
              {
                attrs: {
                  method: _vm.frm_method,
                  action: _vm.frm_action,
                  id: "form",
                },
                on: { submit: _vm.checkForm },
              },
              [
                _c(
                  "table",
                  {
                    staticClass: "col-12",
                    attrs: { cellpadding: "3", cellspacing: "1" },
                  },
                  [
                    _c("tr", [
                      _vm._m(0),
                      _vm._v(" "),
                      _c("td", { staticClass: "col-1" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary col-12 float-end",
                            attrs: { id: "btn_submit", type: "button" },
                            on: { click: _vm.actionAccept },
                          },
                          [_c("i", { staticClass: "bi bi-arrow-right" })]
                        ),
                      ]),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c("input", {
                  attrs: { type: "hidden", name: "_token" },
                  domProps: { value: _vm.csrf },
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-12 mt-3 d-flex bd-highlight text-end" },
                  [
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn mx-1 btn-secondary flex-grow-1 bd-highlight",
                        attrs: {
                          type: "button",
                          "data-bs-toggle": "modal",
                          "data-bs-target": "#modal",
                        },
                        on: { click: _vm.actionAdd },
                      },
                      [
                        _c("i", { staticClass: "bi bi-plus" }),
                        _vm._v(" " + _vm._s(_vm.btn_add)),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn mx-1 btn-success flex-grow-1 bd-highlight",
                        attrs: { id: "btn_modify", type: "button" },
                        on: { click: _vm.actionModify },
                      },
                      [
                        _c("i", { staticClass: "bi bi-pencil-square" }),
                        _vm._v(" " + _vm._s(_vm.btn_modify)),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn mx-1 btn-danger flex-grow-1 bd-highlight",
                        attrs: { id: "btn_delete", type: "button" },
                        on: { click: _vm.actionDelete },
                      },
                      [
                        _c("i", { staticClass: "bi bi-trash3-fill" }),
                        _vm._v(" " + _vm._s(_vm.btn_delete)),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn mx-1 btn-warning flex-grow-1 bd-highlight",
                        attrs: { type: "button" },
                        on: { click: _vm.actionReport },
                      },
                      [_c("i", { staticClass: "bi bi-file-text" })]
                    ),
                  ]
                ),
              ]
            ),
          ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "modal",
          "data-bs-backdrop": "static",
          "data-bs-keyboard": "false",
          tabindex: "-1",
          "aria-labelledby": "staticBackdropLabel",
          "aria-hidden": "true",
        },
      },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c(
                "h5",
                { staticClass: "modal-title", attrs: { id: "title_modal" } },
                [_vm._v(_vm._s(_vm.title))]
              ),
              _vm._v(" "),
              _c("button", {
                staticClass: "btn-close",
                attrs: {
                  type: "button",
                  "data-bs-dismiss": "modal",
                  "aria-label": "Close",
                },
              }),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "modal-body", attrs: { id: "modal-body" } },
              [
                _c("form", [
                  _c("input", {
                    attrs: { type: "hidden", name: "_token" },
                    domProps: { value: _vm.csrf },
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12" }, [
                    _c("div", { staticClass: "form-floating mb-3" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.name,
                            expression: "name",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: _vm.ph_name,
                          id: "name",
                          name: "name",
                          oninput:
                            "this.value = this.value.replace(/[^a-zA-Z0-9\\ \\-+-]/g, '').replace(/(\\..*)\\./g, '$1');",
                          maxlength: _vm.name_maximum_digits,
                        },
                        domProps: { value: _vm.name },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.name = $event.target.value
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("label", { staticClass: "form-floating-text" }, [
                        _vm._v(_vm._s(_vm.et_name)),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "d-flex justify-content-start" }, [
                      _c(
                        "div",
                        { staticClass: "form-floating mb-3 me-4 col-7" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.nit,
                                expression: "nit",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: _vm.ph_nit,
                              id: "nit",
                              name: "nit",
                              oninput:
                                "this.value = this.value.replace(/[^0-9]/g, '').replace(/(\\..*)\\./g, '$1');",
                              maxlength: _vm.nit_maximum_digits,
                            },
                            domProps: { value: _vm.nit },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.nit = $event.target.value
                              },
                            },
                          }),
                          _vm._v(" "),
                          _c("label", { staticClass: "form-floating-text" }, [
                            _vm._v(_vm._s(_vm.et_nit)),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-floating mb-3 col-4" }, [
                        _vm._m(1),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "floatingSelect" } }, [
                          _vm._v(_vm._s(_vm.et_level)),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "d-flex justify-content-start" }, [
                      _c(
                        "div",
                        { staticClass: "form-floating mb-3 me-4 col-5" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.acronym,
                                expression: "acronym",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: _vm.ph_acronym,
                              id: "acronym",
                              name: "acronym",
                              oninput:
                                "this.value = this.value.replace(/[^a-zA-Z0-9\\.\\-\\ +-]/g, '').replace(/(\\..*)\\./g, '$1');",
                              maxlength: _vm.acronym_maximum_digits,
                            },
                            domProps: { value: _vm.acronym },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.acronym = $event.target.value
                              },
                            },
                          }),
                          _vm._v(" "),
                          _c("label", { staticClass: "form-floating-text" }, [
                            _vm._v(_vm._s(_vm.et_acronym)),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-floating mb-3 col-6" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.ph_number,
                              expression: "ph_number",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder: _vm.ph_ph_number,
                            id: "ph_number",
                            name: "ph_number",
                            oninput:
                              "this.value = this.value.replace(/[^0-9+-]/g, '').replace(/(\\..*)\\./g, '$1');",
                            maxlength: _vm.ph_number_maximum_digits,
                          },
                          domProps: { value: _vm.ph_number },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.ph_number = $event.target.value
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c("label", { staticClass: "form-floating-text" }, [
                          _vm._v(_vm._s(_vm.et_ph_number)),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "d-flex justify-content-start mb-3" },
                      [
                        _c(
                          "div",
                          { class: ["form-floating", "me-4", "col-5"] },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.email,
                                  expression: "email",
                                },
                              ],
                              class: [
                                "form-control",
                                "border",
                                "border-1",
                                _vm.isEmailValid(),
                              ],
                              attrs: {
                                type: "email",
                                placeholder: _vm.ph_email,
                                id: "email",
                                name: "email",
                                maxlength: _vm.email_maximum_digits,
                              },
                              domProps: { value: _vm.email },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.email = $event.target.value
                                },
                              },
                            }),
                            _vm._v(" "),
                            _c("label", { staticClass: "form-floating-text" }, [
                              _vm._v(_vm._s(_vm.et_email)),
                            ]),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "form-floating col-6",
                            attrs: { id: "div_pr_money" },
                          },
                          [
                            _c(
                              "select",
                              {
                                staticClass: "form-select",
                                attrs: { id: "pr_money" },
                              },
                              [
                                _c(
                                  "option",
                                  { attrs: { value: "0", selected: "" } },
                                  [_vm._v(_vm._s(_vm.opt_pr_money_default))]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c("label", { attrs: { for: "floatingSelect" } }, [
                              _vm._v(_vm._s(_vm.et_money)),
                            ]),
                          ]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-floating" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.address,
                            expression: "address",
                          },
                        ],
                        staticClass: "form-control",
                        staticStyle: { resize: "none" },
                        attrs: {
                          placeholder: _vm.ph_address,
                          id: "address",
                          name: "address",
                          maxlength: _vm.address_maximum_digits,
                          oninput:
                            'this.style.height = "";this.style.height = this.scrollHeight+5 + "px"',
                        },
                        domProps: { value: _vm.address },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.address = $event.target.value
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("label", { attrs: { for: "address" } }, [
                        _vm._v(_vm._s(_vm.et_address)),
                      ]),
                    ]),
                  ]),
                ]),
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-secondary",
                  attrs: { type: "button", "data-bs-dismiss": "modal" },
                },
                [_vm._v(_vm._s(_vm.btn_close))]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { type: "button", id: "btn_accept" },
                },
                [_vm._v("Accept")]
              ),
            ]),
          ]),
        ]),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "col-6" }, [
      _c("select", { staticClass: "form-select", attrs: { id: "empresa" } }),
      _vm._v(" "),
      _c("input", { attrs: { type: "hidden", name: "id" } }),
      _vm._v(" "),
      _c("input", { attrs: { type: "hidden", name: "name" } }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "select",
      { staticClass: "form-select", attrs: { id: "level" } },
      [
        _c("option", { attrs: { value: "3", selected: "" } }, [_vm._v("3")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "4" } }, [_vm._v("4")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "5" } }, [_vm._v("5")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "6" } }, [_vm._v("6")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "7" } }, [_vm._v("7")]),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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