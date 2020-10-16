webpackJsonp([45],{

/***/ "MtuV":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n#demo {\r\n  background: #01023a;\r\n  color: #fff;\r\n  width: 33.3%;\r\n  height: 33.3%;\r\n  position: relative;\n}\n#demo .dv-scroll-board .rows .row-item {\r\n  height: 40px;\r\n  line-height: 40px;\n}\n.scroll-board {\r\n  height: 33.3%;\r\n  padding: 20px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\n}\n#data-view .el-scrollbar__wrap {\r\n  overflow-x: hidden;\r\n  border: 0;\r\n  margin-right: -18px !important;\n}\n.user-box {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  padding: 20px;\n}\n.u-left {\r\n  width: 30%;\r\n  background: url(" + __webpack_require__("9d41") + ") no-repeat;\r\n  background-size: 100% auto;\n}\n.u-left h3 {\r\n  text-align: center;\r\n  padding-top: 15px;\r\n  margin-bottom: 30px;\n}\n.u-left p {\r\n  text-align: center;\r\n  padding-bottom: 15px;\n}\n.u-left p span {\r\n  display: inline-block;\n}\n.u-right {\r\n  width: 65%;\n}\n.u-right li {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  text-align: center;\r\n  border-top: 1px #204f96 dashed;\r\n  height: 39px;\r\n  line-height: 39px;\r\n  margin-right: 20px;\n}\n.u-right .header div {\r\n  text-align: center;\r\n  width: 20%;\r\n  font-size: 16px;\n}\n.u-right li.item div {\r\n  width: 30%;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\n}\n.u-right li.p0 div {\r\n  background: #06074b;\n}\n.u-right li.p2 div {\r\n  background: #06074b;\n}\n.u-right li.p4 div {\r\n  background: #06074b;\n}\n.u-right li.p6 div {\r\n  background: #06074b;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "ar8D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

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
      peopleList: [],
      config: {
        header: ["ID", "电话", "到访时间", "身份"],
        data: [["7899908", "1876666666", "12:00", "工程师"], ["7899908", "1876666666", "12:00", "工程师"], ["7899908", "1876666666", "12:00", "工程师"], ["7899908", "1876666666", "12:00", "工程师"], ["7899908", "1876666666", "12:00", "工程师"], ["7899908", "1876666666", "12:00", "工程师"], ["7899908", "1876666666", "12:00", "工程师"], ["7899908", "1876666666", "12:00", "工程师"], ["7899908", "1876666666", "12:00", "工程师"], ["7899908", "1876666666", "12:00", "工程师"], ["7899908", "1876666666", "12:00", "工程师"], ["7899908", "1876666666", "12:00", "工程师"], ["7899908", "1876666666", "12:00", "工程师"]],
        waitTime: 3000,
        index: true,
        columnWidth: [50],
        align: ["center"],
        rowNum: 5,
        headerBGC: "#01023a",
        headerHeight: 45,
        oddRowBGC: "rgba(0, 44, 81, 0.8)",
        evenRowBGC: "rgba(10, 29, 50, 0.8)"
      }
    };
  },
  created: function created() {
    this.getPeopleList();
  },

  methods: {
    scrll: function scrll() {},
    getPeopleList: function getPeopleList() {
      var _this = this;

      this.request({
        url: "/location/getPeopleLists",
        method: "get"
      }).then(function (res) {
        var data = res.data;
        if (data.status == 1) {
          _this.peopleList = data.data;
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1a7e1d43","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/datav/demo.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"demo"}},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"scroll-board"},[_c('dv-scroll-board',{attrs:{"config":_vm.config}})],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"datav-ptitle"},[_c('h3',[_vm._v("人员进出")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var datav_demo = (esExports);
// CONCATENATED MODULE: ./src/views/datav/demo.vue
function injectStyle (ssrContext) {
  __webpack_require__("bag4")
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

/***/ "bag4":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("MtuV");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("5cbc7cc8", content, true);

/***/ })

});