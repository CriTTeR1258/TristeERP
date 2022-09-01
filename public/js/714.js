"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[714],{9048:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(3645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,"",""]);const o=a},3645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(a[s]=!0)}for(var i=0;i<e.length;i++){var c=[].concat(e[i]);r&&a[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},3379:(e,t,n)=>{var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function i(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],a=0;a<e.length;a++){var o=e[a],c=t.base?o[0]+t.base:o[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var d=i(u),_={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(s[d].references++,s[d].updater(_)):s.push({identifier:u,updater:v(_,t),references:1}),r.push(u)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var s=o(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function _(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,a);else{var o=document.createTextNode(a),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function h(e,t,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,f=0;function v(e,t){var n,r,a;if(t.singleton){var o=f++;n=m||(m=l(t)),r=_.bind(null,n,o,!1),a=_.bind(null,n,o,!0)}else n=l(t),r=h.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=i(n[r]);s[a].references--}for(var o=c(e,t),l=0;l<n.length;l++){var u=i(n[l]);0===s[u].references&&(s[u].updater(),s.splice(u,1))}n=o}}}},3714:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});const r={data:function(){return{csrf:document.querySelector('meta[name="csrf-token"]').getAttribute("content"),url_report:document.querySelector('meta[name="url_report"]').getAttribute("content"),exchange:""}},props:{errors:Array,is_there_receipt:Boolean,principal_money:String,data_alternative_money:Array,select_alternative_money:Number,money_exchange:String,et_principal_money:String,et_alternative_money:String,et_exchange:String,add_title:String,modify_title:String,exchange_maximum_digits:Number,columns:Array,rows:Array,table_name:String,column_order:Number,btn_close:String,mssg_error_exchange_empty:String,mssg_error_exchange_invalid:String,mssg_error_exchange_number_zero:String,mssg_error_al_money_empty:String,mssg_success_add:String,mssg_noselect_row:String,mssg_fail:String,opt_alternative_money_default:String,check_order_desc:Boolean,check_remove_bfilter:Boolean},methods:{validateField:function(){return""==$("#exchange").val().trim()?(toastr.error(this.mssg_error_exchange_empty),!1):isNaN(this.exchange)?(toastr.error(this.mssg_error_exchange_invalid),!1):0==parseFloat(this.exchange)?(toastr.error(this.mssg_error_exchange_number_zero),!1):0!=$("#al_money").val()||(toastr.error(this.mssg_error_al_money_empty),!1)},action_add:function(){var e=this;this.validateField()&&($.ajaxSetup({headers:{"X-CSRF-TOKEN":this.csrf}}),$.ajax({type:"POST",url:"/moneda",data:{insert:!0,exchange:this.exchange,alternativeMoneyID:$("#al_money").val()},success:function(t){1==t.Success?(e.reload(),$("#al_money").val(t.alternativeMoney)):toastr.error(t.content)},error:function(e){console.log(e),toastr.error(this.mssg_fail)}}))},reload:function(){var e=this;$.ajaxSetup({headers:{"X-CSRF-TOKEN":this.csrf}}),$.ajax({type:"POST",url:"/moneda",data:{},success:function(t){if(1==t.Success){var n=[],r=[];if(t.content.length>0)r=Object.keys(t.content[0]);t.content.forEach((function(e){var t=[];r.forEach((function(n){t.push(e[n])})),n.push(t)})),e.$refs.table.dt.clear().draw(),e.$refs.table.dt.rows.add(n).draw()}else toastr.error(t.content)},error:function(e){console.log(e),toastr.error(this.mssg_fail)}})}},mounted:function(){var e=this.data_alternative_money,t=this.select_alternative_money,n=this.is_there_receipt;this.exchange=this.money_exchange,$(document).ready((function(){$.each(e,(function(e,t){$("#al_money").append($("<option>",{value:t.ID,text:t.Nombre}))})),$("#al_money").val(t),console.log(n),n&&$("#al_money").attr("disabled",!0)})),console.log("Component mounted.")}};var a=n(3379),o=n.n(a),s=n(9048),i={insert:"head",singleton:!1};o()(s.Z,i);s.Z.locals;const c=(0,n(1900).Z)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("div",{staticClass:"breadcome-list text-light"},[n("div",{staticClass:"row"},[n("div",[n("div",{staticClass:"d-flex justify-content-center flex-row"},[n("div",{staticClass:"col-3 me-5"},[n("label",{staticClass:"form-label",attrs:{for:"pr_money"}},[e._v(e._s(e.et_principal_money))]),e._v(" "),n("input",{staticClass:"form-control",attrs:{type:"text",id:"pr_money",disabled:""},domProps:{value:e.principal_money}})]),e._v(" "),n("div",{staticClass:"col-4 me-5"},[n("label",{staticClass:"form-label",attrs:{for:"al_money"}},[e._v(e._s(e.et_alternative_money))]),e._v(" "),n("select",{staticClass:"form-select",attrs:{id:"al_money"}},[n("option",{attrs:{value:"0"}},[e._v(e._s(e.opt_alternative_money_default))])])]),e._v(" "),n("div",{staticClass:"col-3"},[n("label",{staticClass:"form-label",attrs:{for:"change"}},[e._v(e._s(e.et_exchange))]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.exchange,expression:"exchange"}],staticClass:"form-control text-end",attrs:{type:"text",id:"exchange",oninput:"this.value = this.value.replace(/[^0-9\\.]/g, '').replace(/(\\..*)\\./g, '$1'); if(this.value.length > 1 && this.value.substring(0, 1) == '0'){ if(!isNaN(this.value.substring(1, 2))){this.value=this.value.substring(1);} } if(this.value.length == 0){ this.value='0'; } if(this.value.length > 0 && this.value.substring(0, 1) == '.'){ this.value = '0'; } if(this.value.search('\\\\.') > -1){ if(this.value.substring(this.value.search('\\\\.')).length > 3){ this.value = this.value.substring(0, this.value.length - 1); } }",maxlength:e.exchange_maximum_digits},domProps:{value:e.exchange},on:{input:function(t){t.target.composing||(e.exchange=t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"col-12 text-center mt-3 p-2"},[n("button",{staticClass:"btn btn-primary ps-4 pe-4",attrs:{type:"button",id:"btn_add "},on:{click:e.action_add}},[n("i",{staticClass:"bi bi-plus"})])]),e._v(" "),n("custom_table",{ref:"table",staticClass:"col-12 mt-2",attrs:{columns:e.columns,data:e.rows,table_name:e.table_name,column_order:e.column_order,check_order_desc:e.check_order_desc,check_remove_bfilter:e.check_remove_bfilter}})],1)])])])}),[],!1,null,null,null).exports},1900:(e,t,n)=>{function r(e,t,n,r,a,o,s,i){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=c):a&&(c=i?function(){a.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:a),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(e,t){return c.call(t),u(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:l}}n.d(t,{Z:()=>r})}}]);