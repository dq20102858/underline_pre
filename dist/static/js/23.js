webpackJsonp([23],{

/***/ "HRu2":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n#diagram {\r\n  position: absolute;\r\n  width: 100%;\r\n  background: #01023a;\n}\n#diagram .station {\r\n  margin: 10px 0 0 0;\r\n  position: relative;\r\n  z-index: 999;\n}\n#diagram .progresslist {\r\n  display: none;\r\n  padding-top: 20px;\r\n  padding-left: 30px;\r\n  color: #fff;\n}\n#diagram .progresslist .namess {\r\n  padding-bottom: 10px;\r\n  display: inline-block;\r\n  padding-right: 14px;\n}\n#diagram .progresslist .el-radio__label {\r\n  color: #fff;\n}\n.clear {\r\n  clear: both;\n}\r\n\r\n/*check-list*/\n.check-lists {\r\n  margin: 0px 30px 0 30px;\n}\n.check-lists .namess {\r\n  color: #fff;\r\n  margin-right: 15px;\n}\n.check-lists .el-checkbox__label {\r\n  color: #fff;\r\n  font-size: 14px;\n}\n.check-lists .bridgechk.is-checked {\r\n  border-color: #cdaa7d !important;\n}\n.check-lists .bridgechk .el-checkbox__input.is-checked .el-checkbox__inner {\r\n  background-color: #cdaa7d;\r\n  border-color: #cdaa7d;\n}\n.check-lists .bridgechk.is-checked .el-checkbox__label {\r\n  color: #cdaa7d;\n}\n.check-lists .tunnelchk.is-checked {\r\n  border-color: #25bfdb !important;\n}\n.check-lists .tunnelchk .el-checkbox__input.is-checked .el-checkbox__inner {\r\n  background-color: #25bfdb;\r\n  border-color: #25bfdb;\n}\n.check-lists .tunnelchk.is-checked .el-checkbox__label {\r\n  color: #25bfdb;\n}\n.check-lists .speedchk.is-checked {\r\n  border-color: #ff9900 !important;\n}\n.check-lists .speedchk .el-checkbox__input.is-checked .el-checkbox__inner {\r\n  background-color: #ff9900;\r\n  border-color: #ff9900;\n}\n.check-lists .speedchk.is-checked .el-checkbox__label {\r\n  color: #ff9900;\n}\n.check-lists .slopechk.is-checked {\r\n  border-color: #6e7b8b !important;\n}\n.check-lists .slopechk .el-checkbox__input.is-checked .el-checkbox__inner {\r\n  background-color: #6e7b8b;\r\n  border-color: #6e7b8b;\n}\n.check-lists .slopechk.is-checked .el-checkbox__label {\r\n  color: #6e7b8b;\n}\n.check-lists .alertchk.is-checked {\r\n  border-color: #e53636 !important;\n}\n.check-lists .alertchk .el-checkbox__input.is-checked .el-checkbox__inner {\r\n  background-color: #e53636;\r\n  border-color: #e53636;\n}\n.check-lists .alertchk.is-checked .el-checkbox__label {\r\n  color: #e53636;\n}\n.check-lists .daocchk.is-checked {\r\n  border-color: #107af7 !important;\n}\n.check-lists .daocchk .el-checkbox__input.is-checked .el-checkbox__inner {\r\n  background-color: #107af7;\r\n  border-color: #107af7;\n}\n.check-lists .daocchk.is-checked .el-checkbox__label {\r\n  color: #107af7;\n}\n.check-lists .buildchk.is-checked {\r\n  border-color: #08ce80 !important;\n}\n.check-lists .buildchk .el-checkbox__input.is-checked .el-checkbox__inner {\r\n  background-color: #08ce80;\r\n  border-color: #08ce80;\n}\n.check-lists .buildchk.is-checked .el-checkbox__label {\r\n  color: #08ce80;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "JnPj":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("HRu2");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("b1326912", content, true);

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
var axis_Height = 200;
var offsetX = 0;
var tick_Spacing = 100;
var tick_Height = 8; //刻度线高度
//标尺起点
var axis_LeftLine = {
  x: 30,
  y: 70
};
var axis_LeftLine_Two = {
  x: 30,
  y: 150
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
      progressCheckValue: 0,
      peopleLocation: [],
      carLocation: []
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
          _this.peopleLocation = data.data.people_location; //人员定位
          _this.carLocation = data.data.real_location; //车辆定位
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
            context.drawImage(img, startLineX - 5, 35, 12, 30);
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
        var jsonCar = jsonData;
        var jsonCar1 = [{
          id: 1,
          name: "ZY01",
          start_flag: 1,
          start_length: 804,
          line_type: 1
        }, {
          id: 11,
          name: "ZY02",
          start_flag: 1,
          start_length: 300,
          line_type: 2
        }];

        var imgcar = new Image();
        imgcar.src = __webpack_require__("1Dh/");
        imgcar.onload = function () {
          var start = 0;

          //   context.beginPath();
          for (var i = 0; i < jsonCar.length; i++) {
            context.fillStyle = "#fff ";
            context.font = "10px  Microsoft Yahei";
            var total = parseInt(jsonCar[i].start_flag) * 1000 + parseInt(jsonCar[i].start_length);
            var startLineX = (total - lineTypeMinMileage) * everys;

            if (jsonCar[i].line_type == 1) {
              if (jsonCar[i].start_flag == 0) {
                startLineX = axis_LeftLine.x;
              }
              context.drawImage(imgcar, startLineX, axis_LeftLine.y - 15, 70, 10);
              //DK
              var codes = jsonCar[i].name + " [ZDK" + jsonCar[i].start_flag + " +" + jsonCar[i].start_length + " ]";
              context.fillText(codes, startLineX + 10, axis_LeftLine.y - 20);
            } else if (jsonCar[i].line_type == 2) {
              context.drawImage(imgcar, startLineX, axis_LeftLine_Two.y - 15, 70, 10);
              //DK

              var _codes = jsonCar[i].name + " [YDK" + jsonCar[i].start_flag + " +" + jsonCar[i].start_length + " ]";
              context.fillText(_codes, startLineX + 10, axis_LeftLine_Two.y - 20);
            } //
          }
        };
        context.stroke();
      }
      //人定位
      function drawAxesPeple(jsonData) {
        var jsoPeple = jsonData;
        var jsoPeple1 = [{
          id: 1,
          name: "R",
          start_flag: 1,
          start_length: 804,
          line_type: 1
        }, {
          id: 1,
          name: "Y",
          start_flag: 4,
          start_length: 232,
          line_type: 2
        }];
        var imgcar = new Image();
        imgcar.src = __webpack_require__("+IES");
        imgcar.onload = function () {
          var start = 0;
          context.fillStyle = "#fff ";
          context.font = "10px  Microsoft Yahei";
          for (var i = 0; i < jsoPeple.length; i++) {
            if (jsoPeple[i].line_type == 1) {
              var total = parseInt(jsoPeple[i].start_flag) * 1000 + parseInt(jsoPeple[i].start_length);
              var startLineX = (total - lineTypeMinMileage) * everys;
              context.drawImage(imgcar, startLineX, axis_LeftLine.y - 25, 20, 20);
              //DK
              var codes = "[ " + jsoPeple[i].name + " ZDK" + jsoPeple[i].start_flag + " +" + jsoPeple[i].start_length + " ]";
              context.fillText(codes, startLineX + 5, axis_LeftLine.y - 28);
            } else if (jsoPeple[i].line_type == 2) {
              var _total = parseInt(jsoPeple[i].start_flag) * 1000 + parseInt(jsoPeple[i].start_length);
              var _startLineX = (_total - lineTypeMinMileage) * everys;
              context.drawImage(imgcar, _startLineX - 16, axis_LeftLine_Two.y - 25, 20, 20);
              //DK
              var _codes2 = "[ " + jsoPeple[i].name + " YDK" + jsoPeple[i].start_flag + " +" + jsoPeple[i].start_length + " ]";
              context.fillText(_codes2, _startLineX + 5, axis_LeftLine_Two.y - 28);
            } //
          }
        };
      }
      //绘制道岔
      function drawDaocha() {
        var json = [{
          id: 1,
          type: 1,
          start_flag: 0,
          start_length: 800,
          end_flag: 0,
          end_length: 900
        }, {
          id: 1,
          type: 2,
          start_flag: 2,
          start_length: 200,
          end_flag: 2,
          end_length: 400
        }, {
          id: 1,
          type: 3,
          start_flag: 5,
          start_length: 650,
          end_flag: 5,
          end_length: 850
        }, {
          id: 1,
          type: 4,
          start_flag: 7,
          start_length: 250,
          end_flag: 7,
          end_length: 650
        }];
        var start = 0;

        var _loop = function _loop(i) {
          var start = parseInt(json[i].start_flag) * 1000 + parseInt(json[i].start_length);
          var end = parseInt(json[i].end_flag) * 1000 + parseInt(json[i].end_length);
          var betweenMeters = (end - start) * everys; //两点之间距离米
          var startX = (start - lineTypeMinMileage) * everys;
          var img = new Image();
          img.src = __webpack_require__("R6x/")("./icon-dc" + i + ".png");
          img.onload = function () {
            context.drawImage(img, startX, 0, 42, 30);
          };
        };

        for (var i = 0; i < json.length; i++) {
          _loop(i);
        }
      }
      function drawDaochas() {
        // let json1 = ListJson;
        var json = [{
          id: 1,
          type: 1,
          start_flag: 0,
          start_length: 800,
          end_flag: 0,
          end_length: 900
        }, {
          id: 1,
          type: 2,
          start_flag: 2,
          start_length: 200,
          end_flag: 2,
          end_length: 400
        }, {
          id: 1,
          type: 3,
          start_flag: 5,
          start_length: 650,
          end_flag: 5,
          end_length: 850
        }, {
          id: 1,
          type: 4,
          start_flag: 7,
          start_length: 250,
          end_flag: 7,
          end_length: 650
        }];

        var _loop2 = function _loop2(i) {
          var start = parseInt(json[i].start_flag) * 1000 + parseInt(json[i].start_length);
          var end = parseInt(json[i].end_flag) * 1000 + parseInt(json[i].end_length);
          context.strokeStyle = "#107af7";
          context.lineWidth = 2;
          context.fillStyle = "#107af7";
          context.font = "12px Microsoft Yahei";
          context.beginPath();

          var startX = (start - lineTypeMinMileage) * everys;
          var endX = (end - lineTypeMinMileage) * everys;
          if (json[i].type == 1) {
            context.moveTo(startX + offsetX, 10);
            context.lineTo(endX + offsetX, 10);
            context.moveTo(startX + offsetX, 30);
            context.lineTo(endX + offsetX, 30);
            context.moveTo(startX + offsetX + 5, 10);
            context.lineTo(endX + offsetX - 5, 30);
            context.moveTo(startX + offsetX + 5, 30);
            context.lineTo(endX + offsetX - 5, 10);
          } else if (json[i].type == 2) {
            context.moveTo(startX + offsetX, 10);
            context.lineTo(endX + offsetX, 10);
            context.moveTo(startX + offsetX, 30);
            context.lineTo(endX + offsetX, 30);
            context.moveTo(startX + offsetX + 20, 10);
            context.lineTo(endX + offsetX + 5, 38);
            context.moveTo(startX + offsetX + 20, 30);
            context.lineTo(endX + offsetX + 5, 0);
          } else if (json[i].type == 3) {
            context.moveTo(startX + offsetX, 10);
            context.lineTo(endX + offsetX, 10);
            context.moveTo(startX + offsetX, 30);
            context.lineTo(endX + offsetX, 30);
            context.moveTo(startX + offsetX + 5, 30);
            context.lineTo(endX + offsetX - 5, 10);
          } else if (json[i].type == 4) {
            var _img = new Image();
            _img.src = __webpack_require__("xHIs");
            _img.onload = function () {
              context.drawImage(_img, startX, startX + 200, 80, 34);
            };

            // context.moveTo(startX + offsetX, 10);
            // context.lineTo(endX + offsetX, 10);
            // context.moveTo(startX + offsetX, 30);
            // context.lineTo(endX + offsetX, 30);

            // context.moveTo(startX + offsetX-10, 0);
            // context.lineTo(startX + offsetX + 20, 10);

            // context.moveTo(startX + offsetX + 20, 30);
            // context.lineTo(startX + offsetX + 5, 50);

            // context.moveTo(endX + offsetX - 20, 30);
            // context.lineTo(endX + offsetX + 20, 90);
            // context.moveTo(endX + offsetX - 20, 60);
            // context.lineTo(endX + offsetX + 20, 0);
          }
          context.stroke();
        };

        for (var i = 0; i < json.length; i++) {
          _loop2(i);
        }
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
          var _startX = (start - lineTypeMinMileage) * everys;
          var _endX = (end - lineTypeMinMileage) * everys;
          var centerX = (_endX + _startX) / 2; //开始结束平均值

          var desc = "限速" + json[i].speed + "公里/小时";
          context.beginPath();
          //画水平直线
          if (json[i].line_type == 1) {
            // alert(startX)

            //startX =40;

            context.moveTo(_startX + 30, axis_LeftLine.y);
            context.lineTo(_endX, axis_LeftLine.y);
            context.fillRect(centerX, axis_LeftLine.y, 2, 30);
            context.fillText(desc, centerX - 45, axis_LeftLine.y + 42);
          } else if (json[i].line_type == 2) {
            if (_startX == 0) {
              _startX = 30;
            }
            context.moveTo(_startX, axis_LeftLine_Two.y);
            context.lineTo(_endX, axis_LeftLine_Two.y);
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

          var _startX2 = (start - lineTypeMinMileage) * everys;
          var _endX2 = (end - lineTypeMinMileage) * everys;
          var centerX = (_endX2 + _startX2) / 2; //开始结束平均值
          //画水平直线
          if (json[i].line_type == 1) {
            if (_startX2 == 0) {
              _startX2 = 30;
            }
            context.moveTo(_startX2, axis_LeftLine.y);
            context.lineTo(_endX2, axis_LeftLine.y);
            context.fillRect(centerX, axis_LeftLine.y, 2, 30);
            context.fillText(desc, centerX - 24, axis_LeftLine.y + 42);
          } else if (json[i].line_type == 2) {
            if (_startX2 == 0) {
              _startX2 = 30;
            }
            context.moveTo(_startX2, axis_LeftLine_Two.y);
            context.lineTo(_endX2, axis_LeftLine_Two.y);
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
          var _startX3 = (start - lineTypeMinMileage) * everys;
          var _endX3 = (end - lineTypeMinMileage) * everys;
          var centerX = (_endX3 + _startX3) / 2; //开始结束平均值
          if (json[i].line_type == 1) {
            if (_startX3 == 0) {
              _startX3 = 30;
            }
            context.moveTo(_startX3, axis_LeftLine.y);
            context.lineTo(_endX3, axis_LeftLine.y);
            context.fillRect(centerX, axis_LeftLine.y, 2, 30);
            context.fillText(desc, centerX - 80, axis_LeftLine.y + 42);
          } else if (json[i].line_type == 2) {
            if (_startX3 == 0) {
              _startX3 = 30;
            }
            context.moveTo(_startX3, axis_LeftLine_Two.y);
            context.lineTo(_endX3, axis_LeftLine_Two.y);
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

        var _loop3 = function _loop3(i) {
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

            var _img2 = new Image();
            _img2.src = __webpack_require__("nDGB")("./" + desc + ".png");
            _img2.onload = function () {
              context.drawImage(_img2, centerX - 29, axis_Applay.y - 56, 60, 54);
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
            var _img3 = new Image();
            _img3.src = __webpack_require__("nDGB")("./" + desc + ".png");
            _img3.onload = function () {
              context.drawImage(_img3, centerX - 29, axis_Applay_two.y - 56, 60, 54);
            };
          }
          context.stroke();
          //
        };

        for (var i = 0; i < json.length; i++) {
          _loop3(i);
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

            var _startX4 = axis_LeftLine.x + (start - lineTypeMinMileage) * everys;
            var _endX4 = axis_LeftLine.x + (end - lineTypeMinMileage) * everys;
            // console.log(
            //   "startX：" + startX + " endX：" + endX + "_" + lineTypeMinMileage
            // );
            context.lineWidth = 10;
            context.strokeStyle = "#27DB07";
            context.beginPath();
            if (json[i].line_type == 1) {
              context.moveTo(_startX4, axis_LeftLine.y);
              context.lineTo(_endX4 + 1, axis_LeftLine.y);
            } else if (json[i].line_type == 2) {
              context.moveTo(_startX4, axis_LeftLine_Two.y);
              context.lineTo(_endX4 + 1, axis_LeftLine_Two.y);
            } else if (json[i].line_type == 3) {
              if (start == 0) {
                _startX4 = 0;
                _endX4 = end * everys;
              }
              context.moveTo(_startX4, axis_OutLine.y);
              context.lineTo(_endX4 + 1, axis_OutLine.y);
            } else if (json[i].line_type == 4) {
              if (start == 0) {
                _startX4 = 0;
                _endX4 = end * everys;
              }
              context.moveTo(_startX4, axis_OutLine_Two.y);
              context.lineTo(_endX4 + 1, axis_OutLine_Two.y);
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
      drawAxesCar(this.carLocation);
      drawAxesPeple(this.peopleLocation);
      //道岔
      if (this.daocCheckValue) {
        drawDaocha();
      }
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-76305eaf","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/datav/diagram.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"diagram"}},[_vm._m(0),_vm._v(" "),_c('div',{ref:"canvasWrapper",staticClass:"station"},[_c('canvas',{ref:"canvasStation",attrs:{"id":"canvasStation","height":"200"}},[_c('p',[_vm._v("您的系统不支持此程序!")])])]),_vm._v(" "),_c('div',{staticClass:"check-lists"},[_c('span',{staticClass:"namess"},[_vm._v("显示图形：")]),_vm._v(" "),_c('el-checkbox',{staticClass:"bridgechk",attrs:{"label":"桥"},on:{"change":_vm.bridgeCheckSelect},model:{value:(_vm.bridgeCheckValue),callback:function ($$v) {_vm.bridgeCheckValue=$$v},expression:"bridgeCheckValue"}}),_vm._v(" "),_c('el-checkbox',{staticClass:"tunnelchk",attrs:{"label":"隧道"},on:{"change":_vm.tunnelCheckSelect},model:{value:(_vm.tunnelCheckValue),callback:function ($$v) {_vm.tunnelCheckValue=$$v},expression:"tunnelCheckValue"}}),_vm._v(" "),_c('el-checkbox',{staticClass:"alertchk",attrs:{"label":"防区"},on:{"change":_vm.alertCheckSelect},model:{value:(_vm.alertCheckValue),callback:function ($$v) {_vm.alertCheckValue=$$v},expression:"alertCheckValue"}}),_vm._v(" "),_c('el-checkbox',{staticClass:"slopechk",attrs:{"label":"坡度"},on:{"change":_vm.slopeCheckSelect},model:{value:(_vm.slopeCheckValue),callback:function ($$v) {_vm.slopeCheckValue=$$v},expression:"slopeCheckValue"}}),_vm._v(" "),_c('el-checkbox',{staticClass:"daocchk",attrs:{"label":"道岔"},on:{"change":_vm.daocCheckSelect},model:{value:(_vm.daocCheckValue),callback:function ($$v) {_vm.daocCheckValue=$$v},expression:"daocCheckValue"}}),_vm._v(" "),_c('el-checkbox',{staticClass:"speedchk",attrs:{"label":"限速区"},on:{"change":_vm.speedCheckSelect},model:{value:(_vm.speedCheckValue),callback:function ($$v) {_vm.speedCheckValue=$$v},expression:"speedCheckValue"}}),_vm._v(" "),_c('el-checkbox',{staticClass:"buildchk",attrs:{"label":"施工地段"},on:{"change":_vm.buildCheckSelect},model:{value:(_vm.buildCheckValue),callback:function ($$v) {_vm.buildCheckValue=$$v},expression:"buildCheckValue"}})],1),_vm._v(" "),(this.progressCheckValue != '')?_c('div',{staticClass:"progresslist"},[_c('span',{staticClass:"namess"},[_vm._v("施工进度：")]),_vm._v(" "),_c('el-radio-group',{on:{"change":_vm.progressCheckSelect},model:{value:(_vm.progressCheckValue),callback:function ($$v) {_vm.progressCheckValue=$$v},expression:"progressCheckValue"}},_vm._l((_vm.progressList),function(item){return _c('el-radio',{key:item.name,attrs:{"label":item.name}},[_vm._v(_vm._s(item.name))])}),1)],1):_vm._e()])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"datav-ptitle",staticStyle:{"padding-top":"0"}},[_c('h3',[_vm._v("施工形象图")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var datav_diagram = (esExports);
// CONCATENATED MODULE: ./src/views/datav/diagram.vue
function injectStyle (ssrContext) {
  __webpack_require__("JnPj")
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


/***/ })

});