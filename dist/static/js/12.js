webpackJsonp([12],{

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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6af831e2","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/datav/schedule.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"schedule"}},[_vm._m(0),_vm._v(" "),_c('div',{ref:"proWrapper",style:(_vm.conheight),attrs:{"id":"progress"}},[_c('table',{staticClass:"lineTable zylineTable"},[_c('tr',{staticClass:"linebar"},[_vm._m(1),_vm._v(" "),_c('td',{staticClass:"tdbar"},[_c('div',{staticClass:"bar"},[_c('em',{style:({ width: _vm.cwidth + 'px' })})])])]),_vm._v(" "),_c('tr',{staticClass:"linebar"},[_vm._m(2),_vm._v(" "),_c('td',{staticClass:"tdbar"},[_c('div',{staticClass:"bar"},[_c('em',{style:({ width: _vm.cwidth + 'px' })})])])])]),_vm._v(" "),_c('div',{staticClass:"station"},[_c('canvas',{ref:"canvasStation",attrs:{"id":"canvasStation","height":"50"}},[_c('p',[_vm._v("您的系统不支持此程序!")])])]),_vm._v(" "),_c('div',{ref:"reflinebox",staticClass:"linebox"},[_c('table',{staticClass:"lineTable"},_vm._l((_vm.listSchedule),function(item,index){return (index < 3)?_c('tr',{key:item.id,staticClass:"linebar"},[_c('td',{staticStyle:{"width":"90px"}},[_c('div',{staticClass:"tdtitle",attrs:{"title":item.name}},[_vm._v(_vm._s(item.name))])]),_vm._v(" "),_c('td',{staticClass:"tdbar"},_vm._l((item.lines),function(lines){return _c('div',{key:lines.id,staticClass:"bar"},[_c('em',{style:({ width: _vm.cwidth + 'px' }),domProps:{"innerHTML":_vm._s(_vm.lineFill(lines.lists, lines.name))}},[_c('b',[_vm._v(_vm._s(lines.name))])]),_vm._v(" "),_c('span',[_vm._v(_vm._s(lines.name))])])}))]):_vm._e()})),_vm._v(" "),_c('div',{staticClass:"clear"})]),_vm._v(" "),_vm._m(3)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"datav-ptitle"},[_c('h3',[_vm._v("项目进度")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticStyle:{"width":"90px"}},[_c('div',{staticClass:"tdtitle",attrs:{"title":"左线"}},[_vm._v("左线")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticStyle:{"width":"90px"}},[_c('div',{staticClass:"tdtitle",attrs:{"title":"右线"}},[_vm._v("右线")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"lineboxwel"},[_c('span',[_c('em',{staticClass:"a1"}),_vm._v("轨道线")]),_vm._v(" "),_c('span',[_c('em',{staticClass:"a2"}),_vm._v("施工完成")]),_vm._v(" "),_c('span',[_c('em',{staticClass:"a3"}),_vm._v("施工未完成")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var datav_schedule = (esExports);
// CONCATENATED MODULE: ./src/views/datav/schedule.vue
function injectStyle (ssrContext) {
  __webpack_require__("oLdN")
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

/***/ "oLdN":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("wfw/");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("160f85fc", content, true);

/***/ }),

/***/ "u8rS":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/staxs.b12aa2f.jpg";

/***/ }),

/***/ "wfw/":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n#schedule {\r\n  width: 33.3%;\r\n  height: 100%;\n}\n#progress {\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #01023a;\n}\n.progress {\r\n  background: #01023a;\r\n  padding-bottom: 30px;\n}\n.station {\r\n  margin: 0px 0px 0px 90px;\r\n  position: relative;\r\n  z-index: 999;\n}\n#schedule .linebox {\r\n  position: relative;\r\n  margin-top: -7px;\n}\n.zylineTable {\r\n  margin-top: 20px;\r\n  margin-bottom:10px;\n}\n.zylineTable .bar em {\r\n  height: 10px;\r\n  background: #fff;\r\n  border: 1px #fff solid !important;\n}\r\n/* lineTable */\n#schedule .lineTable {\r\n  width: 100%;\r\n  border-collapse: collapse;\n}\n#schedule .lineTable td {\r\n  color: #fff;\n}\n#schedule .lineTable .linebar {\n}\n#schedule .lineTable .tdtitle {\r\n  text-align: center;\r\n  overflow: hidden;\r\n  height: 12px;\r\n  padding-left: 5px;\r\n  width: 92px;\r\n  font-size: 12px;\r\n  line-height: 12px;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\n}\n#schedule .tdbar .bar {\r\n  height: 14px;\r\n  overflow: hidden;\r\n  margin-bottom: 5px;\n}\n#schedule .tdbar .bar:last-child {\r\n  border-bottom: 0;\n}\n#schedule .tdbar .bar span {\r\n  font-size: 12px;\r\n  color: #fff;\r\n  line-height: 12px;\r\n  text-align: center;\n}\n#schedule .tdbar .bar em {\r\n  height: 10px;\r\n  display: inline-block;\r\n  position: relative;\r\n  overflow: hidden;\r\n  border: 1px #1a9417 solid;\n}\n#schedule .tdbar .bar em i {\r\n  position: absolute;\r\n  top: 0;\r\n  background: #27db07;\r\n  height: 12px;\r\n  display: inline-block;\r\n  overflow: hidden;\n}\n.tdbar .bar em i:first-child {\r\n  border-left: 0;\n}\n.tdbar .bar em i:last-child {\r\n  border-left: 0;\n}\n.clear {\r\n  clear: both;\n}\n.lineboxwel {\r\n  text-align: right;\r\n  padding-top:20px;\r\n  padding-right: 5px;\n}\n.lineboxwel span {\r\n  text-align: center;\r\n  display: inline-block;\r\n  color: #fff; margin-right: 30px;\r\n  font-size: 12px;\n}\n.lineboxwel em {\r\n  height: 6px;\r\n  width: 60px;\r\n  display: block;\r\n  margin-bottom: 5px;\n}\n.lineboxwel em.a1 {\r\n  background: #fff;\n}\n.lineboxwel em.a2 {\r\n  background: #27db07;\n}\n.lineboxwel em.a3 {\r\n  border: 1px #1a9417 solid;\n}\r\n/* //#27DB07 */\r\n", ""]);

// exports


/***/ })

});