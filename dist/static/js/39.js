webpackJsonp([39],{

/***/ "9Iyx":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("vDJl");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("74fe69b0", content, true);

/***/ }),

/***/ "qSqD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("NYxO");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/apply/weekplanapply.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var weekplanapply = ({
  data: function data() {
    return {
      page_cur: 1,
      pageTotal: 0,
      page_size: 20,
      page_total: 0,
      weekList: [],
      wid: 0,
      dialogVisible: false,
      dialogRemak: "",
      dialogStatus: 2
    };
  },

  computed: extends_default()({}, Object(vuex_esm["b" /* mapGetters */])(["sys_role", "roles"])),
  created: function created() {
    this.getPageList();
  },

  methods: {
    getPageList: function getPageList() {
      var _this = this;

      var page = this.page_cur;
      this.request({
        url: "apply/getApplyLogPages",
        method: "get",
        params: {
          page: page
        }
      }).then(function (res) {
        var data = res.data;
        if (data.status == 1) {
          _this.weekList = data.data.data;
          _this.page_cur = parseInt(data.data.current_page);
          _this.pageTotal = data.data.total;
          _this.page_size = data.data.per_page;
          _this.page_total = data.data.last_page;
        }
      });
    },
    pageChange: function pageChange(value) {
      this.page_cur = value;
      this.getPageList();
    },
    toFirstPage: function toFirstPage() {
      this.pageChange(1);
    },
    toLastPage: function toLastPage() {
      this.page_cur = this.page_total;
      this.pageChange(this.page_total);
    },
    applyInfo: function applyInfo(id) {
      this.dialogVisible = true;
      this.dialogRemak = "";
      this.wid = id;
    },
    applyEvent: function applyEvent() {
      var _this2 = this;

      var id = this.wid;
      var status = this.dialogStatus;
      var remark = this.dialogRemak;
      this.request({
        url: "/apply/updateApplyLog",
        method: "post",
        data: { id: id, status: status, remark: remark }
      }).then(function (res) {
        var data = res.data;
        if (data.status == 1) {
          _this2.$message({
            type: "success",
            message: "审核成功！"
          });
          _this2.dialogVisible = false;
          _this2.getPageList();
        }
      });
    },
    getNextWeekOne: function getNextWeekOne(dates) {
      //获取当前日期的后七天
      var myDate = new Date(dates);
      myDate.setDate(myDate.getDay() == 0 ? myDate.getDate() - 6 : myDate.getDate() - (myDate.getDay() - 1));
      var nextmon = myDate.setDate(myDate.getDate() + 7); //+7代表下一个周一
      var dateNow = new Date();
      var nextweek = new Date(nextmon);
      console.log("dateNow：" + dateNow);
      console.log("nextweek：" + nextweek);
      if (dateNow > nextweek) {
        return 1;
        console.log("guoqi");
      }
      return 0;
    }
    //end

  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-39912628","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/apply/weekplanapply.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app-week-apply"}},[_c('div',{staticClass:"el-menu-top"},[_c('el-menu',{attrs:{"router":"","mode":"horizontal"}},[_c('li',{staticClass:"ptitle"},[_c('img',{attrs:{"src":__webpack_require__("TwrZ")}}),_vm._v("施工请点\n      ")]),_vm._v(" "),_c('el-submenu',{attrs:{"index":"1"}},[_c('template',{slot:"title"},[_vm._v("日班计划")]),_vm._v(" "),_c('el-menu-item',{attrs:{"index":"daychart"}},[_vm._v("日班图表")]),_vm._v(" "),_c('el-menu-item',{staticClass:"is-active",attrs:{"index":"apply"}},[_vm._v("日班列表")]),_vm._v(" "),_c('el-menu-item',{attrs:{"index":"conflictcheck"}},[_vm._v("冲突检测")])],2),_vm._v(" "),_c('el-menu-item',{attrs:{"index":"weekplan"}},[_vm._v("周计划")]),_vm._v(" "),_c('el-menu-item',{staticClass:"is-active",attrs:{"index":"weekplanapply"}},[_vm._v("权限审批")])],1)],1),_vm._v(" "),_c('div',{staticClass:"app-page"},[_c('div',{staticClass:"app-page-container"},[_c('div',{staticClass:"app-table"},[_c('el-table',{attrs:{"data":_vm.weekList}},[_c('el-table-column',{attrs:{"label":"序号","width":"100"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(scope.$index+(_vm.page_cur - 1) * _vm.page_size + 1))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"company","label":"申请单位"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"title","label":"申请人"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"remark","label":"审批建议","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"status","label":"状态"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.status==1)?_c('span',[_vm._v("待审核")]):_vm._e(),_vm._v(" "),(scope.row.status==2)?_c('span',[_vm._v("通过")]):_vm._e(),_vm._v(" "),(scope.row.status==3)?_c('span',[_vm._v("拒绝")]):_vm._e(),_vm._v(" "),(scope.row.status==4)?_c('span',[_vm._v("已过期")]):_vm._e(),_vm._v(" "),(scope.row.status==5)?_c('span',[_vm._v("审核中")]):_vm._e()]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"create_time","label":"申请时间"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作","width":"70"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.status==1)?_c('div',{staticClass:"app-operation"},[(_vm.sys_role==1)?_c('span',[_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.getNextWeekOne(scope.row.create_time)==0),expression:"getNextWeekOne(scope.row.create_time)==0"}]},[_c('el-button',{staticClass:"btn-blue",attrs:{"size":"mini"},on:{"click":function($event){_vm.applyInfo(scope.row.id)}}},[_vm._v("审核")])],1)]):_vm._e()]):_vm._e()]}}])})],1),_vm._v(" "),_c('div',{staticClass:"app-pagination"},[(_vm.weekList.length !== 0)?_c('el-pagination',{staticClass:"pagination",attrs:{"layout":"slot,prev, pager, next,slot,total","page-size":this.page_size,"current-page":this.page_cur,"total":this.pageTotal,"prev-text":"上一页","next-text":"下一页"},on:{"current-change":_vm.pageChange}},[_c('button',{staticClass:"btn-first",attrs:{"type":"button"},on:{"click":_vm.toFirstPage}},[_c('span',[_vm._v("首页")])]),_vm._v(" "),_c('button',{staticClass:"btn-last",attrs:{"type":"button"},on:{"click":_vm.toLastPage}},[_c('span',[_vm._v("尾页")])])]):_vm._e()],1)],1)])]),_vm._v(" "),_c('el-dialog',{staticClass:"dialog-weekplans",attrs:{"width":"600px","close-on-click-modal":false,"title":"审核信息","visible":_vm.dialogVisible},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('el-form',{staticClass:"el-form-custom"},[_c('el-form-item',{attrs:{"label":"审核状态："}},[_c('el-radio',{attrs:{"label":2},model:{value:(_vm.dialogStatus),callback:function ($$v) {_vm.dialogStatus=$$v},expression:"dialogStatus"}},[_vm._v("审核通过")]),_vm._v(" "),_c('el-radio',{attrs:{"label":3},model:{value:(_vm.dialogStatus),callback:function ($$v) {_vm.dialogStatus=$$v},expression:"dialogStatus"}},[_vm._v("审核不通过")])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"审批建议："}},[_c('el-input',{attrs:{"autocomplete":"off","type":"textarea","maxlength":"100","show-word-limit":""},model:{value:(_vm.dialogRemak),callback:function ($$v) {_vm.dialogRemak=$$v},expression:"dialogRemak"}})],1),_vm._v(" "),_c('div',{staticClass:"blank"})],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogVisible = false}}},[_vm._v("关闭")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.applyEvent}},[_vm._v("确定")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var apply_weekplanapply = (esExports);
// CONCATENATED MODULE: ./src/views/apply/weekplanapply.vue
function injectStyle (ssrContext) {
  __webpack_require__("9Iyx")
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
  weekplanapply,
  apply_weekplanapply,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_apply_weekplanapply = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "vDJl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.dialog-weekplans .el-textarea {\r\n  width: 100% !important;\n}\n.dialog-weekplans .el-textarea__inner {\r\n  height: 120px;\n}\n.dialog-weekplans .el-form-item__label {\r\n  width: 110px;\n}\n.dialog-weekplans .el-form-item__content {\r\n  margin-left: 110px;\n}\n.dialog-weekplans .el-input--medium {\r\n  width: 100%;\n}\n.dialog-weekplans .el-select {\r\n  width: 100%;\n}\r\n", ""]);

// exports


/***/ })

});