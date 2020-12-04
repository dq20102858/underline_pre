webpackJsonp([19],{

/***/ "Tk/P":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ppB2");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("e2b69354", content, true);

/***/ }),

/***/ "ppB2":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n#app-apply-chart {\r\n  background-color: #030a2e;\r\n  height: 100vh;\n}\n.maintitle {\r\n  text-align: center;\r\n  font-size: 24px;\r\n  color: #fff;\n}\n.el-menu--collapse .el-menu .el-submenu,\r\n.el-menu--popup {\r\n  min-width: 124px;\r\n  text-align: center;\r\n  padding: 0;\n}\n.el-menu--horizontal .el-menu .el-menu-item.is-active,\r\n.el-menu--horizontal .el-menu .el-submenu.is-active > .el-submenu__title {\r\n  background: #4b6eca;\r\n  color: #fff;\n}\n.app-page-chart {\r\n  font-size: 16px !important;\r\n  padding: 30px;\n}\n.canvas_main {\r\n  /*width: 100%;*/\n}\r\n", ""]);

// exports


/***/ }),

/***/ "wpBv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/json/stringify.js
var stringify = __webpack_require__("mvHQ");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("NYxO");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/apply/daychart.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var daychart = ({
  name: "daychart",
  data: function data() {
    return {
      mark_line: [],
      project_kind_name: [],
      kcolor: ["red", "green", "yellow", "#467aff", "#44ddb5", "#c245d3"]
    };
  },

  computed: extends_default()({}, Object(vuex_esm["b" /* mapGetters */])(["sys_role", "roles"])),
  mounted: function mounted() {
    document.querySelector("#app-menu-items #menu_apply").classList.add("is-active");
    this.getChart();
  },


  methods: {
    getChart: function getChart() {
      var _this = this;

      this.request({
        url: "/apply/getDailyChart",
        method: "get"
      }).then(function (res) {
        var resdata = res.data;
        if (resdata.status == 1) {
          //myChart
          var myChart = _this.$echarts.init(document.getElementById("main"));
          myChart.getDom().style.height = document.body.clientHeight - 280 + "px";
          //站点
          _this.mark_line = JSON.parse(stringify_default()(resdata.data.y).replace(/value/g, "yAxis"));
          console.log(_this.mark_line);
          var minLineNum = Math.min.apply(Math, _this.mark_line.map(function (item) {
            return parseInt(item.yAxis - 1);
          }));
          var maxLineNum = Math.max.apply(Math, _this.mark_line.map(function (item) {
            return parseInt(item.yAxis + 1);
          }));
          //A1 A2 A3 A4
          var typeData = [];
          var dataTypeArr = resdata.data.data;
          dataTypeArr.forEach(function (item) {
            var jlist = [];
            item.lists.forEach(function (item) {
              jlist.push([item.name, item.value]);
            });
            typeData.push({ name: item.type, lists: jlist });
          });
          console.log("typeData：" + stringify_default()(typeData));
          var seriesData = [];
          seriesData.push({
            name: "车站",
            type: "line",
            markLine: {
              silent: true,
              data: _this.mark_line,
              label: {
                normal: {
                  position: "left",
                  formatter: function formatter(value, index) {
                    var aa = value.name.replace(".00", "");
                    return aa.replace(".00", "") + "   ";
                  }
                }
              },
              lineStyle: {
                color: "#7a7a7a"
              },
              animation: false
            }
          });
          var projectData = [];
          for (var k in typeData) {
            seriesData.push({
              name: typeData[k].name,
              type: "scatter",
              symbolSize: 8,
              itemStyle: { normal: { color: _this.kcolor[k] } },
              data: typeData[k].lists
            });
          }
          console.log("projectData：" + stringify_default()(seriesData));
          //时间
          var dayArr = [];
          var tday = resdata.data.x;
          for (var i in tday) {
            dayArr.push(i);
          }
          var dataMinA = new Date(dayArr.shift());
          var dataMaxA = new Date(dayArr.pop());

          var dataMin = new Date(dataMinA.getTime()).setHours(0, 0, 0, 0);
          var dataMax = new Date(dataMaxA.getTime()).setHours(23, 59, 59, 0);

          // dataMin = dataMin);
          //  dataMax = new Date(dataMax);
          console.log(dataMin + "_" + dataMax);
          // let dateTime = new Date(dayArr.pop()).getDate() + 1;

          //           alert(dateTime);
          //option
          var option = {
            textStyle: {
              color: "#fff"
            },
            tooltip: { formatter: "{a}: ({c})" },
            legend: {
              icon: "roundRect",
              itemGap: 20,
              bottom: 0,
              data: ["A1", "A2", "A3", "A4"],
              textStyle: {
                color: "#fff",
                fontSize: 16
              }
            },
            grid: {
              left: "15%",
              right: "5%"
            },
            xAxis: {
              type: "time",
              position: "top",
              min: dataMin,
              max: dataMax,
              maxInterval: 3600 * 12 * 1000,
              splitLine: {
                show: true,
                lineStyle: {
                  color: "#2B2B2B",
                  type: "dotted",
                  width: 1
                }
              }
            },
            yAxis: {
              show: false,
              type: "value",
              min: minLineNum,
              max: maxLineNum,
              scale: true,
              minInterval: 0.5,
              maxInterval: 5,
              splitLine: {
                show: false,
                lineStyle: {
                  color: "#2B2B2B",
                  type: "dotted",
                  width: 1
                }
              },
              axisLabel: {
                show: false,
                showMinLabel: false,
                showMaxLabel: false,
                formatter: function formatter(value, index) {
                  return value;
                }
              }
            },
            // dataZoom: [
            //   {
            //     type: "slider",
            //     filterMode: "weakFilter",
            //     show: true,
            //     zoomLock: true,
            //     xAxisIndex: [0],
            //     top: 24,
            //     textStyle: {
            //       color: "#fff"
            //     },
            //     borderColor: "#2B2B2B",
            //     handleSize: "75%",
            //     fillerColor: "#202f40"
            //   },
            //   {
            //     type: "slider",
            //     filterMode: "weakFilter",
            //     show: true,
            //     yAxisIndex: [0],
            //     left: "96%",
            //     textStyle: {
            //       color: "#fff"
            //     },
            //     borderColor: "#2B2B2B",
            //     handleSize: "75%",
            //     fillerColor: "#202f40"
            //   },
            //   {
            //     type: "inside",
            //     xAxisIndex: [0]
            //   },
            //   {
            //     type: "inside",
            //     yAxisIndex: [0]
            //   }
            // ],
            series: seriesData,
            color: ["#fff"],
            animation: false
          };
          // 使用刚指定的配置项和数据显示图表。
          myChart.setOption(option);
          myChart.resize();
          window.addEventListener("resize", function () {
            myChart.resize();
          });
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7d5128d8","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/apply/daychart.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app-apply-chart"}},[_c('div',{staticClass:"el-menu-top"},[_c('el-menu',{attrs:{"router":"","default-active":"daychart","mode":"horizontal"}},[_c('li',{staticClass:"ptitle"},[_c('img',{attrs:{"src":__webpack_require__("TwrZ")}}),_vm._v("施工请点\n      ")]),_vm._v(" "),_c('el-submenu',{attrs:{"index":"1"}},[_c('template',{slot:"title"},[_vm._v("日班计划")]),_vm._v(" "),_c('el-menu-item',{attrs:{"index":"daychart"}},[_vm._v("日班图表")]),_vm._v(" "),_c('el-menu-item',{attrs:{"index":"apply"}},[_vm._v("日班列表")]),_vm._v(" "),_c('el-menu-item',{attrs:{"index":"conflictcheck"}},[_vm._v("冲突检测")])],2),_vm._v(" "),_c('el-menu-item',[_c('router-link',{attrs:{"to":{name:'weekplan'}}},[_vm._v("周计划")])],1),_vm._v(" "),(_vm.sys_role==1)?_c('el-menu-item',{attrs:{"index":"weekplanapply"}},[_vm._v("权限审批")]):_vm._e()],1)],1),_vm._v(" "),_vm._m(0)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-page-chart"},[_c('div',{staticClass:"maintitle"},[_vm._v("日班图表")]),_vm._v(" "),_c('div',{staticStyle:{"height":"500px","width":"100%"},attrs:{"id":"main"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var apply_daychart = (esExports);
// CONCATENATED MODULE: ./src/views/apply/daychart.vue
function injectStyle (ssrContext) {
  __webpack_require__("Tk/P")
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
  daychart,
  apply_daychart,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_apply_daychart = __webpack_exports__["default"] = (Component.exports);


/***/ })

});