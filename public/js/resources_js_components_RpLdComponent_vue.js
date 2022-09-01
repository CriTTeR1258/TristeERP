"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_RpLdComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RpLdComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RpLdComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      url_report: '',
      management_id: 0,
      money_id: 0,
      period_id: 0
    };
  },
  props: {
    errors: Array,
    et_management: String,
    et_money: String,
    et_period: String,
    opt_management_default: String,
    opt_money_default: String,
    opt_period_all: String,
    mssg_management_no_select: String,
    mssg_money_no_select: String,
    data_management: Array,
    data_money: Array,
    data_period: Array
  },
  methods: {
    validateField: function validateField() {
      if (this.management_id == 0) {
        toastr.error(this.mssg_management_no_select);
        return false;
      }

      if (this.money_id == 0) {
        toastr.error(this.mssg_money_no_select);
        return false;
      }

      return true;
    },
    actionManagement: function actionManagement(e) {
      var e = this;
      $("#period").empty();
      $("#period").append($("<option>", {
        value: 0,
        text: e.opt_period_all
      }));
      this.period_id = 0;
      $.each(this.data_period, function (index, value) {
        if (e.management_id == value.IdGestion) {
          $("#period").append($("<option>", {
            value: value.ID,
            text: value.Nombre
          }));
        }
      });
    },
    actionReport: function actionReport() {
      if (this.validateField()) {
        this.url_report = document.querySelector('meta[name="url_report"]').getAttribute('content') + "&gestionID=" + this.management_id + "&moneyID=" + this.money_id + "&periodoID=" + this.period_id;
        window.open(this.url_report, '_blank');
      }
    }
  },
  mounted: function mounted() {
    console.log('Component mounted.');
  }
});

/***/ }),

/***/ "./resources/js/components/RpLdComponent.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/RpLdComponent.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RpLdComponent_vue_vue_type_template_id_093bdd6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RpLdComponent.vue?vue&type=template&id=093bdd6c& */ "./resources/js/components/RpLdComponent.vue?vue&type=template&id=093bdd6c&");
/* harmony import */ var _RpLdComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RpLdComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/RpLdComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RpLdComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RpLdComponent_vue_vue_type_template_id_093bdd6c___WEBPACK_IMPORTED_MODULE_0__.render,
  _RpLdComponent_vue_vue_type_template_id_093bdd6c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/RpLdComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/RpLdComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/RpLdComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RpLdComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RpLdComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RpLdComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RpLdComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/RpLdComponent.vue?vue&type=template&id=093bdd6c&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/RpLdComponent.vue?vue&type=template&id=093bdd6c& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RpLdComponent_vue_vue_type_template_id_093bdd6c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RpLdComponent_vue_vue_type_template_id_093bdd6c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RpLdComponent_vue_vue_type_template_id_093bdd6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RpLdComponent.vue?vue&type=template&id=093bdd6c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RpLdComponent.vue?vue&type=template&id=093bdd6c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RpLdComponent.vue?vue&type=template&id=093bdd6c&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RpLdComponent.vue?vue&type=template&id=093bdd6c& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row text-light" }, [
    _c("div", { staticClass: "col-12 d-flex justify-content-around" }, [
      _c("div", { staticClass: "col-3" }, [
        _c(
          "label",
          { staticClass: "form-label", attrs: { for: "management" } },
          [_vm._v(_vm._s(_vm.et_management))]
        ),
        _vm._v(" "),
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.management_id,
                expression: "management_id",
              },
            ],
            staticClass: "form-select",
            attrs: { id: "management" },
            on: {
              change: [
                function ($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function (o) {
                      return o.selected
                    })
                    .map(function (o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.management_id = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                },
                _vm.actionManagement,
              ],
            },
          },
          [
            _c("option", { attrs: { value: "0" } }, [
              _vm._v(_vm._s(_vm.opt_management_default)),
            ]),
            _vm._v(" "),
            _vm._l(_vm.data_management, function (v) {
              return _c("option", { key: v.ID, domProps: { value: v.ID } }, [
                _vm._v(_vm._s(v.Nombre)),
              ])
            }),
          ],
          2
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-3" }, [
        _c("label", { staticClass: "form-label", attrs: { for: "period" } }, [
          _vm._v(_vm._s(_vm.et_period)),
        ]),
        _vm._v(" "),
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.period_id,
                expression: "period_id",
              },
            ],
            staticClass: "form-select",
            attrs: { id: "period" },
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
                _vm.period_id = $event.target.multiple
                  ? $$selectedVal
                  : $$selectedVal[0]
              },
            },
          },
          [
            _c("option", { attrs: { value: "0" } }, [
              _vm._v(_vm._s(_vm.opt_period_all)),
            ]),
          ]
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-3" }, [
        _c("label", { staticClass: "form-label", attrs: { for: "money" } }, [
          _vm._v(_vm._s(_vm.et_money)),
        ]),
        _vm._v(" "),
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.money_id,
                expression: "money_id",
              },
            ],
            staticClass: "form-select",
            attrs: { id: "money" },
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
                _vm.money_id = $event.target.multiple
                  ? $$selectedVal
                  : $$selectedVal[0]
              },
            },
          },
          [
            _c("option", { attrs: { value: "0" } }, [
              _vm._v(_vm._s(_vm.opt_money_default)),
            ]),
            _vm._v(" "),
            _vm._l(_vm.data_money, function (v) {
              return _c("option", { key: v.ID, domProps: { value: v.ID } }, [
                _vm._v(_vm._s(v.Nombre)),
              ])
            }),
          ],
          2
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-2 mt-4" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-warning mt-1 pt-2 pb-2 ps-3 pe-3",
            attrs: { id: "btn_view", type: "button" },
            on: { click: _vm.actionReport },
          },
          [_c("i", { staticClass: "bi bi-file-text" })]
        ),
      ]),
    ]),
  ])
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