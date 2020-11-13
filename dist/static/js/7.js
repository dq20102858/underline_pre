webpackJsonp([7,42],{

/***/ "49WS":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n@media print {\n#printMe table {\r\n    border-collapse: collapse;\r\n    width: 100%;\n}\n#printMe table td {\r\n    border: 1px solid #9db9fa;\r\n    line-height: 30px;\r\n    padding: 10px;\n}\nundefined{display: none;\n}\n}\n#dispatch-print {\r\n  width: 100%;\n}\n#printMe {\r\n  padding: 30px;\n}\n#printMe table {\r\n  border-collapse: collapse;\r\n  width: 100%;\n}\n#printMe table td {\r\n  border: 1px solid #9db9fa;\r\n  line-height: 30px;\r\n  padding: 10px;\n}\n#printMe p {\r\n  line-height: 33px;\n}\n#printMe .ptitle {\r\n  font-size: 18px;\r\n  text-align: center;\r\n  color: #1d397a;\n}\n#printMe .pdate {\r\n  text-align: center;\n}\n#printMe p {\r\n  line-height: 33px;\r\n  color: #4b6eca;\n}\n#printMe .tname {\r\n  white-space: nowrap;\r\n  color: #1d397a;\n}\n#dispatch-print .app-dialog-form {\r\n  padding: 30px 0px 30px 30px;\r\n  display: block;\r\n  margin-top: 1px;\n}\n#dispatch-print .app-dialog-footer {\r\n  text-align: center;\r\n  margin-top: 30px;\n}\n#dispatch-print .app-dialog-footer .el-button {\r\n  margin-right: 10px;\r\n  padding: 12px 80px;\r\n  font-size: 16px;\r\n  color: #fff;\n}\n#dispatch-print .app-dialog-footer .bluebtn {\r\n  background: #4b6eca;\r\n  border-color: #4b6eca;\r\n  margin-left: 10px;\n}\n#dispatch-print .app-dialog-footer .redbtn {\r\n  background: #ff5c75;\r\n  border-color: #ff5c75;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "5/zN":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("Pc8a");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("11f9a090", content, true);

/***/ }),

/***/ "558g":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.app-page-select {\r\n  margin-bottom: 10px;\r\n  width: 100%;\n}\n.app-page-select .select-from-inline .el-form-item__label {\r\n  width: 70px;\n}\n.app-page-select .select-from-inline {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\n}\n.app-page-select .select-from-inline .el-form-item {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\n}\n.app-page-select .select-from-inline .bluebtn {\r\n  width: 120px;\r\n  margin-right: 20px;\n}\n.app-page-select .select-from-inline .input {\r\n  width: auto;\n}\n.app-page-select .select-from-inline .form-so {\r\n  width: 29%;\n}\n.app-page-select .select-from-inline .form-so .el-form-item__content {\r\n  width: 100%;\n}\n.app-page-select .select-from-inline .form-so .el-button- {\r\n  float: right;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "83nR":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("558g");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("2e8aecfa", content, true);

/***/ }),

/***/ "A7aY":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n#dispatch-detail {\r\n  padding: 25px;\n}\n#dispatch-detail table {\r\n  border-collapse: collapse;\r\n  width: 100%;\n}\n#dispatch-detail table td {\r\n  border: 1px solid #9db9fa;\r\n  line-height: 30px;\r\n  padding: 10px;\n}\n#dispatch-detail .pdate {\r\n  text-align: center;\n}\n#dispatch-detail p {\r\n  line-height: 28px;\r\n  font-size: 14px;\r\n  color: #4b6eca;\n}\n#dispatch-detail .tname {\r\n  white-space: nowrap;\r\n  color: #1d397a;\n}\n#dispatch-detail .redbtn {\r\n  color: #ff5c75;\n}\n#dispatch-detail .app-dialog-footer {\r\n  text-align: right;\r\n  margin-top: 30px;\r\n  margin-bottom: 20px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "ARoL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/dashboard/index.vue
//
//
//
//
//

/* harmony default export */ var dashboard = ({
  data: function data() {
    return {
      videoUrl: "",
      videoHeight: "600px",
      videoList: []
    };
  },
  updated: function updated() {},
  mounted: function mounted() {
    window.open("http://192.168.5.2/doc/page/login.asp");
  },
  created: function created() {
    this.getVideos();
  },

  methods: {
    getVideos: function getVideos() {
      var _this = this;

      this.request({
        url: "/video/getVideoList",
        method: "get"
      }).then(function (res) {
        var data = res.data;
        if (data.status == 1) {
          _this.videoUrl = data.data.data[0].url;
          _this.videoHeight = _this.$refs.videoHeight.clientHeight;
          console.log(_this.videoHeight);
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3047e1f3","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/dashboard/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"videoHeight",staticClass:"app-video"},[_c('iframe',{attrs:{"src":_vm.videoUrl,"height":_vm.videoHeight,"width":"100%"}})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var views_dashboard = (esExports);
// CONCATENATED MODULE: ./src/views/dashboard/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("qWQF")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  dashboard,
  views_dashboard,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_views_dashboard = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "FvKM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/json/stringify.js
var stringify = __webpack_require__("mvHQ");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./src/views/dashboard/index.vue + 2 modules
var dashboard = __webpack_require__("ARoL");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/dispatch/edit.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var edit = ({
  data: function data() {
    return {
      tempForm: {
        name: "",
        description: ""
      },
      ruleForm: {
        number: "",
        lid: "",
        type: "",
        master_id: "",
        location: "司机车长及施工负责人",
        driver_id: "",
        dispatch_id: "",
        station_worker_id: "",
        station: "",
        description: "",
        template_id: ''
      },
      locomotiveList: [],
      masterList: [],
      driverList: [],
      dispatchList: [],
      stationWorkerList: [],
      templateList: [],
      isVisible: false,
      rules: {
        number: [{ required: true, message: "请输入命令号码2到20个字符", trigger: "blur" }, {
          min: 2,
          max: 20,
          message: "请输入长度在2到20个字符",
          trigger: "blur"
        }, {
          pattern: /(^\S+).*(\S+$)/,
          message: "开始和结尾不能有空格",
          trigger: "blur"
        }],
        lid: [{ required: true, message: "请选择受令机车", trigger: "change" }],
        type: [{ required: true, message: "请选择类型", trigger: "change" }],
        master_id: [{ required: true, message: "请选择受令机长", trigger: "change" }],
        location: [{ required: true, message: "请输入受令处所2到20个字符", trigger: "blur" }, {
          min: 2,
          max: 20,
          message: "请输入长度在2到20个字符",
          trigger: "blur"
        }, {
          pattern: /(^\S+).*(\S+$)/,
          message: "开始和结尾不能有空格",
          trigger: "blur"
        }],
        driver_id: [{ required: true, message: "请选择受令机车", trigger: "change" }],
        station: [{
          min: 2,
          max: 20,
          message: "请输入受令车站2到20个字符",
          trigger: "blur"
        }],
        dispatch_id: [{ required: true, message: "请选择调度员", trigger: "change" }],
        description: [{ required: true, message: "请输入调度命令内容2到500个字符", trigger: "blur" }, {
          min: 2,
          max: 500,
          message: "请输入长度在2到500个字符",
          trigger: "blur"
        }]
      },
      temprules: {
        name: [{ required: true, message: "请输入名称", trigger: "blur" }, {
          min: 2,
          max: 30,
          message: "请输入长度在2到30个字符",
          trigger: "blur"
        }, {
          pattern: /(^\S+).*(\S+$)/,
          message: "开始和结尾不能有空格",
          trigger: "blur"
        }],
        description: [{ required: true, message: "请输入内容", trigger: "blur" }, {
          min: 2,
          max: 500,
          message: "请输入长度在2到500个字符",
          trigger: "blur"
        }, {
          pattern: /\s\S+|S+\s|\S/,
          message: "内容不能全是空格",
          trigger: "blur"
        }]
      }
    };
  },
  created: function created() {
    this.getCreateNumber();
    this.getLocomotiveLists(); //机车
    this.getUsersListMaster(); //车长
    this.getUsersListDriver(); //司机
    this.getUsersListDispatch(); //调度员
    this.getUsersListStationWorker(); //车站值班人
    this.getTemplateLists(); //模板
  },

  methods: {
    submitForm: function submitForm(formName) {
      var _this = this;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          var data = _this.ruleForm;
          console.log(stringify_default()(data));
          _this.request({
            url: "/dispatch/addDispatch",
            method: "post",
            data: data
          }).then(function (res) {
            var data = res.data;
            if (data.status == 1) {
              _this.$message({
                message: "恭喜您，新增成功",
                type: "success"
              });
              _this.$layer.close(_this.layerid);
              _this.$parent.getDataLists();
            }
          });
        } else {
          console.log("保存命令失败");
          return false;
        }
      });
    },
    isCancel: function isCancel() {
      this.$layer.close(this.layerid);
    },
    getCreateNumber: function getCreateNumber() {
      var _this2 = this;

      this.request({
        url: "/dispatch/createNumber",
        method: "get"
      }).then(function (res) {
        var data = res.data;
        if (data.status == 1) {
          _this2.ruleForm.number = data.data;
          console.log(_this2.ruleForm.number);
        }
      });
    },

    //5:车长,6:司机,7:调度值班员，8：车站值班员 /dispatch/getUsersLists
    getUsersListMaster: function getUsersListMaster() {
      var _this3 = this;

      this.request({
        url: "/dispatch/getUsersLists?role_id=5",
        method: "get"
      }).then(function (res) {
        var data = res.data;
        if (data.status == 1) {
          _this3.masterList = data.data;
        }
      });
    },
    getUsersListDriver: function getUsersListDriver() {
      var _this4 = this;

      this.request({
        url: "/dispatch/getUsersLists?role_id=6",
        method: "get"
      }).then(function (res) {
        var data = res.data;
        if (data.status == 1) {
          _this4.driverList = data.data;
        }
      });
    },
    getUsersListDispatch: function getUsersListDispatch() {
      var _this5 = this;

      this.request({
        url: "/dispatch/getUsersLists?role_id=7",
        method: "get"
      }).then(function (res) {
        var data = res.data;
        if (data.status == 1) {
          _this5.dispatchList = data.data;
        }
      });
    },
    getUsersListStationWorker: function getUsersListStationWorker() {
      var _this6 = this;

      this.request({
        url: "/dispatch/getUsersLists?role_id=8",
        method: "get"
      }).then(function (res) {
        var data = res.data;
        if (data.status == 1) {
          _this6.stationWorkerList = data.data;
        }
      });
    },
    getLocomotiveLists: function getLocomotiveLists() {
      var _this7 = this;

      this.request({
        url: "/dispatch/getLocomotiveLists",
        method: "get"
      }).then(function (res) {
        var data = res.data;
        if (data.status == 1) {
          _this7.locomotiveList = data.data;
        }
      });
    },

    //模板
    getTemplateLists: function getTemplateLists() {
      var _this8 = this;

      this.request({
        url: "/dispatch/getTemplateLists",
        method: "get"
      }).then(function (res) {
        var data = res.data;
        if (data.status == 1) {
          _this8.templateList = data.data;
          _this8.templateChange(1);
        }
      });
    },
    templateChange: function templateChange(params) {
      var _this9 = this;

      var value = params;
      this.request({
        url: "/dispatch/getTemplateDetail?id=" + value,
        method: "get"
      }).then(function (res) {
        var data = res.data;
        if (data.status == 1) {
          _this9.ruleForm.description = res.data.data.description;
        }
      });
    },
    templateShowDialog: function templateShowDialog() {
      this.isVisible = true;
      this.tempForm.name = "";
      this.tempForm.description = "";
    },
    templateDel: function templateDel() {
      var _this10 = this;

      this.$confirm("您确定要删除此模板?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        customClass: "el-message-box-new"
      }).then(function () {
        _this10.request({
          url: "/dispatch/deleteTemplate",
          method: "post",
          data: { id: _this10.ruleForm.template_id }
        }).then(function (res) {
          var data = res.data;
          if (data.status == 1) {
            _this10.ruleForm.template_id = 1;
            _this10.getTemplateLists();
            _this10.$message({
              message: "恭喜您，删除成功",
              type: "success"
            });
          }
          // else {
          //   this.$message.error("删除失败");
          // }
        });
      }).catch(function () {});
    },
    templateSubmitTempForm: function templateSubmitTempForm(formName) {
      var _this11 = this;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          var data = _this11.tempForm;
          console.log("tempForm：" + stringify_default()(data));
          _this11.request({
            url: "/dispatch/addTemplate",
            method: "post",
            data: data
          }).then(function (res) {
            var data = res.data;
            if (data.status == 1) {
              _this11.isVisible = false;
              _this11.$message({
                message: "恭喜您，新增成功",
                type: "success"
              });
              _this11.ruleForm.template_id = 1;
              _this11.getTemplateLists();
            }
          });
        } else {
          console.log("保存模板失败");
          return false;
        }
      });
    }
  },
  props: {
    layerid: {
      type: String,
      default: ""
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ee820e7a","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/dispatch/edit.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-page-layer",attrs:{"id":"dispatch-edit"}},[_c('div',{staticClass:"app-dialog-form"},[_c('el-form',{ref:"ruleForm",attrs:{"label-position":"top","model":_vm.ruleForm,"inline":true,"rules":_vm.rules}},[_c('el-form-item',{attrs:{"label":"命令号","prop":"number"}},[_c('el-input',{attrs:{"autocomplete":"off"},model:{value:(_vm.ruleForm.number),callback:function ($$v) {_vm.$set(_vm.ruleForm, "number", $$v)},expression:"ruleForm.number"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"受令机车","prop":"lid"}},[_c('el-select',{attrs:{"placeholder":"请选择","clearable":""},model:{value:(_vm.ruleForm.lid),callback:function ($$v) {_vm.$set(_vm.ruleForm, "lid", $$v)},expression:"ruleForm.lid"}},_vm._l((_vm.locomotiveList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"类型","prop":"type"}},[_c('el-select',{attrs:{"placeholder":"请选择","clearable":""},model:{value:(_vm.ruleForm.type),callback:function ($$v) {_vm.$set(_vm.ruleForm, "type", $$v)},expression:"ruleForm.type"}},[_c('el-option',{attrs:{"label":"行车调度","value":"1"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"施工调度","value":"2"}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"受令车长","prop":"master_id"}},[_c('el-select',{attrs:{"placeholder":"请选择","clearable":""},model:{value:(_vm.ruleForm.master_id),callback:function ($$v) {_vm.$set(_vm.ruleForm, "master_id", $$v)},expression:"ruleForm.master_id"}},_vm._l((_vm.masterList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"受令处所","prop":"location"}},[_c('el-input',{attrs:{"autocomplete":"off"},model:{value:(_vm.ruleForm.location),callback:function ($$v) {_vm.$set(_vm.ruleForm, "location", $$v)},expression:"ruleForm.location"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"受令司机","prop":"driver_id"}},[_c('el-select',{attrs:{"placeholder":"请选择","clearable":""},model:{value:(_vm.ruleForm.driver_id),callback:function ($$v) {_vm.$set(_vm.ruleForm, "driver_id", $$v)},expression:"ruleForm.driver_id"}},_vm._l((_vm.driverList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"值班调度","prop":"dispatch_id"}},[_c('el-select',{attrs:{"placeholder":"请选择调度员","clearable":""},model:{value:(_vm.ruleForm.dispatch_id),callback:function ($$v) {_vm.$set(_vm.ruleForm, "dispatch_id", $$v)},expression:"ruleForm.dispatch_id"}},_vm._l((_vm.dispatchList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"受令车站","prop":"station"}},[_c('el-input',{attrs:{"autocomplete":"off"},model:{value:(_vm.ruleForm.station),callback:function ($$v) {_vm.$set(_vm.ruleForm, "station", $$v)},expression:"ruleForm.station"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"车站值班员"}},[_c('el-select',{attrs:{"placeholder":"请选择","clearable":""},model:{value:(_vm.ruleForm.station_worker_id),callback:function ($$v) {_vm.$set(_vm.ruleForm, "station_worker_id", $$v)},expression:"ruleForm.station_worker_id"}},[_c('el-option',{attrs:{"label":"暂无值班员","value":"0"}}),_vm._v(" "),_vm._l((_vm.stationWorkerList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})})],2)],1),_vm._v(" "),_c('div',{staticClass:"blank"}),_vm._v(" "),_c('div',{staticClass:"contents-select"},[_c('el-select',{attrs:{"popper-class":"el-select-height"},on:{"change":_vm.templateChange},model:{value:(_vm.ruleForm.template_id),callback:function ($$v) {_vm.$set(_vm.ruleForm, "template_id", $$v)},expression:"ruleForm.template_id"}},_vm._l((_vm.templateList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1),_vm._v(" "),_c('el-button',{staticClass:"bluebtn",attrs:{"type":"primary"},on:{"click":_vm.templateDel}},[_vm._v("删除选中模板")]),_vm._v(" "),_c('el-button',{staticClass:"redbtn",attrs:{"type":"primary"},on:{"click":_vm.templateShowDialog}},[_vm._v("\n          新建调度内容模板\n          "),_c('i',{staticClass:"el-icon-plus el-icon--right"})])],1),_vm._v(" "),_c('div',{staticClass:"blank"}),_vm._v(" "),_c('div',{staticClass:"contents-area"},[_c('p',[_vm._v("调度命令内容")]),_vm._v(" "),_c('el-form-item',{staticClass:"el-from-desc",attrs:{"prop":"description"}},[_c('el-input',{attrs:{"type":"textarea"},model:{value:(_vm.ruleForm.description),callback:function ($$v) {_vm.$set(_vm.ruleForm, "description", $$v)},expression:"ruleForm.description"}})],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"app-dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.submitForm('ruleForm')}}},[_vm._v("确认添加")]),_vm._v(" "),_c('el-button',{on:{"click":_vm.isCancel}},[_vm._v("关闭")])],1)],1),_vm._v(" "),_c('el-dialog',{staticClass:"app-dialog app-dialog-temp",attrs:{"width":"580px","title":"新增调度内容模板","visible":_vm.isVisible,"center":"","close-on-click-modal":false,"append-to-body":""},on:{"update:visible":function($event){_vm.isVisible=$event}}},[_c('el-form',{ref:"tempFormRef",staticClass:"el-form-custom",attrs:{"model":_vm.tempForm,"rules":_vm.temprules,"label-width":"100px","label-position":"left"}},[_c('el-form-item',{attrs:{"label":"新增名称","prop":"name"}},[_c('el-input',{attrs:{"autocomplete":"off"},model:{value:(_vm.tempForm.name),callback:function ($$v) {_vm.$set(_vm.tempForm, "name", $$v)},expression:"tempForm.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"新增内容","prop":"description"}},[_c('el-input',{attrs:{"type":"textarea"},model:{value:(_vm.tempForm.description),callback:function ($$v) {_vm.$set(_vm.tempForm, "description", $$v)},expression:"tempForm.description"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.isVisible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.templateSubmitTempForm('tempFormRef')}}},[_vm._v("确 定")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var dispatch_edit = (esExports);
// CONCATENATED MODULE: ./src/views/dispatch/edit.vue
function injectStyle (ssrContext) {
  __webpack_require__("5/zN")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  edit,
  dispatch_edit,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_dispatch_edit = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/dispatch/detail.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var detail = ({
  data: function data() {
    return {
      iframepar: {},
      id: 1,
      dataInfo: [],
      iData: { id: 3 }
    };
  },

  props: {
    iframeData: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    layerid: {
      type: String,
      default: ""
    }
  },
  created: function created() {
    this.getDetail();
  },

  methods: {
    getDetail: function getDetail() {
      var _this = this;

      this.request({
        url: "/dispatch/getDispatchDetail?id=" + this.iframeData.id,
        method: "get"
      }).then(function (res) {
        var data = res.data;
        if (data.status == 1) {
          _this.dataInfo = data.data;
          //console.log(JSON.stringify(this.dataInfo));
        }
      });
    },
    isCancel: function isCancel() {
      this.$layer.close(this.layerid);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-735d0c7c","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/dispatch/detail.vue
var detail_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-page-layer",staticStyle:{"width":"100%"},attrs:{"id":"dispatch-detail"}},[_c('div',{staticClass:"app-dialog-form"},[_c('table',{staticStyle:{"width":"100%"}},[_c('tbody',[_c('tr',[_vm._m(0),_vm._v(" "),_c('td',[_c('p',[_vm._v(_vm._s(_vm.dataInfo.number))])]),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('td',[_c('p',[_vm._v(_vm._s(_vm.dataInfo.dispatch))])])]),_vm._v(" "),_c('tr',[_vm._m(2),_vm._v(" "),_c('td',[(_vm.dataInfo.status=='1')?_c('p',{staticClass:"redbtn"},[_vm._v("新命令")]):_vm._e(),_vm._v(" "),(_vm.dataInfo.status=='2')?_c('p',{staticClass:"redbtn"},[_vm._v("已确认")]):_vm._e(),_vm._v(" "),(_vm.dataInfo.status=='3')?_c('p',{staticClass:"redbtn"},[_vm._v("已作废")]):_vm._e()]),_vm._v(" "),_vm._m(3),_vm._v(" "),_c('td',[_c('p',[_vm._v(_vm._s(_vm.dataInfo.loco))])])]),_vm._v(" "),_c('tr',[_vm._m(4),_vm._v(" "),_c('td',[_c('p',[_vm._v(_vm._s(_vm.dataInfo.driver))])]),_vm._v(" "),_vm._m(5),_vm._v(" "),_c('td',[_c('p',[_vm._v(_vm._s(_vm.dataInfo.master))])])]),_vm._v(" "),_c('tr',[_vm._m(6),_vm._v(" "),_c('td',[_c('p',[_vm._v(_vm._s(_vm.dataInfo.create_time))])]),_vm._v(" "),_vm._m(7),_vm._v(" "),_c('td',[_c('p',[_vm._v(_vm._s(_vm.dataInfo.station==''?'无' : _vm.dataInfo.station))])])]),_vm._v(" "),_c('tr',[_vm._m(8),_vm._v(" "),_c('td',[_c('p',[_vm._v(_vm._s(_vm.dataInfo.station_worker==''?'无' : _vm.dataInfo.station_worker))])]),_vm._v(" "),_vm._m(9),_vm._v(" "),_c('td',[(_vm.dataInfo.makesure_time=='')?_c('p',[_vm._v("暂未确认")]):_c('p',[_vm._v(_vm._s(_vm.dataInfo.makesure_time))])])]),_vm._v(" "),_c('tr',[_vm._m(10),_vm._v(" "),_c('td',{attrs:{"colspan":"3"}},[_c('p',[_vm._v(_vm._s(_vm.dataInfo.location))])])]),_vm._v(" "),_c('tr',[_vm._m(11),_vm._v(" "),_c('td',{attrs:{"colspan":"3"}},[_c('p',[_vm._v(_vm._s(_vm.dataInfo.description))])])])])])]),_vm._v(" "),_c('div',{staticClass:"app-dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":_vm.isCancel}},[_vm._v("关闭")])],1)])}
var detail_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('b',{staticClass:"tname"},[_vm._v("命令号")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('b',{staticClass:"tname"},[_vm._v("值班调度")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('b',{staticClass:"tname"},[_vm._v("命令状态")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('b',{staticClass:"tname"},[_vm._v("受令机车")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('b',{staticClass:"tname"},[_vm._v("受令司机")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('b',{staticClass:"tname"},[_vm._v("受令车长")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('b',{staticClass:"tname"},[_vm._v("发令时间")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('b',{staticClass:"tname"},[_vm._v("受令车站")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('b',{staticClass:"tname"},[_vm._v("车站值班员")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('b',{staticClass:"tname"},[_vm._v("确认时间")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('b',{staticClass:"tname"},[_vm._v("受令处所")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('b',{staticClass:"tname"},[_vm._v("内容")])])}]
var detail_esExports = { render: detail_render, staticRenderFns: detail_staticRenderFns }
/* harmony default export */ var dispatch_detail = (detail_esExports);
// CONCATENATED MODULE: ./src/views/dispatch/detail.vue
function detail_injectStyle (ssrContext) {
  __webpack_require__("dZzb")
}
var detail_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var detail___vue_template_functional__ = false
/* styles */
var detail___vue_styles__ = detail_injectStyle
/* scopeId */
var detail___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var detail___vue_module_identifier__ = null
var detail_Component = detail_normalizeComponent(
  detail,
  dispatch_detail,
  detail___vue_template_functional__,
  detail___vue_styles__,
  detail___vue_scopeId__,
  detail___vue_module_identifier__
)

/* harmony default export */ var views_dispatch_detail = (detail_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/dispatch/printing.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var printing = ({
  data: function data() {
    return {
      printObj: {
        id: "#printMe",
        popTitle: " ",
        extraCss: "",
        extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>'
      },
      dataInfo: []
    };
  },

  props: {
    iframeData: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    layerid: {
      type: String,
      default: ""
    }
  },
  created: function created() {
    this.getDetail();
  },

  methods: {
    getDetail: function getDetail() {
      var _this = this;

      this.request({
        url: "/dispatch/getDispatchDetail?id=" + this.iframeData.id,
        method: "get"
      }).then(function (res) {
        var data = res.data;
        if (data.status == 1) {
          _this.dataInfo = data.data;
          //console.log(JSON.stringify(this.dataInfo));
        }
      });
    },
    isCancel: function isCancel() {
      this.$layer.close(this.layerid);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-649130c9","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/dispatch/printing.vue
var printing_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-page-layer",attrs:{"id":"dispatch-print"}},[_c('div',{attrs:{"id":"printMe"}},[_c('h3',{staticClass:"ptitle"},[_vm._v("调度命令 （行车调度）")]),_vm._v(" "),_c('p',{staticClass:"pdate"},[_vm._v("发令时间 ： "+_vm._s(_vm.dataInfo.create_time))]),_vm._v(" "),_c('table',[_c('tbody',[_c('tr',[_vm._m(0),_vm._v(" "),_c('td',[_c('p',[_vm._v(_vm._s(_vm.dataInfo.number))])]),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('td',[_c('p',[_vm._v(_vm._s(_vm.dataInfo.dispatch))])]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('td',[_c('p',[_vm._v(_vm._s(_vm.dataInfo.station==""?"无":_vm.dataInfo.station))])])]),_vm._v(" "),_c('tr',[_vm._m(3),_vm._v(" "),_c('td',[_c('p',[_vm._v(_vm._s(_vm.dataInfo.loco))])]),_vm._v(" "),_vm._m(4),_vm._v(" "),_c('td',[_c('p',[_vm._v(_vm._s(_vm.dataInfo.master))])]),_vm._v(" "),_vm._m(5),_vm._v(" "),_c('td',[_c('p',[_vm._v(_vm._s(_vm.dataInfo.driver==""?"无":_vm.dataInfo.driver))])])]),_vm._v(" "),_c('tr',[_vm._m(6),_vm._v(" "),_c('td',[_c('p',[_vm._v(_vm._s(_vm.dataInfo.station_worker==""?"无":_vm.dataInfo.station_worker))])]),_vm._v(" "),_vm._m(7),_vm._v(" "),_c('td',{attrs:{"colspan":"3"}},[_c('p',[_vm._v(_vm._s(_vm.dataInfo.location==""?"无":_vm.dataInfo.location))])])]),_vm._v(" "),_c('tr',[_vm._m(8),_vm._v(" "),_c('td',{attrs:{"colspan":"5"}},[_c('p',[_vm._v(_vm._s(_vm.dataInfo.description))])])])])]),_vm._v(" "),_c('p',{staticStyle:{"padding-top":"10px"}},[_vm._v("注：本调度命令一式四份，调度留存一份，联络员，施工负责人各一份。")])]),_vm._v(" "),_c('div',{staticClass:"app-dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{directives:[{name:"print",rawName:"v-print",value:(_vm.printObj),expression:"printObj"}],staticClass:"redbtn"},[_vm._v("打印信息")])],1)])}
var printing_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('b',{staticClass:"tname"},[_vm._v("命令号")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('b',{staticClass:"tname"},[_vm._v("调度")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('b',{staticClass:"tname"},[_vm._v("车站")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('b',{staticClass:"tname"},[_vm._v("机车")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('b',{staticClass:"tname"},[_vm._v("车长")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('b',{staticClass:"tname"},[_vm._v("司机")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('b',{staticClass:"tname"},[_vm._v("值班员")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('b',{staticClass:"tname"},[_vm._v("受令处所")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('b',{staticClass:"tname"},[_vm._v("内容")])])}]
var printing_esExports = { render: printing_render, staticRenderFns: printing_staticRenderFns }
/* harmony default export */ var dispatch_printing = (printing_esExports);
// CONCATENATED MODULE: ./src/views/dispatch/printing.vue
function printing_injectStyle (ssrContext) {
  __webpack_require__("GutA")
}
var printing_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var printing___vue_template_functional__ = false
/* styles */
var printing___vue_styles__ = printing_injectStyle
/* scopeId */
var printing___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var printing___vue_module_identifier__ = null
var printing_Component = printing_normalizeComponent(
  printing,
  dispatch_printing,
  printing___vue_template_functional__,
  printing___vue_styles__,
  printing___vue_scopeId__,
  printing___vue_module_identifier__
)

/* harmony default export */ var views_dispatch_printing = (printing_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/dispatch/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var dispatch = ({
  name: "",
  data: function data() {
    return {
      page_cur: 1,
      pageTotal: 0,
      page_size: 20,
      page_total: 0,
      lidList: [],
      masterList: [],
      driverList: [],
      dispatchList: [],
      dataList: [],
      searchForm: {
        lid: "",
        dispatch_id: "",
        master_id: "",
        driver_id: "",
        status: "",
        time_range: []
      }
    };
  },
  created: function created() {
    this.getlibLists(); //机车
    this.getUsersListDispatch(); //调度员
    this.getUsersListMaster(); //车长
    this.getUsersListDriver(); //司机
    this.getDataLists();
  },

  methods: {
    onLoadPage: function onLoadPage() {
      this.$router.go(0);
    },
    getlibLists: function getlibLists() {
      var _this = this;

      this.request({
        url: "/dispatch/getLocomotiveLists",
        method: "get"
      }).then(function (res) {
        var data = res.data;
        if (data.status == 1) {
          _this.lidList = data.data;
        }
      });
    },

    //5:车长,6:司机,7:调度值班员
    getUsersListMaster: function getUsersListMaster() {
      var _this2 = this;

      this.request({
        url: "/dispatch/getUsersLists?role_id=5",
        method: "get"
      }).then(function (res) {
        var data = res.data;
        if (data.status == 1) {
          _this2.masterList = data.data;
        }
      });
    },
    getUsersListDriver: function getUsersListDriver() {
      var _this3 = this;

      this.request({
        url: "/dispatch/getUsersLists?role_id=6",
        method: "get"
      }).then(function (res) {
        var data = res.data;
        if (data.status == 1) {
          _this3.driverList = data.data;
        }
      });
    },
    getUsersListDispatch: function getUsersListDispatch() {
      var _this4 = this;

      this.request({
        url: "/dispatch/getUsersLists?role_id=7",
        method: "get"
      }).then(function (res) {
        var data = res.data;
        if (data.status == 1) {
          _this4.dispatchList = data.data;
        }
      });
    },
    getDataLists: function getDataLists() {
      var _this5 = this;

      var page = this.page_cur;
      var lid = this.searchForm.lid;
      var dispatch_id = this.searchForm.dispatch_id;
      var master_id = this.searchForm.master_id;
      var driver_id = this.searchForm.driver_id;
      var status = this.searchForm.status;
      var time_range = this.searchForm.time_range;
      //alert(time_range);
      this.request({
        url: "/dispatch/getDispatchPages",
        method: "get",
        params: {
          page: page,
          lid: lid,
          dispatch_id: dispatch_id,
          master_id: master_id,
          driver_id: driver_id,
          status: status,
          time_range: time_range
        }
      }).then(function (res) {
        var data = res.data;
        if (data.status == 1) {
          _this5.dataList = data.data.data;
          _this5.page_cur = parseInt(data.data.current_page);
          _this5.pageTotal = data.data.total;
          _this5.page_size = data.data.per_page;
          _this5.page_total = data.data.last_page;
        }
      });
    },
    searchEvent: function searchEvent() {
      this.page_cur = 1;
      this.getDataLists();
    },
    pageChange: function pageChange(value) {
      this.page_cur = value;
      this.getDataLists();
    },
    toFirstPage: function toFirstPage() {
      this.pageChange(1);
    },
    toLastPage: function toLastPage() {
      this.page_cur = this.page_total;
      this.pageChange(this.page_total);
    },
    resetSerach: function resetSerach() {
      this.searchForm = {
        lid: "",
        dispatch_id: "",
        master_id: "",
        driver_id: "",
        status: "",
        time_range: ""
      };
      this.getDataLists();
    },

    addInfo: function addInfo() {
      this.$layer.iframe({
        area: ["800px", "600px"],
        title: "新建调度命令",
        skin: "layers",
        shadeClose: false,
        scrollbar: false,
        content: {
          content: views_dispatch_edit,
          parent: this,
          data: {}
        }
      });
    },
    goDetail: function goDetail(id) {
      this.$layer.iframe({
        area: ["800px", "600px"],
        title: "调度命令详情",
        shadeClose: false,
        scrollbar: false,
        content: {
          content: views_dispatch_detail,
          parent: this,
          data: { iframeData: { id: id } }
        }
      });
    },
    goInvalid: function goInvalid(id, index) {
      var _this6 = this;

      this.$confirm("您确定作废命令?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        customClass: "el-message-box-new"
      }).then(function () {
        _this6.request({
          url: "/dispatch/changeStatus",
          method: "post",
          data: { id: id, status: 3 },
          contentType: "application/x-www-form-urlencoded"
        }).then(function (res) {
          var data = res.data;
          if (data.status == 1) {
            _this6.$message({
              type: "success",
              message: "作废成功!"
            });
            _this6.getDataLists();
            _this6.$set(_this6.dataList[index], "status", 3);
          }
        });
      }).catch(function () {});
    },
    goDel: function goDel(id) {
      var _this7 = this;

      this.$confirm("您确定删除命令?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        customClass: "el-message-box-new"
      }).then(function () {
        _this7.request({
          url: "/dispatch/changeStatus",
          method: "post",
          data: { id: id, status: 0 },
          contentType: "application/x-www-form-urlencoded"
        }).then(function (res) {
          var data = res.data;
          if (data.status == 1) {
            _this7.$message({
              type: "success",
              message: "删除成功!"
            });
            _this7.getDataLists();
          }
        });
      }).catch(function () {});
    },

    goPrint: function goPrint(id) {
      this.$layer.iframe({
        area: ["960px", "590px"],
        title: "调度命令（行车调度）",
        shadeClose: false,
        scrollbar: false,
        content: {
          content: views_dispatch_printing,
          parent: this,
          data: { iframeData: { id: id } }
        }
      });
    },
    changeTime: function changeTime(time) {
      if (time !== null && time !== undefined && time !== "") {
        return "<span style='display:block; white-space: nowrap;'>" + time.substring(0, 10) + "</span><span style='display:block; white-space: nowrap;'>" + time.substring(time.length - 8) + "</span>";
      } else {
        return "";
      }
    }
    //

  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-25c8a4c4","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/dispatch/index.vue
var dispatch_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"dispatch"}},[_c('div',{staticClass:"el-menu-top"},[_c('el-menu',{attrs:{"mode":"horizontal"}},[_c('li',{staticClass:"ptitle"},[_c('img',{attrs:{"src":__webpack_require__("yvSC")}}),_vm._v("调度命令\n      ")])])],1),_vm._v(" "),_c('div',{staticClass:"app-page"},[_c('div',{staticClass:"app-page-container"},[_c('div',{staticClass:"app-page-select"},[_c('el-form',{attrs:{"model":_vm.searchForm,"inline":true}},[_c('div',{staticClass:"select-from-inline"},[_c('el-form-item',[_c('el-button',{staticStyle:{"width":"145px"},attrs:{"type":"primary","icon":"el-icon-plus"},on:{"click":_vm.addInfo}},[_vm._v("新建调度命令")])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"机车名称"}},[_c('el-select',{attrs:{"placeholder":"请选择","clearable":""},model:{value:(_vm.searchForm.lid),callback:function ($$v) {_vm.$set(_vm.searchForm, "lid", $$v)},expression:"searchForm.lid"}},_vm._l((_vm.lidList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"值班调度"}},[_c('el-select',{attrs:{"placeholder":"请选择调度员","clearable":""},model:{value:(_vm.searchForm.dispatch_id),callback:function ($$v) {_vm.$set(_vm.searchForm, "dispatch_id", $$v)},expression:"searchForm.dispatch_id"}},_vm._l((_vm.dispatchList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"车长"}},[_c('el-select',{attrs:{"placeholder":"请选择","clearable":""},model:{value:(_vm.searchForm.master_id),callback:function ($$v) {_vm.$set(_vm.searchForm, "master_id", $$v)},expression:"searchForm.master_id"}},_vm._l((_vm.masterList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"司机"}},[_c('el-select',{attrs:{"placeholder":"请选择","clearable":""},model:{value:(_vm.searchForm.driver_id),callback:function ($$v) {_vm.$set(_vm.searchForm, "driver_id", $$v)},expression:"searchForm.driver_id"}},_vm._l((_vm.driverList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}),1)],1)],1),_vm._v(" "),_c('div',{staticClass:"select-from-inline"},[_c('el-form-item',[_c('el-button',{staticClass:"bluebtn",staticStyle:{"width":"145px"},attrs:{"type":"primary","icon":"el-icon-refresh-right"},on:{"click":_vm.onLoadPage}},[_vm._v("更新信息")])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"命令状态"}},[_c('el-select',{attrs:{"placeholder":"请选择","clearable":""},model:{value:(_vm.searchForm.status),callback:function ($$v) {_vm.$set(_vm.searchForm, "status", $$v)},expression:"searchForm.status"}},[_c('el-option',{attrs:{"label":"新命令","value":"1"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"已确认","value":"2"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"已作废","value":"3"}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"开始时间"}},[_c('el-date-picker',{attrs:{"type":"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":['00:00:00', '23:59:59']},model:{value:(_vm.searchForm.time_range),callback:function ($$v) {_vm.$set(_vm.searchForm, "time_range", $$v)},expression:"searchForm.time_range"}})],1),_vm._v(" "),_c('el-form-item',{staticClass:"form-so"},[_c('label',{staticClass:"el-form-item__label"}),_vm._v(" "),_c('el-button',{attrs:{"size":"small","icon":"el-icon-search","type":"primary"},on:{"click":_vm.searchEvent}},[_vm._v("查询")]),_vm._v(" "),_c('el-button',{attrs:{"size":"small","plain":""},on:{"click":_vm.resetSerach}},[_vm._v("重置")])],1)],1)])],1),_vm._v(" "),_c('div',{staticClass:"app-table"},[_c('el-table',{attrs:{"data":_vm.dataList}},[_c('el-table-column',{attrs:{"prop":"number","label":"命令号"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"loco","label":"受令机车","width":"80"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"master","label":"受令车长"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"driver","label":"受令司机"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"location","label":"受令处所"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"dispatch","label":"值班调度"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"status","label":"状态"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.status=='1')?_c('span',{staticClass:"statused"},[_vm._v("新命令")]):_vm._e(),_vm._v(" "),(scope.row.status=='2')?_c('span',{staticClass:"statused"},[_vm._v("已确认")]):_vm._e(),_vm._v(" "),(scope.row.status=='3')?_c('span',{staticClass:"statused"},[_vm._v("已作废")]):_vm._e()]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"create_time","min-width":"80","label":"发令时间"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('p',{domProps:{"innerHTML":_vm._s(_vm.changeTime(scope.row.create_time))}})]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"makesure_time","min-width":"80","label":"确认时间"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.makesure_time.length==0)?_c('p'):_c('p',{domProps:{"innerHTML":_vm._s(_vm.changeTime(scope.row.makesure_time))}})]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作","width":"240"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('div',{staticClass:"app-operation"},[_c('el-button',{staticClass:"btn-blue",attrs:{"size":"mini"},on:{"click":function($event){return _vm.goDetail(scope.row.id)}}},[_vm._v("详情")]),_vm._v(" "),_c('el-button',{staticClass:"btn-blue",attrs:{"disabled":scope.row.status == '3',"size":"mini"},on:{"click":function($event){return _vm.goInvalid(scope.row.id,scope.$index)}}},[_vm._v("作废")]),_vm._v(" "),_c('el-button',{staticClass:"btn-red",attrs:{"title":"作废后才能删除","disabled":scope.row.status != '3',"size":"mini"},on:{"click":function($event){return _vm.goDel(scope.row.id)}}},[_vm._v("删除")]),_vm._v(" "),_c('el-button',{staticClass:"btn-green",attrs:{"size":"mini"},on:{"click":function($event){return _vm.goPrint(scope.row.id)}}},[_vm._v("打印")])],1)]}}])})],1),_vm._v(" "),_c('div',{staticClass:"app-pagination"},[(_vm.dataList.length !== 0)?_c('el-pagination',{staticClass:"pagination",attrs:{"layout":"slot,prev, pager, next,slot,total","page-size":this.page_size,"current-page":this.page_cur,"total":this.pageTotal,"prev-text":"上一页","next-text":"下一页"},on:{"current-change":_vm.pageChange}},[_c('button',{staticClass:"btn-first",attrs:{"type":"button"},on:{"click":_vm.toFirstPage}},[_c('span',[_vm._v("首页")])]),_vm._v(" "),_c('button',{staticClass:"btn-last",attrs:{"type":"button"},on:{"click":_vm.toLastPage}},[_c('span',[_vm._v("尾页")])])]):_vm._e()],1)],1)])])])}
var dispatch_staticRenderFns = []
var dispatch_esExports = { render: dispatch_render, staticRenderFns: dispatch_staticRenderFns }
/* harmony default export */ var views_dispatch = (dispatch_esExports);
// CONCATENATED MODULE: ./src/views/dispatch/index.vue
function dispatch_injectStyle (ssrContext) {
  __webpack_require__("83nR")
}
var dispatch_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var dispatch___vue_template_functional__ = false
/* styles */
var dispatch___vue_styles__ = dispatch_injectStyle
/* scopeId */
var dispatch___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var dispatch___vue_module_identifier__ = null
var dispatch_Component = dispatch_normalizeComponent(
  dispatch,
  views_dispatch,
  dispatch___vue_template_functional__,
  dispatch___vue_styles__,
  dispatch___vue_scopeId__,
  dispatch___vue_module_identifier__
)

/* harmony default export */ var src_views_dispatch = __webpack_exports__["default"] = (dispatch_Component.exports);


/***/ }),

/***/ "GutA":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("49WS");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("0efe647d", content, true);

/***/ }),

/***/ "Pc8a":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\nbody {\r\n  padding-right: 0 !important;\n}\n#dispatch-edit .app-dialog-form {\r\n  padding: 10px 0px 30px 30px;\r\n  display: block;\n}\n#dispatch-edit .app-dialog-form .el-form-item__label {\r\n  width: 100px;\n}\n#dispatch-edit .app-dialog-form .el-input input {\r\n  width: 240px;\n}\n#dispatch-edit .app-dialog-form .el-form--label-top .el-form-item__label {\r\n  padding-bottom: 5px;\n}\n#dispatch-edit .app-dialog-form .bluebtn {\r\n  margin-left: 10px;\n}\n#dispatch-edit .app-dialog-form .redbtn {\r\n  background: #ff5c75;\r\n  border-color: #ff5c75;\n}\n#dispatch-edit .app-dialog-form .contents-select {\r\n  text-align: right;\r\n  margin-right: 20px;\n}\n#dispatch-edit .app-dialog-form .contents-select .el-input input {\r\n  width: auto;\n}\n#dispatch-edit .app-dialog-form .contents-area {\r\n  display: block;\r\n  margin-right: 20px;\n}\n#dispatch-edit .app-dialog-form .contents-area .el-textarea {\r\n  width: 100%;\n}\n#dispatch-edit .app-dialog-form .contents-area .el-textarea__inner {\r\n  width: 100%;\r\n  height: 100px;\r\n  box-sizing: border-box;\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\n}\n#dispatch-edit .app-dialog-form .contents-area p {\r\n  color: #1d397a;\r\n  padding-bottom: 10px;\n}\n#dispatch-edit .app-dialog-form .el-form-item__error {\r\n  padding-top: 5px;\n}\n#dispatch-edit .app-dialog-footer {\r\n  margin-top: 20px;\r\n  margin-right: 20px;\n}\n#dispatch-edit .app-dialog-footer .tips {\r\n  color: #ff5c75;\r\n  font-size: 14px;\n}\n#dispatch-edit .app-dialog-footer .el-button {\r\n  float: right;\r\n  margin-right: 10px;\n}\n.app-dialog-temp .el-textarea__inner {\r\n  height: 120px;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\n}\n.app-dialog-temp .el-textarea {\r\n  width: 100%;\n}\n.app-dialog-temp .el-form-item__error {\r\n  padding-top: 5px;\n}\n.app-dialog-temp .el-form-item {\r\n  margin-bottom: 25px;\n}\n.el-select-height .el-select-dropdown__wrap {\r\n  max-height: 200px;\n}\n.el-from-desc {\r\n  width: 100%;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "cIy6":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.app-video {\r\n  background: none;\r\n  width: 100%;\r\n  height: calc(100vh - 50px);\n}\r\n", ""]);

// exports


/***/ }),

/***/ "dZzb":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("A7aY");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("494d0ae0", content, true);

/***/ }),

/***/ "qWQF":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("cIy6");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("c190b000", content, true);

/***/ })

});