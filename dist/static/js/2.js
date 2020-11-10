webpackJsonp([2],{

/***/ "doOk":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ee7G");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("0c44b7ce", content, true);

/***/ }),

/***/ "ee7G":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n#progress {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #081c33;\n}\n.progress {\r\n  background: #081c33;\n}\r\n/*starte-top*/\n.starte-top {\r\n  padding-top: 30px;\r\n  overflow: hidden;\r\n  margin: 0 30px;\n}\n.starte-top .sleft,\r\n.starte-top .sright {\r\n  background: #4b6eca;\r\n  color: #fff;\r\n  padding: 10px 15px 15px 15px;\r\n  display: block;\r\n  font-size: 16px;\r\n  font-weight: 700;\n}\n.starte-top .sleft {\r\n  float: left;\r\n  margin-right: 20px;\n}\n.starte-top .sright {\r\n  float: right;\n}\n.starte-top .line-a {\r\n  position: relative;\r\n  background: #fff;\r\n  height: 1px;\r\n  display: block;\r\n  margin-top: 6px;\n}\n.starte-top .line-a::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: 0;\r\n  top: 2px;\r\n  width: 10px;\r\n  height: 3px;\r\n  border-bottom: 1px solid #fff;\r\n  -webkit-transform: rotateZ(45deg);\r\n          transform: rotateZ(45deg);\n}\n.starte-top .line-b {\r\n  position: relative;\r\n  background: #fff;\r\n  height: 1px;\r\n  display: block;\r\n  margin-top: 6px;\n}\n.starte-top .line-b::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  right: -1px;\r\n  top: 4px;\r\n  width: 10px;\r\n  height: 3px;\r\n  border-bottom: 1px solid #fff;\r\n  -webkit-transform: rotateZ(135deg);\r\n          transform: rotateZ(135deg);\n}\n.starte-top .stations {\r\n  float: left;\n}\n.starte-top .stations .item {\r\n  width: 500px;\r\n  overflow: hidden;\r\n  display: inline-block;\r\n  white-space: nowrap;\n}\n.starte-top .stations ul li {\r\n  display: inline-block;\r\n  background: #4b6eca;\r\n  color: #fff;\r\n  padding: 17px 15px;\r\n  margin-left: 10px;\r\n  cursor: pointer;\n}\n.starte-top .stations ul li:hover {\r\n  background: #2359e2;\n}\n.starte-top .stations i {\r\n  display: inline-block;\r\n  background: #3062e2;\r\n  color: #fff;\r\n  padding: 15px 15px;\r\n  font-size: 20px;\r\n  vertical-align: top;\r\n  cursor: pointer;\n}\n.starte-top .stations i:hover {\r\n  background: #2359e2;\n}\r\n/*check-list*/\n.check-list {\r\n  margin: 20px 30px 0 30px;\n}\n.check-list .namess {\r\n  color: #fff;\r\n  margin-right: 15px;\n}\n.chkleft {\r\n  margin: 10px 30px 0 30px;\n}\n.chkleft .rlink {\r\n  color: #fff;\r\n  margin-right: 20px;\r\n  font-size: 15px;\n}\n.chkright {\r\n  float: right;\n}\n.check-list .el-checkbox__label {\r\n  color: #fff;\r\n  font-size: 14px;\n}\n.check-list .bridgechk.is-checked {\r\n  border-color: #cdaa7d !important;\n}\n.check-list .bridgechk .el-checkbox__input.is-checked .el-checkbox__inner {\r\n  background-color: #cdaa7d;\r\n  border-color: #cdaa7d;\n}\n.check-list .bridgechk.is-checked .el-checkbox__label {\r\n  color: #cdaa7d;\n}\n.check-list .tunnelchk.is-checked {\r\n  border-color: #25bfdb !important;\n}\n.check-list .tunnelchk .el-checkbox__input.is-checked .el-checkbox__inner {\r\n  background-color: #25bfdb;\r\n  border-color: #25bfdb;\n}\n.check-list .tunnelchk.is-checked .el-checkbox__label {\r\n  color: #25bfdb;\n}\n.check-list .speedchk.is-checked {\r\n  border-color: #ff9900 !important;\n}\n.check-list .speedchk .el-checkbox__input.is-checked .el-checkbox__inner {\r\n  background-color: #ff9900;\r\n  border-color: #ff9900;\n}\n.check-list .speedchk.is-checked .el-checkbox__label {\r\n  color: #ff9900;\n}\n.check-list .slopechk.is-checked {\r\n  border-color: #6e7b8b !important;\n}\n.check-list .slopechk .el-checkbox__input.is-checked .el-checkbox__inner {\r\n  background-color: #6e7b8b;\r\n  border-color: #6e7b8b;\n}\n.check-list .slopechk.is-checked .el-checkbox__label {\r\n  color: #6e7b8b;\n}\n.check-list .alertchk.is-checked {\r\n  border-color: #e53636 !important;\n}\n.check-list .alertchk .el-checkbox__input.is-checked .el-checkbox__inner {\r\n  background-color: #e53636;\r\n  border-color: #e53636;\n}\n.check-list .alertchk.is-checked .el-checkbox__label {\r\n  color: #e53636;\n}\n.check-list .daocchk.is-checked {\r\n  border-color: #107af7 !important;\n}\n.check-list .daocchk .el-checkbox__input.is-checked .el-checkbox__inner {\r\n  background-color: #107af7;\r\n  border-color: #107af7;\n}\n.check-list .daocchk.is-checked .el-checkbox__label {\r\n  color: #107af7;\n}\n.check-list .buildchk.is-checked {\r\n  border-color: #08ce80 !important;\n}\n.check-list .buildchk .el-checkbox__input.is-checked .el-checkbox__inner {\r\n  background-color: #08ce80;\r\n  border-color: #08ce80;\n}\n.check-list .buildchk.is-checked .el-checkbox__label {\r\n  color: #08ce80;\n}\r\n/*canvas*/\n.main-canvas {\r\n  background: #081c33;\r\n  margin: 0 10px;\n}\n.main-canvas .group-canvas {\r\n  overflow-x: scroll;\r\n  overflow-y: hidden;\r\n  height: 680px;\r\n  padding-right: 20px;\n}\n.progresslist {\r\n  padding-top: 20px;\r\n  padding-left: 30px;\r\n  color: #fff;\n}\n.progresslist .namess {\r\n  padding-bottom: 10px;\r\n  display: inline-block;\r\n  padding-right: 14px;\n}\n.progresslist .el-radio__label {\r\n  color: #fff;\n}\n.progresslist .el-radio {\r\n  margin-bottom: 10px;\n}\n.suofang {\r\n  padding: 30px 0 10px 30px;\n}\n.suofang a {\r\n  color: #fff;\r\n  margin-right: 10px;\r\n  font-size: 18px;\n}\n.cartablebox {\r\n  padding: 20px 10px;\n}\n.cartitle {\r\n  text-align: center;\r\n  border: 1px #2048a3 solid;\r\n  color: #2048a3;\r\n  padding: 5px 0;\r\n\r\n  cursor: pointer;\n}\n.cartablebox .app-table {\r\n  border-radius: 6px 6px 0 0;\n}\n.cartablebox .app-table .el-table__header-wrapper {\r\n  background: #3655a5;\r\n  border-radius: 6px 6px 0 0;\n}\n.cartablebox .el-table--medium th {\r\n  padding: 4px 0;\r\n  color: #fff;\n}\n.cartablebox .el-table--medium td {\r\n  padding: 2px 0;\r\n  color: #4b6eca;\n}\n.cartablebox .el-table th {\r\n  background: #1d397a !important;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "lZYz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/get-iterator.js
var get_iterator = __webpack_require__("BO1k");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/monitor/index.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var canvas = void 0;
var context = void 0;
var axis_Height = "680";
//左右线标尺起点
var axis_LeftLine = {
  x: 100,
  y: axis_Height - 490
};
var axis_LeftLine_Two = {
  x: 100,
  y: axis_Height - 285
};
//出入场线
var axis_OutLine = {
  x: 100,
  y: axis_Height - 150
};
var axis_OutLine_Two = {
  x: 100,
  y: axis_Height - 80
};
//请点标尺起点
var axis_applay = {
  x: 100,
  y: axis_Height - 535
};
var axis_applay_two = {
  x: 100,
  y: axis_Height - 345
};
//刻度的间隔
var tick_Spacing = 100;
var tick_Height = 8; //刻度线高度
var everys = 0.5; //每米长度等于px
var offsetX = 100;
var offsetXLine = 88;
var scrollGapX = 0;
var scrollStartx = 0;
var applyClickXY = [];
/* harmony default export */ var monitor = ({
  data: function data() {
    return {
      flag: false,
      startX: 0,
      endX: 0,
      slideStyle: {
        left: 0,
        transition: "none"
      },
      wdpx: 0,
      stationList: [],
      firstStation: "",
      lastStation: "",
      scrollwidth: 900,
      scrollwidthTwo: 900,
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
      progressCheckValue: 0,
      applyList: [],
      lineTypeList: [],
      every: 0.5,
      minKM: 0,
      minKMLength: 0,
      leftLineMinMileage: 0,
      leftLineMaxMileage: 0,
      leftLineBetwentMileage: 0,
      enterLineMinMileage: 0,
      enterLineMaxMileage: 0,
      outLineMinMileage: 0,
      outLineMaxMileage: 0,
      cartableShowText: "隐藏机车列表信息",
      cartableShow: true,
      locationRealtime: []
    };
  },
  updated: function updated() {
    this.initCanvas();
  },
  created: function created() {
    this.getProjectProcessMap();
    this.getLocationRealtime();
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
          //线别
          _this.lineTypeList = data.data.line_types;
          var linetypeJson = data.data.line_types;
          for (var i = 0; i < linetypeJson.length; i++) {
            if (linetypeJson[i].id == 1) {
              _this.leftLineMinMileage = parseInt(linetypeJson[i].start_total);
              _this.leftLineMaxMileage = parseInt(linetypeJson[i].end_total);
              _this.minKM = parseInt(linetypeJson[i].start_flag); //最小公里
              _this.minKMLength = parseInt(linetypeJson[i].start_length); //最小米数
            } else if (linetypeJson[i].id == 3) {
              _this.enterLineMinMileage = parseInt(linetypeJson[i].start_total);
              _this.enterLineMaxMileage = parseInt(linetypeJson[i].end_total);
            } else if (linetypeJson[i].id == 4) {
              _this.outLineMinMileage = parseInt(linetypeJson[i].start_total);
              _this.outLineMaxMileage = parseInt(linetypeJson[i].end_total);
            }
          }
          //======站点
          _this.stationList = data.data.stations;
          var json = data.data.stations;
          _this.scrollwidth = document.documentElement.clientWidth - 510;
          _this.scrollwidthTwo = (_this.leftLineMaxMileage - _this.leftLineMinMileage) * everys + 150;
          // console.log(this.scrollwidth);
          //请点
          _this.applyList = data.data.apply_lists;
          //桥 隧道等
          _this.bridgeList = data.data.bridge_lists; //桥
          _this.tunnelList = data.data.tunnel_lists; //隧道
          _this.speedList = data.data.speed_lists; //限速区
          _this.buildList = data.data.work_lists; //施工地段

          _this.alertList = data.data.alert_lists; //防区
          _this.slopeList = data.data.slope_lists; //坡度
          //施工进度
          if (data.data.project.length > 0) {
            _this.progressList = data.data.project;
            _this.progressCheckValue = data.data.project[0]["name"];
            _this.progressListItem = data.data.project[0].list;
          }
        }
      });
    },
    initCanvas: function initCanvas() {
      var that = this;
      //坐标轴宽度高度
      //  let axis_Width = this.totalMileage / 2 + 1000;

      var minkm = this.minKM; //最小的公里数
      var minkmLength = this.minKMLength; //最小米数
      var leftLineMinMileage = this.leftLineMinMileage;
      var leftLineMaxMileage = this.leftLineMaxMileage;
      var enterLineMinMileage = this.enterLineMinMileage;
      var enterLineMaxMileage = this.enterLineMaxMileage;
      var outLineMinMileage = this.outLineMinMileage;
      var outLineMaxMileage = this.leftLineMaxMileage;
      var axis_Width = (leftLineMaxMileage - leftLineMinMileage) * everys + 150;
      console.log("axis_Width：" + axis_Width + "_" + leftLineMinMileage + "_" + leftLineMaxMileage);
      //初始化
      canvas = this.$refs.mycanvas;
      canvas.width = axis_Width;
      context = canvas.getContext("2d");
      var lineJson = this.lineTypeList;
      for (var i = 0; i < lineJson.length; i++) {
        context.font = "12px Microsoft Yahei";
        context.fillStyle = "#E8C640";
        context.lineWidth = 10;
        context.strokeStyle = "#fff";
        context.beginPath();
        var start = parseInt(lineJson[i].start_flag) * 1000;
        var startLength = parseInt(lineJson[i].start_length);
        var end = parseInt(lineJson[i].end_flag) * 1000;
        var endLength = parseInt(lineJson[i].end_length);
        axis_Width = (parseInt(end + endLength) - parseInt(start + startLength)) * everys;
        if (lineJson[i].id == 1) {
          drawAxisTicksNum(start, startLength, end, endLength, axis_Width, axis_LeftLine.x, axis_LeftLine.y, "ZDK");
          context.font = "15px Microsoft Yahei";
          context.fillText("左线", axis_LeftLine.x - 60, axis_LeftLine.y + 28);
        } else if (lineJson[i].id == 2) {
          drawAxisTicksNum(start, startLength, end, endLength, axis_Width, axis_LeftLine_Two.x, axis_LeftLine_Two.y, "YDK");
          context.font = "15px Microsoft Yahei";
          context.fillText("右线", axis_LeftLine_Two.x - 60, axis_LeftLine_Two.y + 28);
        } else if (lineJson[i].id == 3) {
          drawAxisTicksNum(start, startLength, end, endLength, axis_Width, axis_OutLine.x, axis_OutLine.y, "RDK");
          context.font = "15px Microsoft Yahei";
          context.fillText("入场线", axis_OutLine.x - 68, axis_OutLine.y + 28);
        } else if (lineJson[i].id == 4) {
          drawAxisTicksNum(start, startLength, end, endLength, axis_Width, axis_OutLine_Two.x, axis_OutLine_Two.y, "CDK");
          context.font = "15px Microsoft Yahei";
          context.fillText("出场线", axis_OutLine_Two.x - 68, axis_OutLine_Two.y + 28);
        }
      }
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
        for (var _i = 1; _i <= axis_Width; _i++) {
          var nums = parseInt(first) + parseInt(200 * num);
          var endFlagNum = parseInt(minKm * 1000) + parseInt(nums);
          if (endFlagNum < lastMileage) {
            if (nums == 1000) {
              minKm++;
              //画数字
              context.fillText(axis_DK + minKm + " + 000", axis_Line_X + _i * tick_Spacing, axis_Line_y + 20);
              num = 0;
              first = 200;
              //画小标
              context.moveTo(axis_Line_X + _i * tick_Spacing, axis_Line_y + 5);
              context.lineTo(axis_Line_X + _i * tick_Spacing, axis_Line_y + 15);
              //
            } else {
              num++;
              nums = parseInt(first) + parseInt(200 * (num - 1));
              //画数字

              context.fillText(nums, axis_Line_X + _i * tick_Spacing, axis_Line_y + 20);
              //画小标
              context.moveTo(axis_Line_X + _i * tick_Spacing, axis_Line_y + 5);
              context.lineTo(axis_Line_X + _i * tick_Spacing, axis_Line_y + 10);
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
      //绘制地铁站
      function drawStations(stationListJson) {
        var json = stationListJson;
        var img = new Image();
        img.src = __webpack_require__("mC5q");
        img.onload = function () {
          var start = 0;
          for (var _i2 = 0; _i2 < json.length; _i2++) {
            // 绘制站点图
            var total = parseInt(json[_i2].start_flag) * 1000 + parseInt(json[_i2].start_length);
            //console.log("total：" + total);
            // 计算当前站点的x轴坐标
            var startX = (total - leftLineMinMileage) * everys;
            // console.log(startX);
            context.drawImage(img, startX + offsetXLine + 1, 65, 24, 120);
            //站名
            context.font = "bold 20px Microsoft Yahei";
            context.fillStyle = "#fff";
            context.textAlign = "left";
            var origin = json[_i2].name;
            var lens = json[_i2].name.length;
            context.fillText(origin, startX + 90, 25);
            //DK
            var codes = "DK" + json[_i2].start_flag + " +" + json[_i2].start_length;
            context.fillStyle = "#0AE39A";
            context.font = "14px Microsoft Yahei";
            context.fillText(codes, startX + 90, 52);
          }
        };
      }
      //绘制道岔
      function drawDaocha() {
        // let json1 = ListJson;
        var json = [{
          id: 1,
          type: 2,
          start_flag: 0,
          start_length: 300,
          end_flag: 0,
          end_length: 450
        }, {
          id: 1,
          type: 1,
          start_flag: 1,
          start_length: 850,
          end_flag: 2,
          end_length: 10
        }, {
          id: 1,
          type: 1,
          start_flag: 5,
          start_length: 300,
          end_flag: 5,
          end_length: 450
        }, {
          id: 1,
          type: 1,
          start_flag: 6,
          start_length: 800,
          end_flag: 6,
          end_length: 950
        }];
        for (var _i3 = 0; _i3 < json.length; _i3++) {
          var _start = parseInt(json[_i3].start_flag) * 1000 + parseInt(json[_i3].start_length);
          var _end = parseInt(json[_i3].end_flag) * 1000 + parseInt(json[_i3].end_length);
          context.strokeStyle = "#107af7";
          context.lineWidth = 3;
          context.fillStyle = "#107af7";
          context.font = "12px Microsoft Yahei";
          context.beginPath();

          var startX = (_start - leftLineMinMileage) * everys;
          var endX = (_end - leftLineMinMileage) * everys;
          var centerX = (endX + startX) / 2; //开始结束平均值
          context.moveTo(startX + offsetX, 90);
          context.lineTo(endX + offsetX, 90);
          context.moveTo(startX + offsetX, 130);
          context.lineTo(endX + offsetX, 130);
          context.moveTo(startX + offsetX + 10, 90);
          context.lineTo(endX + offsetX - 10, 130);
          context.moveTo(startX + offsetX + 10, 130);
          context.lineTo(endX + offsetX - 10, 90);
          context.stroke();
        }
      }
      //绘制桥
      function drawBridgeAxis(bridgeListJson) {
        var json = bridgeListJson;
        for (var _i4 = 0; _i4 < json.length; _i4++) {
          var _start2 = parseInt(json[_i4].start_flag) * 1000 + parseInt(json[_i4].start_length);
          var _end2 = parseInt(json[_i4].end_flag) * 1000 + parseInt(json[_i4].end_length);
          var betweenMeters = _end2 - _start2; //两点之间距离米
          var startX = (_start2 - leftLineMinMileage) * everys; //开始值
          var endX = (_end2 - leftLineMinMileage) * everys; //结束值
          var centerX = (endX + startX) / 2; //开始结束平均值

          context.lineWidth = 2;
          context.fillStyle = "#CDAA7D";
          context.font = "12px Microsoft Yahei";
          context.strokeStyle = "#CDAA7D";
          var desc = json[_i4].name + " 共" + betweenMeters + "米";
          var codes = "DK" + json[_i4].start_flag + " +" + json[_i4].start_length + " ~ " + "DK" + json[_i4].end_flag + " +" + json[_i4].end_length;
          context.beginPath();
          if (json[_i4].line_type == 1) {
            //画垂直线
            context.fillRect(startX + offsetX - 1, axis_LeftLine.y - 101, 2, 96);
            context.fillRect(endX + offsetX - 1, axis_LeftLine.y - 101, 2, 96);
            context.moveTo(startX + offsetX, axis_LeftLine.y - 100);
            context.lineTo(endX + offsetX, axis_LeftLine.y - 100);
            // context.strokeRect(
            //   startX + offsetX,
            //   axis_LeftLine.y - 100,
            //   betweenMeters * everys,
            //   1
            // );
            //文字
            context.fillText(desc, centerX + offsetX, axis_LeftLine.y - 95);
            context.font = "11px Microsoft Yahei";
            context.fillStyle = "#fff";
            context.fillText(codes, centerX + offsetX, axis_LeftLine.y - 80);
          } else if (json[_i4].line_type == 2) {
            //画垂直线
            context.fillRect(startX + offsetX - 1, axis_LeftLine_Two.y - 101, 2, 96);
            context.fillRect(endX + offsetX - 1, axis_LeftLine_Two.y - 101, 2, 96);
            context.moveTo(startX + offsetX, axis_LeftLine_Two.y - 100);
            context.lineTo(endX + offsetX, axis_LeftLine_Two.y - 100);
            //文字
            context.fillText(desc, centerX + offsetX, axis_LeftLine_Two.y - 95);
            context.font = "11px Microsoft Yahei";
            context.fillStyle = "#fff";
            context.fillText(codes, centerX + offsetX, axis_LeftLine_Two.y - 80);
          }
          context.stroke();
        }
      }
      //绘隧道
      function drawTunnelAxis(tunnelListJson) {
        var json = tunnelListJson;
        for (var _i5 = 0; _i5 < json.length; _i5++) {
          var _start3 = parseInt(json[_i5].start_flag) * 1000 + parseInt(json[_i5].start_length);
          var _end3 = parseInt(json[_i5].end_flag) * 1000 + parseInt(json[_i5].end_length);
          var betweenMeters = _end3 - _start3; //两点之间距离米
          var startX = (_start3 - leftLineMinMileage) * everys; //开始值
          var endX = (_end3 - leftLineMinMileage) * everys; //结束值
          var centerX = (endX + startX) / 2; //开始结束平均值

          var desc = json[_i5].name + " 共" + betweenMeters + "米";
          var codes = "DK" + json[_i5].start_flag + " +" + json[_i5].start_length + " ~ " + "DK" + json[_i5].end_flag + " +" + json[_i5].end_length;

          context.lineWidth = 2;
          context.fillStyle = "#25bfdb";
          context.font = "12px Microsoft Yahei";
          context.strokeStyle = "#25bfdb";
          context.beginPath();
          if (json[_i5].line_type == 1) {
            //画垂直线  矩形
            context.fillRect(startX + offsetX - 1, axis_LeftLine.y - 38, 2, 33);
            context.fillRect(endX + offsetX - 1, axis_LeftLine.y - 38, 2, 33);
            context.moveTo(startX + offsetX, axis_LeftLine.y - 37);
            context.lineTo(endX + offsetX, axis_LeftLine.y - 37);
            //context.strokeRect(startX + offsetX,axis_LeftLine.y -38,betweenMeters * everys,1);
            //文字
            context.fillText(desc, centerX + offsetX, axis_LeftLine.y - 31);
            context.fillStyle = "#fff";
            context.font = "10px Microsoft Yahei";
            context.fillText(codes, centerX + offsetX, axis_LeftLine.y - 17);
          } else if (json[_i5].line_type == 2) {
            //画垂直线 画矩形
            context.fillRect(startX + offsetX - 1, axis_LeftLine_Two.y - 38, 2, 33);
            context.fillRect(endX + offsetX - 1, axis_LeftLine_Two.y - 38, 2, 33);
            context.moveTo(startX + offsetX, axis_LeftLine_Two.y - 37);
            context.lineTo(endX + offsetX, axis_LeftLine_Two.y - 37);
            //context.strokeRect(startX + offsetX,axis_LeftLine_Two.y - 38,betweenMeters * everys,1 );
            //文字
            context.fillText(desc, centerX + offsetX, axis_LeftLine_Two.y - 31);
            context.fillStyle = "#fff";
            context.font = "10px Microsoft Yahei";
            context.fillText(codes, centerX + offsetX, axis_LeftLine_Two.y - 17);
          }
          context.stroke();
        }
      }
      //绘制限速区
      function drawSpeedAxis(speedListJson) {
        var json = speedListJson;
        for (var _i6 = 0; _i6 < json.length; _i6++) {
          var _start4 = parseInt(json[_i6].start_flag) * 1000 + parseInt(json[_i6].start_length);
          var _end4 = parseInt(json[_i6].end_flag) * 1000 + parseInt(json[_i6].end_length);
          context.strokeStyle = "#ff9900";
          context.lineWidth = 2;
          context.fillStyle = "#ff9900";
          context.font = "12px Microsoft Yahei";
          var desc = "限速" + json[_i6].speed + "公里/小时";
          context.beginPath();
          //画水平直线
          if (json[_i6].line_type == 1) {
            var startX = (_start4 - leftLineMinMileage) * everys;
            var endX = (_end4 - leftLineMinMileage) * everys;
            var centerX = (endX + startX) / 2; //开始结束平均值
            context.fillRect(centerX + offsetX, axis_LeftLine.y + 7, 2, 25);
            context.moveTo(startX + offsetX, axis_LeftLine.y + 7);
            context.lineTo(endX + offsetX, axis_LeftLine.y + 7);
            context.fillText(desc, centerX + offsetX, axis_LeftLine.y + 35);
          } else if (json[_i6].line_type == 2) {
            var _startX = (_start4 - leftLineMinMileage) * everys;
            var _endX = (_end4 - leftLineMinMileage) * everys;
            var _centerX = (_endX + _startX) / 2;
            if (_start4 == 0) {
              _startX = 0;
              _endX = _end4 * everys;
            }
            context.fillRect(_centerX + offsetX, axis_LeftLine_Two.y + 7, 2, 25);
            context.moveTo(_startX + offsetX, axis_LeftLine_Two.y + 7);
            context.lineTo(_endX + offsetX, axis_LeftLine_Two.y + 7);
            context.fillText(desc, _centerX + offsetX, axis_LeftLine_Two.y + 35);
          }
          context.stroke();
        }
      }
      //绘制施工路段
      function drawBuildAxis(listJson) {
        var json = listJson;
        for (var _i7 = 0; _i7 < json.length; _i7++) {
          var _start5 = parseInt(json[_i7].start_flag) * 1000 + parseInt(json[_i7].start_length);
          var _end5 = parseInt(json[_i7].end_flag) * 1000 + parseInt(json[_i7].end_length);
          context.strokeStyle = "#08ce80";
          context.lineWidth = 2;
          context.fillStyle = "#08ce80";
          context.font = "12px Microsoft Yahei";
          var desc = json[_i7].name;
          context.beginPath();
          //画水平直线
          if (json[_i7].line_type == 1) {
            var startX = (_start5 - leftLineMinMileage) * everys;
            var endX = (_end5 - leftLineMinMileage) * everys;
            var centerX = (endX + startX) / 2; //开始结束平均值
            context.fillRect(centerX + offsetX, axis_LeftLine.y + 15, 2, 15);
            context.moveTo(startX + offsetX, axis_LeftLine.y + 15);
            context.lineTo(endX + offsetX, axis_LeftLine.y + 15);
            context.fillText(desc, centerX + offsetX, axis_LeftLine.y + 35);
          } else if (json[_i7].line_type == 2) {
            var _startX2 = (_start5 - leftLineMinMileage) * everys;
            var _endX2 = (_end5 - leftLineMinMileage) * everys;
            var _centerX2 = (_endX2 + _startX2) / 2;

            if (_start5 == 0) {
              _startX2 = 0;
              _endX2 = _end5 * everys;
            }
            context.fillRect(_centerX2 + offsetX, axis_LeftLine_Two.y + 15, 2, 15);
            context.moveTo(_startX2 + offsetX, axis_LeftLine_Two.y + 15);
            context.lineTo(_endX2 + offsetX, axis_LeftLine_Two.y + 15);
            context.fillText(desc, _centerX2 + offsetX, axis_LeftLine_Two.y + 35);
          }
          context.stroke();
        }
      }
      //绘制防区
      function drawAlertAxis(alertListJson) {
        var json = alertListJson;
        for (var _i8 = 0; _i8 < json.length; _i8++) {
          var _start6 = parseInt(json[_i8].start_flag) * 1000 + parseInt(json[_i8].start_length);
          var _end6 = parseInt(json[_i8].end_flag) * 1000 + parseInt(json[_i8].end_length);
          context.strokeStyle = "#e53636";
          context.lineWidth = 2;
          context.fillStyle = "#e53636";
          context.font = "12px Microsoft Yahei";
          var desc = "防区 DK" + json[_i8].start_flag + "+" + json[_i8].start_length + "- DK" + json[_i8].end_flag + "+" + json[_i8].end_length;
          context.beginPath();
          if (json[_i8].line_type == 1) {
            var startX = (_start6 - leftLineMinMileage) * everys;
            var endX = (_end6 - leftLineMinMileage) * everys;
            var centerX = (endX + startX) / 2; //开始结束平均值
            context.fillRect(centerX + offsetX, axis_LeftLine.y + 10, 2, 20);
            context.moveTo(startX + offsetX, axis_LeftLine.y + 10);
            context.lineTo(endX + offsetX, axis_LeftLine.y + 10);
            context.fillText(desc, centerX + 100, axis_LeftLine.y + 35);
          } else if (json[_i8].line_type == 2) {
            var _startX3 = (_start6 - leftLineMinMileage) * everys;
            var _endX3 = (_end6 - leftLineMinMileage) * everys;
            var _centerX3 = (_endX3 + _startX3) / 2;
            context.fillRect(_centerX3 + offsetX, axis_LeftLine_Two.y + 10, 2, 20);
            context.moveTo(_startX3 + offsetX, axis_LeftLine_Two.y + 10);
            context.lineTo(_endX3 + offsetX, axis_LeftLine_Two.y + 10);
            context.fillText(desc, _centerX3 + 100, axis_LeftLine_Two.y + 35);
          }
          context.stroke();
          //
        }
      }
      //绘制坡度
      function drawSlopeAxis(slopeListJson) {
        var json = slopeListJson;
        for (var _i9 = 0; _i9 < json.length; _i9++) {
          var _start7 = parseInt(json[_i9].start_flag) * 1000 + parseInt(json[_i9].start_length);
          var _end7 = parseInt(json[_i9].end_flag) * 1000 + parseInt(json[_i9].end_length);
          var betweenMeters = _end7 - _start7; //两点之间距离米
          var startX = (_start7 - leftLineMinMileage) * everys; //开始值
          var endX = (_end7 - leftLineMinMileage) * everys; //结束值
          var centerX = (endX + startX) / 2; //开始结束平均值

          context.lineWidth = 1;
          context.strokeStyle = "#fff";
          context.fillStyle = "#fff";
          context.font = "12px Microsoft Yahei";
          var slope_height = parseFloat(json[_i9].height);
          var slope_length = parseFloat(json[_i9].length);
          var slope_center = betweenMeters * everys / 2;
          context.beginPath();
          //type  1 2 3 代表上坡 平坡 下坡
          if (json[_i9].line_type == 1) {
            //对角线
            if (json[_i9].type == 1) {
              context.moveTo(startX + offsetX, axis_LeftLine.y + 100); //起点
              context.lineTo(startX + offsetX + betweenMeters * everys, axis_LeftLine.y + 50); //终点
              context.stroke();
              context.fillText(slope_height, startX + offsetX + slope_center - 20, axis_LeftLine.y + 60);
              context.fillText(slope_length, startX + offsetX + slope_center + 20, axis_LeftLine.y + 80);
            }
            if (json[_i9].type == 2) {
              context.moveTo(startX + offsetX, axis_LeftLine.y + 50 + 25); //起点
              context.lineTo(startX + offsetX + betweenMeters * everys, axis_LeftLine.y + 50 + 25); //终点
              context.stroke();
              context.fillText(slope_height, startX + offsetX + slope_center, axis_LeftLine.y + 60);
              context.fillText(slope_length, startX + offsetX + slope_center, axis_LeftLine.y + 80);
            }
            if (json[_i9].type == 3) {
              context.moveTo(startX + offsetX, axis_LeftLine.y + 50); //起点
              context.lineTo(startX + offsetX + betweenMeters * everys, axis_LeftLine.y + 100); //终点
              context.stroke();
              context.fillText(slope_height, startX + offsetX + slope_center + 20, axis_LeftLine.y + 60);
              context.fillText(slope_length, startX + offsetX + slope_center - 20, axis_LeftLine.y + 80);
            }
            //画矩形
            context.strokeRect(startX + offsetX, axis_LeftLine.y + 50, betweenMeters * everys, 50);
          } else if (json[_i9].line_type == 2) {
            //对角线
            if (json[_i9].type == 1) {
              context.moveTo(startX + offsetX, axis_LeftLine_Two.y + 100); //起点
              context.lineTo(startX + offsetX + betweenMeters * everys, axis_LeftLine_Two.y + 50); //终点
              context.stroke();
              context.fillText(slope_height, startX + offsetX + slope_center - 20, axis_LeftLine_Two.y + 60);
              context.fillText(slope_length, startX + offsetX + slope_center + 20, axis_LeftLine_Two.y + 80);
            }
            if (json[_i9].type == 2) {
              context.moveTo(startX + offsetX, axis_LeftLine_Two.y + 50 + 25); //起点
              context.lineTo(startX + offsetX + betweenMeters * everys, axis_LeftLine_Two.y + 50 + 25); //终点
              context.stroke();
              context.fillText(slope_height, startX + offsetX + slope_center, axis_LeftLine_Two.y + 60);
              context.fillText(slope_length, startX + offsetX + slope_center, axis_LeftLine_Two.y + 80);
            }
            if (json[_i9].type == 3) {
              context.moveTo(startX + offsetX, axis_LeftLine_Two.y + 50); //起点
              context.lineTo(startX + offsetX + betweenMeters * everys, axis_LeftLine_Two.y + 100); //终点
              context.stroke();
              context.fillText(slope_height, startX + offsetX + slope_center + 20, axis_LeftLine_Two.y + 60);
              context.fillText(slope_length, startX + offsetX + slope_center - 20, axis_LeftLine_Two.y + 80);
            }
            //画矩形
            context.strokeRect(startX + offsetX, axis_LeftLine_Two.y + 50, betweenMeters * everys, 50);
          }
          context.stroke();
        }
      }
      //绘制施工进度
      function drawProgressAxis(sprogressListJson) {
        var json = sprogressListJson;

        for (var _i10 = 0; _i10 < json.length; _i10++) {
          var _start8 = parseInt(json[_i10].start_flag) * 1000 + parseInt(json[_i10].start_length);
          var _end8 = parseInt(json[_i10].end_flag) * 1000 + parseInt(json[_i10].end_length);

          // 计算当前站点的x轴坐标

          //console.log("startX：" + startX + " endX：" + endX);
          context.lineWidth = 10;
          context.strokeStyle = "#27DB07";
          context.beginPath();
          if (json[_i10].line_type == 1) {
            var startX = (_start8 - leftLineMinMileage) * everys;
            var endX = (_end8 - leftLineMinMileage) * everys;
            //画水平直线
            context.moveTo(startX + offsetX, axis_LeftLine.y);
            context.lineTo(endX + offsetX, axis_LeftLine.y);
          } else if (json[_i10].line_type == 2) {
            var _startX4 = (_start8 - leftLineMinMileage) * everys;
            var _endX4 = (_end8 - leftLineMinMileage) * everys;
            //画水平直线
            context.moveTo(_startX4 + offsetX, axis_LeftLine_Two.y);
            context.lineTo(_endX4 + offsetX, axis_LeftLine_Two.y);
          } else if (json[_i10].line_type == 3) {
            var _startX5 = (_start8 - enterLineMinMileage) * everys;
            var _endX5 = (_end8 - enterLineMinMileage) * everys;
            if (_start8 == 0) {
              _startX5 = 0;
              _endX5 = _end8 * everys;
            }
            context.moveTo(_startX5 + offsetX, axis_OutLine.y);
            context.lineTo(_endX5 + offsetX, axis_OutLine.y);
          } else if (json[_i10].line_type == 4) {
            var _startX6 = (_start8 - outLineMinMileage) * everys;
            var _endX6 = (_end8 - outLineMinMileage) * everys;
            if (_start8 == 0) {
              _startX6 = 0;
              _endX6 = _end8 * everys;
            }
            context.moveTo(_startX6 + offsetX, axis_OutLine_Two.y);
            context.lineTo(_endX6 + offsetX, axis_OutLine_Two.y);
          }
          context.stroke();
          //
        }
      }
      //绘制请点

      function drawAxesApply(applyListJson) {
        var json = applyListJson;
        var json1 = [{
          line_type: 1,
          number: "A4-2-007-1",
          command_num: "(2020)\u5B57\u7B2C04.21-007-2",
          description: "\u98CE\u98CE\u5149\u5149",
          work_area: "DK0+300\u81F3DK1+804",
          start_time: "2020-04-28 00:00:00",
          end_time: "2020-04-28 23:59:59",
          start_flag: "0",
          start_length: "300",
          end_flag: "1",
          end_length: "804",
          type: "A4",
          start_total: 14600,
          end_total: 26410
        }, {
          line_type: 1,
          number: "A4-2-007-1",
          command_num: "(2020)\u5B57\u7B2C04.21-007-2",
          description: "\u98CE\u98CE\u5149\u5149",
          work_area: "DK14+130\u81F3DK42+410",
          start_time: "2020-04-28 00:00:00",
          end_time: "2020-04-28 23:59:59",
          start_flag: "1",
          start_length: "804",
          end_flag: "4",
          end_length: "232",
          type: "A4",
          start_total: 14600,
          end_total: 26410
        }, {
          line_type: 1,
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
        for (var _i11 = 0; _i11 < json.length; _i11++) {
          var _start9 = parseInt(json[_i11].start_flag) * 1000 + parseInt(json[_i11].start_length);
          var _end9 = parseInt(json[_i11].end_flag) * 1000 + parseInt(json[_i11].end_length);
          //console.log("start：" + start + " end：" + end);
          // 计算当前站点的x轴坐标
          //let startX = (start - parseInt(minkm * 1000)) * everys; //开始值
          // let endX = (end - parseInt(minkm * 1000)) * everys; //结束值

          var descType = json[_i11].type;
          var dksatrt = "DK" + json[_i11].start_flag + " +" + json[_i11].start_length;
          var dkend = "DK" + json[_i11].end_flag + " +" + json[_i11].end_length;

          context.lineWidth = 2;
          if (json[_i11].type == "A1") {
            context.fillStyle = "#f14e0e";
            context.strokeStyle = "#f14e0e";
          } else if (json[_i11].type == "A2") {
            context.fillStyle = "#fd7510";
            context.strokeStyle = "#fd7510";
          } else if (json[_i11].type == "A3") {
            context.fillStyle = "#fda328";
            context.strokeStyle = "#fda328";
          } else if (json[_i11].type == "A4") {
            context.fillStyle = "#f2c136";
            context.strokeStyle = "#f2c136";
          }
          context.beginPath();
          if (json[_i11].line_type == 1) {
            (function () {
              var startX = (_start9 - leftLineMinMileage) * everys;
              var endX = (_end9 - leftLineMinMileage) * everys;
              var centerX = (endX + startX) / 2; //开始结束平均值
              //画水平直线
              context.fillRect(startX + offsetX - 1, axis_applay.y - 8, 2, 15);
              context.fillRect(endX + offsetX - 1, axis_applay.y - 8, 2, 15);
              context.moveTo(startX + offsetX, axis_applay.y);
              context.lineTo(endX + offsetX, axis_applay.y);
              //文字
              // context.font = "24px Microsoft Yahei";
              // context.fillText(desc, centerX + offsetX, axis_applay.y - 25);

              var img = new Image();
              img.src = __webpack_require__("nDGB")("./" + descType + ".png");
              img.onload = function () {
                context.drawImage(img, centerX + offsetX - 30, axis_applay.y - 56, 60, 54);
              };
              applyClickXY.push({
                x: centerX + 70,
                y: axis_applay.y - 55,
                w: 60,
                h: 54,
                i: json[_i11]
              });
            })();
          } else if (json[_i11].line_type == 2) {
            (function () {
              var startX = (_start9 - leftLineMinMileage) * everys;
              var endX = (_end9 - leftLineMinMileage) * everys;
              var centerX = (endX + startX) / 2; //开始结束平均值
              context.fillRect(startX + offsetX - 1, axis_applay_two.y - 8, 2, 15);
              context.fillRect(endX + offsetX - 1, axis_applay_two.y - 8, 2, 15);
              context.moveTo(startX + offsetX, axis_applay_two.y);
              context.lineTo(endX + offsetX, axis_applay_two.y);
              var img = new Image();
              img.src = __webpack_require__("nDGB")("./" + descType + ".png");
              img.onload = function () {
                context.drawImage(img, centerX + offsetX - 30, axis_applay_two.y - 56, 60, 54);
              };
              applyClickXY.push({
                x: centerX + 70,
                y: axis_applay_two.y - 55,
                w: 60,
                h: 54,
                i: json[_i11]
              });
            })();
          }
          context.stroke();
          //
        }
      }
      canvas.onclick = function (event) {
        var x = event.pageX - canvas.getBoundingClientRect().left;
        var y = event.pageY - canvas.getBoundingClientRect().top;
        //console.log("X：" + x + "_" + y);
        //debugger;
        //console.log(applyClickXY);
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
      //车定位
      function drawAxesCar(jsonData) {
        var jsonCar = [{
          id: 1,
          name: "ZY01",
          start_flag: 1,
          start_length: 300,
          line_type: 1
        }, {
          id: 1,
          name: "ZY01",
          start_flag: 6,
          start_length: 300,
          line_type: 1
        }, {
          id: 2,
          name: "ZY02",
          start_flag: 1,
          start_length: 430,
          line_type: 2
        }, {
          id: 1,
          name: "ZY01",
          start_flag: 7,
          start_length: 300,
          line_type: 2
        }, {
          id: 1,
          name: "ZY01",
          start_flag: 5,
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

          for (var _i12 = 0; _i12 < jsonCar.length; _i12++) {
            context.fillStyle = "#fff";
            context.font = "12px Microsoft Yahei";
            if (jsonCar[_i12].line_type == 1) {
              var total = parseInt(jsonCar[_i12].start_flag) * 1000 + parseInt(jsonCar[_i12].start_length);
              var startLineX = (total - leftLineMinMileage) * everys;
              context.drawImage(imgcar, startLineX + offsetX, axis_LeftLine.y - 25, 140, 20);
              //DK
              var codes = jsonCar[_i12].name + "[ ZDK" + jsonCar[_i12].start_flag + " +" + jsonCar[_i12].start_length + " ]";

              context.fillText(codes, startLineX + offsetX + 18, axis_LeftLine.y - 40);
            } else if (jsonCar[_i12].line_type == 2) {
              var _total = parseInt(jsonCar[_i12].start_flag) * 1000 + parseInt(jsonCar[_i12].start_length);
              var _startLineX = (_total - leftLineMinMileage) * everys;
              context.drawImage(imgcar, _startLineX + offsetX, axis_LeftLine_Two.y - 25, 140, 20);
              //DK
              var _codes = jsonCar[_i12].name + " [ YDK" + jsonCar[_i12].start_flag + " +" + jsonCar[_i12].start_length + " ]";
              context.fillText(_codes, _startLineX + offsetX + 18, axis_LeftLine_Two.y - 40);
            } //
          }
        };
      }
      //人定位
      function drawAxesPeple(jsonData) {
        var jsonCar = [{
          id: 1,
          name: "R",
          start_flag: 5,
          start_length: 300,
          line_type: 1
        }, {
          id: 1,
          name: "R",
          start_flag: 3,
          start_length: 300,
          line_type: 1
        }, {
          id: 1,
          name: "R",
          start_flag: 8,
          start_length: 300,
          line_type: 2
        }, {
          id: 1,
          name: "R",
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
          for (var _i13 = 0; _i13 < jsonCar.length; _i13++) {
            if (jsonCar[_i13].line_type == 1) {
              var total = parseInt(jsonCar[_i13].start_flag) * 1000 + parseInt(jsonCar[_i13].start_length);
              var startLineX = (total - leftLineMinMileage) * everys;
              context.drawImage(imgcar, startLineX + offsetX, axis_LeftLine.y - 40, 36, 36);
              //DK
              var codes = " [ ZDK" + jsonCar[_i13].start_flag + " +" + jsonCar[_i13].start_length + " ]";

              context.fillText(codes, startLineX + offsetX + 15, axis_LeftLine.y - 50);
            } else if (jsonCar[_i13].line_type == 2) {
              var _total2 = parseInt(jsonCar[_i13].start_flag) * 1000 + parseInt(jsonCar[_i13].start_length);
              var _startLineX2 = (_total2 - leftLineMinMileage) * everys;
              context.drawImage(imgcar, _startLineX2 + offsetX, axis_LeftLine_Two.y - 40, 36, 36);
              //DK
              var _codes2 = " [ YDK" + jsonCar[_i13].start_flag + " +" + jsonCar[_i13].start_length + " ]";
              context.fillText(_codes2, _startLineX2 + offsetX + 15, axis_LeftLine_Two.y - 50);
            } //
          }
        };
      }
      //============================
      //画地铁站
      drawStations(this.stationList);
      //施工进度
      if (this.progressCheckValue) {
        drawProgressAxis(this.progressListItem);
      }
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
      //桥
      if (this.bridgeCheckValue) {
        drawBridgeAxis(this.bridgeList);
      }
      //隧道
      if (this.tunnelCheckValue) {
        drawTunnelAxis(this.tunnelList);
      }
      //坡度
      if (this.slopeCheckValue) {
        drawSlopeAxis(this.slopeList);
      }
      //作业
      // if (this.applyList.length > 0) {
      drawAxesApply(this.applyList);
      // }
      //道岔
      if (this.daocCheckValue) {
        drawDaocha();
      }
      //定位人和车
      drawAxesPeple(this.applyList);
      drawAxesCar(this.applyList);
    },

    // ===================================桥 隧道 限速区 防区 道岔 坡度 施工进度
    //进度
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
      context.clearRect(0, 0, canvas.width, canvas.height);
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
    },


    //top
    stationLeftMove: function stationLeftMove() {
      if (this.wdpx < 0) {
        this.wdpx += 1;
      }
    },
    stationRightMove: function stationRightMove() {
      if (this.wdpx > -(this.stationList.length + this.wdpx)) {
        this.wdpx -= 1;
      }
    },
    scrollPosition: function scrollPosition(start_flag, start_length) {
      var total = start_flag;
      var startX = (total - this.minKM) * 1000 * 0.5;
      document.querySelector(".group-canvas").scrollLeft = startX;
    },
    dragScroll: function dragScroll() {
      var gapX = 0;
      var startx = 0;
      var obj = document.getElementById("scrollbar"); //
      obj.addEventListener("mousedown", function (event) {
        if (event.button == 0) {
          //判断是否点击鼠标左键
          gapX = event.clientX;
          startx = document.querySelector(".group-canvas").scrollLeft; // document.documentElement.scrollLeft; // scroll的初始位置
          document.addEventListener("mousemove", move);
          document.addEventListener("mouseup", stop);
        }
        return false; //阻止默认事件或冒泡
      });
      function move(event) {
        var left = event.clientX - gapX; // 鼠标移动的相对距离
        document.querySelector(".group-canvas").scrollLeft = startx - left;
        return false; //阻止默认事件或冒泡
      }
      function stop() {
        //解绑定，这一步很必要，前面有解释
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", stop);
      }
    },
    showCarList: function showCarList() {
      var show = this.cartableShow;
      if (show) {
        this.cartableShow = false;
        this.cartableShowText = "显示机车列表信息";
      } else {
        this.cartableShow = true;
        this.cartableShowText = "隐藏机车列表信息";
      }
    },
    getLocationRealtime: function getLocationRealtime() {
      var _this3 = this;

      this.request({
        url: "/monitor/getLocationRealtime",
        method: "get"
      }).then(function (response) {
        var data = response.data;
        if (data.status == 1) {
          _this3.locationRealtime = data.data;
        }
      });
    }

    //

  },
  mounted: function mounted() {
    var _this4 = this;

    this.dragScroll();
    window.addEventListener("resize", function () {
      _this4.scrollwidth = document.documentElement.clientWidth - 640;
    });
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-a86b1434","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/monitor/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"progress"}},[_c('div',{staticClass:"progress"},[_c('div',{staticClass:"starte-top"},[_c('div',{staticClass:"sleft"},[_vm._v("\n        "+_vm._s(_vm.firstStation)+"方向\n        "),_c('i',{staticClass:"line-a"})]),_vm._v(" "),_c('div',{staticClass:"scenter"},[_c('div',{staticClass:"stations"},[_c('i',{staticClass:"el-icon-arrow-left",on:{"click":_vm.stationLeftMove}}),_vm._v(" "),_c('div',{staticClass:"item",style:({ width: _vm.scrollwidth + 'px' })},[_c('ul',{style:({
                width: _vm.stationList.length * 100 + 'px',
                'margin-left': _vm.wdpx * 100 + 'px'
              })},_vm._l((_vm.stationList),function(item){return _c('li',{key:item.id,on:{"click":function($event){return _vm.scrollPosition(item.start_flag, item.start_length)}}},[_vm._v("\n                "+_vm._s(item.name)+"\n              ")])}),0)]),_vm._v(" "),_c('i',{staticClass:"el-icon-arrow-right",on:{"click":_vm.stationRightMove}})])]),_vm._v(" "),_c('div',{staticClass:"sright"},[_vm._v("\n        "+_vm._s(_vm.lastStation)+"方向\n        "),_c('i',{staticClass:"line-b"})])]),_vm._v(" "),_c('div',{staticClass:"chkleft"},[_c('router-link',{staticClass:"rlink",attrs:{"to":"/monitor/indexmini"}},[_vm._v("缩小")])],1),_vm._v(" "),_c('div',{staticClass:"main-canvas"},[_c('div',{staticClass:"group-canvas"},[_c('div',{attrs:{"id":"scrollbar"}},[_c('canvas',{ref:"mycanvas",attrs:{"id":"mycanvas","height":"680"}},[_c('p',[_vm._v("您的系统不支持此程序!")])])])])]),_vm._v(" "),_c('div',{staticClass:"check-list"},[_c('span',{staticClass:"namess"},[_vm._v("显示图形：")]),_vm._v(" "),_c('el-checkbox',{staticClass:"bridgechk",attrs:{"label":"桥"},on:{"change":_vm.bridgeCheckSelect},model:{value:(_vm.bridgeCheckValue),callback:function ($$v) {_vm.bridgeCheckValue=$$v},expression:"bridgeCheckValue"}}),_vm._v(" "),_c('el-checkbox',{staticClass:"tunnelchk",attrs:{"label":"隧道"},on:{"change":_vm.tunnelCheckSelect},model:{value:(_vm.tunnelCheckValue),callback:function ($$v) {_vm.tunnelCheckValue=$$v},expression:"tunnelCheckValue"}}),_vm._v(" "),_c('el-checkbox',{staticClass:"alertchk",attrs:{"label":"防区"},on:{"change":_vm.alertCheckSelect},model:{value:(_vm.alertCheckValue),callback:function ($$v) {_vm.alertCheckValue=$$v},expression:"alertCheckValue"}}),_vm._v(" "),_c('el-checkbox',{staticClass:"slopechk",attrs:{"label":"坡度"},on:{"change":_vm.slopeCheckSelect},model:{value:(_vm.slopeCheckValue),callback:function ($$v) {_vm.slopeCheckValue=$$v},expression:"slopeCheckValue"}}),_vm._v(" "),_c('el-checkbox',{staticClass:"daocchk",attrs:{"label":"道岔"},on:{"change":_vm.daocCheckSelect},model:{value:(_vm.daocCheckValue),callback:function ($$v) {_vm.daocCheckValue=$$v},expression:"daocCheckValue"}}),_vm._v(" "),_c('el-checkbox',{staticClass:"speedchk",attrs:{"label":"限速区"},on:{"change":_vm.speedCheckSelect},model:{value:(_vm.speedCheckValue),callback:function ($$v) {_vm.speedCheckValue=$$v},expression:"speedCheckValue"}}),_vm._v(" "),_c('el-checkbox',{staticClass:"buildchk",attrs:{"label":"施工地段"},on:{"change":_vm.buildCheckSelect},model:{value:(_vm.buildCheckValue),callback:function ($$v) {_vm.buildCheckValue=$$v},expression:"buildCheckValue"}})],1),_vm._v(" "),(this.progressCheckValue != '')?_c('div',{staticClass:"progresslist"},[_c('span',{staticClass:"namess"},[_vm._v("施工进度：")]),_vm._v(" "),_c('el-radio-group',{on:{"change":_vm.progressCheckSelect},model:{value:(_vm.progressCheckValue),callback:function ($$v) {_vm.progressCheckValue=$$v},expression:"progressCheckValue"}},_vm._l((_vm.progressList),function(item){return _c('el-radio',{key:item.name,attrs:{"label":item.name}},[_vm._v(_vm._s(item.name))])}),1)],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"cartablebox"},[_c('div',{staticClass:"cartitle",on:{"click":_vm.showCarList}},[_vm._v(_vm._s(_vm.cartableShowText))]),_vm._v(" "),_c('el-table',{directives:[{name:"show",rawName:"v-show",value:(_vm.cartableShow),expression:"cartableShow"}],attrs:{"data":_vm.locationRealtime}},[_c('el-table-column',{attrs:{"prop":"id","label":"编号","width":"60"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"name","label":"列车名称","width":"80"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"当前速度","width":"100"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"当前位置","width":"100"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v("DK"+_vm._s(scope.row.start_flag)+" +\n            "+_vm._s(scope.row.start_length))]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"line_type_desc","label":"线别","width":"100"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"is_online","label":"状态","width":"100"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.is_online == '1')?_c('span',{staticClass:"statused"},[_vm._v("在线")]):_vm._e(),_vm._v(" "),(scope.row.is_online == '0')?_c('span',{staticClass:"statused"},[_vm._v("离线")]):_vm._e()]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"","label":"司机"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"","label":"车长"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"create_time","label":"最后更新时间"}}),_vm._v(" "),_c('el-table-column')],1)],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var views_monitor = (esExports);
// CONCATENATED MODULE: ./src/views/monitor/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("doOk")
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
  monitor,
  views_monitor,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_views_monitor = __webpack_exports__["default"] = (Component.exports);


/***/ })

});