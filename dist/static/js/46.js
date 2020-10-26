webpackJsonp([46],{

/***/ "TR6b":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n#demo .dv-scroll-board .rows .row-item {\r\n  height: 40px;\r\n  line-height: 40px;\r\n  text-align: center;\n}\n#demo .dv-scroll-board .header div {\r\n  text-align: left;\r\n  font-size: 14px;\r\n  color: #00d9ff;\n}\n.datav-ptitle {\r\n  padding: 0px 0 0 30px;\n}\n.datav-ptitle h3 {\r\n  border-left: 5px solid #15e4ff;\r\n  color: #15e4ff;\r\n  font-size: 20px;\r\n  font-weight: 700;\r\n  padding-left: 10px;\n}\n.datav-list {\r\n  padding: 20px 30px;\r\n  overflow: hidden;\n}\n#demo {\r\n  background: #01023a;\r\n  color: #fff;\r\n  width: 33.3%;\r\n  height: 33.3%;\r\n  position: relative;\n}\n#demo .dv-scroll-board .rows .row-item {\r\n  height: 40px;\r\n  line-height: 40px;\n}\n.scroll-board {\r\n  height: 33.3%;\r\n  padding: 20px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\n}\n#data-view .el-scrollbar__wrap {\r\n  overflow-x: hidden;\r\n  border: 0;\r\n  margin-right: -18px !important;\n}\n.user-box {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  padding: 20px;\n}\n.u-left {\r\n  width: 30%;\r\n  background: url(" + __webpack_require__("9d41") + ") no-repeat;\r\n  background-size: 100% auto;\n}\n.u-left h3 {\r\n  text-align: center;\r\n  padding-top: 15px;\r\n  margin-bottom: 30px;\n}\n.u-left p {\r\n  text-align: center;\r\n  padding-bottom: 15px;\n}\n.u-left p span {\r\n  display: inline-block;\n}\n.u-right {\r\n  width: 65%;\n}\n.u-right li {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  text-align: center;\r\n  border-top: 1px #204f96 dashed;\r\n  height: 39px;\r\n  line-height: 39px;\r\n  margin-right: 20px;\n}\n.u-right .header div {\r\n  text-align: center;\r\n  width: 20%;\r\n  font-size: 16px;\n}\n.u-right li.item div {\r\n  width: 30%;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\n}\n.u-right li.p0 div {\r\n  background: #06074b;\n}\n.u-right li.p2 div {\r\n  background: #06074b;\n}\n.u-right li.p4 div {\r\n  background: #06074b;\n}\n.u-right li.p6 div {\r\n  background: #06074b;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "ar8D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/json/stringify.js
var stringify = __webpack_require__("mvHQ");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/datav/demo.vue

//
//
//
//
//
//
//
//

/* harmony default export */ var demo = ({
  name: "Personnel",
  data: function data() {
    return {
      dataList: [],
      peopleList: [],
      config: {
        header: ["作业编号", "作业令号", "作业内容", "当前状态", "公司简称"],
        data: [
          // [8,"A4-5-007-1","111","未批复","(2020)字第10.16-007-1"]
          // [
          //   "12345",
          //   "(2020)字第10.16-001-76",
          //   "作业内容作业内容作业内容",
          //   "未批复",
          //   "何庆同"
          // ]
        ],
        columnWidth: [90, 180, 180, 100, 100],
        rowNum: 7,
        headerBGC: "#01023a",
        headerHeight: 45,
        oddRowBGC: "#01023a",
        evenRowBGC: "#06074b"
      }
    };
  },
  mounted: function mounted() {},
  created: function created() {
    this.getDataList();
  },

  methods: {
    getDataList: function getDataList() {
      var _this = this;

      var page = 1;
      this.request({
        url: "/apply/getApplyPages",
        method: "get",
        params: {
          page: page
        }
      }).then(function (res) {
        var data = res.data;
        if (data.status == 1) {
          //  this.dataList = data.data.data;
          var json = data.data.data;
          var arr_id = [];
          var arr_number = [];
          var arrJson = [];
          json.map(function (item, i) {
            for (var key in item) {
              arr_number.push(item[key]);
            }
            arrJson.push(arr_number);
          });

          console.log(arrJson);
          //   this.dataList = arrJson;
          _this.dataList = ["12345", "(2020)字第10.16-001-76", "作业内容作业内容作业内容", "未批复", "何庆同"];
          console.log(_this.dataList);
          _this.config.data.push(_this.dataList);
          console.log(stringify_default()(_this.config.data));
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-02feeee6","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/datav/demo.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"demo"}},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"scroll-board"},[_c('dv-scroll-board',{attrs:{"config":_vm.config}})],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"datav-ptitle"},[_c('h3',[_vm._v("人员进出")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var datav_demo = (esExports);
// CONCATENATED MODULE: ./src/views/datav/demo.vue
function injectStyle (ssrContext) {
  __webpack_require__("xHex")
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
  demo,
  datav_demo,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_datav_demo = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "xHex":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("TR6b");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("9697b7b4", content, true);

/***/ })

});