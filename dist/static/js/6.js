webpackJsonp([6,13,17,26],{

/***/ "+/Dh":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ezQS");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("b632f23e", content, true);

/***/ }),

/***/ "+qFp":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("QxNX");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("1cd945be", content, true);

/***/ }),

/***/ "561s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/datav/schedule.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var schedule = ({
  data: function data() {
    return {
      conheight: {
        height: ""
      },
      cwidth: 0,
      stationList: [],
      lineTypeList: [],
      listSchedule: [],
      stationlineHeight: 0,
      stationlineTwoHeight: 0,
      every: 0,
      everyLineType: 0,
      lineTypeMinMileage: 0,
      lineTypeMaxMileage: 0,
      lineTypeEnterMinMileage: 0,
      lineTypeOutMinMileage: 0
    };
  },
  updated: function updated() {
    this.getStationList();
    this.stationlineHeight = this.$refs.reflinebox.offsetHeight;
  },
  created: function created() {
    this.getProjectProcessMap();
  },

  methods: {
    getProjectProcessMap: function getProjectProcessMap() {
      var _this = this;

      this.request({
        url: "/project/projectProcessMap",
        method: "get"
      }).then(function (response) {
        var data = response.data;
        if (data.status == 1) {
          _this.stationList = data.data.stations;
          var linetypeJson = data.data.line_types;
          _this.lineTypeList = linetypeJson;
          for (var i = 0; i < linetypeJson.length; i++) {
            if (linetypeJson[i].id == 1) {
              _this.lineTypeMinMileage = parseInt(linetypeJson[i].start_flag) * 1000 + parseInt(linetypeJson[i].start_length);
              _this.lineTypeMaxMileage = parseInt(linetypeJson[i].end_flag) * 1000 + parseInt(linetypeJson[i].end_length);
            } else if (linetypeJson[i].id == 3) {
              _this.lineTypeEnterMinMileage = parseInt(linetypeJson[i].start_flag) * 1000 + parseInt(linetypeJson[i].start_length);
            } else if (linetypeJson[i].id == 4) {
              _this.lineTypeOutMinMileage = parseInt(linetypeJson[i].start_flag) * 1000 + parseInt(linetypeJson[i].start_length);
            }
          }
          _this.listSchedule = data.data.datas;
        }
      });
    },
    getStationList: function getStationList() {
      var clientWidth = this.$refs.proWrapper.clientWidth;
      var canvasWidth = clientWidth - 130;
      this.cwidth = canvasWidth;
      var lineTypeBetwentMileage = this.lineTypeMaxMileage - this.lineTypeMinMileage;
      var lineTypeTotalMileage = this.lineTypeMaxMileage + this.lineTypeMinMileage;
      this.everyLineType = (parseInt(this.cwidth) / lineTypeBetwentMileage).toFixed(5);
      this.every = (parseInt(canvasWidth) / lineTypeBetwentMileage).toFixed(5);
      // console.log("cwidth" + this.cwidth + "_" + this.everyLineType);

      var canvas = this.$refs.canvasStation;
      var cansText = canvas.getContext("2d");
      canvas.width = canvasWidth;

      // cansText.moveTo(9, 220);
      // cansText.lineTo(canvasWidth, 220);
      // cansText.strokeStyle = "#fff";
      // cansText.lineWidth = 10;
      // cansText.stroke();
      // cansText.moveTo(9, 270);
      // cansText.lineTo(canvasWidth, 270);
      // cansText.stroke();

      //Station=====================Station
      var json = this.stationList;
      var lineTypeMinMileage = this.lineTypeMinMileage;
      var lineTypeMaxMileage = this.lineTypeMaxMileage;
      var every = this.every; //每米长度等于px
      //console.log("every：" + every);
      //
      var img = new Image();
      img.src = __webpack_require__("u8rS");
      img.onload = function () {
        var start = 0;
        for (var i = 0; i < json.length; i++) {
          // 绘制站点图
          var total = parseInt(json[i].start_flag) * 1000 + parseInt(json[i].start_length);
          var startLineX = (total - lineTypeMinMileage) * every;
          // 计算当前站点的x轴
          cansText.drawImage(img, startLineX, 20, 12, 42);
          var endLineX = lineTypeMaxMileage - total;
          // //站名
          cansText.font = "12px Microsoft Yahei";
          cansText.fillStyle = "#fff";
          var origin = json[i].name;
          cansText.fillText(origin, startLineX, 15);
          // for (let x = 0; x < origin.length; x++) {
          //   cansText.fillText(
          //     origin[x],
          //     startLineX,
          //     138 - origin.length * 20 + 20 * x
          //   );
          // }
          //DK
          // let codes = "DK" + json[i].start_flag + " +" + json[i].start_length;
          // cansText.fillStyle = "#5f88f9";
          // cansText.font = "12px  Microsoft Yahei";
          // if (endLineX < 400) {
          //   cansText.fillText(codes, startLineX - 10, 36);
          // } else {
          //   cansText.fillText(codes, startLineX, 36);
          // }
        }
      };
      //Line=====================
      // let lineJson = this.lineTypeList;
      // let lineData = [];
      // for (let i = 0; i < lineJson.length; i++) {
      //   lineData.push(lineJson[i]);
      //   let tfrom =
      //       lineJson[i].name +
      //       "   " +
      //       "DK" +
      //       lineJson[i].start_flag +
      //       "+" +
      //       lineJson[i].start_length,
      //     tend = "DK" + lineJson[i].end_flag + "+" + lineJson[i].end_length;
      //   let startLength = cansText.measureText(tfrom).width,
      //     endLength = cansText.measureText(tend).width;

      //   cansText.font = "12px Microsoft Yahei";
      //   cansText.fillStyle = "#E8C640";
      //   let starttotal =
      //     parseInt(lineJson[i].start_flag) * 1000 +
      //     parseInt(lineJson[i].start_length);
      //   let endtotal =
      //     parseInt(lineJson[i].end_flag) * 1000 +
      //     parseInt(lineJson[i].end_length);
      //   if (lineJson[i].id == 1) {
      //     cansText.fillText(tfrom, 15, 240);
      //     cansText.fillText(tend, parseInt(endLength + canvasWidth - 115), 240);
      //   } else if (lineJson[i].id == 2) {
      //     cansText.fillText(tfrom, 15, 290);
      //     cansText.fillText(tend, parseInt(endLength + canvasWidth - 125), 290);
      //     //3
      //   } else if (lineJson[i].id == 3) {
      //     if (starttotal == 0) {
      //       starttotal = this.lineTypeMinMileage;
      //     }
      //     let startZB = (starttotal - this.lineTypeMinMileage) * every + 9;
      //     let endZB =
      //       parseFloat((endtotal - starttotal) * every) + parseFloat(startZB);
      //     cansText.moveTo(startZB, 320);
      //     cansText.lineTo(endZB, 320);
      //     cansText.stroke();
      //     //
      //     cansText.fillText(tfrom, startZB + 5, 340);
      //     cansText.fillText(tend, endZB - 60, 340);
      //     //4
      //   } else if (lineJson[i].id == 4) {
      //     let startZB = (starttotal - this.lineTypeMinMileage) * every + 10;
      //     let endZB =
      //       parseFloat((endtotal - starttotal) * every) + parseFloat(startZB);
      //     cansText.moveTo(startZB, 370);
      //     cansText.lineTo(endZB, 370);
      //     cansText.stroke();
      //     //
      //     let beteew = endZB - startZB;
      //     if (beteew < 160) {
      //       cansText.fillText(tfrom, startZB - 160, 390);
      //       cansText.fillText(tend, endZB - 80, 390);
      //     } else {
      //       cansText.fillText(tfrom, startZB, 390);
      //       cansText.fillText(tend, endZB - 55, 390);
      //     }
      //   }
      // }
      // //
    },

    lineFill: function lineFill(paras, linename) {
      // paras = [
      //   {
      //     id: 69,
      //     pro_id: 65,
      //     pro_name:
      //       "\u91cc\u7a0b\u4f5c\u4e1a0424\u4f5c\u4e1a\u540d\u79f0\u4f5c\u4e1a\u540d\u79f0\u4f5c\u4e1a\u540d\u79f0",
      //     line_type: 3,
      //     start_flag: "12",
      //     start_length: "400",
      //     end_flag: "18",
      //     end_length: "600"
      //   }
      // ];
      var result = "";
      var start = 0;
      for (var i = 0; i < paras.length; i++) {
        var starMileage = parseInt(paras[i].start_flag) * 1000 + parseInt(paras[i].start_length);
        var endMileage = parseInt(paras[i].end_flag) * 1000 + parseInt(paras[i].end_length);
        var leftPosition = parseFloat(starMileage - this.lineTypeMinMileage) * this.everyLineType;
        var widthPosition = parseFloat(endMileage - starMileage) * this.everyLineType;

        // if (linename == "入场线") {
        //   let enterMinMileage = this.lineTypeEnterMinMileage;
        //   if (enterMinMileage == 0) {
        //      leftPosition =parseFloat(starMileage - this.lineTypeMinMileage) *this.everyLineType;
        //      widthPosition =parseFloat(endMileage - starMileage) * this.everyLineType;
        //   }
        //   else{
        //      leftPosition =parseFloat(starMileage - this.lineTypeEnterMinMileage) *this.everyLineType;
        //      widthPosition =parseFloat(endMileage - starMileage) * this.everyLineType;
        //   }
        if (starMileage == 0) {
          leftPosition = 0;
          widthPosition = parseFloat(endMileage - this.lineTypeMinMileage) * this.everyLineType;
        }
        var titles = "DK " + paras[i].start_flag + "+" + paras[i].start_length + "~" + paras[i].end_flag + "+" + paras[i].end_length;
        result += "<i title='" + titles + "' style='width:" + widthPosition + "px;left:" + leftPosition + "px'></i>";
      }
      return result;
    }
  },
  mounted: function mounted() {
    window.addEventListener("resize", this.getStationList);
  },
  destroyed: function destroyed() {
    window.removeEventListener("resize", this.getStationList);
  }
});

//prototype
CanvasRenderingContext2D.prototype.fillTextVertical = function (text, x, y) {
  var context = this;
  var canvas = context.canvas;

  var arrText = text.split("");
  var arrWidth = arrText.map(function (letter) {
    return context.measureText(letter).width;
  });

  var align = context.textAlign;
  var baseline = context.textBaseline;

  if (align == "left") {
    x = x + Math.max.apply(null, arrWidth) / 2;
  } else if (align == "right") {
    x = x - Math.max.apply(null, arrWidth) / 2;
  }
  if (baseline == "bottom" || baseline == "alphabetic" || baseline == "ideographic") {
    y = y - arrWidth[0] / 2;
  } else if (baseline == "top" || baseline == "hanging") {
    y = y + arrWidth[0] / 2;
  }

  context.textAlign = "center";
  context.textBaseline = "middle";

  // 开始逐字绘制
  arrText.forEach(function (letter, index) {
    // 确定下一个字符的纵坐标位置
    var letterWidth = arrWidth[index];
    // 是否需要旋转判断
    var code = letter.charCodeAt(0);
    if (code <= 256) {
      context.translate(x, y);
      // 英文字符，旋转90°
      context.rotate(90 * Math.PI / 180);
      context.translate(-x, -y);
    } else if (index > 0 && text.charCodeAt(index - 1) < 256) {
      // y修正
      y = y + arrWidth[index - 1] / 2;
    }
    context.fillText(letter, x, y);
    // 旋转坐标系还原成初始态
    context.setTransform(1, 0, 0, 1, 0, 0);
    // 确定下一个字符的纵坐标位置
    var letterWidth = arrWidth[index];
    y = y + letterWidth;
  });
  // 水平垂直对齐方式还原
  context.textAlign = align;
  context.textBaseline = baseline;
};
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-28024896","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/datav/schedule.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"schedule"}},[_vm._m(0),_vm._v(" "),_c('div',{ref:"proWrapper",style:(_vm.conheight),attrs:{"id":"progress"}},[_c('table',{staticClass:"lineTable zylineTable"},[_c('tr',{staticClass:"linebar"},[_vm._m(1),_vm._v(" "),_c('td',{staticClass:"tdbar"},[_c('div',{staticClass:"bar"},[_c('em',{style:({ width: _vm.cwidth + 'px' })})])])]),_vm._v(" "),_c('tr',{staticClass:"linebar"},[_vm._m(2),_vm._v(" "),_c('td',{staticClass:"tdbar"},[_c('div',{staticClass:"bar"},[_c('em',{style:({ width: _vm.cwidth + 'px' })})])])])]),_vm._v(" "),_c('div',{staticClass:"station"},[_c('canvas',{ref:"canvasStation",attrs:{"id":"canvasStation","height":"50"}},[_c('p',[_vm._v("您的系统不支持此程序!")])])]),_vm._v(" "),_c('div',{ref:"reflinebox",staticClass:"linebox"},[_c('table',{staticClass:"lineTable"},_vm._l((_vm.listSchedule),function(item,index){return (index < 3)?_c('tr',{key:item.id,staticClass:"linebar"},[_c('td',{staticStyle:{"width":"90px"}},[_c('div',{staticClass:"tdtitle",attrs:{"title":item.name}},[_vm._v(_vm._s(item.name))])]),_vm._v(" "),_c('td',{staticClass:"tdbar"},_vm._l((item.lines),function(lines){return _c('div',{key:lines.id,staticClass:"bar"},[_c('em',{style:({ width: _vm.cwidth + 'px' }),domProps:{"innerHTML":_vm._s(_vm.lineFill(lines.lists, lines.name))}},[_c('b',[_vm._v(_vm._s(lines.name))])]),_vm._v(" "),_c('span',[_vm._v(_vm._s(lines.name))])])}))]):_vm._e()})),_vm._v(" "),_c('div',{staticClass:"clear"})]),_vm._v(" "),_vm._m(3)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"datav-ptitle"},[_c('h3',[_vm._v("项目进度")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticStyle:{"width":"90px"}},[_c('div',{staticClass:"tdtitle",attrs:{"title":"左线"}},[_vm._v("左线")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticStyle:{"width":"90px"}},[_c('div',{staticClass:"tdtitle",attrs:{"title":"右线"}},[_vm._v("右线")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"lineboxwel"},[_c('span',[_c('em',{staticClass:"a1"}),_vm._v("轨道线")]),_vm._v(" "),_c('span',[_c('em',{staticClass:"a2"}),_vm._v("施工完成")]),_vm._v(" "),_c('span',[_c('em',{staticClass:"a3"}),_vm._v("施工未完成")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var datav_schedule = (esExports);
// CONCATENATED MODULE: ./src/views/datav/schedule.vue
function injectStyle (ssrContext) {
  __webpack_require__("x23C")
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
  schedule,
  datav_schedule,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_datav_schedule = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "6ngR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/datav/topHeader.vue
//
//
//
//
//
//

/* harmony default export */ var topHeader = ({
  name: "TopHeader",
  data: function data() {
    return { timer: "", times: "" };
  },
  mounted: function mounted() {
    this.timer = setInterval(this.timeRun, 1000);
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.timer);
  },
  created: function created() {},

  methods: {
    timeRun: function timeRun() {
      var now = new Date();
      var year = now.getFullYear();
      var month = now.getMonth() + 1; //月份少1
      var date = now.getDate();
      var week = "星期" + "日一二三四五六".split(/(?!\b)/)[now.getDay()];
      var hours = now.getHours();
      if (hours < 10) {
        hours = "0" + hours;
      }
      var minutes = now.getMinutes();
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      var seconds = now.getSeconds();
      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      this.times = year + "年" + month + "月" + date + "日 " + week + "  " + hours + ":" + minutes + ":" + seconds;
    }

    //

  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-dfc519d2","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/datav/topHeader.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"top-header"}},[_c('div',{staticClass:"top-times",attrs:{"id":"top-times"}},[_vm._v(_vm._s(_vm.times))]),_vm._v(" "),_c('div',{staticClass:"center-title"},[_vm._v("无锡地铁四号线施工大数据平台")])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var datav_topHeader = (esExports);
// CONCATENATED MODULE: ./src/views/datav/topHeader.vue
function injectStyle (ssrContext) {
  __webpack_require__("+qFp")
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
  topHeader,
  datav_topHeader,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_datav_topHeader = (Component.exports);

// EXTERNAL MODULE: ./src/views/datav/schedule.vue + 2 modules
var schedule = __webpack_require__("561s");

// EXTERNAL MODULE: ./src/views/datav/personnel.vue + 2 modules
var personnel = __webpack_require__("MK4H");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/datav/monitors.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var monitors = ({
  name: "Monitors",
  data: function data() {
    return {};
  },
  created: function created() {},

  methods: {
    getCompanyList: function getCompanyList() {
      var _this = this;

      this.request({
        url: "/apply/getCompanyLists",
        method: "get"
      }).then(function (res) {
        var data = res.data;
        if (data.status == 1) {
          _this.companyList = data.data;
        }
      });
    },
    getDataList: function getDataList() {
      var _this2 = this;

      var page = this.page_cur;
      this.request({
        url: "/location/getDevicePages",
        method: "get",
        params: {
          page: page
        }
      }).then(function (res) {
        var data = res.data;
        if (data.status == 1) {
          _this2.dataList = data.data.data;
          _this2.page_cur = parseInt(data.data.current_page);
          _this2.pageTotal = data.data.total;
          _this2.page_size = data.data.per_page;
          _this2.page_total = data.data.last_page;
        }
      });
    }
    //

  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-20fdcbf7","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/datav/monitors.vue
var monitors_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"monitors"}},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"datav-list"},[_c('div',{staticClass:"progress-item"},[_c('div',{staticClass:"atxt"},[_vm._v("清点人数")]),_vm._v(" "),_c('el-progress',{attrs:{"percentage":50,"color":"#fe5a27","stroke-width":10}}),_vm._v(" "),_vm._m(1)],1),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('div',{staticClass:"progress-item"},[_c('div',{staticClass:"atxt"},[_vm._v("进场人数")]),_vm._v(" "),_c('el-progress',{attrs:{"percentage":50,"color":"#ffd980","stroke-width":10}}),_vm._v(" "),_vm._m(3)],1),_vm._v(" "),_vm._m(4),_vm._v(" "),_c('div',{staticClass:"progress-item"},[_c('div',{staticClass:"atxt"},[_vm._v("离场人数")]),_vm._v(" "),_c('el-progress',{attrs:{"percentage":50,"color":"#26da06","stroke-width":10}}),_vm._v(" "),_vm._m(5)],1),_vm._v(" "),_vm._m(6),_vm._v(" "),_c('div',{staticClass:"progress-item"},[_c('div',{staticClass:"atxt"},[_vm._v("安全帽")]),_vm._v(" "),_c('el-progress',{attrs:{"percentage":50,"color":"#2e92ff","stroke-width":10}})],1),_vm._v(" "),_vm._m(7),_vm._v(" "),_c('div',{staticClass:"progress-item"},[_c('div',{staticClass:"atxt"},[_vm._v("反光背心")]),_vm._v(" "),_c('el-progress',{attrs:{"percentage":50,"color":"#6be0e3","stroke-width":10}}),_vm._v(" "),_vm._m(8)],1),_vm._v(" "),_vm._m(9)])])}
var monitors_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"datav-ptitle"},[_c('h3',[_vm._v("实时监测")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"anum"},[_vm._v("15/"),_c('em',[_vm._v("23")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"progress-txt"},[_vm._v("清点人数/"),_c('em',[_vm._v("总人数")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"anum"},[_vm._v("15/"),_c('em',[_vm._v("23")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"progress-txt"},[_vm._v("进场人数/"),_c('em',[_vm._v("总人数")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"anum"},[_vm._v("15/"),_c('em',[_vm._v("23")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"progress-txt"},[_vm._v("离场人数/"),_c('em',[_vm._v("总人数")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"progress-txt"},[_vm._v("安全帽/"),_c('em',[_vm._v("总人数")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"anum"},[_vm._v("15/"),_c('em',[_vm._v("23")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"progress-txt"},[_vm._v("反光背心/"),_c('em',[_vm._v("总人数")])])}]
var monitors_esExports = { render: monitors_render, staticRenderFns: monitors_staticRenderFns }
/* harmony default export */ var datav_monitors = (monitors_esExports);
// CONCATENATED MODULE: ./src/views/datav/monitors.vue
function monitors_injectStyle (ssrContext) {
  __webpack_require__("VaHm")
}
var monitors_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var monitors___vue_template_functional__ = false
/* styles */
var monitors___vue_styles__ = monitors_injectStyle
/* scopeId */
var monitors___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var monitors___vue_module_identifier__ = null
var monitors_Component = monitors_normalizeComponent(
  monitors,
  datav_monitors,
  monitors___vue_template_functional__,
  monitors___vue_styles__,
  monitors___vue_scopeId__,
  monitors___vue_module_identifier__
)

/* harmony default export */ var views_datav_monitors = (monitors_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/datav/projectIntro.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var projectIntro = ({
  name: "ProjectIntro",
  data: function data() {
    return {};
  },
  created: function created() {},

  methods: {
    getCompanyList: function getCompanyList() {
      var _this = this;

      this.request({
        url: "/apply/getCompanyLists",
        method: "get"
      }).then(function (res) {
        var data = res.data;
        if (data.status == 1) {
          _this.companyList = data.data;
        }
      });
    },
    getDataList: function getDataList() {
      var _this2 = this;

      var page = this.page_cur;
      this.request({
        url: "/location/getDevicePages",
        method: "get",
        params: {
          page: page
        }
      }).then(function (res) {
        var data = res.data;
        if (data.status == 1) {
          _this2.dataList = data.data.data;
          _this2.page_cur = parseInt(data.data.current_page);
          _this2.pageTotal = data.data.total;
          _this2.page_size = data.data.per_page;
          _this2.page_total = data.data.last_page;
        }
      });
    }
    //

  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-da5a513c","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/datav/projectIntro.vue
var projectIntro_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"project-intro"}},[_c('div',{staticClass:"intro-box"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"intro-info"},[_c('el-scrollbar',{staticStyle:{"height":"100%"}},[_vm._v("\n        无锡地铁4号线一期工程起自刘潭站，串联了\n        城北商务区、河埒商务区、蠡湖新城和太湖\n        新城，穿越惠山区、梁溪区、滨湖区三个板\n        块，至博览中心站，线路全长24.4km，全部 为地下线，设站 18\n        座。线路北端设天河停车 场，南端设具区路车辆段，在金匮公园设一\n        座主变电所。已于2017年全面开工，预计 2021年开通运营。")])],1),_vm._v(" "),_vm._m(1),_vm._v(" "),_vm._m(2)]),_vm._v(" "),_vm._m(3)])}
var projectIntro_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"datav-ptitle",staticStyle:{"padding-top":"0"}},[_c('h3',[_vm._v("项目介绍")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"datav-ptitle"},[_c('h3',[_vm._v("项目概况")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"intro-item"},[_c('p',[_c('i'),_vm._v("项目位置："),_c('span',[_vm._v("无锡")])]),_vm._v(" "),_c('p',[_c('i'),_vm._v("建设单位："),_c('span',[_vm._v("中铁十七局")])]),_vm._v(" "),_c('p',[_c('i'),_vm._v("设计单位："),_c('span',[_vm._v("中铁十七局")])]),_vm._v(" "),_c('p',[_c('i'),_vm._v("监管单位："),_c('span',[_vm._v("无锡电信")])]),_vm._v(" "),_c('p',[_c('i'),_vm._v("总包单位："),_c('span',[_vm._v("纳新科技")])]),_vm._v(" "),_c('p',[_c('i'),_vm._v("建筑面积："),_c('span',[_vm._v("18万平方米")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"intro-box"},[_c('div',{staticClass:"subwap"},[_c('div',{staticClass:"dot dot1"},[_c('i')]),_vm._v(" "),_c('div',{staticClass:"dname1"},[_vm._v("刘潭")]),_vm._v(" "),_c('div',{staticClass:"dot dot2"},[_c('i')]),_vm._v(" "),_c('div',{staticClass:"dname2"},[_vm._v("广石路")]),_vm._v(" "),_c('div',{staticClass:"v-dot3"},[_c('i')]),_vm._v(" "),_c('div',{staticClass:"dname3"},[_vm._v("黄巷站")]),_vm._v(" "),_c('div',{staticClass:"v-dot4"},[_c('i')]),_vm._v(" "),_c('div',{staticClass:"dname4"},[_vm._v("盛岸站")]),_vm._v(" "),_c('div',{staticClass:"dot dot5"},[_c('i')]),_vm._v(" "),_c('div',{staticClass:"dname5"},[_vm._v("惠山古镇站")]),_vm._v(" "),_c('div',{staticClass:"dot dot6"},[_c('i')]),_vm._v(" "),_c('div',{staticClass:"dname6"},[_vm._v("青山湾荣院站")]),_vm._v(" "),_c('div',{staticClass:"dot dot7"},[_c('i')]),_vm._v(" "),_c('div',{staticClass:"dname7"},[_vm._v("河埒口站")]),_vm._v(" "),_c('div',{staticClass:"dot dot8"},[_c('i')]),_vm._v(" "),_c('div',{staticClass:"dname8"},[_vm._v("西园弄站")]),_vm._v(" "),_c('div',{staticClass:"dot dot9"},[_c('i')]),_vm._v(" "),_c('div',{staticClass:"dname9"},[_vm._v("体育中心站")]),_vm._v(" "),_c('div',{staticClass:"dot dot10"},[_c('i')]),_vm._v(" "),_c('div',{staticClass:"dname10"},[_vm._v("夏家边站")]),_vm._v(" "),_c('div',{staticClass:"dot dot11"},[_c('i')]),_vm._v(" "),_c('div',{staticClass:"dname11"},[_vm._v("蠡湖大桥站")]),_vm._v(" "),_c('div',{staticClass:"dot dot12"},[_c('i')]),_vm._v(" "),_c('div',{staticClass:"dname12"},[_vm._v("大剧院站")]),_vm._v(" "),_c('div',{staticClass:"dot dot13"},[_c('i')]),_vm._v(" "),_c('div',{staticClass:"dname13"},[_vm._v("五湖大道站")]),_vm._v(" "),_c('div',{staticClass:"dot dot14"},[_c('i')]),_vm._v(" "),_c('div',{staticClass:"dname14"},[_vm._v("周新苑站")]),_vm._v(" "),_c('div',{staticClass:"dot dot15"},[_c('i')]),_vm._v(" "),_c('div',{staticClass:"dname15"},[_vm._v("市民中心站")]),_vm._v(" "),_c('div',{staticClass:"dot dot16"},[_c('i')]),_vm._v(" "),_c('div',{staticClass:"dname16"},[_vm._v("吴都路站")]),_vm._v(" "),_c('div',{staticClass:"dot dot17"},[_c('i')]),_vm._v(" "),_c('div',{staticClass:"dname17"},[_vm._v("丰润道站")]),_vm._v(" "),_c('div',{staticClass:"dot dot18"},[_c('i')]),_vm._v(" "),_c('div',{staticClass:"dname18"},[_vm._v("博览中心站")])])])}]
var projectIntro_esExports = { render: projectIntro_render, staticRenderFns: projectIntro_staticRenderFns }
/* harmony default export */ var datav_projectIntro = (projectIntro_esExports);
// CONCATENATED MODULE: ./src/views/datav/projectIntro.vue
function projectIntro_injectStyle (ssrContext) {
  __webpack_require__("y0fz")
}
var projectIntro_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var projectIntro___vue_template_functional__ = false
/* styles */
var projectIntro___vue_styles__ = projectIntro_injectStyle
/* scopeId */
var projectIntro___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var projectIntro___vue_module_identifier__ = null
var projectIntro_Component = projectIntro_normalizeComponent(
  projectIntro,
  datav_projectIntro,
  projectIntro___vue_template_functional__,
  projectIntro___vue_styles__,
  projectIntro___vue_scopeId__,
  projectIntro___vue_module_identifier__
)

/* harmony default export */ var views_datav_projectIntro = (projectIntro_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/datav/operation.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var operation = ({
  name: "Operation",
  data: function data() {
    return {
      dataList: []
    };
  },
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
          _this.dataList = data.data.data;
        }
      });
    }
    //

  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7e55d1f5","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/datav/operation.vue
var operation_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"operation"}},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"datav-list"},[_c('ul',{staticClass:"worklist"},[_vm._m(1),_vm._v(" "),_vm._l((_vm.dataList),function(item,index){return (index < 8)?_c('li',{staticClass:"item",class:'p' + index},[_c('i'),_vm._v(" "),_c('div',[_vm._v(_vm._s(item.number))]),_vm._v(" "),_c('div',[_vm._v(_vm._s(item.command_num))]),_vm._v(" "),_c('div',{staticStyle:{"padding-left":"10px"}},[_vm._v(_vm._s(item.description))]),_vm._v(" "),_c('div',{style:({ color: item.status == '拒绝' ? '#FE5A27' : '' })},[_vm._v("\n          "+_vm._s(item.status)+"\n        ")]),_vm._v(" "),_c('div',[_vm._v(_vm._s(item.company))])]):_vm._e()})],2)])])}
var operation_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"datav-ptitle"},[_c('h3',[_vm._v("信息列表")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"header"},[_c('div',[_vm._v("作业编号")]),_vm._v(" "),_c('div',[_vm._v("作业令号")]),_vm._v(" "),_c('div',[_vm._v("作业内容")]),_vm._v(" "),_c('div',[_vm._v("当前状态")]),_vm._v(" "),_c('div',[_vm._v("公司简称")])])}]
var operation_esExports = { render: operation_render, staticRenderFns: operation_staticRenderFns }
/* harmony default export */ var datav_operation = (operation_esExports);
// CONCATENATED MODULE: ./src/views/datav/operation.vue
function operation_injectStyle (ssrContext) {
  __webpack_require__("SClu")
}
var operation_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var operation___vue_template_functional__ = false
/* styles */
var operation___vue_styles__ = operation_injectStyle
/* scopeId */
var operation___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var operation___vue_module_identifier__ = null
var operation_Component = operation_normalizeComponent(
  operation,
  datav_operation,
  operation___vue_template_functional__,
  operation___vue_styles__,
  operation___vue_scopeId__,
  operation___vue_module_identifier__
)

/* harmony default export */ var views_datav_operation = (operation_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/datav/videolist.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var videolist = ({
  name: "videolist",
  data: function data() {
    return {};
  },
  created: function created() {},

  methods: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5a7975ba","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/datav/videolist.vue
var videolist_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"videolist"}},[_c('div',{staticClass:"videos"},[_c('div',{staticClass:"grid-content"},[_c('img',{attrs:{"src":__webpack_require__("HnX2")}})]),_vm._v(" "),_c('div',{staticClass:"grid-content"},[_c('img',{attrs:{"src":__webpack_require__("HRsq")}})]),_vm._v(" "),_c('div',{staticClass:"grid-content"},[_c('img',{attrs:{"src":__webpack_require__("44+u")}})]),_vm._v(" "),_c('div',{staticClass:"grid-content"},[_c('img',{attrs:{"src":__webpack_require__("/m6F")}})])])])}
var videolist_staticRenderFns = []
var videolist_esExports = { render: videolist_render, staticRenderFns: videolist_staticRenderFns }
/* harmony default export */ var datav_videolist = (videolist_esExports);
// CONCATENATED MODULE: ./src/views/datav/videolist.vue
function videolist_injectStyle (ssrContext) {
  __webpack_require__("dBn7")
}
var videolist_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var videolist___vue_template_functional__ = false
/* styles */
var videolist___vue_styles__ = videolist_injectStyle
/* scopeId */
var videolist___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var videolist___vue_module_identifier__ = null
var videolist_Component = videolist_normalizeComponent(
  videolist,
  datav_videolist,
  videolist___vue_template_functional__,
  videolist___vue_styles__,
  videolist___vue_scopeId__,
  videolist___vue_module_identifier__
)

/* harmony default export */ var views_datav_videolist = (videolist_Component.exports);

// EXTERNAL MODULE: ./src/views/datav/diagram.vue + 2 modules
var diagram = __webpack_require__("xmk4");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/datav/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 //项目进度
 //人员进出
 //实时监测
 //
 //
 //
 //运行图
/* harmony default export */ var datav = ({
  name: "DataView",
  components: {
    topHeader: views_datav_topHeader,
    schedule: schedule["default"],
    personnel: personnel["default"],
    monitors: views_datav_monitors,
    projectIntro: views_datav_projectIntro,
    operation: views_datav_operation,
    videolist: views_datav_videolist,
    diagram: diagram["default"]
  },
  data: function data() {
    return {
      fatherWidth: 0
    };
  },
  mounted: function mounted() {
    // this.fatherWidth = document.getElementById("diagram").clientWidth;
  },
  created: function created() {},

  methods: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2c6c83ab","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/datav/index.vue
var datav_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"data-view"}},[_c('dv-full-screen-container',[_c('top-header'),_vm._v(" "),_c('div',{staticClass:"main-content"},[_c('div',{staticClass:"block-left-right-content"},[_c('project-intro'),_vm._v(" "),_c('div',{staticClass:"block-top-bottom-content"},[_c('div',{staticClass:"block-diagram"},[_c('diagram')],1),_vm._v(" "),_c('div',{staticClass:"block-diagram-content"},[_c('videolist'),_vm._v(" "),_c('operation')],1)])],1),_vm._v(" "),_c('div',{staticClass:"block-two-content"},[_c('schedule'),_vm._v(" "),_c('personnel'),_vm._v(" "),_c('monitors')],1)])],1)],1)}
var datav_staticRenderFns = []
var datav_esExports = { render: datav_render, staticRenderFns: datav_staticRenderFns }
/* harmony default export */ var views_datav = (datav_esExports);
// CONCATENATED MODULE: ./src/views/datav/index.vue
function datav_injectStyle (ssrContext) {
  __webpack_require__("+/Dh")
}
var datav_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var datav___vue_template_functional__ = false
/* styles */
var datav___vue_styles__ = datav_injectStyle
/* scopeId */
var datav___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var datav___vue_module_identifier__ = null
var datav_Component = datav_normalizeComponent(
  datav,
  views_datav,
  datav___vue_template_functional__,
  datav___vue_styles__,
  datav___vue_scopeId__,
  datav___vue_module_identifier__
)

/* harmony default export */ var src_views_datav = __webpack_exports__["default"] = (datav_Component.exports);


/***/ }),

/***/ "9Bf1":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n#monitors {  width: 33.3%;\r\n  position: relative;\n}\n#monitors .el-progress-bar__outer {\r\n  height: 6px;\r\n  border-radius: 100px;\r\n  background-color: #2d436d;\n}\n.progress-item {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\n}\n.progress-item .atxt {\r\n  font-size: 14px;\r\n  padding-right: 10px;\n}\n.progress-txt {\r\n  font-size: 12px;\r\n text-align: right;\r\n display: block;\r\n margin-bottom: 12px;\r\n padding-top: 5px;\n}\n.progress-txt  em {\r\n  color: #00d9ff;\n}\n.progress-item .anum {\r\n  font-size: 14px;\r\n  margin-left: -40px;\n}\n.progress-item em {\r\n  color: #00d9ff;\n}\n.progress-item .el-progress {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\n}\n.el-progress__text {\r\n  display: none;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "CQ20":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n#personnel {\r\n  background: #01023a;\r\n  color: #fff;\r\n  width: 33.3%;\r\n  height: 33.3%;\r\n  position: relative;\n}\n.user-box {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  padding: 20px;\n}\n.u-left {\r\n  width: 30%;\r\n  background: url(" + __webpack_require__("9d41") + ") no-repeat;\r\n  background-size: 100% auto;\r\n  min-height: 225px;\n}\n.u-left h3 {\r\n  text-align: center;\r\n  padding-top: 15px;\r\n  margin-bottom: 30px;\n}\n.u-left p {\r\n  text-align: center;\r\n  padding-bottom: 15px;\n}\n.u-left p span {\r\n  display: inline-block;\n}\n.u-right {\r\n  width: 65%;\n}\n.u-right li {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  text-align: center;\r\n  border-top: 1px #204f96 dashed;\r\n  height: 39px;\r\n  line-height: 39px;\r\n  margin-right: 20px;\n}\n.u-right .header div {\r\n  text-align: center;\r\n  width: 20%;\r\n  font-size: 16px;\n}\n.u-right li.item div {\r\n  width: 30%;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\n}\n.u-right li.p0 div {\r\n  background: #06074b;\n}\n.u-right li.p2 div {\r\n  background: #06074b;\n}\n.u-right li.p4 div {\r\n  background: #06074b;\n}\n.u-right li.p6 div {\r\n  background: #06074b;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "CUfd":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n#diagram {\r\n  position: absolute;\r\n  width: 66.6%;\r\n  height: 100%;\r\n  background: #01023a;\n}\n#diagram .station {\r\n  margin: 10px 0 0 0;\r\n  position: relative;\r\n  z-index: 999;\n}\n#diagram .progresslist {\r\n  display: none;\r\n  padding-top: 20px;\r\n  padding-left: 30px;\r\n  color: #fff;\n}\n#diagram .progresslist .namess {\r\n  padding-bottom: 10px;\r\n  display: inline-block;\r\n  padding-right: 14px;\n}\n#diagram .progresslist .el-radio__label {\r\n  color: #fff;\n}\n.clear {\r\n  clear: both;\n}\r\n\r\n/*check-list*/\n.check-lists {\r\n  margin: 20px 30px 0 30px;\n}\n.check-lists .namess {\r\n  color: #fff;\r\n  margin-right: 15px;\n}\n.check-lists .el-checkbox__label {\r\n  color: #fff;\r\n  font-size: 14px;\n}\n.check-lists .bridgechk.is-checked {\r\n  border-color: #cdaa7d !important;\n}\n.check-lists .bridgechk .el-checkbox__input.is-checked .el-checkbox__inner {\r\n  background-color: #cdaa7d;\r\n  border-color: #cdaa7d;\n}\n.check-lists .bridgechk.is-checked .el-checkbox__label {\r\n  color: #cdaa7d;\n}\n.check-lists .tunnelchk.is-checked {\r\n  border-color: #25bfdb !important;\n}\n.check-lists .tunnelchk .el-checkbox__input.is-checked .el-checkbox__inner {\r\n  background-color: #25bfdb;\r\n  border-color: #25bfdb;\n}\n.check-lists .tunnelchk.is-checked .el-checkbox__label {\r\n  color: #25bfdb;\n}\n.check-lists .speedchk.is-checked {\r\n  border-color: #ff9900 !important;\n}\n.check-lists .speedchk .el-checkbox__input.is-checked .el-checkbox__inner {\r\n  background-color: #ff9900;\r\n  border-color: #ff9900;\n}\n.check-lists .speedchk.is-checked .el-checkbox__label {\r\n  color: #ff9900;\n}\n.check-lists .slopechk.is-checked {\r\n  border-color: #6e7b8b !important;\n}\n.check-lists .slopechk .el-checkbox__input.is-checked .el-checkbox__inner {\r\n  background-color: #6e7b8b;\r\n  border-color: #6e7b8b;\n}\n.check-lists .slopechk.is-checked .el-checkbox__label {\r\n  color: #6e7b8b;\n}\n.check-lists .alertchk.is-checked {\r\n  border-color: #e53636 !important;\n}\n.check-lists .alertchk .el-checkbox__input.is-checked .el-checkbox__inner {\r\n  background-color: #e53636;\r\n  border-color: #e53636;\n}\n.check-lists .alertchk.is-checked .el-checkbox__label {\r\n  color: #e53636;\n}\n.check-lists .daocchk.is-checked {\r\n  border-color: #107af7 !important;\n}\n.check-lists .daocchk .el-checkbox__input.is-checked .el-checkbox__inner {\r\n  background-color: #107af7;\r\n  border-color: #107af7;\n}\n.check-lists .daocchk.is-checked .el-checkbox__label {\r\n  color: #107af7;\n}\n.check-lists .buildchk.is-checked {\r\n  border-color: #08ce80 !important;\n}\n.check-lists .buildchk .el-checkbox__input.is-checked .el-checkbox__inner {\r\n  background-color: #08ce80;\r\n  border-color: #08ce80;\n}\n.check-lists .buildchk.is-checked .el-checkbox__label {\r\n  color: #08ce80;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "IY7T":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("CQ20");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("50914377", content, true);

/***/ }),

/***/ "MK4H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/datav/personnel.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var personnel = ({
  name: "Personnel",
  data: function data() {
    return {
      peopleList: [],
      config: {
        header: ["ID", "姓名", "电话", "到访", "身份"],
        data: [["325", "万小龙", "18766666666", "12:00", "工程师"], ["325", "李云", "18766666666", "12:00", "工程师"], ["325", "李云", "18766666666", "12:00", "工程师"], ["325", "李云", "18766666666", "12:00", "工程师"], ["325", "李云", "18766666666", "12:00", "工程师"], ["325", "李云", "18766666666", "12:00", "工程师"], ["325", "李云", "18766666666", "12:00", "工程师"], ["325", "李云", "18766666666", "12:00", "工程师"], ["325", "李云", "18766666666", "12:00", "工程师"], ["325", "李云", "18766666666", "12:00", "工程师"], ["325", "李云", "18766666666", "12:00", "工程师"], ["325", "李云", "18766666666", "12:00", "工程师"], ["325", "李云", "18766666666", "12:00", "工程师"]],
        // indexHeader:'序号',
        // index: true,
        columnWidth: [70, 70, 120],
        rowNum: 5,
        headerBGC: "#01023a",
        headerHeight: 45,
        oddRowBGC: "#01023a",
        evenRowBGC: "#06074b"
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-62df0a6e","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/datav/personnel.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"personnel"}},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"user-box"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"u-right"},[_c('dv-scroll-board',{attrs:{"config":_vm.config}})],1)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"datav-ptitle"},[_c('h3',[_vm._v("人员进出")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"u-left"},[_c('h3',[_vm._v("王小二")]),_vm._v(" "),_c('p',[_c('span',[_vm._v("ID：")]),_vm._v("325")]),_vm._v(" "),_c('p',[_c('span',[_vm._v("电话：")]),_vm._v("18766666666")]),_vm._v(" "),_c('p',[_c('span',[_vm._v("到访时间：")]),_vm._v("12:00")]),_vm._v(" "),_c('p',[_c('span',[_vm._v("身份：")]),_vm._v("工程师")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var datav_personnel = (esExports);
// CONCATENATED MODULE: ./src/views/datav/personnel.vue
function injectStyle (ssrContext) {
  __webpack_require__("IY7T")
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
  personnel,
  datav_personnel,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_datav_personnel = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Q9zW":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n#project-intro {\r\n  position: relative;\r\n  width: 33.3%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\n}\n.intro-box {\r\n  width: 50%;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\n}\n.intro-info {\r\n  height: 40%;\r\n  overflow: hidden;\r\n  margin: 15px 30px;\r\n  background: rgba(8, 19, 87, 0.6);\r\n  padding: 15px;\r\n  line-height: 1.8;\n}\n.intro-item {\r\n  overflow: hidden;\r\n  margin: 15px 30px;\r\n  background: rgba(8, 19, 87, 0.3);\r\n  padding: 15px;\r\n  line-height: 1.8;\n}\n.intro-item i {\r\n  display: inline-block;\r\n  height: 5px;\r\n  width: 5px;\r\n  border-radius: 100%;\r\n  vertical-align: middle;\r\n  background: #15e4ff;\r\n  margin-right: 5px;\n}\n#project-intro .el-scrollbar__wrap {\r\n  overflow-x: hidden;\n}\n.subwap {\r\n  position: relative;\r\n  z-index: 1000;\r\n  height: 600px;\r\n  background: url(" + __webpack_require__("M73T") + ") no-repeat 50px center;\r\n  background-size: auto 550px;\n}\n.subwap .dot {\r\n  padding: 2px;\r\n  border-radius: 100%;\r\n  border: 1px rgba(255, 255, 255, 0.5) solid;\r\n  position: absolute;\n}\n.subwap .dot i {\r\n  height: 5px;\r\n  width: 5px;\r\n  background: #fff;\r\n  border-radius: 100%;\r\n  display: block;\n}\n.subwap .dots {\r\n  padding: 2px;\r\n  border-radius: 100%;\r\n  border: 1px #f7de0f solid;\r\n  position: absolute;\n}\n.subwap .dots i {\r\n  height: 5px;\r\n  width: 5px;\r\n  background: #f7de0f;\r\n  border-radius: 100%;\r\n  display: block;\n}\n.dot1 {\r\n  left: 192px;\r\n  top: 28px;\n}\n.dname1 {\r\n  position: absolute;\r\n  left: 210px;\r\n  top: 25px;\n}\n.dot2 {\r\n  left: 160px;\r\n  top: 46px;\n}\n.dname2 {\r\n  position: absolute;\r\n  left: 100px;\r\n  top: 42px;\n}\n.dot3 {\r\n  top: 96px;\r\n  left: 136px;\n}\n.dname3 {\r\n  position: absolute;\r\n  top: 93px;\r\n  left: 156px;\n}\n.v-dot3 {\r\n  top: 96px;\r\n  left: 136px;\r\n  position: absolute;\r\n  width: 14px;\r\n  height: 14px;\r\n  background-color: #ffff00;\r\n  border-radius: 50%;\n}\n.v-dot3:before {\r\n  content: \"\";\r\n  display: block;\r\n  width: 14px;\r\n  height: 14px;\r\n  border-radius: 50%;\r\n  opacity: 0.7;\r\n  background-color: #ffff00;\r\n   -webkit-animation: scaless 1s infinite cubic-bezier(0, 0, 0.49, 1.02);\r\n           animation: scaless 1s infinite cubic-bezier(0, 0, 0.49, 1.02);\n}\n.v-dot4 {\r\n   top: 136px;\r\n  left: 100px;\r\n  position: absolute;\r\n  width: 14px;\r\n  height: 14px;\r\n  background-color: #ffff00;\r\n  border-radius: 50%;\n}\n.v-dot4:before {\r\n  content: \"\";\r\n  display: block;\r\n  width: 14px;\r\n  height: 14px;\r\n  border-radius: 50%;\r\n  opacity: 0.7;\r\n  background-color: #ffff00;\r\n   -webkit-animation: scaless 1s infinite cubic-bezier(0, 0, 0.49, 1.02);\r\n           animation: scaless 1s infinite cubic-bezier(0, 0, 0.49, 1.02);\n}\n.dot4 {\r\n  top: 136px;\r\n  left: 100px;\n}\n.dname4 {\r\n  position: absolute;\r\n  top: 132px;\r\n  left: 50px;\n}\n.dot5 {\r\n  top: 170px;\r\n  left: 108px;\n}\n.dname5 {\r\n  position: absolute;\r\n  top: 168px;\r\n  left: 25px;\n}\n.dot6 {\r\n  top: 220px;\r\n  left: 95px;\n}\n.dname6 {\r\n  position: absolute;\r\n  top: 216px;\r\n  left: 115px;\n}\n.dot7 {\r\n  top: 260px;\r\n  left: 70px;\n}\n.dname7 {\r\n  position: absolute;\r\n  top: 258px;\r\n  left: 5px;\n}\n.dot8 {\r\n  top: 300px;\r\n  left: 69px;\n}\n.dname8 {\r\n  position: absolute;\r\n  top: 298px;\r\n  left: 5px;\n}\n.dot9 {\r\n  top: 330px;\r\n  left: 70px;\n}\n.dname9 {\r\n  position: absolute;\r\n  top: 328px;\r\n  left: 90px;\n}\n.dot10 {\r\n  top: 365px;\r\n  left: 63px;\n}\n.dname10 {\r\n  position: absolute;\r\n  top: 360px;\r\n  left: 0px;\n}\n.dot11 {\r\n  top: 392px;\r\n  left: 82px;\n}\n.dname11 {\r\n  position: absolute;\r\n  top: 400px;\r\n  left: 10px;\n}\n.dot12 {\r\n  top: 418px;\r\n  left: 124px;\n}\n.dname12 {\r\n  position: absolute;\r\n  top: 414px;\r\n  left: 144px;\n}\n.dot13 {\r\n  top: 444px;\r\n  left: 154px;\n}\n.dname13 {\r\n  position: absolute;\r\n  top: 454px;\r\n  left: 84px;\n}\n.dot14 {\r\n  top: 455px;\r\n  left: 188px;\n}\n.dname14 {\r\n  position: absolute;\r\n  top: 453px;\r\n  left: 212px;\n}\n.dot15 {\r\n  top: 490px;\r\n  left: 204px;\n}\n.dname15 {\r\n  position: absolute;\r\n  top: 487px;\r\n  left: 121px;\n}\n.dot16 {\r\n  top: 520px;\r\n  left: 209px;\n}\n.dname16 {\r\n  position: absolute;\r\n  top: 517px;\r\n  left: 144px;\n}\n.dot17 {\r\n  top: 558px;\r\n  left: 224px;\n}\n.dname17 {\r\n  position: absolute;\r\n  top: 557px;\r\n  left: 160px;\n}\n.dot18 {\r\n  top: 555px;\r\n  left: 249px;\n}\n.dname18 {\r\n  position: absolute;\r\n  top: 530px;\r\n  left: 244px;\n}\n@-webkit-keyframes scales {\n0% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\n}\n50%,\r\n  75% {\r\n    -webkit-transform: scale(2);\r\n            transform: scale(2);\n}\n78%,\r\n  100% {\r\n    opacity: 0;\n}\n}\n@keyframes scales {\n0% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\n}\n50%,\r\n  75% {\r\n    -webkit-transform: scale(2);\r\n            transform: scale(2);\n}\n78%,\r\n  100% {\r\n    opacity: 0;\n}\n}\n@-webkit-keyframes scaless {\n0% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\n}\n50%,\r\n  75% {\r\n    -webkit-transform: scale(3);\r\n            transform: scale(3);\n}\n78%,\r\n  100% {\r\n    opacity: 0;\n}\n}\n@keyframes scaless {\n0% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\n}\n50%,\r\n  75% {\r\n    -webkit-transform: scale(3);\r\n            transform: scale(3);\n}\n78%,\r\n  100% {\r\n    opacity: 0;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ "QxNX":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n#top-header {\r\n  background: #01023a url(" + __webpack_require__("dCHH") + ") no-repeat bottom\r\n    center;\r\n  background-size: 100% auto;\r\n  height: 80px;\n}\n.top-linebg {\r\n  height: 80px;\n}\n.top-times {\r\n  padding: 10px 0 0 30px;\r\n  color: #00d9ff;\r\n  font-size: 18px;\n}\n.header-left-decoration,\r\n.header-right-decoration {\r\n  width: 25%;\r\n  height: 60px;\n}\n.center-title {\r\n  position: absolute;\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n  left: 50%;\r\n  top: 15px;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\n}\r\n", ""]);

// exports


/***/ }),

/***/ "SClu":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("hx8Q");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("3d8ee93c", content, true);

/***/ }),

/***/ "VaHm":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("9Bf1");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("4965a7d6", content, true);

/***/ }),

/***/ "dBn7":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("jIx0");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("82472f6a", content, true);

/***/ }),

/***/ "ezQS":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n#data-view {\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #01023a;\r\n  color: #fff;\n}\n#data-view .dv-scroll-board .rows .row-item {\r\n  height: 40px;\r\n  line-height: 40px;\r\n  text-align: center;\n}\n#data-view .dv-scroll-board .header div {\r\n  text-align: left;\n}\n.datav-ptitle {\r\n  padding: 30px 0 0 30px;\n}\n.datav-ptitle h3 {\r\n  border-left: 5px solid #15e4ff;\r\n  color: #15e4ff;\r\n  font-size: 20px;\r\n  font-weight: 700;\r\n  padding-left: 10px;\n}\n.datav-list {\r\n  padding: 20px 30px;\r\n  overflow: hidden;\n}\n#dv-full-screen-container {\r\n  background: #01023a url(" + __webpack_require__("K2Vy") + ") no-repeat 60px 70px;\r\n  background-size: 800px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\n}\n.main-content {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\n}\n.block-left-right-content {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  margin-top: 20px;\n}\n.block-top-bottom-content {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\n}\n.block-diagram {\r\n  display: block;\r\n  height: 50%;\r\n  width: 100%;\n}\n.block-diagram-content {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  height: 50%;\r\n  overflow: hidden;\n}\n.block-two-content {\r\n  height: 33%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  padding-bottom: 20px;\n}\n.threebox {\r\n  width: 33.333%;\r\n  float: left;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "hx8Q":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n#operation {\r\n  position: relative;\r\n  width:50%;\n}\n#operation .worklist {\n}\n#operation .worklist li {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  text-align: center;\n}\n#operationd .worklist li.item::before {\r\n  content: \".\";\r\n  color: #00d9ff;\r\n  font-size: 30px;\n}\n#operation .worklist .header {\r\n  color: #00d9ff;\r\n  margin-bottom: 15px;\n}\n#operation .worklist .header div {\r\n  text-align: center;\r\n  width: 20%;\r\n  font-size: 16px;\n}\n#operation .worklist li.item {\n}\n#operation .worklist li.item i {\r\n  background: #00d9ff;\r\n  height: 5px;\r\n  width: 5px;\r\n  border-radius: 100%;\r\n  margin-top: 15px;\r\n  margin-right: 10px;\n}\n#operation .worklist li.item div {\r\n  height: 39px;\r\n  line-height: 39px;\r\n  width: 20%;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\n}\n#operation .worklist li.p0 div {\r\n  background: #06074b;\n}\n#operation .worklist li.p2 div {\r\n  background: #06074b;\n}\n#operation .worklist li.p4 div {\r\n  background: #06074b;\n}\n#operation .worklist li.p6 div {\r\n  background: #06074b;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "jIx0":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n#videolist {\r\n  position: relative;\r\n  width: 50%;\n}\n#videolist .videos {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  height: 100%;\r\n  padding-left: 25px;\r\n  padding-top: 25px;\n}\n#videolist .videos .grid-content {\r\n  width: 50%;\r\n  height: 49.6%;\r\n  padding: 5px;\r\n  overflow: hidden;\r\n  display: block;\n}\n#videolist .videos .grid-content img {\r\n  width: 100%;\n}\n#scroll-board {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  margin-left: 20px;\r\n  height: 100%;\r\n  overflow: hidden;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "mPO2":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n#schedule {\r\n  width: 33.3%;\r\n  height: 33.3%;\n}\n#progress {\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #01023a;\n}\n.progress {\r\n  background: #01023a;\r\n  padding-bottom: 30px;\n}\n.station {\r\n  margin: 0px 0px 0px 90px;\r\n  position: relative;\r\n  z-index: 999;\n}\n#schedule .linebox {\r\n  position: relative;\r\n  margin-top: -7px;\n}\n.zylineTable {\r\n  margin-top: 20px;\r\n  margin-bottom:10px;\n}\n.zylineTable .bar em {\r\n  height: 10px;\r\n  background: #fff;\r\n  border: 1px #fff solid !important;\n}\r\n/* lineTable */\n#schedule .lineTable {\r\n  width: 100%;\r\n  border-collapse: collapse;\n}\n#schedule .lineTable td {\r\n  color: #fff;\n}\n#schedule .lineTable .linebar {\n}\n#schedule .lineTable .tdtitle {\r\n  text-align: center;\r\n  overflow: hidden;\r\n  height: 12px;\r\n  padding-left: 5px;\r\n  width: 92px;\r\n  font-size: 12px;\r\n  line-height: 12px;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\n}\n#schedule .tdbar .bar {\r\n  height: 14px;\r\n  overflow: hidden;\r\n  margin-bottom: 5px;\n}\n#schedule .tdbar .bar:last-child {\r\n  border-bottom: 0;\n}\n#schedule .tdbar .bar span {\r\n  font-size: 12px;\r\n  color: #fff;\r\n  line-height: 12px;\r\n  text-align: center;\n}\n#schedule .tdbar .bar em {\r\n  height: 10px;\r\n  display: inline-block;\r\n  position: relative;\r\n  overflow: hidden;\r\n  border: 1px #1a9417 solid;\n}\n#schedule .tdbar .bar em i {\r\n  position: absolute;\r\n  top: 0;\r\n  background: #27db07;\r\n  height: 12px;\r\n  display: inline-block;\r\n  overflow: hidden;\n}\n.tdbar .bar em i:first-child {\r\n  border-left: 0;\n}\n.tdbar .bar em i:last-child {\r\n  border-left: 0;\n}\n.clear {\r\n  clear: both;\n}\n.lineboxwel {\r\n  text-align: right;\r\n  padding-top:20px;\r\n  padding-right: 5px;\n}\n.lineboxwel span {\r\n  text-align: center;\r\n  display: inline-block;\r\n  color: #fff; margin-right: 30px;\r\n  font-size: 12px;\n}\n.lineboxwel em {\r\n  height: 6px;\r\n  width: 60px;\r\n  display: block;\r\n  margin-bottom: 5px;\n}\n.lineboxwel em.a1 {\r\n  background: #fff;\n}\n.lineboxwel em.a2 {\r\n  background: #27db07;\n}\n.lineboxwel em.a3 {\r\n  border: 1px #1a9417 solid;\n}\r\n/* //#27DB07 */\r\n", ""]);

// exports


/***/ }),

/***/ "u8rS":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/staxs.b12aa2f.jpg";

/***/ }),

/***/ "x23C":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("mPO2");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("004a247b", content, true);

/***/ }),

/***/ "xCrV":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("CUfd");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("418ae9b8", content, true);

/***/ }),

/***/ "xmk4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/get-iterator.js
var get_iterator = __webpack_require__("BO1k");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/datav/diagram.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var diagram_canvas = void 0;
var diagram_context = void 0;
var axis_Height = 240;
var offsetX = 0;
var tick_Spacing = 100;
var tick_Height = 8; //刻度线高度
//标尺起点
var axis_LeftLine = {
  x: 30,
  y: 75
};
var axis_LeftLine_Two = {
  x: 30,
  y: 180
};
//出入场线
var axis_OutLine = {
  x: 30,
  y: axis_Height - 160
};
var axis_OutLine_Two = {
  x: 30,
  y: axis_Height - 50
};

var axis_Applay = {
  x: 30,
  y: axis_Height - 450
};
var axis_Applay_two = {
  x: 30,
  y: axis_Height - 330
};
var applyClickXY = [];
/* harmony default export */ var diagram = ({
  data: function data() {
    return {
      conheight: {
        height: ""
      },
      cwidth: 0,
      stationList: [],
      lineTypeList: [],
      listSchedule: [],
      stationlineHeight: 0,
      stationlineTwoHeight: 0,
      everys: 0,
      lineTypeMinMileage: 0,
      lineTypeMaxMileage: 0,
      lineTypeEnterMinMileage: 0,
      lineTypeOutMinMileage: 0,
      applyList: [],
      bridgeCheckValue: true,
      bridgeList: [],
      tunnelCheckValue: true,
      tunnelList: [],
      speedCheckValue: true,
      speedList: [],
      buildCheckValue: true,
      buildList: [],
      alertCheckValue: true,
      alertList: [],
      slopeCheckValue: true,
      slopeList: [],
      daocCheckValue: true,
      daocList: [],
      progressList: [],
      progressListItem: [],
      progressCheckValue: 0
    };
  },

  props: ["fatherWidth"],
  updated: function updated() {},
  created: function created() {
    this.getProjectProcessMap();
  },
  mounted: function mounted() {
    window.addEventListener("resize", this.initCanvas);
  },
  destroyed: function destroyed() {
    window.removeEventListener("resize", this.initCanvas);
  },

  methods: {
    getProjectProcessMap: function getProjectProcessMap() {
      var _this = this;

      this.request({
        url: "/monitor/getMointorDatas",
        method: "get"
      }).then(function (response) {
        var data = response.data;
        if (data.status == 1) {
          _this.stationList = data.data.stations;
          var linetypeJson = data.data.line_types;
          _this.lineTypeList = linetypeJson;
          for (var i = 0; i < linetypeJson.length; i++) {
            if (linetypeJson[i].id == 1) {
              _this.lineTypeMinMileage = parseInt(linetypeJson[i].start_flag) * 1000 + parseInt(linetypeJson[i].start_length);
              _this.lineTypeMaxMileage = parseInt(linetypeJson[i].end_flag) * 1000 + parseInt(linetypeJson[i].end_length);
            } else if (linetypeJson[i].id == 3) {
              _this.lineTypeEnterMinMileage = parseInt(linetypeJson[i].start_flag) * 1000 + parseInt(linetypeJson[i].start_length);
            } else if (linetypeJson[i].id == 4) {
              _this.lineTypeOutMinMileage = parseInt(linetypeJson[i].start_flag) * 1000 + parseInt(linetypeJson[i].start_length);
            }
          }
          //请点
          _this.applyList = data.data.apply_lists;
          _this.speedList = data.data.speed_lists; //限速区
          _this.buildList = data.data.work_lists; //施工地段
          _this.alertList = data.data.alert_lists; //防区
          //施工进度
          if (data.data.project.length > 0) {
            _this.progressList = data.data.project;
            _this.progressCheckValue = data.data.project[0]["name"];
            _this.progressListItem = data.data.project[0].list;
          }
          _this.initCanvas();
          //
        }
      });
    },
    initCanvas: function initCanvas() {
      var that = this;
      var canvasWidth = this.$refs.canvasWrapper.clientWidth - 30;
      this.cwidth = canvasWidth;
      var lineTypeBetwentMileage = this.lineTypeMaxMileage - this.lineTypeMinMileage;
      var lineTypeTotalMileage = this.lineTypeMaxMileage + this.lineTypeMinMileage;
      this.everys = (parseInt(this.cwidth) / lineTypeBetwentMileage).toFixed(5);
      console.log("canvasWidth：" + this.cwidth + "_" + this.everys);

      var lineTypeMinMileage = this.lineTypeMinMileage;
      var everys = this.everys; //每米长度等于px
      // console.log("everys" + everys);

      var canvas = this.$refs.canvasStation;
      var context = canvas.getContext("2d");
      canvas.width = canvasWidth;
      //console.log("lineTypeMinMileage：" + lineTypeMinMileage);
      //左右线
      function drawAxesLine(lineJson) {
        context.beginPath();
        context.strokeStyle = "#fff";
        context.fillStyle = "#fff";
        context.font = "13px Microsoft Yahei";
        context.lineWidth = 10;
        var lineData = [];
        for (var i = 0; i < lineJson.length; i++) {
          lineData.push(lineJson[i]);
          var tfrom = lineJson[i].name + " " + "DK" + lineJson[i].start_flag + "+" + lineJson[i].start_length,
              tend = "DK" + lineJson[i].end_flag + "+" + lineJson[i].end_length;

          //   let startLength = context.measureText(tfrom).width,
          //    endLength = context.measureText(tend).width;

          var starttotal = parseInt(lineJson[i].start_total);
          var endtotal = parseInt(lineJson[i].end_total);
          var startX = (starttotal - lineTypeMinMileage) * everys;

          if (lineJson[i].id == 1) {
            context.moveTo(axis_LeftLine.x, axis_LeftLine.y);
            context.lineTo(canvasWidth, axis_LeftLine.y);
            context.fillText(tfrom, 30, axis_LeftLine.y + 25);
            context.fillText(tend, canvasWidth - 75, axis_LeftLine.y + 25);
          } else if (lineJson[i].id == 2) {
            context.moveTo(axis_LeftLine.x, axis_LeftLine_Two.y);
            context.lineTo(canvasWidth, axis_LeftLine_Two.y);
            context.fillText(tfrom, 30, axis_LeftLine_Two.y + 25);
            context.fillText(tend, canvasWidth - 75, axis_LeftLine_Two.y + 25);
          }
        }
        context.stroke();
      }
      //站点
      function drawAxesStationList(jsonData) {
        var json = jsonData;
        var img = new Image();
        img.src = __webpack_require__("RX0U");
        img.onload = function () {
          var start = 0;
          for (var i = 0; i < json.length; i++) {
            // 绘制站点图
            var total = parseInt(json[i].start_flag) * 1000 + parseInt(json[i].start_length);
            var startLineX = (total - lineTypeMinMileage) * everys;
            if (startLineX == 0) {
              startLineX = axis_LeftLine.x;
            }
            context.drawImage(img, startLineX - 5, 40, 12, 30);
            // //站名
            context.font = "12px Microsoft Yahei";
            context.fillStyle = "#fff";
            var origin = json[i].name;
            context.fillText(origin, startLineX, 15);
            // context.font = "18px Microsoft Yahei";
            // context.fillStyle = "#fff";
            // let origin = json[i].name.split("");
            // for (let x = 0; x < origin.length; x++) {
            //   context.fillText(
            //     origin[x],
            //     startLineX - 8,
            //     axis_LeftLine.y - 85 - origin.length * 20 + 20 * x
            //   );
            // }
            //DK
            var codes = "DK" + json[i].start_flag + " +" + json[i].start_length;
            context.fillStyle = "#5f88f9";
            context.font = "12px  Microsoft Yahei";
            context.fillText(codes, startLineX, 30);
          }
        };
        context.stroke();
      }
      //车定位
      function drawAxesCar(jsonData) {
        context.beginPath();
        var jsonCar = [{
          id: 1,
          name: "ZY01",
          start_flag: 0,
          start_length: 257,
          line_type: 1
        }, {
          id: 1,
          name: "ZY01",
          start_flag: 7,
          start_length: 300,
          line_type: 2
        }, {
          id: 2,
          name: "ZY02",
          start_flag: 3,
          start_length: 430,
          line_type: 2
        }];
        var imgcar = new Image();
        imgcar.src = __webpack_require__("1Dh/");
        imgcar.onload = function () {
          var start = 0;

          for (var i = 0; i < jsonCar.length; i++) {
            context.fillStyle = "#fafafa";
            context.font = " 11px";
            if (jsonCar[i].line_type == 1) {
              var total = parseInt(jsonCar[i].start_flag) * 1000 + parseInt(jsonCar[i].start_length);
              var startLineX = (total - lineTypeMinMileage) * everys;
              if (jsonCar[i].start_flag == 0) {
                startLineX = axis_LeftLine.x;
              }
              context.drawImage(imgcar, startLineX, axis_LeftLine.y - 25, 140, 20);
              //DK
              var codes = jsonCar[i].name + " [ ZDK" + jsonCar[i].start_flag + " +" + jsonCar[i].start_length + " ]";
              context.fillText(codes, startLineX + 18, axis_LeftLine.y - 30);
            } else if (jsonCar[i].line_type == 2) {
              // 绘制站点图
              var _total = parseInt(jsonCar[i].start_flag) * 1000 + parseInt(jsonCar[i].start_length);
              var _startLineX = (_total - lineTypeMinMileage) * everys;
              context.drawImage(imgcar, _startLineX, axis_LeftLine_Two.y - 25, 140, 20);
              //DK
              var _codes = jsonCar[i].name + " [ YDK" + jsonCar[i].start_flag + " +" + jsonCar[i].start_length + " ]";
              context.fillText(_codes, _startLineX + 18, axis_LeftLine_Two.y - 30);
            } //
          }
        };
        context.stroke();
      }
      //人定位
      function drawAxesPeple(jsonData) {
        var jsonCar = [{
          id: 1,
          name: "R",
          start_flag: 8,
          start_length: 300,
          line_type: 1
        }, {
          id: 1,
          name: "R",
          start_flag: 4,
          start_length: 232,
          line_type: 1
        }, {
          id: 1,
          name: "Y",
          start_flag: 1,
          start_length: 300,
          line_type: 2
        }, {
          id: 1,
          name: "Y",
          start_flag: 6,
          start_length: 300,
          line_type: 2
        }];

        var imgcar = new Image();
        imgcar.src = __webpack_require__("+IES");
        imgcar.onload = function () {
          var start = 0;
          context.fillStyle = "#fff ";
          context.font = "12px  Microsoft Yahei";
          for (var i = 0; i < jsonCar.length; i++) {
            if (jsonCar[i].line_type == 1) {
              var total = parseInt(jsonCar[i].start_flag) * 1000 + parseInt(jsonCar[i].start_length);
              var startLineX = (total - lineTypeMinMileage) * everys;
              context.drawImage(imgcar, startLineX - 16, axis_LeftLine.y - 39, 36, 36);
              //DK
              var codes = " [ ZDK" + jsonCar[i].start_flag + " +" + jsonCar[i].start_length + " ]";

              context.fillText(codes, startLineX + 5, axis_LeftLine.y - 39);
            } else if (jsonCar[i].line_type == 2) {
              var _total2 = parseInt(jsonCar[i].start_flag) * 1000 + parseInt(jsonCar[i].start_length);
              var _startLineX2 = (_total2 - lineTypeMinMileage) * everys;
              context.drawImage(imgcar, _startLineX2 - 16, axis_LeftLine_Two.y - 39, 36, 36);
              //DK
              var _codes2 = " [ YDK" + jsonCar[i].start_flag + " +" + jsonCar[i].start_length + " ]";
              context.fillText(_codes2, _startLineX2 + 5, axis_LeftLine_Two.y - 39);
            } //
          }
        };
      }
      //绘制限速区
      function drawSpeedAxis(speedListJson) {
        var json = speedListJson;
        for (var i = 0; i < json.length; i++) {
          context.strokeStyle = "#ff9900";
          context.lineWidth = 10;
          context.fillStyle = "#ff9900";
          context.font = "12px Microsoft Yahei";
          var start = parseInt(json[i].start_flag) * 1000 + parseInt(json[i].start_length);
          var end = parseInt(json[i].end_flag) * 1000 + parseInt(json[i].end_length);
          var startX = (start - lineTypeMinMileage) * everys;
          var endX = (end - lineTypeMinMileage) * everys;
          var centerX = (endX + startX) / 2; //开始结束平均值

          var desc = "限速" + json[i].speed + "公里/小时";
          context.beginPath();
          //画水平直线
          if (json[i].line_type == 1) {
            if (startX == 0) {
              startX = 30;
            }
            context.moveTo(startX, axis_LeftLine.y);
            context.lineTo(endX, axis_LeftLine.y);
            context.fillRect(centerX, axis_LeftLine.y, 2, 30);
            context.fillText(desc, centerX - 45, axis_LeftLine.y + 42);
          } else if (json[i].line_type == 2) {
            if (startX == 0) {
              startX = 30;
            }
            context.moveTo(startX, axis_LeftLine_Two.y);
            context.lineTo(endX, axis_LeftLine_Two.y);
            context.fillRect(centerX, axis_LeftLine_Two.y, 2, 30);
            context.fillText(desc, centerX - 45, axis_LeftLine_Two.y + 42);
          }
          context.stroke();
        }
      }
      //绘制施工路段
      function drawBuildAxis(listJson) {
        var json = listJson;
        for (var i = 0; i < json.length; i++) {
          var start = parseInt(json[i].start_flag) * 1000 + parseInt(json[i].start_length);
          var end = parseInt(json[i].end_flag) * 1000 + parseInt(json[i].end_length);
          context.strokeStyle = "#08ce80";
          context.lineWidth = 10;
          context.fillStyle = "#08ce80";
          context.font = "12px Microsoft Yahei";
          var desc = json[i].name;
          context.beginPath();

          var startX = (start - lineTypeMinMileage) * everys;
          var endX = (end - lineTypeMinMileage) * everys;
          var centerX = (endX + startX) / 2; //开始结束平均值
          //画水平直线
          if (json[i].line_type == 1) {
            if (startX == 0) {
              startX = 30;
            }
            context.moveTo(startX, axis_LeftLine.y);
            context.lineTo(endX, axis_LeftLine.y);
            context.fillRect(centerX, axis_LeftLine.y, 2, 30);
            context.fillText(desc, centerX - 24, axis_LeftLine.y + 42);
          } else if (json[i].line_type == 2) {
            if (startX == 0) {
              startX = 30;
            }
            context.moveTo(startX, axis_LeftLine_Two.y);
            context.lineTo(endX, axis_LeftLine_Two.y);
            context.fillRect(centerX, axis_LeftLine_Two.y, 2, 30);
            context.fillText(desc, centerX - 24, axis_LeftLine_Two.y + 42);
          }
          context.stroke();
        }
      }
      //绘制防区
      function drawAlertAxis(alertListJson) {
        var json = alertListJson;
        for (var i = 0; i < json.length; i++) {
          var start = parseInt(json[i].start_flag) * 1000 + parseInt(json[i].start_length);
          var end = parseInt(json[i].end_flag) * 1000 + parseInt(json[i].end_length);
          context.strokeStyle = "#e53636";
          context.lineWidth = 10;
          context.fillStyle = "#e53636";
          context.font = "12px Microsoft Yahei";
          var desc = "防区 DK" + json[i].start_flag + "+" + json[i].start_length + "- DK" + json[i].end_flag + "+" + json[i].end_length;
          context.beginPath();
          var startX = (start - lineTypeMinMileage) * everys;
          var endX = (end - lineTypeMinMileage) * everys;
          var centerX = (endX + startX) / 2; //开始结束平均值
          if (json[i].line_type == 1) {
            if (startX == 0) {
              startX = 30;
            }
            context.moveTo(startX, axis_LeftLine.y);
            context.lineTo(endX, axis_LeftLine.y);
            context.fillRect(centerX, axis_LeftLine.y, 2, 30);
            context.fillText(desc, centerX - 80, axis_LeftLine.y + 42);
          } else if (json[i].line_type == 2) {
            if (startX == 0) {
              startX = 30;
            }
            context.moveTo(startX, axis_LeftLine_Two.y);
            context.lineTo(endX, axis_LeftLine_Two.y);
            context.fillRect(centerX, axis_LeftLine_Two.y, 2, 30);
            context.fillText(desc, centerX - 80, axis_LeftLine_Two.y + 42);
          }
          context.stroke();
          //
        }
      }
      //绘制请点
      function drawAxesApply(jsonData) {
        var json = jsonData;
        var json1 = [{
          line_type: 1,
          number: "A1-2-007-1",
          command_num: "(2020)\u5B57\u7B2C04.21-007-2",
          description: "\u98CE\u98CE\u5149\u5149",
          work_area: "DK0+600\u81F3DK1+804",
          start_time: "2020-04-28 00:00:00",
          end_time: "2020-04-28 23:59:59",
          start_flag: "0",
          start_length: "600",
          end_flag: "1",
          end_length: "804",
          type: "A1",
          start_total: 600,
          end_total: 10604
        }, {
          line_type: 1,
          number: "A4-2-007-1",
          command_num: "(2020)\u5B57\u7B2C04.21-007-2",
          description: "\u98CE\u98CE\u5149\u5149",
          work_area: "DK4+232\u81F3DK5+245",
          start_time: "2020-04-28 00:00:00",
          end_time: "2020-04-28 23:59:59",
          start_flag: "4",
          start_length: "232",
          end_flag: "5",
          end_length: "245",
          type: "A4",
          start_total: 40232,
          end_total: 50245
        }, {
          line_type: 2,
          number: "A3-2-007-1",
          command_num: "(2020)\u5B57\u7B2C04.21-007-2",
          description: "\u98CE\u98CE\u5149\u5149",
          work_area: "DK14+160\u81F3DK21+370",
          start_time: "2020-04-28 00:00:00",
          end_time: "2020-04-28 23:59:59",
          start_flag: "6",
          start_length: "736",
          end_flag: "9",
          end_length: "808",
          type: "A3",
          start_total: 14600,
          end_total: 21370
        }];
        //  let clickXYApplyList = [];

        var _loop = function _loop(i) {
          var start = parseInt(json[i].start_flag) * 1000 + parseInt(json[i].start_length);
          var end = parseInt(json[i].end_flag) * 1000 + parseInt(json[i].end_length);
          var dksatrt = "YDK" + json[i].start_flag + " +" + json[i].start_length;
          var dkend = "YDK" + json[i].end_flag + " +" + json[i].end_length;
          var startX = (start - lineTypeMinMileage) * everys;
          if (parseInt(json[i].start_flag) == 0) {
            startX = startX + axis_LeftLine.x;
          }
          var endX = (end - lineTypeMinMileage) * everys;
          var centerX = (endX + startX) / 2; //开始结束平均值

          //  startX=startX+axis_LeftLine.x;
          console.log("startX：" + startX);

          var desc = json[i].type;
          context.lineWidth = 2;
          //context.fillStyle = "#ffff00";
          // context.strokeStyle = "#ffff00";
          if (json[i].type == "A1") {
            context.fillStyle = "#f14e0e";
            context.strokeStyle = "#f14e0e";
          } else if (json[i].type == "A2") {
            context.fillStyle = "#fd7510";
            context.strokeStyle = "#fd7510";
          } else if (json[i].type == "A3") {
            context.fillStyle = "#fda328";
            context.strokeStyle = "#fda328";
          } else if (json[i].type == "A4") {
            context.fillStyle = "#f2c136";
            context.strokeStyle = "#f2c136";
          }
          context.beginPath();
          if (json[i].line_type == 1) {
            //画水平直线
            context.fillRect(startX, axis_Applay.y - 8, 2, 15);
            context.fillRect(endX, axis_Applay.y - 8, 2, 15);
            context.moveTo(startX, axis_Applay.y);
            context.lineTo(endX + 1, axis_Applay.y);
            //文字
            //context.fillRect(centerX - 29, axis_Applay.y - 55, 60, 54);
            applyClickXY.push({
              x: centerX - 29,
              y: axis_Applay.y - 55,
              w: 60,
              h: 54,
              i: json[i]
            });

            var img = new Image();
            img.src = __webpack_require__("nDGB")("./" + desc + ".png");
            img.onload = function () {
              context.drawImage(img, centerX - 29, axis_Applay.y - 56, 60, 54);
            };
          } else if (json[i].line_type == 2) {
            //画水平直线
            context.fillRect(startX, axis_Applay_two.y - 8, 2, 15);
            context.fillRect(endX, axis_Applay_two.y - 8, 2, 15);
            context.moveTo(startX, axis_Applay_two.y);
            context.lineTo(endX + 1, axis_Applay_two.y);
            //文字
            applyClickXY.push({
              x: centerX - 29,
              y: axis_Applay_two.y - 55,
              w: 60,
              h: 54,
              i: json[i]
            });
            var _img = new Image();
            _img.src = __webpack_require__("nDGB")("./" + desc + ".png");
            _img.onload = function () {
              context.drawImage(_img, centerX - 29, axis_Applay_two.y - 56, 60, 54);
            };
          }
          context.stroke();
          //
        };

        for (var i = 0; i < json.length; i++) {
          _loop(i);
        }
        canvas.onclick = function (event) {
          var x = event.pageX - canvas.getBoundingClientRect().left;
          var y = event.pageY - canvas.getBoundingClientRect().top;

          console.log("X：" + x + "_" + y);
          //console.log("clickXY：" + JSON.stringify(applyClickXY));
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = get_iterator_default()(applyClickXY), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var item = _step.value;

              if (x >= item.x && x <= item.x + item.w && y >= item.y && y <= item.y + item.h) {
                var infos = item.i;
                that.$confirm("<p style='color:#4b6eca;padding-left:20px'><span style='color:#1d397a'>作业编号：</span>" + infos.number + "</p><p style='color:#4b6eca;padding-left:20px'><span style='color:#1d397a'>作业令号</span>：" + infos.command_num + "</p>" + "<p style='color:#4b6eca;padding-left:20px'><span style='color:#1d397a'>开始时间：</span>" + infos.start_time + "</p><p style='color:#4b6eca;padding-left:20px'><span style='color:#1d397a'>结束时间：</span>" + infos.end_time + "</p>" + "<p style='color:#4b6eca;padding-left:20px'><span style='color:#1d397a'>施工区间：</span>" + infos.work_area + "</p><p style='color:#4b6eca;padding-left:20px'><span style='color:#1d397a'>施工内容：</span>" + infos.description + "</p>", {
                  distinguishCancelAndClose: true,
                  dangerouslyUseHTMLString: true,
                  showCancelButton: false,
                  showConfirmButton: false
                }).catch(function () {});
                break;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        };
      }
      //绘制施工进度
      function drawProgressAxis(sprogressListJson) {
        var json = sprogressListJson;
        console.log(sprogressListJson);
        var json1 = [{
          id: 233,
          pro_id: 110,
          pro_name: "\u6D4B\u8BD52",
          line_type: 1,
          start_flag: "0",
          start_length: "257",
          end_flag: "0",
          end_length: "300",
          line: "\u5DE6\u7EBF"
        }];
        for (var i = 0; i < json.length; i++) {
          if (json[i].start_flag != null) {
            var start = parseInt(json[i].start_flag) * 1000 + parseInt(json[i].start_length);
            var end = parseInt(json[i].end_flag) * 1000 + parseInt(json[i].end_length);

            var _startX = axis_LeftLine.x + (start - lineTypeMinMileage) * everys;
            var _endX = axis_LeftLine.x + (end - lineTypeMinMileage) * everys;
            // console.log(
            //   "startX：" + startX + " endX：" + endX + "_" + lineTypeMinMileage
            // );
            context.lineWidth = 10;
            context.strokeStyle = "#27DB07";
            context.beginPath();
            if (json[i].line_type == 1) {
              context.moveTo(_startX, axis_LeftLine.y);
              context.lineTo(_endX + 1, axis_LeftLine.y);
            } else if (json[i].line_type == 2) {
              context.moveTo(_startX, axis_LeftLine_Two.y);
              context.lineTo(_endX + 1, axis_LeftLine_Two.y);
            } else if (json[i].line_type == 3) {
              if (start == 0) {
                _startX = 0;
                _endX = end * everys;
              }
              context.moveTo(_startX, axis_OutLine.y);
              context.lineTo(_endX + 1, axis_OutLine.y);
            } else if (json[i].line_type == 4) {
              if (start == 0) {
                _startX = 0;
                _endX = end * everys;
              }
              context.moveTo(_startX, axis_OutLine_Two.y);
              context.lineTo(_endX + 1, axis_OutLine_Two.y);
            }
            context.stroke();
          }
          //
        }
      }
      //====================================
      drawAxesLine(this.lineTypeList);
      drawAxesStationList(this.stationList);
      //限速区
      if (this.speedCheckValue) {
        drawSpeedAxis(this.speedList);
      }
      //施工路段
      if (this.buildCheckValue) {
        drawBuildAxis(this.buildList);
      }
      //防区
      if (this.alertList.length > 0) {
        if (this.alertCheckValue) {
          drawAlertAxis(this.alertList);
        }
      }
      //施工进度
      // if (this.progressCheckValue) {
      //   drawProgressAxis(this.progressListItem);
      // }
      // drawAxesCar(this.applyList);
      // drawAxesPeple(this.applyList);
      //作业
      //  if (this.applyList.length > 0) {
      //drawAxesApply(this.applyList);
      //   }

      function drawAxisTicksNum(start, startLen, end, endLen, axis_Width, axis_Line_X, axis_Line_y, axis_DK) {
        //查找起始坐标
        var first = darpNum(startLen);
        var last = darpNum(endLen);
        var lastMileage = end + endLen;
        //
        context.beginPath();
        context.font = "12px Microsoft Yahei";
        context.lineWidth = 10;
        context.strokeStyle = "#ffffff";
        context.moveTo(axis_Line_X, axis_Line_y);
        context.lineTo(axis_Width + axis_Line_X + 1, axis_Line_y);
        context.stroke();
        //
        context.beginPath();
        context.fillStyle = "white";
        context.textAlign = "center";
        context.textBaseline = "top";
        context.lineWidth = 2;
        context.strokeStyle = "white";
        var num_Ticks = axis_Width;
        //起点
        var startTicksNum = axis_DK + start / 1000 + " + " + startLen;
        context.fillText(startTicksNum, axis_Line_X, axis_Line_y + 30);
        context.moveTo(offsetX + 1, axis_Line_y + 5);
        context.lineTo(offsetX + 1, axis_Line_y + 20);
        //
        //终点
        var endTicksNum = axis_DK + end / 1000 + " + " + endLen;
        //alert(endTicksNum);
        context.fillText(endTicksNum, axis_Width + axis_Line_X, //guohonglin add
        axis_Line_y + 30);
        context.moveTo(axis_Width + axis_Line_X, //guohonglin add
        axis_Line_y + 5);
        context.lineTo(axis_Width + axis_Line_X, //guohonglin add
        axis_Line_y + 20);
        context.stroke();

        //中间

        axis_Line_X = (parseInt(first) - parseInt(startLen)) * everys;
        var num = 0;
        var minKm = start / 1000;
        for (var i = 1; i <= axis_Width; i++) {
          var nums = parseInt(first) + parseInt(200 * num);
          var endFlagNum = parseInt(minKm * 1000) + parseInt(nums);
          if (endFlagNum < lastMileage) {
            if (nums == 1000) {
              minKm++;
              //画数字
              context.fillText(axis_DK + minKm + " + 000", axis_Line_X + i * tick_Spacing, axis_Line_y + 20);
              num = 0;
              first = 200;
              //画小标
              context.moveTo(axis_Line_X + i * tick_Spacing, axis_Line_y + 5);
              context.lineTo(axis_Line_X + i * tick_Spacing, axis_Line_y + 15);
              //
            } else {
              num++;
              nums = parseInt(first) + parseInt(200 * (num - 1));
              //画数字

              context.fillText(nums, axis_Line_X + i * tick_Spacing, axis_Line_y + 20);
              //画小标
              context.moveTo(axis_Line_X + i * tick_Spacing, axis_Line_y + 5);
              context.lineTo(axis_Line_X + i * tick_Spacing, axis_Line_y + 10);
            }
          }
          //
        }
        //结束
        context.stroke();
      }

      function darpNum(startLen) {
        var nums = void 0;
        var startLens = parseInt(startLen);
        if (startLens >= 0 && startLens < 200) {
          nums = 200;
        } else if (startLens >= 200 && startLens < 400) {
          nums = 400;
        } else if (startLens >= 400 && startLens < 600) {
          nums = 600;
        } else if (startLens >= 600 && startLens < 800) {
          nums = 800;
        } else if (startLens >= 800 && startLens <= 1000) {
          nums = 1000;
        }
        return nums;
      }
    },

    //=====================================
    progressCheckSelect: function progressCheckSelect(val) {
      var _this2 = this;

      this.progressList.map(function (item) {
        if (item.name == val) {
          _this2.progressListItem = item.list;
        }
      });
      this.initCanvas();
    },

    //桥
    bridgeCheckSelect: function bridgeCheckSelect() {
      diagram_context.clearRect(0, 0, diagram_canvas.width, diagram_canvas.height);
      this.initCanvas();
    },

    //隧道
    tunnelCheckSelect: function tunnelCheckSelect() {
      this.initCanvas();
    },

    //防区
    alertCheckSelect: function alertCheckSelect() {
      if (this.alertList.length > 0) {
        this.initCanvas();
      }
    },

    //限速区
    speedCheckSelect: function speedCheckSelect() {
      this.initCanvas();
    },

    //施工路段
    buildCheckSelect: function buildCheckSelect() {
      this.initCanvas();
    },

    //坡度
    slopeCheckSelect: function slopeCheckSelect() {
      this.initCanvas();
    },

    //道岔
    daocCheckSelect: function daocCheckSelect() {
      this.initCanvas();
    }
  }
  //进度
});

//prototype
CanvasRenderingContext2D.prototype.fillTextVertical = function (text, x, y) {
  var context = this;
  var canvas = context.canvas;

  var arrText = text.split("");
  var arrWidth = arrText.map(function (letter) {
    return context.measureText(letter).width;
  });

  var align = context.textAlign;
  var baseline = context.textBaseline;

  if (align == "left") {
    x = x + Math.max.apply(null, arrWidth) / 2;
  } else if (align == "right") {
    x = x - Math.max.apply(null, arrWidth) / 2;
  }
  if (baseline == "bottom" || baseline == "alphabetic" || baseline == "ideographic") {
    y = y - arrWidth[0] / 2;
  } else if (baseline == "top" || baseline == "hanging") {
    y = y + arrWidth[0] / 2;
  }

  context.textAlign = "center";
  context.textBaseline = "middle";

  // 开始逐字绘制
  arrText.forEach(function (letter, index) {
    // 确定下一个字符的纵坐标位置
    var letterWidth = arrWidth[index];
    // 是否需要旋转判断
    var code = letter.charCodeAt(0);
    if (code <= 256) {
      context.translate(x, y);
      // 英文字符，旋转90°
      context.rotate(90 * Math.PI / 180);
      context.translate(-x, -y);
    } else if (index > 0 && text.charCodeAt(index - 1) < 256) {
      // y修正
      y = y + arrWidth[index - 1] / 2;
    }
    context.fillText(letter, x, y);
    // 旋转坐标系还原成初始态
    context.setTransform(1, 0, 0, 1, 0, 0);
    // 确定下一个字符的纵坐标位置
    var letterWidth = arrWidth[index];
    y = y + letterWidth;
  });
  // 水平垂直对齐方式还原
  context.textAlign = align;
  context.textBaseline = baseline;
};
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-cb397bf4","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/datav/diagram.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"diagram"}},[_vm._m(0),_vm._v(" "),_c('div',{ref:"canvasWrapper",staticClass:"station"},[_c('canvas',{ref:"canvasStation",attrs:{"id":"canvasStation","height":"240"}},[_c('p',[_vm._v("您的系统不支持此程序!")])])]),_vm._v(" "),_c('div',{staticClass:"check-lists"},[_c('span',{staticClass:"namess"},[_vm._v("显示图形：")]),_vm._v(" "),_c('el-checkbox',{staticClass:"bridgechk",attrs:{"label":"桥"},on:{"change":_vm.bridgeCheckSelect},model:{value:(_vm.bridgeCheckValue),callback:function ($$v) {_vm.bridgeCheckValue=$$v},expression:"bridgeCheckValue"}}),_vm._v(" "),_c('el-checkbox',{staticClass:"tunnelchk",attrs:{"label":"隧道"},on:{"change":_vm.tunnelCheckSelect},model:{value:(_vm.tunnelCheckValue),callback:function ($$v) {_vm.tunnelCheckValue=$$v},expression:"tunnelCheckValue"}}),_vm._v(" "),_c('el-checkbox',{staticClass:"alertchk",attrs:{"label":"防区"},on:{"change":_vm.alertCheckSelect},model:{value:(_vm.alertCheckValue),callback:function ($$v) {_vm.alertCheckValue=$$v},expression:"alertCheckValue"}}),_vm._v(" "),_c('el-checkbox',{staticClass:"slopechk",attrs:{"label":"坡度"},on:{"change":_vm.slopeCheckSelect},model:{value:(_vm.slopeCheckValue),callback:function ($$v) {_vm.slopeCheckValue=$$v},expression:"slopeCheckValue"}}),_vm._v(" "),_c('el-checkbox',{staticClass:"daocchk",attrs:{"label":"道岔"},on:{"change":_vm.daocCheckSelect},model:{value:(_vm.daocCheckValue),callback:function ($$v) {_vm.daocCheckValue=$$v},expression:"daocCheckValue"}}),_vm._v(" "),_c('el-checkbox',{staticClass:"speedchk",attrs:{"label":"限速区"},on:{"change":_vm.speedCheckSelect},model:{value:(_vm.speedCheckValue),callback:function ($$v) {_vm.speedCheckValue=$$v},expression:"speedCheckValue"}}),_vm._v(" "),_c('el-checkbox',{staticClass:"buildchk",attrs:{"label":"施工地段"},on:{"change":_vm.buildCheckSelect},model:{value:(_vm.buildCheckValue),callback:function ($$v) {_vm.buildCheckValue=$$v},expression:"buildCheckValue"}})],1),_vm._v(" "),(this.progressCheckValue != '')?_c('div',{staticClass:"progresslist"},[_c('span',{staticClass:"namess"},[_vm._v("施工进度：")]),_vm._v(" "),_c('el-radio-group',{on:{"change":_vm.progressCheckSelect},model:{value:(_vm.progressCheckValue),callback:function ($$v) {_vm.progressCheckValue=$$v},expression:"progressCheckValue"}},_vm._l((_vm.progressList),function(item){return _c('el-radio',{key:item.name,attrs:{"label":item.name}},[_vm._v(_vm._s(item.name))])}))],1):_vm._e()])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"datav-ptitle",staticStyle:{"padding-top":"0"}},[_c('h3',[_vm._v("施工形象图")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var datav_diagram = (esExports);
// CONCATENATED MODULE: ./src/views/datav/diagram.vue
function injectStyle (ssrContext) {
  __webpack_require__("xCrV")
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
  diagram,
  datav_diagram,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_datav_diagram = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "y0fz":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("Q9zW");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("9725bc1a", content, true);

/***/ })

});