"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[0],{3e3:(t,e,n)=>{n.r(e),n.d(e,{default:()=>a});const o={data:function(){return{csrf:document.querySelector('meta[name="csrf-token"]').getAttribute("content"),url_report:"",management_id:0,money_id:0}},props:{errors:Array,et_management:String,et_money:String,opt_management_default:String,opt_money_default:String,mssg_management_no_select:String,mssg_money_no_select:String,data_management:Array,data_money:Array},methods:{validateField:function(){return 0==this.management_id?(toastr.error(this.mssg_management_no_select),!1):0!=this.money_id||(toastr.error(this.mssg_money_no_select),!1)},actionReport:function(){this.validateField()&&(this.url_report=document.querySelector('meta[name="url_report"]').getAttribute("content")+"&gestionID="+this.management_id+"&moneyID="+this.money_id,window.open(this.url_report,"_blank"))}},mounted:function(){console.log("Component mounted.")}};const a=(0,n(1900).Z)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row text-light"},[n("div",{staticClass:"col-12 d-flex justify-content-around"},[n("div",{staticClass:"col-4"},[n("label",{staticClass:"form-label",attrs:{for:"receipt_money"}},[t._v(t._s(t.et_management))]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.management_id,expression:"management_id"}],staticClass:"form-select",attrs:{id:"management"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.management_id=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"0"}},[t._v(t._s(t.opt_management_default))]),t._v(" "),t._l(t.data_management,(function(e){return n("option",{key:e.ID,domProps:{value:e.ID}},[t._v(t._s(e.Nombre))])}))],2)]),t._v(" "),n("div",{staticClass:"col-4"},[n("label",{staticClass:"form-label",attrs:{for:"receipt_money"}},[t._v(t._s(t.et_money))]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.money_id,expression:"money_id"}],staticClass:"form-select",attrs:{id:"money"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.money_id=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"0"}},[t._v(t._s(t.opt_money_default))]),t._v(" "),t._l(t.data_money,(function(e){return n("option",{key:e.ID,domProps:{value:e.ID}},[t._v(t._s(e.Nombre))])}))],2)]),t._v(" "),n("div",{staticClass:"col-2 mt-4"},[n("button",{staticClass:"btn btn-warning mt-1 pt-2 pb-2 ps-3 pe-3",attrs:{id:"btn_view",type:"button"},on:{click:t.actionReport}},[n("i",{staticClass:"bi bi-file-text"})])])])])}),[],!1,null,null,null).exports},1900:(t,e,n)=>{function o(t,e,n,o,a,r,s,i){var l,_="function"==typeof t?t.options:t;if(e&&(_.render=e,_.staticRenderFns=n,_._compiled=!0),o&&(_.functional=!0),r&&(_._scopeId="data-v-"+r),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},_._ssrRegister=l):a&&(l=i?function(){a.call(this,(_.functional?this.parent:this).$root.$options.shadowRoot)}:a),l)if(_.functional){_._injectStyles=l;var m=_.render;_.render=function(t,e){return l.call(e),m(t,e)}}else{var c=_.beforeCreate;_.beforeCreate=c?[].concat(c,l):[l]}return{exports:t,options:_}}n.d(e,{Z:()=>o})}}]);