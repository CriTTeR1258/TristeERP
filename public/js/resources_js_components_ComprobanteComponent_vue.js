(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_ComprobanteComponent_vue"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ComprobanteComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ComprobanteComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
      receipt_id: 0,
      url_report: '',
      bool_receipt_modify: false,
      bool_detail_modify: false,
      show_receipt_table: true,
      show_receipt_form: false,
      latest_id_account: 0,
      receipt_serie: '',
      receipt_status: '',
      receipt_receipt_type: -1,
      receipt_exchange: '0',
      receipt_money: 0,
      receipt_comment: '',
      detail_account: '',
      detail_comment: '',
      detail_debit: '0',
      detail_credit: '0',
      detail_rows: []
    };
  },
  props: {
    errors: Array,
    data_receipt_type: Array,
    data_money: Array,
    data_account: Array,
    money_exchange: Number,
    et_receipt_serie: String,
    et_receipt_date: String,
    et_receipt_status: String,
    et_receipt_receipt_type: String,
    et_receipt_exchange: String,
    et_receipt_money: String,
    et_receipt_comment: String,
    et_detail_account: String,
    et_detail_comment: String,
    et_detail_debit: String,
    et_detail_credit: String,
    et_total: String,
    opt_receipt_receipt_type_default: String,
    opt_detail_account_default: String,
    receipt_rows: Array,
    receipt_columns: Array,
    receipt_table_name: String,
    receipt_column_order: Number,
    receipt_check_order_desc: Boolean,
    detail_columns: Array,
    detail_table_name: String,
    detail_column_order: Number,
    btn_close: String,
    btn_addDetail: String,
    receipt_check_remove_bfilter: Boolean,
    detail_check_remove_bfilter: Boolean,
    mssg_noselect_row: String,
    mssg_error_function_not_available: String,
    mssg_receipt_date_empty: String,
    mssg_receipt_receipt_type_noselect: String,
    mssg_receipt_exchange_empty: String,
    mssg_receipt_money_noselect: String,
    mssg_receipt_comment_empty: String,
    mssg_detail_table_amount_insufficient: String,
    mssg_detail_account_noselect: String,
    mssg_detail_comment_empty: String,
    mssg_detail_debit_empty: String,
    mssg_detail_credit_empty: String,
    mssg_detail_account_exist: String,
    mssg_question_receipt_annular: String,
    mssg_receipt_total_not_equals: String,
    btn_mssg_receipt_annular_close: String,
    btn_mssg_receipt_annular_confirm: String,
    mssg_success_add: String,
    mssg_receipt_annular_success: String,
    mssg_detail_debit_credit_invalid: String,
    detail_comment_maximum_digits: Number,
    detail_debit_maximum_digits: Number,
    detail_credit_maximum_digits: Number,
    receipt_exchange_maximum_digits: Number,
    receipt_comment_maximum_digits: Number
  },
  methods: {
    reload: function reload() {
      var _this = this;

      $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': this.csrf
        }
      });
      $.ajax({
        type: 'POST',
        url: '/comprobante',
        data: {},
        success: function success(data) {
          if (data.Success == true) {
            var result = [];
            var keys = [];

            if (data.content.length > 0) {
              var keys = Object.keys(data.content[0]);
            }

            data.content.forEach(function (n) {
              var newData = [];
              keys.forEach(function (key) {
                newData.push(n[key]);
              });
              result.push(newData);
            });

            _this.$refs.table.dt.clear().draw();

            _this.$refs.table.dt.rows.add(result).draw();
          } else {
            toastr.error(data.content);
          }
        },
        error: function error(data) {
          console.log(data);
          toastr.error(this.mssg_fail);
        }
      });
    },
    setTotalValue: function setTotalValue() {
      var table = this.$refs.table2.dt;
      var debit = parseFloat('0').toFixed(2);
      var credit = parseFloat('0').toFixed(2);
      table.rows().every(function () {
        $(this.node()).hasClass("text-wrap") ? "" : $(this.node()).addClass("text-wrap");
        $(this.node()).hasClass("text-break") ? "" : $(this.node()).addClass("text-break");
        var data = this.data();
        debit = (parseFloat(debit) + parseFloat(data[data.length - 2])).toFixed(2);
        credit = (parseFloat(credit) + parseFloat(data[data.length - 1])).toFixed(2);
        var debit_column = $(table.cell(this.index(), data.length - 2).node());
        var credit_column = $(table.cell(this.index(), data.length - 1).node());
        debit_column.hasClass('text-end') ? "" : debit_column.addClass('text-end');
        credit_column.hasClass('text-end') ? "" : credit_column.addClass('text-end');
      });
      $('#debitTotal_amount').text(debit);
      $('#creditTotal_amount').text(credit);
    },
    cssDetailTable: function cssDetailTable() {
      var detail_table_name = this.detail_table_name;
      $('#' + detail_table_name + '_wrapper thead .tb_column_1').css('width', '30%');
      $('#' + detail_table_name + '_wrapper thead .tb_column_2').css('width', '40%');
      $('#' + detail_table_name + '_wrapper thead .tb_column_3').css('width', '15%');
      $('#' + detail_table_name + '_wrapper thead .tb_column_4').css('width', '15%');
    },
    action_debit_credit_change: function action_debit_credit_change(e) {
      if (this.detail_debit > 0 && $('#detail_debit').is($(e.srcElement))) {
        $('#detail_credit').attr('disabled', true);
      } else if (this.detail_credit > 0 && $('#detail_credit').is($(e.srcElement))) {
        $('#detail_debit').attr('disabled', true);
      } else if (this.detail_debit == 0 && $('#detail_debit').is($(e.srcElement))) {
        if (this.detail_debit.length > 1) {
          $('#detail_credit').attr('disabled', true);
        } else {
          $('#detail_credit').attr('disabled', false);
        }
      } else if (this.detail_credit == 0 && $('#detail_credit').is($(e.srcElement))) {
        if (this.detail_credit.length > 1) {
          $('#detail_debit').attr('disabled', true);
        } else {
          $('#detail_debit').attr('disabled', false);
        }
      }
    },
    action_receipt_comment_change: function action_receipt_comment_change() {
      this.detail_comment = this.receipt_comment;
    },
    clearField_ReceiptForm: function clearField_ReceiptForm() {
      this.bool_detail_modify = false;
      this.receipt_id = 0;
      this.receipt_serie = '';
      var today = moment().format('DD/MM/YYYY');
      $('#receipt_date').val(today);
      this.receipt_status = '';
      this.receipt_receipt_type = -1;
      this.receipt_exchange = this.money_exchange.toString();

      if ($('#receipt_money > option').length > 0) {
        this.receipt_money = $('#receipt_money > option:first').val();
      }

      this.receipt_comment = '';
      $('#debitTotal_amount').text('0.00');
      $('#creditTotal_amount').text('0.00');
      this.$refs.table2.dt.clear().draw();
      this.cssDetailTable();
    },
    clearField_DetailForm: function clearField_DetailForm() {
      this.detail_account = ''; //this.detail_comment = '';

      this.detail_debit = '0';
      this.detail_credit = '0';
      $('#detail_debit').attr('disabled', false);
      $('#detail_credit').attr('disabled', false);
    },
    verify_detail_data: function verify_detail_data() {
      if ($("#" + $('#detail_account').attr('list') + " option[value='" + this.detail_account + "']").length == 0) {
        toastr.error(this.mssg_detail_account_noselect);
        return false;
      }

      if (this.detail_comment.trim().length == 0) {
        toastr.error(this.mssg_detail_comment_empty);
        return false;
      }

      if (this.detail_debit.trim().length == 0) {
        toastr.error(this.mssg_detail_debit_empty);
        return false;
      }

      if (this.detail_credit.trim().length == 0) {
        toastr.error(this.mssg_detail_credit_empty);
        return false;
      }

      if (parseFloat(this.detail_debit.trim()) == 0 && parseFloat(this.detail_credit.trim()) == 0 || this.detail_debit.trim().length == 2 && this.detail_debit.trim().indexOf('.') == 1 || this.detail_credit.trim().length == 2 && this.detail_credit.trim().indexOf('.') == 1) {
        toastr.error(this.mssg_detail_debit_credit_invalid);
        return false;
      }

      return true;
    },
    verify_data_before_confirm: function verify_data_before_confirm() {
      var verify = 0;
      var message = '';
      var table = this.$refs.table2.dt;
      var debit = parseFloat('0').toFixed(2);
      var credit = parseFloat('0').toFixed(2);
      table.rows().every(function () {
        var data = this.data();
        debit = (parseFloat(debit) + parseFloat(data[data.length - 2])).toFixed(2);
        credit = (parseFloat(credit) + parseFloat(data[data.length - 1])).toFixed(2);
      });

      if (debit == credit) {
        verify += 1;
      } else {
        message = this.mssg_receipt_total_not_equals;
      }

      if ($('#receipt_date').val().trim().length > 0) {
        verify += 1;
      } else {
        message = this.mssg_receipt_date_empty;
      }

      if (this.receipt_receipt_type > -1) {
        verify += 1;
      } else {
        message = this.mssg_receipt_receipt_type_noselect;
      }

      if (this.receipt_exchange.length == 2 && this.receipt_exchange.indexOf('.') == 1) {
        message = this.mssg_receipt_exchange_empty;
      } else {
        verify += 1;
      }

      if (this.receipt_money > 0) {
        verify += 1;
      } else {
        message = this.mssg_receipt_money_noselect;
      }

      if (this.receipt_comment.trim().length > 0) {
        verify += 1;
      } else {
        message = this.mssg_receipt_comment_empty;
      }

      if (this.$refs.table2.dt.rows().data() != undefined && this.$refs.table2.dt.rows().data().length > 1) {
        verify += 1;
      } else {
        message = this.mssg_detail_table_amount_insufficient;
      }

      if (verify == 7) {
        return true;
      } else {
        toastr.error(message);
      }

      return false;
    },
    actionShowReceiptForm: function actionShowReceiptForm() {
      this.show_receipt_table = false;
      this.show_receipt_form = true;
      this.cssDetailTable();
    },
    actionShowDetailForm: function actionShowDetailForm() {
      if (!this.bool_receipt_modify) {
        if (this.bool_detail_modify) {
          var data = this.$refs.table2.dt.row({
            selected: true
          }).data();
          this.latest_id_account = data[0];
          this.detail_account = data[1];
          this.detail_comment = data[2];
          this.detail_debit = data[3];
          this.detail_credit = data[4];

          if (this.detail_debit > 0) {
            $('#detail_credit').attr('disabled', true);
          } else if (this.detail_debit == 0) {
            $('#detail_credit').attr('disabled', false);
          }

          if (this.detail_credit > 0) {
            $('#detail_debit').attr('disabled', true);
          } else if (this.detail_credit == 0) {
            $('#detail_debit').attr('disabled', false);
          }
        }

        $('#detail_form_modal').modal('show');
      } else {
        toastr.error(this.mssg_error_function_not_available);
      }
    },
    actionShowReceiptTable: function actionShowReceiptTable() {
      if (this.bool_receipt_modify) {
        this.show_receipt_table = true;
        this.show_receipt_form = false;
        this.clearField_ReceiptForm();
        this.clearField_DetailForm();
        this.cssDetailTable();
        this.detail_comment = '';
        this.bool_receipt_modify = false;
        $('#receipt_date').attr('disabled', false);
        $('#receipt_receipt_type').attr('disabled', false);
        $('#receipt_exchange').attr('disabled', false);
        $('#receipt_money').attr('disabled', false);
        $('#receipt_comment').attr('disabled', false);
        $('#btn_detail_add').attr('disabled', false);
        $('#btn_detail_form_delete').attr('disabled', false);
        $('#btn_addDetail').attr('disabled', false);
        $('#btn_receipt_form_delete').attr('disabled', false);
      } else {
        this.clearField_ReceiptForm();
        this.clearField_DetailForm();
        this.detail_comment = '';
        this.show_receipt_table = true;
        this.show_receipt_form = false;
      }
    },
    actionModifyReceipt: function actionModifyReceipt() {
      var _this2 = this;

      if (this.$refs.table.dt.row({
        selected: true
      }).any()) {
        $.ajaxSetup({
          headers: {
            'X-CSRF-TOKEN': this.csrf
          }
        });
        var data = this.$refs.table.dt.row({
          selected: true
        }).data();
        this.receipt_id = data[0];
        $.ajax({
          type: 'POST',
          url: '/comprobante',
          data: {
            'only_receipt': 'true',
            'receiptID': data[0]
          },
          success: function success(data) {
            if (data.Success == true) {
              var debitValue = 0;
              var creditValue = 0;

              if (data.content.NumEstado == 2) {
                $('#btn_receipt_form_delete').attr('disabled', true);
              }

              _this2.receipt_serie = data.content.Serie;
              $('#receipt_date').val(data.content.Fecha);
              _this2.receipt_status = data.content.Estado;
              _this2.receipt_receipt_type = parseInt(data.content.TipoComprobante);
              _this2.receipt_exchange = data.content.TC;
              _this2.receipt_money = data.content.IdMoneda;
              _this2.receipt_comment = data.content.Glosa;
              $('#receipt_serie').attr('disabled', true);
              $('#receipt_date').attr('disabled', true);
              $('#receipt_receipt_type').attr('disabled', true);
              $('#receipt_exchange').attr('disabled', true);
              $('#receipt_money').attr('disabled', true);
              $('#receipt_comment').attr('disabled', true);
              $('#btn_detail_add').attr('disabled', true);
              $('#btn_detail_form_delete').attr('disabled', true);
              $('#btn_addDetail').attr('disabled', true);
              _this2.bool_receipt_modify = true;
              _this2.show_receipt_table = false;
              _this2.show_receipt_form = true;
              var result = [];
              var keys = [];

              if (data.content2.length > 0) {
                var keys = Object.keys(data.content2[0]);
              }

              data.content2.forEach(function (n) {
                var newData = [];
                debitValue += parseFloat(n[keys[keys.length - 2]]);
                creditValue += parseFloat(n[keys[keys.length - 1]]);
                keys.forEach(function (key) {
                  newData.push(n[key]);
                });
                result.push(newData);
              });

              _this2.$refs.table2.dt.clear().draw();

              _this2.$refs.table2.dt.rows.add(result).draw();

              _this2.setTotalValue();

              _this2.cssDetailTable();
            } else {
              toastr.error(data.content);
            }
          },
          error: function error(data) {
            console.log(data);
            toastr.error(this.mssg_fail);
          }
        });
      } else {
        toastr.error(this.mssg_noselect_row);
      }
    },
    actionAdd: function actionAdd() {
      var _this3 = this;

      if (!this.bool_receipt_modify) {
        if (this.verify_data_before_confirm()) {
          var dateFormat = moment($('#receipt_date').val().trim(), 'DD/MM/YYYY').format('YYYY-MM-DD');
          $.ajaxSetup({
            headers: {
              'X-CSRF-TOKEN': this.csrf
            }
          });
          $.ajax({
            type: 'POST',
            url: '/comprobante',
            data: {
              'insert': 'true',
              'comment': this.receipt_comment,
              'date': dateFormat,
              'exchange': this.receipt_exchange,
              'receiptType': this.receipt_receipt_type,
              'moneyID': this.receipt_money,
              'data_detail': this.$refs.table2.dt.rows().data().toArray()
            },
            success: function () {
              var _success = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(data) {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!(data.Success == true)) {
                          _context.next = 20;
                          break;
                        }

                        toastr.success(_this3.mssg_success_add);
                        _context.next = 4;
                        return _this3.reload();

                      case 4:
                        _this3.detail_comment = '';
                        _this3.receipt_id = data.content[0];
                        _this3.receipt_serie = data.content[1];
                        _this3.receipt_status = data.content[2];
                        $('#receipt_date').attr('disabled', true);
                        $('#receipt_receipt_type').attr('disabled', true);
                        $('#receipt_exchange').attr('disabled', true);
                        $('#receipt_money').attr('disabled', true);
                        $('#receipt_comment').attr('disabled', true);
                        $('#btn_detail_add').attr('disabled', true);
                        $('#btn_detail_form_delete').attr('disabled', true);
                        $('#btn_addDetail').attr('disabled', true);
                        _this3.bool_receipt_modify = true;

                        _this3.clearField_DetailForm();

                        _context.next = 21;
                        break;

                      case 20:
                        toastr.error(data.content);

                      case 21:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              function success(_x) {
                return _success.apply(this, arguments);
              }

              return success;
            }(),
            error: function error(data) {
              console.log(data);
              toastr.error(this.mssg_fail);
            }
          });
        }
      } else {
        toastr.error(this.mssg_error_function_not_available);
      }
    },
    actionAddDetail: function actionAddDetail() {
      var dt = this.$refs.table2.dt;
      var modify = this.bool_detail_modify;
      var latest_id = this.latest_id_account;
      var row = [];
      var row_data = [];
      var row_data2 = [];

      if (!this.bool_receipt_modify) {
        if (this.verify_detail_data()) {
          var id_account = $("#" + $('#detail_account').attr('list') + " option[value='" + this.detail_account + "']").attr('data_id');
          var detail_account = this.detail_account;
          var exist = false;
          dt.rows().every(function (rowIdx, tableLoop, rowLoop) {
            var data = this.data();

            if (data[0] == id_account) {
              if (id_account == latest_id) {
                row = this;
              }

              row_data = data;
              exist = true;
            }

            if (latest_id == data[0] && latest_id != id_account) {
              row_data2 = data;
              row = this;
              exist = true;
            }
          });

          if (exist && modify) {
            if (latest_id == id_account) {
              var debit = parseFloat(this.detail_debit).toFixed(2);
              var credit = parseFloat(this.detail_credit).toFixed(2);
              row_data[2] = this.detail_comment;
              row_data[3] = debit;
              row_data[4] = credit;
              dt.row(row).data(row_data).draw();
              this.setTotalValue();
              exist = false;
            } else {
              if (latest_id != 0) {
                if (row_data.length == 0) {
                  var debit = parseFloat(this.detail_debit).toFixed(2);
                  var credit = parseFloat(this.detail_credit).toFixed(2);
                  row_data2[0] = id_account;
                  row_data2[1] = this.detail_account;
                  row_data2[2] = this.detail_comment;
                  row_data2[3] = debit;
                  row_data2[4] = credit;
                  dt.row(row).data(row_data2).draw();
                  this.setTotalValue();
                  exist = false;
                }
              } else {
                exist = false;
              }
            }
          }

          if (!exist && !modify) {
            var debit = parseFloat(this.detail_debit).toFixed(2);
            var credit = parseFloat(this.detail_credit).toFixed(2);
            var newData = [[id_account, detail_account, this.detail_comment, debit, credit]];
            dt.rows.add(newData).draw();
            this.setTotalValue();
            this.clearField_DetailForm();
          } else {
            if (exist) {
              toastr.error(this.mssg_detail_account_exist);
            } else {
              $('#detail_form_modal').modal('hide');
            }
          }

          this.cssDetailTable();
        }
      } else {
        toastr.error(this.mssg_error_function_not_available);
      }
    },
    actionDeleteReceipt: function actionDeleteReceipt() {
      var _this4 = this;

      if (this.bool_receipt_modify) {
        var receipt_id = this.receipt_id;
        this.$swal.fire({
          title: this.mssg_question_receipt_annular,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText: this.btn_mssg_receipt_annular_close,
          confirmButtonText: this.btn_mssg_receipt_annular_confirm
        }).then(function (result) {
          if (result.isConfirmed) {
            $.ajaxSetup({
              headers: {
                'X-CSRF-TOKEN': _this4.csrf
              }
            });
            $.ajax({
              type: 'POST',
              url: '/comprobante',
              data: {
                'annular_receipt': 'true',
                'receiptID': receipt_id
              },
              success: function () {
                var _success2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(data) {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          if (!(data.Success == true)) {
                            _context2.next = 8;
                            break;
                          }

                          toastr.success(_this4.mssg_receipt_annular_success);
                          _context2.next = 4;
                          return _this4.reload();

                        case 4:
                          _this4.receipt_status = data.content;
                          $('#btn_receipt_form_delete').attr('disabled', true);
                          _context2.next = 9;
                          break;

                        case 8:
                          toastr.error(data.content);

                        case 9:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                function success(_x2) {
                  return _success2.apply(this, arguments);
                }

                return success;
              }(),
              error: function error(data) {
                console.log(data);
                toastr.error(this.mssg_fail);
              }
            });
          }
        });
      } else {
        toastr.error(this.mssg_error_function_not_available);
      }
    },
    actionDeleteDetail: function actionDeleteDetail() {
      if (!this.bool_receipt_modify) {
        if (this.$refs.table2.dt.row({
          selected: true
        }).any()) {
          var row = this.$refs.table2.dt.row({
            selected: true
          });
          row.remove().draw();
          this.setTotalValue();

          if (this.bool_detail_modify) {
            this.bool_detail_modify = false;
            this.detail_comment = this.receipt_comment;
            this.clearField_DetailForm();
          }
        } else {
          toastr.error(this.mssg_noselect_row);
        }
      } else {
        toastr.error(this.mssg_error_function_not_available);
      }
    },
    detail_select_row: function detail_select_row() {
      this.bool_detail_modify = true;
    },
    detail_deselect_row: function detail_deselect_row() {
      this.bool_detail_modify = false;
      this.detail_comment = this.receipt_comment;

      if (this.latest_id_account != 0) {
        this.latest_id_account = 0;
      }

      if (this.detail_debit == 0) {
        $('#detail_credit').attr('disabled', false);
      }

      if (this.detail_credit == 0) {
        $('#detail_debit').attr('disabled', false);
      }

      this.clearField_DetailForm();
    },
    actionReport: function actionReport() {
      this.url_report = document.querySelector('meta[name="url_report"]').getAttribute('content') + this.receipt_id;
      window.open(this.url_report, '_blank');
    },
    actionNewForm: function actionNewForm() {
      this.receipt_id = 0;
      this.bool_receipt_modify = false;
      this.detail_comment = '';
      this.clearField_DetailForm();
      this.clearField_ReceiptForm();
      this.cssDetailTable();
      $('#receipt_date').attr('disabled', false);
      $('#receipt_receipt_type').attr('disabled', false);
      $('#receipt_exchange').attr('disabled', false);
      $('#receipt_money').attr('disabled', false);
      $('#receipt_comment').attr('disabled', false);
      $('#btn_detail_add').attr('disabled', false);
      $('#btn_detail_form_delete').attr('disabled', false);
      $('#btn_addDetail').attr('disabled', false);
    }
  },
  mounted: function mounted() {
    var e = this;
    var t = $('#' + this.detail_table_name);
    var today = moment().format('DD/MM/YYYY');
    $(document).ready(function () {
      $('#receipt_date').val(today);
      t.on('select.dt', e.detail_select_row);
      t.on('deselect.dt', e.detail_deselect_row);
      $('#receipt_serie').attr('disabled', true);

      if ($('#receipt_money > option').length > 0) {
        e.receipt_money = $('#receipt_money > option:first').val();
      }

      if (e.data_money.length == 1) {
        $('#receipt_exchange').attr('disabled', true);
      }

      e.receipt_exchange = e.money_exchange.toString();
    });
    console.log('Component mounted.');
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ComprobanteComponent.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ComprobanteComponent.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput::-webkit-calendar-picker-indicator {\n  opacity: 0;\n}\n#detail_form_modal .modal-dialog {\n  margin-top: 100px;\n  max-width: 1260px;\n}\n.container-xl, .container-lg, .container-md, .container-sm, .container {\n  max-width: none;\n}\n\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ComprobanteComponent.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ComprobanteComponent.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ComprobanteComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ComprobanteComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ComprobanteComponent.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ComprobanteComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ComprobanteComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/components/ComprobanteComponent.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/ComprobanteComponent.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ComprobanteComponent_vue_vue_type_template_id_5bb91714___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComprobanteComponent.vue?vue&type=template&id=5bb91714& */ "./resources/js/components/ComprobanteComponent.vue?vue&type=template&id=5bb91714&");
/* harmony import */ var _ComprobanteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComprobanteComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/ComprobanteComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _ComprobanteComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComprobanteComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/ComprobanteComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ComprobanteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ComprobanteComponent_vue_vue_type_template_id_5bb91714___WEBPACK_IMPORTED_MODULE_0__.render,
  _ComprobanteComponent_vue_vue_type_template_id_5bb91714___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ComprobanteComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/ComprobanteComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/ComprobanteComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComprobanteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ComprobanteComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ComprobanteComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComprobanteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ComprobanteComponent.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/ComprobanteComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ComprobanteComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ComprobanteComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ComprobanteComponent.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/ComprobanteComponent.vue?vue&type=template&id=5bb91714&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/ComprobanteComponent.vue?vue&type=template&id=5bb91714& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComprobanteComponent_vue_vue_type_template_id_5bb91714___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComprobanteComponent_vue_vue_type_template_id_5bb91714___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComprobanteComponent_vue_vue_type_template_id_5bb91714___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ComprobanteComponent.vue?vue&type=template&id=5bb91714& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ComprobanteComponent.vue?vue&type=template&id=5bb91714&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ComprobanteComponent.vue?vue&type=template&id=5bb91714&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ComprobanteComponent.vue?vue&type=template&id=5bb91714& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.show_receipt_table,
            expression: "show_receipt_table",
          },
        ],
        staticClass: "breadcome-list text-light row",
      },
      [
        _c("div", { staticClass: "d-flex justify-content-end" }, [
          _c(
            "div",
            {
              staticClass: "col-3 text-end",
              staticStyle: {
                "margin-bottom": "-33px",
                "z-index": "100",
                "padding-right": "0",
              },
            },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary me-1 ps-3 pe-3",
                  attrs: { id: "btn_receipt_add", type: "button" },
                  on: { click: _vm.actionShowReceiptForm },
                },
                [_c("i", { staticClass: "bi bi-plus" })]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-success ps-3 pe-3",
                  attrs: { id: "btn_receipt_modify", type: "button" },
                  on: { click: _vm.actionModifyReceipt },
                },
                [_c("i", { staticClass: "bi bi-pencil-square" })]
              ),
            ]
          ),
        ]),
        _vm._v(" "),
        _c("custom_table", {
          ref: "table",
          staticClass: "col-12",
          attrs: {
            columns: _vm.receipt_columns,
            data: _vm.receipt_rows,
            table_name: _vm.receipt_table_name,
            check_order_desc: _vm.receipt_check_order_desc,
            column_order: _vm.receipt_column_order,
            check_remove_bfilter: _vm.receipt_check_remove_bfilter,
          },
        }),
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal",
        attrs: { id: "detail_form_modal", tabindex: "-1" },
      },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "d-flex flex-row" }, [
                  _c("div", { staticClass: "col-3 me-4" }, [
                    _c(
                      "label",
                      {
                        staticClass: "form-label",
                        attrs: { for: "detail_account" },
                      },
                      [_vm._v(_vm._s(_vm.et_detail_account))]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.detail_account,
                          expression: "detail_account",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        list: "data_list_detail_account",
                        id: "detail_account",
                        placeholder: _vm.opt_detail_account_default,
                      },
                      domProps: { value: _vm.detail_account },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.detail_account = $event.target.value
                        },
                      },
                    }),
                    _vm._v(" "),
                    _c(
                      "datalist",
                      { attrs: { id: "data_list_detail_account" } },
                      _vm._l(_vm.data_account, function (v) {
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
                  _c("div", { staticClass: "col-3 me-4" }, [
                    _c(
                      "label",
                      {
                        staticClass: "form-label",
                        attrs: { for: "detail_comment" },
                      },
                      [_vm._v(_vm._s(_vm.et_detail_comment))]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.detail_comment,
                          expression: "detail_comment",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "detail_comment",
                        oninput:
                          "this.value = this.value.replace(/[^0-9a-zA-Z\\.\\ \\,]/g, '').replace(/(\\*)\\./g, '$1');",
                        maxlength: _vm.detail_comment_maximum_digits,
                      },
                      domProps: { value: _vm.detail_comment },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.detail_comment = $event.target.value
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2 me-4" }, [
                    _c(
                      "label",
                      {
                        staticClass: "form-label",
                        attrs: { for: "detail_debit" },
                      },
                      [_vm._v(_vm._s(_vm.et_detail_debit))]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.detail_debit,
                          expression: "detail_debit",
                        },
                      ],
                      staticClass: "form-control text-end",
                      attrs: {
                        type: "text",
                        id: "detail_debit",
                        oninput:
                          "this.value = this.value.replace(/[^0-9\\.]/g, '').replace(/(\\..*)\\./g, '$1'); if(this.value.length > 1 && this.value.substring(0, 1) == '0'){ if(!isNaN(this.value.substring(1, 2))){this.value=this.value.substring(1);} } if(this.value.length == 0){ this.value='0'; } if(this.value.length > 0 && this.value.substring(0, 1) == '.'){ this.value = '0'; } if(this.value.search('\\\\.') > -1){ if(this.value.substring(this.value.search('\\\\.')).length > 3){ this.value = this.value.substring(0, this.value.length - 1); } }",
                        maxlength: _vm.detail_debit_maximum_digits,
                      },
                      domProps: { value: _vm.detail_debit },
                      on: {
                        change: _vm.action_debit_credit_change,
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.detail_debit = $event.target.value
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2 me-4" }, [
                    _c(
                      "label",
                      {
                        staticClass: "form-label",
                        attrs: { for: "detail_credit" },
                      },
                      [_vm._v(_vm._s(_vm.et_detail_credit))]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.detail_credit,
                          expression: "detail_credit",
                        },
                      ],
                      staticClass: "form-control text-end",
                      attrs: {
                        type: "text",
                        id: "detail_credit",
                        oninput:
                          "this.value = this.value.replace(/[^0-9\\.]/g, '').replace(/(\\..*)\\./g, '$1'); if(this.value.length > 1 && this.value.substring(0, 1) == '0'){ if(!isNaN(this.value.substring(1, 2))){this.value=this.value.substring(1);} } if(this.value.length == 0){ this.value='0'; } if(this.value.length > 0 && this.value.substring(0, 1) == '.'){ this.value = '0'; } if(this.value.search('\\\\.') > -1){ if(this.value.substring(this.value.search('\\\\.')).length > 3){ this.value = this.value.substring(0, this.value.length - 1); } }",
                        maxlength: _vm.detail_credit_maximum_digits,
                      },
                      domProps: { value: _vm.detail_credit },
                      on: {
                        change: _vm.action_debit_credit_change,
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.detail_credit = $event.target.value
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2 mt-4" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary ps-3 pe-3 pb-2 pt-2 ",
                        attrs: { id: "btn_addDetail", type: "button" },
                        on: { click: _vm.actionAddDetail },
                      },
                      [_c("i", { staticClass: "bi bi-plus" })]
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.show_receipt_form,
            expression: "show_receipt_form",
          },
        ],
        staticClass: "breadcome-list text-light row fs-6",
      },
      [
        _c(
          "div",
          { staticClass: "row", staticStyle: { "padding-right": "0" } },
          [
            _c(
              "div",
              {
                staticClass: "d-flex justify-content-end",
                staticStyle: { "padding-right": "0" },
              },
              [
                _c("div", { staticClass: "col-3 text-end mb-3" }, [
                  _c(
                    "button",
                    {
                      staticClass: "me-1 ps-3 pe-3 pointer btn btn-info",
                      attrs: { type: "button", id: "btn_receipt_form_back" },
                      on: { click: _vm.actionShowReceiptTable },
                    },
                    [_c("i", { staticClass: "bi bi-arrow-90deg-left" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      class: [
                        "me-1",
                        "ps-3",
                        "pe-3",
                        "pointer",
                        ,
                        "btn",
                        "btn-success",
                        _vm.bool_receipt_modify ? "d-none" : "",
                      ],
                      attrs: { type: "button", id: "btn_receipt_form_save" },
                      on: { click: _vm.actionAdd },
                    },
                    [_c("i", { staticClass: "bi bi-save2" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      class: [
                        "me-1",
                        "ps-3",
                        "pe-3",
                        "pointer",
                        "btn",
                        "btn-danger",
                        _vm.bool_receipt_modify ? "" : "d-none",
                      ],
                      attrs: { type: "button", id: "btn_receipt_form_delete" },
                      on: { click: _vm.actionDeleteReceipt },
                    },
                    [_c("i", { staticClass: "bi bi-trash" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      class: [
                        "me-1",
                        "ps-3",
                        "pe-3",
                        "pointer",
                        "btn",
                        "btn-success",
                        _vm.bool_receipt_modify ? "" : "d-none",
                      ],
                      attrs: { type: "button", id: "btn_receipt_form_new" },
                      on: { click: _vm.actionNewForm },
                    },
                    [_c("i", { staticClass: "bi bi-plus" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      class: [
                        "ps-3",
                        "pe-3",
                        "pointer",
                        "btn",
                        "btn-warning",
                        _vm.bool_receipt_modify ? "" : "d-none",
                      ],
                      attrs: { type: "button" },
                      on: { click: _vm.actionReport },
                    },
                    [_c("i", { staticClass: "bi bi-file-text" })]
                  ),
                ]),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-12 d-flex flex-wrap justify-content-between",
                staticStyle: { "padding-right": "0" },
              },
              [
                _c(
                  "div",
                  {
                    class: [
                      "col-12",
                      "col-md-5",
                      "col-lg-5",
                      "col-xl-3",
                      "me-2",
                      "mb-3",
                      "d-flex",
                      "justify-content-between",
                    ],
                    staticStyle: { "padding-left": "0" },
                  },
                  [
                    _c("div", { staticClass: "col-5" }, [
                      _c(
                        "label",
                        {
                          staticClass: "form-label",
                          attrs: { for: "receipt_serie" },
                        },
                        [_vm._v(_vm._s(_vm.et_receipt_serie))]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.receipt_serie,
                            expression: "receipt_serie",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "receipt_serie",
                          disabled: "",
                          readonly: "",
                        },
                        domProps: { value: _vm.receipt_serie },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.receipt_serie = $event.target.value
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-7 ms-4" }, [
                      _c(
                        "label",
                        {
                          staticClass: "form-label",
                          attrs: { for: "receipt_date" },
                        },
                        [_vm._v(_vm._s(_vm.et_receipt_date))]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          name: "dates",
                          placeholder: "dd/mm/yyyy",
                          type: "text",
                          id: "receipt_date",
                        },
                      }),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    class: [
                      "col-12",
                      "col-md-6",
                      "col-lg-6",
                      "col-xl-3",
                      "me-2",
                      "mb-3",
                      "d-flex",
                      "justify-content-between",
                    ],
                    staticStyle: { "padding-left": "0" },
                  },
                  [
                    _c("div", { staticClass: "col-7" }, [
                      _c(
                        "label",
                        {
                          staticClass: "form-label",
                          attrs: { for: "receipt_status" },
                        },
                        [_vm._v(_vm._s(_vm.et_receipt_status))]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.receipt_status,
                            expression: "receipt_status",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "receipt_status",
                          disabled: "",
                          readonly: "",
                        },
                        domProps: { value: _vm.receipt_status },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.receipt_status = $event.target.value
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-5 ms-4" }, [
                      _c(
                        "label",
                        {
                          staticClass: "form-label",
                          attrs: { for: "receipt_exchange" },
                        },
                        [_vm._v(_vm._s(_vm.et_receipt_exchange))]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.receipt_exchange,
                            expression: "receipt_exchange",
                          },
                        ],
                        staticClass: "form-control text-end",
                        attrs: {
                          type: "text",
                          id: "receipt_exchange",
                          oninput:
                            "this.value = this.value.replace(/[^0-9\\.]/g, '').replace(/(\\..*)\\./g, '$1'); if(this.value.length > 1 && this.value.substring(0, 1) == '0'){ if(!isNaN(this.value.substring(1, 2))){this.value=this.value.substring(1);} } if(this.value.length == 0){ this.value='0'; } if(this.value.length > 0 && this.value.substring(0, 1) == '.'){ this.value = '0'; } if(this.value.search('\\\\.') > -1){ if(this.value.substring(this.value.search('\\\\.')).length > 3){ this.value = this.value.substring(0, this.value.length - 1); } }",
                          maxlength: _vm.receipt_exchange_maximum_digits,
                        },
                        domProps: { value: _vm.receipt_exchange },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.receipt_exchange = $event.target.value
                          },
                        },
                      }),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    class: [
                      "col-12",
                      "col-md-5",
                      "col-lg-5",
                      "col-xl-3",
                      "me-2",
                      "mb-3",
                      "d-flex",
                      "justify-content-between",
                    ],
                    staticStyle: { "padding-left": "0" },
                  },
                  [
                    _c("div", { staticClass: "col-6" }, [
                      _c(
                        "label",
                        {
                          staticClass: "form-label",
                          attrs: { for: "receipt_money" },
                        },
                        [_vm._v(_vm._s(_vm.et_receipt_money))]
                      ),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.receipt_money,
                              expression: "receipt_money",
                            },
                          ],
                          staticClass: "form-select",
                          attrs: { id: "receipt_money" },
                          on: {
                            change: function ($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function (o) {
                                  return o.selected
                                })
                                .map(function (o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.receipt_money = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            },
                          },
                        },
                        _vm._l(_vm.data_money, function (v) {
                          return _c(
                            "option",
                            { key: v.ID, domProps: { value: v.ID } },
                            [_vm._v(_vm._s(v.Nombre))]
                          )
                        }),
                        0
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-6 ms-4" }, [
                      _c(
                        "label",
                        {
                          staticClass: "form-label",
                          attrs: { for: "receipt_receipt_type" },
                        },
                        [_vm._v(_vm._s(_vm.et_receipt_receipt_type))]
                      ),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.receipt_receipt_type,
                              expression: "receipt_receipt_type",
                            },
                          ],
                          staticClass: "form-select",
                          attrs: { id: "receipt_receipt_type" },
                          on: {
                            change: function ($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function (o) {
                                  return o.selected
                                })
                                .map(function (o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.receipt_receipt_type = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            },
                          },
                        },
                        [
                          _c("option", { attrs: { value: "-1" } }, [
                            _vm._v(
                              " " + _vm._s(_vm.opt_receipt_receipt_type_default)
                            ),
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.data_receipt_type, function (v, i) {
                            return _c(
                              "option",
                              {
                                key: i,
                                attrs: { selected: "" },
                                domProps: { value: i },
                              },
                              [_vm._v(_vm._s(v))]
                            )
                          }),
                        ],
                        2
                      ),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    class: [
                      "col-12",
                      "col-md-6",
                      "col-lg-6",
                      "col-xl-2",
                      "mb-2",
                      "d-flex",
                    ],
                    staticStyle: { "padding-left": "0", "padding-right": "0" },
                  },
                  [
                    _c("div", { staticClass: "col-12" }, [
                      _c(
                        "label",
                        {
                          staticClass: "form-label",
                          attrs: { for: "receipt_comment" },
                        },
                        [_vm._v(_vm._s(_vm.et_receipt_comment))]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.receipt_comment,
                            expression: "receipt_comment",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "receipt_comment",
                          oninput:
                            "this.value = this.value.replace(/[^0-9a-zA-Z\\.\\ \\,]/g, '').replace(/(\\*)\\./g, '$1');",
                          maxlength: _vm.receipt_comment_maximum_digits,
                        },
                        domProps: { value: _vm.receipt_comment },
                        on: {
                          change: _vm.action_receipt_comment_change,
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.receipt_comment = $event.target.value
                          },
                        },
                      }),
                    ]),
                  ]
                ),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "d-flex justify-content-end mt-3",
                staticStyle: { "padding-right": "0" },
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "col-3 text-end",
                    staticStyle: { "z-index": "100" },
                  },
                  [
                    _c(
                      "button",
                      {
                        class: [
                          "btn",
                          _vm.bool_detail_modify
                            ? "btn-success"
                            : "btn-primary",
                          "me-1",
                          "ps-3",
                          "pe-3",
                          _vm.bool_receipt_modify ? "d-none" : "",
                        ],
                        attrs: { id: "btn_detail_add", type: "button" },
                        on: { click: _vm.actionShowDetailForm },
                      },
                      [
                        _c("i", {
                          class: [
                            "bi",
                            _vm.bool_detail_modify
                              ? "bi-pencil-square"
                              : "bi-plus",
                          ],
                        }),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        class: [
                          "ps-3",
                          "pe-3",
                          "pointer",
                          "btn btn-danger",
                          _vm.bool_receipt_modify ? "d-none" : "",
                        ],
                        attrs: { type: "button", id: "btn_detail_form_delete" },
                        on: { click: _vm.actionDeleteDetail },
                      },
                      [_c("i", { staticClass: "bi bi-trash" })]
                    ),
                  ]
                ),
              ]
            ),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-12", staticStyle: { "max-height": "39vh" } },
          [
            _c("custom_table", {
              ref: "table2",
              staticClass: "col-12 mt-3 p-0",
              attrs: {
                columns: _vm.detail_columns,
                data: _vm.detail_rows,
                table_name: _vm.detail_table_name,
                column_order: _vm.detail_column_order,
                check_remove_bfilter: _vm.detail_check_remove_bfilter,
                check_remove_bpaginate: true,
                check_remove_binfo: true,
                check_disabled_ordering: true,
                enable_border: true,
              },
            }),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "row justify-content-end",
            staticStyle: { "padding-right": "0" },
          },
          [
            _c(
              "table",
              {
                staticClass: "mt-2 text-end col-12 justify-content-end",
                attrs: { id: "totals", cellspacing: "10", cellpadding: "5" },
              },
              [
                _c("tr", [
                  _c("th", { staticStyle: { width: "30% !important" } }),
                  _vm._v(" "),
                  _c("th", { staticStyle: { width: "40% !important" } }, [
                    _c("span", [_vm._v(_vm._s(_vm.et_total) + ":")]),
                  ]),
                  _vm._v(" "),
                  _vm._m(1),
                  _vm._v(" "),
                  _vm._m(2),
                ]),
              ]
            ),
          ]
        ),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }),
      _vm._v(" "),
      _c("button", {
        staticClass: "btn-close",
        attrs: {
          type: "button",
          "data-bs-dismiss": "modal",
          "aria-label": "Close",
        },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", { staticStyle: { width: "15% !important" } }, [
      _c("span", { attrs: { id: "debitTotal_amount" } }, [_vm._v("0.00")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", { staticStyle: { width: "15% !important" } }, [
      _c("span", { attrs: { id: "creditTotal_amount" } }, [_vm._v("0.00")]),
    ])
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