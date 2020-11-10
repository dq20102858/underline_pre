webpackJsonp([43],{

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

/***/ "cIy6":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.app-video {\r\n  background: none;\r\n  width: 100%;\r\n  height: calc(100vh - 50px);\n}\r\n", ""]);

// exports


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