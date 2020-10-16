webpackJsonp([49],{

/***/ "vXBZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/search/demos.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var demos = ({
  data: function data() {
    return {
      dynamicValidateForm: {
        domains: [{
          value: ""
        }],
        email: ""
      }
    };
  },

  methods: {
    submitForm: function submitForm(formName) {
      this.$refs[formName].validate(function (valid) {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    removeDomain: function removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    addDomain: function addDomain() {
      this.dynamicValidateForm.domains.push({
        value: "",
        key: Date.now()
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-02f440d0","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/search/demos.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-form',{ref:"dynamicValidateFormRef",staticClass:"demo-dynamic",attrs:{"model":_vm.dynamicValidateForm,"label-width":"100px"}},[_c('el-form-item',{attrs:{"prop":"email","label":"邮箱","rules":[
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
  ]}},[_c('el-input',{model:{value:(_vm.dynamicValidateForm.email),callback:function ($$v) {_vm.$set(_vm.dynamicValidateForm, "email", $$v)},expression:"dynamicValidateForm.email"}})],1),_vm._v(" "),_vm._l((_vm.dynamicValidateForm.domains),function(domain,index){return _c('el-form-item',{key:domain.key,attrs:{"label":'域名' + index,"prop":'domains.' + index + '.value',"rules":{
    required: true, message: '域名不能为空', trigger: 'blur'
  }}},[_c('el-input',{model:{value:(domain.value),callback:function ($$v) {_vm.$set(domain, "value", $$v)},expression:"domain.value"}}),_vm._v(" "),_c('el-button',{on:{"click":function($event){$event.preventDefault();_vm.removeDomain(domain)}}},[_vm._v("删除")])],1)}),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.submitForm('dynamicValidateFormRef')}}},[_vm._v("提交")]),_vm._v(" "),_c('el-button',{on:{"click":_vm.addDomain}},[_vm._v("新增")])],1)],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var search_demos = (esExports);
// CONCATENATED MODULE: ./src/views/search/demos.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  demos,
  search_demos,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_search_demos = __webpack_exports__["default"] = (Component.exports);


/***/ })

});