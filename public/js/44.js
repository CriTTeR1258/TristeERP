(self.webpackChunk=self.webpackChunk||[]).push([[44],{7757:(t,e,i)=>{t.exports=i(5666)},8137:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});var o=i(3645),n=i.n(o)()((function(t){return t[1]}));n.push([t.id,"input::-webkit-calendar-picker-indicator{opacity:0}#item_form_modal .modal-dialog{margin-top:100px;max-width:1260px}.container{max-width:none}",""]);const r=n},3645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=t(e);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,o){"string"==typeof t&&(t=[[null,t,""]]);var n={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(n[a]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);o&&n[l[0]]||(i&&(l[2]?l[2]="".concat(i," and ").concat(l[2]):l[2]=i),e.push(l))}},e}},5666:t=>{var e=function(t){"use strict";var e,i=Object.prototype,o=i.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function l(t,e,i){return Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,i){return t[e]=i}}function c(t,e,i,o){var n=e&&e.prototype instanceof p?e:p,r=Object.create(n.prototype),a=new k(o||[]);return r._invoke=function(t,e,i){var o=_;return function(n,r){if(o===u)throw new Error("Generator is already running");if(o===h){if("throw"===n)throw r;return E()}for(i.method=n,i.arg=r;;){var a=i.delegate;if(a){var s=S(a,i);if(s){if(s===f)continue;return s}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(o===_)throw o=h,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);o=u;var l=d(t,e,i);if("normal"===l.type){if(o=i.done?h:m,l.arg===f)continue;return{value:l.arg,done:i.done}}"throw"===l.type&&(o=h,i.method="throw",i.arg=l.arg)}}}(t,i,a),r}function d(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var _="suspendedStart",m="suspendedYield",u="executing",h="completed",f={};function p(){}function v(){}function b(){}var g={};l(g,r,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y(T([])));w&&w!==i&&o.call(w,r)&&(g=w);var x=b.prototype=p.prototype=Object.create(g);function C(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function $(t,e){function i(n,r,a,s){var l=d(t[n],t,r);if("throw"!==l.type){var c=l.arg,_=c.value;return _&&"object"==typeof _&&o.call(_,"__await")?e.resolve(_.__await).then((function(t){i("next",t,a,s)}),(function(t){i("throw",t,a,s)})):e.resolve(_).then((function(t){c.value=t,a(c)}),(function(t){return i("throw",t,a,s)}))}s(l.arg)}var n;this._invoke=function(t,o){function r(){return new e((function(e,n){i(t,o,e,n)}))}return n=n?n.then(r,r):r()}}function S(t,i){var o=t.iterator[i.method];if(o===e){if(i.delegate=null,"throw"===i.method){if(t.iterator.return&&(i.method="return",i.arg=e,S(t,i),"throw"===i.method))return f;i.method="throw",i.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=d(o,t.iterator,i.arg);if("throw"===n.type)return i.method="throw",i.arg=n.arg,i.delegate=null,f;var r=n.arg;return r?r.done?(i[t.resultName]=r.value,i.next=t.nextLoc,"return"!==i.method&&(i.method="next",i.arg=e),i.delegate=null,f):r:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,f)}function F(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(F,this),this.reset(!0)}function T(t){if(t){var i=t[r];if(i)return i.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function i(){for(;++n<t.length;)if(o.call(t,n))return i.value=t[n],i.done=!1,i;return i.value=e,i.done=!0,i};return a.next=a}}return{next:E}}function E(){return{value:e,done:!0}}return v.prototype=b,l(x,"constructor",b),l(b,"constructor",v),v.displayName=l(b,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},C($.prototype),l($.prototype,a,(function(){return this})),t.AsyncIterator=$,t.async=function(e,i,o,n,r){void 0===r&&(r=Promise);var a=new $(c(e,i,o,n),r);return t.isGeneratorFunction(i)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},C(x),l(x,s,"Generator"),l(x,r,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var i in t)e.push(i);return e.reverse(),function i(){for(;e.length;){var o=e.pop();if(o in t)return i.value=o,i.done=!1,i}return i.done=!0,i}},t.values=T,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var i in this)"t"===i.charAt(0)&&o.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var i=this;function n(o,n){return s.type="throw",s.arg=t,i.next=o,n&&(i.method="next",i.arg=e),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var r=n;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=t,a.arg=e,r?(this.method="next",this.next=r.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),N(i),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var o=i.completion;if("throw"===o.type){var n=o.arg;N(i)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,i,o){return this.delegate={iterator:T(t),resultName:i,nextLoc:o},"next"===this.method&&(this.arg=e),f}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},3379:(t,e,i)=>{"use strict";var o,n=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var t={};return function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}t[e]=i}return t[e]}}(),a=[];function s(t){for(var e=-1,i=0;i<a.length;i++)if(a[i].identifier===t){e=i;break}return e}function l(t,e){for(var i={},o=[],n=0;n<t.length;n++){var r=t[n],l=e.base?r[0]+e.base:r[0],c=i[l]||0,d="".concat(l," ").concat(c);i[l]=c+1;var _=s(d),m={css:r[1],media:r[2],sourceMap:r[3]};-1!==_?(a[_].references++,a[_].updater(m)):a.push({identifier:d,updater:p(m,e),references:1}),o.push(d)}return o}function c(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var n=i.nc;n&&(o.nonce=n)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var a=r(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,_=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function m(t,e,i,o){var n=i?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=_(e,n);else{var r=document.createTextNode(n),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function u(t,e,i){var o=i.css,n=i.media,r=i.sourceMap;if(n?t.setAttribute("media",n):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var h=null,f=0;function p(t,e){var i,o,n;if(e.singleton){var r=f++;i=h||(h=c(e)),o=m.bind(null,i,r,!1),n=m.bind(null,i,r,!0)}else i=c(e),o=u.bind(null,i,e),n=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else n()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=n());var i=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<i.length;o++){var n=s(i[o]);a[n].references--}for(var r=l(t,e),c=0;c<i.length;c++){var d=s(i[c]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}i=r}}}},7044:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>u});var o=i(7757),n=i.n(o);function r(t,e,i,o,n,r,a){try{var s=t[r](a),l=s.value}catch(t){return void i(t)}s.done?e(l):Promise.resolve(l).then(o,n)}function a(t){return function(){var e=this,i=arguments;return new Promise((function(o,n){var a=t.apply(e,i);function s(t){r(a,o,n,s,l,"next",t)}function l(t){r(a,o,n,s,l,"throw",t)}s(void 0)}))}}function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const l={data:function(){var t;return s(t={csrf:document.querySelector('meta[name="csrf-token"]').getAttribute("content"),note_id:0,url_report:"",show_note_table:!0,show_note_form:!1,bool_note_modify:!1,bool_item_modify:!1,item:"",item_amount:0,item_price:0,item_subtotal:0},"show_note_form",!1),s(t,"note_nro",""),s(t,"note_description",""),s(t,"note_status",""),s(t,"item_rows",[]),s(t,"latest_id_item",0),t},props:{errors:Array,note_columns:Array,note_rows:Array,note_table_name:String,note_check_order_desc:Boolean,note_column_order:Number,note_check_remove_bfilter:Boolean,et_item:String,item_default:String,item_data:Array,item_columns:Array,et_item_expiration_date:String,et_item_amount:String,item_amount_maximum_digits:Number,et_item_price:String,item_price_maximum_digits:Number,et_item_subtotal:String,et_note_nro:String,et_note_date:String,et_note_description:String,note_description_maximum_digits:Number,et_note_status:String,et_note_total:String,item_table_name:String,item_column_order:Number,item_check_remove_bfilter:Boolean,mssg_error_function_not_available:String,mssg_note_date_empty:String,mssg_note_description_empty:String,mssg_note_table_amount_insufficient:String,mssg_noselect_row:String,mssg_question_note_annular:String,btn_mssg_note_annular_close:String,btn_mssg_note_annular_confirm:String,mssg_note_annular_success:String,mssg_item_noselect:String,mssg_item_price_empty:String,mssg_item_amount_empty:String,mssg_item_price_invalid:String,mssg_item_date_empty:String,mssg_item_exist:String,mssg_item_price_not_zero:String,mssg_item_amount_not_zero:String,mssg_success_add:String},methods:{reload:function(){var t=this;$.ajaxSetup({headers:{"X-CSRF-TOKEN":this.csrf}}),$.ajax({type:"POST",url:"/nota",data:{},success:function(e){if(1==e.Success){var i=[],o=[];if(e.content.length>0)o=Object.keys(e.content[0]);e.content.forEach((function(t){var e=[];o.forEach((function(i){e.push(t[i])})),i.push(e)})),t.$refs.table.dt.clear().draw(),t.$refs.table.dt.rows.add(i).draw()}else toastr.error(e.content)},error:function(t){console.log(t),toastr.error(this.mssg_fail)}})},cssItemTable:function(){var t=this.item_table_name;$("#"+t+"_wrapper thead .tb_column_1").css("width","40%"),$("#"+t+"_wrapper thead .tb_column_2").css("width","20%"),$("#"+t+"_wrapper thead .tb_column_3").css("width","10%"),$("#"+t+"_wrapper thead .tb_column_4").css("width","15%"),$("#"+t+"_wrapper thead .tb_column_5").css("width","15%")},setTotalValue:function(){var t=this.$refs.table2.dt,e=parseFloat("0.00").toFixed(2);t.rows().every((function(){!$(this.node()).hasClass("text-wrap")&&$(this.node()).addClass("text-wrap"),!$(this.node()).hasClass("text-break")&&$(this.node()).addClass("text-break");var i=this.data();e=(parseFloat(e)+parseFloat(i[i.length-1])).toFixed(2);var o=$(t.cell(this.index(),i.length-3).node()),n=$(t.cell(this.index(),i.length-2).node()),r=$(t.cell(this.index(),i.length-1).node());!o.hasClass("text-end")&&o.addClass("text-end"),!n.hasClass("text-end")&&n.addClass("text-end"),!r.hasClass("text-end")&&r.addClass("text-end")})),$("#note_total").text(e)},clearField_NoteForm:function(){this.bool_item_modify=!1,this.note_id=0,this.note_nro="";var t=moment().format("DD/MM/YYYY");$("#note_date").val(t),this.note_status="",this.note_description="",this.$refs.table2.dt.clear().draw(),$("#note_total").text("0.00"),this.cssItemTable()},clearField_ItemForm:function(){this.item="",this.item_amount=0,this.item_price=0,this.item_subtotal=0;var t=moment().format("DD/MM/YYYY");$("#item_expiration_date").val(t),this.cssItemTable()},actionShowNoteForm:function(){this.show_note_table=!1,this.show_note_form=!0,this.cssItemTable()},actionShowItemForm:function(){if(this.bool_note_modify)toastr.error(this.mssg_error_function_not_available);else{if(this.bool_item_modify){var t=this.$refs.table2.dt.row({selected:!0}).data();this.latest_id_item=t[0],this.item=t[1],$("#item_expiration_date").val(t[2]),this.item_amount=t[3],this.item_price=t[4],this.item_subtotal=t[5]}$("#item_form_modal").modal("show"),this.cssItemTable()}},actionModifyNote:function(){var t=this;if(this.$refs.table.dt.row({selected:!0}).any()){$.ajaxSetup({headers:{"X-CSRF-TOKEN":this.csrf}});var e=this.$refs.table.dt.row({selected:!0}).data();this.note_id=e[0],$.ajax({type:"POST",url:"/nota",data:{purchase:"true",only_note:"true",noteID:e[0]},success:function(e){if(1==e.Success){2==e.content.NumEstado&&$("#btn_note_form_delete").attr("disabled",!0),t.note_nro=e.content.Nro,$("#note_date").val(e.content.Fecha),t.note_status=e.content.Estado,t.note_description=e.content.Descripcion,$("#note_nro").attr("disabled",!0),$("#note_date").attr("disabled",!0),$("#note_description").attr("disabled",!0),$("#btn_item_add").attr("disabled",!0),$("#btn_item_form_delete").attr("disabled",!0),$("#btn_addItem").attr("disabled",!0),t.bool_note_modify=!0,t.show_note_table=!1,t.show_note_form=!0;var i=[],o=[];if(e.content2.length>0)o=Object.keys(e.content2[0]);e.content2.forEach((function(t){var e=[];parseFloat(t[o[o.length-1]]),o.forEach((function(i){e.push(t[i])})),i.push(e)})),t.$refs.table2.dt.clear().draw(),t.$refs.table2.dt.rows.add(i).draw(),t.setTotalValue(),t.cssItemTable()}else toastr.error(e.content)},error:function(t){console.log(t),toastr.error(this.mssg_fail)}})}else toastr.error(this.mssg_noselect_row)},verify_item_data:function(){return 0==$("#"+$("#item").attr("list")+" option[value='"+this.item+"']").length?(toastr.error(this.mssg_item_noselect),!1):0==$("#item_expiration_date").val().trim().length?(toastr.error(this.mssg_item_date_empty),!1):0==this.item_price.toString().trim().length?(toastr.error(this.mssg_item_price_empty),!1):parseFloat(this.item_price)<=0?(toastr.error(this.mssg_item_price_not_zero),!1):2==this.item_price.toString().trim().length&&1==this.item_price.toString().trim().indexOf(".")?(toastr.error(this.mssg_item_price_invalid),!1):0==this.item_amount.toString().trim().length?(toastr.error(this.mssg_item_amount_empty),!1):!(parseInt(this.item_amount)<=0)||(toastr.error(this.mssg_item_amount_not_zero),!1)},actionAddItem:function(){var t=this.$refs.table2.dt,e=this.bool_item_modify,i=this.latest_id_item,o=[],n=[],r=[];if(this.bool_note_modify)toastr.error(this.mssg_error_function_not_available);else if(this.verify_item_data()){var a=$("#"+$("#item").attr("list")+" option[value='"+this.item+"']").attr("data_id"),s=this.item,l=!1;if(t.rows().every((function(t,e,s){var c=this.data();c[0]==a&&(a==i&&(o=this),n=c,l=!0),i==c[0]&&i!=a&&(r=c,o=this,l=!0)})),l&&e)if(i==a){var c=parseFloat(this.item_subtotal).toFixed(2);n[2]=$("#item_expiration_date").val(),n[3]=this.item_amount,n[4]=this.item_price,n[5]=c,t.row(o).data(n).draw(),this.setTotalValue(),l=!1}else if(0!=i){if(0==n.length){c=parseFloat(this.item_subtotal).toFixed(2);r[0]=a,r[1]=s,r[2]=$("#item_expiration_date").val(),r[3]=this.item_amount,r[4]=this.item_price,r[5]=c,t.row(o).data(r).draw(),this.setTotalValue(),l=!1}}else l=!1;if(l||e)l?toastr.error(this.mssg_item_exist):$("#item_form_modal").modal("hide");else{c=parseFloat(this.item_subtotal).toFixed(2);var d=[[a,s,$("#item_expiration_date").val(),this.item_amount,this.item_price,c]];t.rows.add(d).draw(),this.setTotalValue(),this.clearField_ItemForm()}this.cssItemTable()}},actionShowNoteTable:function(){this.bool_note_modify?(this.show_note_table=!0,this.show_note_form=!1,this.clearField_NoteForm(),this.clearField_ItemForm(),this.cssItemTable(),this.bool_note_modify=!1,$("#btn_item_add").attr("disabled",!1),$("#btn_item_form_delete").attr("disabled",!1),$("#btn_addItem").attr("disabled",!1),$("#btn_addItem").attr("disabled",!1),$("#note_date").attr("disabled",!1),$("#note_description").attr("disabled",!1),$("#btn_note_add").attr("disabled",!1),$("#btn_note_form_delete").attr("disabled",!1)):(this.clearField_NoteForm(),this.clearField_ItemForm(),this.show_note_table=!0,this.show_note_form=!1)},actionAdd:function(){var t,e=this;if(this.bool_note_modify)toastr.error(this.mssg_error_function_not_available);else if(this.verify_data_before_confirm()){for(var i=moment($("#note_date").val().trim(),"DD/MM/YYYY").format("YYYY-MM-DD"),o=JSON.parse(JSON.stringify(this.$refs.table2.dt.rows().data().toArray())),r=0;r<o.length;r++)o[r][2]=moment(o[r][2],"DD/MM/YYYY").format("YYYY-MM-DD");$.ajaxSetup({headers:{"X-CSRF-TOKEN":this.csrf}}),$.ajax({type:"POST",url:"/nota",data:{purchase:"true",insert:"true",description:this.note_description,date:i,total:$("#note_total").text(),item_data:o},success:(t=a(n().mark((function t(i){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(1!=i.Success){t.next=17;break}return toastr.success(e.mssg_success_add),t.next=4,e.reload();case 4:e.note_id=i.content[0],e.note_nro=i.content[1],e.note_status=i.content[2],$("#note_date").attr("disabled",!0),$("#note_description").attr("disabled",!0),$("#btn_item_add").attr("disabled",!0),$("#btn_item_form_delete").attr("disabled",!0),$("#btn_addItem").attr("disabled",!0),$("#btn_addItem").attr("disabled",!0),e.bool_note_modify=!0,e.clearField_ItemForm(),t.next=18;break;case 17:toastr.error(i.content);case 18:case"end":return t.stop()}}),t)}))),function(e){return t.apply(this,arguments)}),error:function(t){console.log(t),toastr.error(this.mssg_fail)}})}},actionDeleteNote:function(){var t=this;if(this.bool_note_modify){var e=this.note_id;this.$swal.fire({title:this.mssg_question_note_annular,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:this.btn_mssg_note_annular_close,confirmButtonText:this.btn_mssg_note_annular_confirm}).then((function(i){var o;i.isConfirmed&&($.ajaxSetup({headers:{"X-CSRF-TOKEN":t.csrf}}),$.ajax({type:"POST",url:"/nota",data:{purchase:"true",annular_note:"true",noteID:e},success:(o=a(n().mark((function e(i){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1!=i.Success){e.next=8;break}return toastr.success(t.mssg_note_annular_success),e.next=4,t.reload();case 4:t.note_status=i.content,$("#btn_note_form_delete").attr("disabled",!0),e.next=9;break;case 8:toastr.error(i.content);case 9:case"end":return e.stop()}}),e)}))),function(t){return o.apply(this,arguments)}),error:function(t){console.log(t),toastr.error(this.mssg_fail)}}))}))}else toastr.error(this.mssg_error_function_not_available)},actionNewForm:function(){this.note_id=0,this.bool_note_modify=!1,this.clearField_ItemForm(),this.clearField_NoteForm(),this.cssItemTable(),$("#note_date").attr("disabled",!1),$("#note_description").attr("disabled",!1),$("#btn_item_add").attr("disabled",!1),$("#btn_item_form_delete").attr("disabled",!1),$("#btn_addItem").attr("disabled",!1)},actionDeleteItem:function(){this.bool_note_modify?toastr.error(this.mssg_error_function_not_available):this.$refs.table2.dt.row({selected:!0}).any()?(this.$refs.table2.dt.row({selected:!0}).remove().draw(),this.setTotalValue(),this.bool_item_modify&&(this.bool_item_modify=!1,this.clearField_ItemForm())):toastr.error(this.mssg_noselect_row)},verify_data_before_confirm:function(){var t=0,e="";return $("#note_date").val().trim().length>0?t+=1:e=this.mssg_note_date_empty,this.note_description.trim().length>0?t+=1:e=this.mssg_note_description_empty,null!=this.$refs.table2.dt.rows().data()&&this.$refs.table2.dt.rows().data().length>0?t+=1:e=this.mssg_note_table_amount_insufficient,3==t||(toastr.error(e),!1)},item_select_row:function(){this.bool_item_modify=!0},item_deselect_row:function(){this.bool_item_modify=!1,0!=this.latest_id_item&&(this.latest_id_item=0),this.clearField_ItemForm()},item_calculate_subtotal:function(){this.item_subtotal=parseFloat(this.item_price*this.item_amount).toFixed(2)}},mounted:function(){var t=this,e=$("#"+this.item_table_name),i=moment().format("DD/MM/YYYY");$(document).ready((function(){$("#note_date").val(i),$("#item_expiration_date").val(i),e.on("select.dt",t.item_select_row),e.on("deselect.dt",t.item_deselect_row),$("#note_nro").attr("disabled",!0)})),console.log("Component mounted.")}};var c=i(3379),d=i.n(c),_=i(8137),m={insert:"head",singleton:!1};d()(_.Z,m);_.Z.locals;const u=(0,i(1900).Z)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show_note_table,expression:"show_note_table"}],staticClass:"breadcome-list text-light row"},[i("div",{staticClass:"d-flex justify-content-end"},[i("div",{staticClass:"col-3 text-end",staticStyle:{"margin-bottom":"-33px","z-index":"100","padding-right":"0"}},[i("button",{staticClass:"btn btn-primary me-1 ps-3 pe-3",attrs:{id:"btn_note_add",type:"button"},on:{click:t.actionShowNoteForm}},[i("i",{staticClass:"bi bi-plus"})]),t._v(" "),i("button",{staticClass:"btn btn-success ps-3 pe-3",attrs:{id:"btn_note_modify",type:"button"},on:{click:t.actionModifyNote}},[i("i",{staticClass:"bi bi-pencil-square"})])])]),t._v(" "),i("custom_table",{ref:"table",staticClass:"col-12",attrs:{columns:t.note_columns,data:t.note_rows,table_name:t.note_table_name,check_order_desc:t.note_check_order_desc,column_order:t.note_column_order,check_remove_bfilter:t.note_check_remove_bfilter}})],1),t._v(" "),i("div",{staticClass:"modal",attrs:{id:"item_form_modal",tabindex:"-1"}},[i("div",{staticClass:"modal-dialog"},[i("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),i("div",{staticClass:"modal-body"},[i("div",{staticClass:"row"},[i("div",{staticClass:"d-flex flex-row flex-wrap"},[i("div",{staticClass:"col-3 me-4"},[i("label",{staticClass:"form-label",attrs:{for:"item"}},[t._v(t._s(t.et_item))]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.item,expression:"item"}],staticClass:"form-control",attrs:{type:"text",list:"data_list_item",id:"item",placeholder:t.item_default},domProps:{value:t.item},on:{input:function(e){e.target.composing||(t.item=e.target.value)}}}),t._v(" "),i("datalist",{attrs:{id:"data_list_item"}},t._l(t.item_data,(function(t){return i("option",{key:t.ID,attrs:{data_id:t.ID},domProps:{value:t.Nombre}})})),0)]),t._v(" "),i("div",{staticClass:"col-2 me-4"},[i("label",{staticClass:"form-label",attrs:{for:"item_expiration_date"}},[t._v(t._s(t.et_item_expiration_date))]),t._v(" "),i("input",{staticClass:"form-control",attrs:{id:"item_expiration_date",name:"dates",placeholder:"dd/mm/yyyy",type:"text"}})]),t._v(" "),i("div",{staticClass:"col-1 me-4"},[i("label",{staticClass:"form-label",attrs:{for:"item_amount"}},[t._v(t._s(t.et_item_amount))]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.item_amount,expression:"item_amount"}],staticClass:"form-control text-end",attrs:{type:"text",id:"item_amount",oninput:"this.value = this.value.replace(/[^0-9]/g, '').replace(/(\\..*)\\./g, '$1');  if(this.value.length == 0){ this.value='0'; } if(this.value.length > 1 && this.value.substring(0, 1) == '0'){ if(!isNaN(this.value.substring(1, 2))){this.value=this.value.substring(1);} }",maxlength:t.item_amount_maximum_digits},domProps:{value:t.item_amount},on:{keyup:t.item_calculate_subtotal,input:function(e){e.target.composing||(t.item_amount=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"col-2 me-4"},[i("label",{staticClass:"form-label",attrs:{for:"item_price"}},[t._v(t._s(t.et_item_price))]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.item_price,expression:"item_price"}],staticClass:"form-control text-end",attrs:{type:"text",id:"item_price",oninput:"this.value = this.value.replace(/[^0-9\\.]/g, '').replace(/(\\..*)\\./g, '$1'); if(this.value.length > 1 && this.value.substring(0, 1) == '0'){ if(!isNaN(this.value.substring(1, 2))){this.value=this.value.substring(1);} } if(this.value.length == 0){ this.value='0'; } if(this.value.length > 0 && this.value.substring(0, 1) == '.'){ this.value = '0'; } if(this.value.search('\\\\.') > -1){ if(this.value.substring(this.value.search('\\\\.')).length > 3){ this.value = this.value.substring(0, this.value.length - 1); } }",maxlength:t.item_price_maximum_digits},domProps:{value:t.item_price},on:{keyup:t.item_calculate_subtotal,input:function(e){e.target.composing||(t.item_price=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"col-1 me-4"},[i("label",{staticClass:"form-label",attrs:{for:"item_subtotal"}},[t._v(t._s(t.et_item_subtotal))]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.item_subtotal,expression:"item_subtotal"}],staticClass:"form-control text-end",attrs:{type:"text",id:"item_subtotal",disabled:"",readonly:""},domProps:{value:t.item_subtotal},on:{input:function(e){e.target.composing||(t.item_subtotal=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"col-1 mt-4"},[i("button",{staticClass:"btn btn-primary ps-3 pe-3 pb-2 pt-2 ",attrs:{id:"btn_addItem",type:"button"},on:{click:t.actionAddItem}},[i("i",{staticClass:"bi bi-plus"})])])])])])])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.show_note_form,expression:"show_note_form"}],staticClass:"breadcome-list text-light row fs-6"},[i("div",{staticClass:"row",staticStyle:{"padding-right":"0"}},[i("div",{staticClass:"d-flex justify-content-end",staticStyle:{"padding-right":"0"}},[i("div",{staticClass:"col-3 text-end mb-3"},[i("button",{staticClass:"me-1 ps-3 pe-3 pointer btn btn-info",attrs:{type:"button",id:"btn_note_form_back"},on:{click:t.actionShowNoteTable}},[i("i",{staticClass:"bi bi-arrow-90deg-left"})]),t._v(" "),i("button",{class:["me-1","ps-3","pe-3","pointer",,"btn","btn-success",t.bool_note_modify?"d-none":""],attrs:{type:"button",id:"btn_note_form_save"},on:{click:t.actionAdd}},[i("i",{staticClass:"bi bi-save2"})]),t._v(" "),i("button",{class:["me-1","ps-3","pe-3","pointer","btn","btn-danger",t.bool_note_modify?"":"d-none"],attrs:{type:"button",id:"btn_note_form_delete"},on:{click:t.actionDeleteNote}},[i("i",{staticClass:"bi bi-trash"})]),t._v(" "),i("button",{class:["me-1","ps-3","pe-3","pointer","btn","btn-success",t.bool_note_modify?"":"d-none"],attrs:{type:"button",id:"btn_note_form_new"},on:{click:t.actionNewForm}},[i("i",{staticClass:"bi bi-plus"})])])]),t._v(" "),i("div",{staticClass:"col-12 d-flex flex-wrap",staticStyle:{"padding-right":"0"}},[i("div",{class:["col-12","col-md-6","col-xxl-5","mb-2","me-4","d-flex","justify-content-between"],staticStyle:{"padding-left":"0","padding-right":"0"}},[i("div",{staticClass:"col-3"},[i("label",{staticClass:"form-label",attrs:{for:"note_nro"}},[t._v(t._s(t.et_note_nro))]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.note_nro,expression:"note_nro"}],staticClass:"form-control",attrs:{type:"text",id:"note_nro",disabled:"",readonly:""},domProps:{value:t.note_nro},on:{input:function(e){e.target.composing||(t.note_nro=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"col-4"},[i("label",{staticClass:"form-label",attrs:{for:"note_date"}},[t._v(t._s(t.et_note_date))]),t._v(" "),i("input",{staticClass:"form-control",attrs:{name:"dates",placeholder:"dd/mm/yyyy",type:"text",id:"note_date"}})]),t._v(" "),i("div",{staticClass:"col-4"},[i("label",{staticClass:"form-label",attrs:{for:"note_status"}},[t._v(t._s(t.et_note_status))]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.note_status,expression:"note_status"}],staticClass:"form-control",attrs:{type:"text",id:"note_status",disabled:"",readonly:""},domProps:{value:t.note_status},on:{input:function(e){e.target.composing||(t.note_status=e.target.value)}}})])]),t._v(" "),i("div",{class:["col-12","col-md-5","mb-2","d-flex","justify-content-between"],staticStyle:{"padding-left":"0","padding-right":"0"}},[i("div",{staticClass:"col-12"},[i("label",{staticClass:"form-label",attrs:{for:"note_description"}},[t._v(t._s(t.et_note_description))]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.note_description,expression:"note_description"}],staticClass:"form-control",attrs:{type:"text",id:"note_description",oninput:"this.value = this.value.replace(/[^0-9a-zA-Z\\.\\ \\,]/g, '').replace(/(\\*)\\./g, '$1');",maxlength:t.note_description_maximum_digits},domProps:{value:t.note_description},on:{input:function(e){e.target.composing||(t.note_description=e.target.value)}}})])])]),t._v(" "),i("div",{staticClass:"d-flex justify-content-end mt-3",staticStyle:{"padding-right":"0"}},[i("div",{staticClass:"col-3 text-end",staticStyle:{"z-index":"100"}},[i("button",{class:["btn",t.bool_item_modify?"btn-success":"btn-primary","me-1","ps-3","pe-3",t.bool_note_modify?"d-none":""],attrs:{id:"btn_item_add",type:"button"},on:{click:t.actionShowItemForm}},[i("i",{class:["bi",t.bool_item_modify?"bi-pencil-square":"bi-plus"]})]),t._v(" "),i("button",{class:["ps-3","pe-3","pointer","btn btn-danger",t.bool_note_modify?"d-none":""],attrs:{type:"button",id:"btn_item_form_delete"},on:{click:t.actionDeleteItem}},[i("i",{staticClass:"bi bi-trash"})])])])]),t._v(" "),i("div",{staticClass:"col-12",staticStyle:{"max-height":"39vh"}},[i("custom_table",{ref:"table2",staticClass:"col-12 mt-3 p-0",attrs:{columns:t.item_columns,data:t.item_rows,table_name:t.item_table_name,column_order:t.item_column_order,check_remove_bfilter:t.item_check_remove_bfilter,check_remove_bpaginate:!0,check_remove_binfo:!0,check_disabled_ordering:!0,enable_border:!0}})],1),t._v(" "),i("div",{staticClass:"row justify-content-end",staticStyle:{"padding-right":"0"}},[i("table",{staticClass:"mt-2 text-end col-12 justify-content-end",attrs:{id:"totals",cellspacing:"10",cellpadding:"5"}},[i("tr",[i("th",{staticStyle:{width:"40% !important"}}),t._v(" "),i("th",{staticStyle:{width:"20% !important"}}),t._v(" "),i("th",{staticStyle:{width:"10% !important"}}),t._v(" "),i("th",{staticStyle:{width:"15% !important"}},[i("span",[t._v(t._s(t.et_note_total)+":")])]),t._v(" "),t._m(1)])])])])])}),[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal-header"},[i("h5",{staticClass:"modal-title"}),t._v(" "),i("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("th",{staticStyle:{width:"15% !important"}},[i("span",{attrs:{id:"note_total"}},[t._v("0.00")])])}],!1,null,null,null).exports},1900:(t,e,i)=>{"use strict";function o(t,e,i,o,n,r,a,s){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=i,c._compiled=!0),o&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=l):n&&(l=s?function(){n.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:n),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var _=c.beforeCreate;c.beforeCreate=_?[].concat(_,l):[l]}return{exports:t,options:c}}i.d(e,{Z:()=>o})}}]);