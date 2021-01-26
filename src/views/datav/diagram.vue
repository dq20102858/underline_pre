<template>
  <div id="diagram">
    <div class="datav-ptitle" style="padding-top: 0"><h3>施工形象图</h3></div>
    <div class="station" ref="canvasWrapper">
      <canvas id="canvasStation" height="200" ref="canvasStation">
        <p>您的系统不支持此程序!</p>
      </canvas>
    </div>
    <div class="check-lists">
      <span class="namess">显示图形：</span>
      <el-checkbox
        class="alertchk"
        v-model="alertCheckValue"
        @change="alertCheckSelect"
        label="防区"
      ></el-checkbox>
      <el-checkbox
        class="daocchk"
        v-model="daocCheckValue"
        @change="daocCheckSelect"
        label="道岔"
      ></el-checkbox>
      <el-checkbox
        class="speedchk"
        v-model="speedCheckValue"
        @change="speedCheckSelect"
        label="限速区"
      ></el-checkbox>
      <el-checkbox
        class="buildchk"
        v-model="buildCheckValue"
        @change="buildCheckSelect"
        label="施工地段"
      ></el-checkbox>
    </div>
  </div>
</template>
<script>
//标尺起点
let axis_LeftLine = {
  x: 30,
  y: 70,
};
let axis_LeftLine_Two = {
  x: 30,
  y: 150,
};
let locationPush = [];
export default {
  data() {
    return {
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
      carLocation: [],
    };
  },
  created() {
    this.getProjectMap();
  },
  mounted() {
    var timer = setInterval(() => {
      this.getProjectMap();
    }, 60000);
    this.$once("hook:beforeDestroy", () => {
      clearInterval(timer);
    });
    window.addEventListener("resize", this.initCanvas);
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  },
  methods: {
    getProjectMap() {
      var num = 0;
      num++;
      console.log(num);
      this.request({
        url: "/monitor/getMointorDatas",
        method: "get",
      }).then((response) => {
        let data = response.data;
        if (data.status == 1) {
          this.stationList = data.data.stations;
          let linetypeJson = data.data.line_types;
          this.lineTypeList = linetypeJson;
          for (let i = 0; i < linetypeJson.length; i++) {
            if (linetypeJson[i].id == 1) {
              this.lineTypeMinMileage =
                parseInt(linetypeJson[i].start_flag) * 1000 +
                parseInt(linetypeJson[i].start_length);
              this.lineTypeMaxMileage =
                parseInt(linetypeJson[i].end_flag) * 1000 +
                parseInt(linetypeJson[i].end_length);
            } else if (linetypeJson[i].id == 3) {
              this.lineTypeEnterMinMileage =
                parseInt(linetypeJson[i].start_flag) * 1000 +
                parseInt(linetypeJson[i].start_length);
            } else if (linetypeJson[i].id == 4) {
              this.lineTypeOutMinMileage =
                parseInt(linetypeJson[i].start_flag) * 1000 +
                parseInt(linetypeJson[i].start_length);
            }
          }
          this.speedList = data.data.speed_lists; //限速区
          this.buildList = data.data.work_lists; //施工地段
          this.alertList = data.data.alert_lists; //防区
          this.peopleLocation = data.data.people_location; //人员定位
          this.carLocation = data.data.real_location; //车辆定位

          //initCanvas
          this.initCanvas();
        }
      });
    },
    initCanvas() {
      const that = this;
      let canvasWidth = this.$refs.canvasWrapper.clientWidth - 30;
      let lineTypeBetwentMileage =
        this.lineTypeMaxMileage - this.lineTypeMinMileage;
      this.everys = (parseInt(canvasWidth) / lineTypeBetwentMileage).toFixed(5);
      //console.log("canvasWidth：" + canvasWidth + "_" + this.everys);

      let lineTypeMinMileage = this.lineTypeMinMileage;
      let lineTypeMaxMileage = this.lineTypeMaxMileage;
      let everys = this.everys; //每米长度等于px

      let canvas = this.$refs.canvasStation;
      let context = canvas.getContext("2d");
      canvas.width = canvasWidth;
      //console.log("lineTypeMinMileage：" + lineTypeMinMileage);
      //左右线
      function drawAxesLine(lineJson) {
        context.beginPath();
        context.strokeStyle = "#fff";
        context.fillStyle = "#fff";
        context.font = "13px Microsoft Yahei";
        context.lineWidth = 10;
        let lineData = [];
        for (let i = 0; i < lineJson.length; i++) {
          lineData.push(lineJson[i]);
          let tfrom =
              lineJson[i].name +
              " " +
              "DK" +
              lineJson[i].start_flag +
              "+" +
              lineJson[i].start_length,
            tend = "DK" + lineJson[i].end_flag + "+" + lineJson[i].end_length;

          //   let startLength = context.measureText(tfrom).width,
          //    endLength = context.measureText(tend).width;

          let starttotal = parseInt(lineJson[i].start_total);
          let endtotal = parseInt(lineJson[i].end_total);
          let startX = (starttotal - lineTypeMinMileage) * everys;

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
        let json = jsonData;
        let img = new Image();
        img.src = require("@/assets/image/staxs.png");
        img.onload = function () {
          let start = 0;
          let jsonlen = json.length;
          for (let i = 0; i < json.length; i++) {
            // 绘制站点图
            let total =
              parseInt(json[i].start_flag) * 1000 +
              parseInt(json[i].start_length);
            let startLineX = (total - lineTypeMinMileage) * everys;
            if (startLineX == 0) {
              startLineX = axis_LeftLine.x;
            }
            if (total == lineTypeMaxMileage) {
              context.drawImage(img, startLineX - 5, 35, 12, 30);
              // //站名
              context.font = "12px Microsoft Yahei";
              context.fillStyle = "#fff";
              context.fillText(json[i].name, startLineX - 70, 15);
              //DK
              let codes =
                "DK" + json[i].start_flag + " +" + json[i].start_length;
              context.fillStyle = "#5f88f9";
              context.font = "12px  Microsoft Yahei";
              context.fillText(codes, startLineX - 70, 30);
            } else {
              context.drawImage(img, startLineX - 5, 35, 12, 30);
              // //站名
              context.font = "12px Microsoft Yahei";
              context.fillStyle = "#fff";
              context.fillText(json[i].name, startLineX, 15);
              //DK
              let codes =
                "DK" + json[i].start_flag + " +" + json[i].start_length;
              context.fillStyle = "#5f88f9";
              context.font = "12px  Microsoft Yahei";
              context.fillText(codes, startLineX, 30);
            }
          }
        };
        context.stroke();
      }
      //车定位
      function drawAxesCar(jsonData) {
        let jsonCar = jsonData;
        let jsonCar1 = [
          {
            id: 1,
            name: "ZY01",
            start_flag: 1,
            start_length: 804,
            line_type: 1,
          },
          {
            id: 11,
            name: "ZY02",
            start_flag: 1,
            start_length: 300,
            line_type: 2,
          },
        ];

        let imgcar = new Image();
        imgcar.src = require("@/assets/image/icon-car.png");
        imgcar.onload = function () {
          let start = 0;

          //   context.beginPath();
          for (let i = 0; i < jsonCar.length; i++) {
            context.fillStyle = "#fff ";
            context.font = "10px  Microsoft Yahei";
            let total =
              parseInt(jsonCar[i].start_flag) * 1000 +
              parseInt(jsonCar[i].start_length);
            let startLineX = (total - lineTypeMinMileage) * everys;

            if (jsonCar[i].line_type == 1) {
              if (jsonCar[i].start_flag == 0) {
                startLineX = axis_LeftLine.x;
              }
              context.drawImage(
                imgcar,
                startLineX,
                axis_LeftLine.y - 15,
                50,
                7
              );
              //DK
              let codes =
                jsonCar[i].name +
                " [ZDK" +
                jsonCar[i].start_flag +
                " +" +
                jsonCar[i].start_length +
                " ]";
              context.fillText(codes, startLineX + 10, axis_LeftLine.y - 20);
            } else if (jsonCar[i].line_type == 2) {
              context.drawImage(
                imgcar,
                startLineX,
                axis_LeftLine_Two.y - 15,
                50,
                5
              );
              //DK

              let codes =
                jsonCar[i].name +
                " [YDK" +
                jsonCar[i].start_flag +
                " +" +
                jsonCar[i].start_length +
                " ]";
              context.fillText(
                codes,
                startLineX + 10,
                axis_LeftLine_Two.y - 20
              );
            } //
          }
        };
        context.stroke();
      }
      //人定位
      function drawAxesPeple(jsonData) {
        let jsoPeple = jsonData;
        let jsoPeple2 = [
          {
            id: 1,
            name: "ZY01",
            start_flag: 2,
            start_length: 804,
            line_type: 1,
            type: "1",
            company_name: "",
            depart_name: "",
            post_name: "",
          },
          {
            id: 1,
            name: "ZY01",
            start_flag: 2,
            start_length: 804,
            line_type: 2,
            type: "1",
            company_name: "",
            depart_name: "",
            post_name: "",
          },
        ];
        let start = 0;
        context.fillStyle = "#fff ";
        context.font = "10px  Microsoft Yahei";
        for (let i = 0; i < jsoPeple.length; i++) {
          var startFlag = parseInt(jsoPeple[i].start_flag) * 1000;

          let total = startFlag + parseInt(jsoPeple[i].start_length);
          let startLineX = (total - lineTypeMinMileage) * everys;
          let codes =
            "<b style='padding-bottom:10px;display:block'>" +
            jsoPeple[i].name +
            "&nbsp;" +
            " DK" +
            jsoPeple[i].start_flag +
            " +" +
            jsoPeple[i].start_length +
            "</b>" +
            jsoPeple[i].company_name +
            "&nbsp;&nbsp;" +
            jsoPeple[i].depart_name +
            "&nbsp;&nbsp;" +
            jsoPeple[i].post_name;
          if (jsoPeple[i].line_type == 1) {
            let imgcar = new Image();
            imgcar.src = require("@/assets/image/ding" +
              jsoPeple[i].type +
              ".png");
            imgcar.onload = function () {
              context.drawImage(
                imgcar,
                startLineX,
                axis_LeftLine.y - 25,
                15,
                15
              );
              //DK
              //context.fillText(codes, startLineX + 5, axis_LeftLine.y - 28);
            };
            locationPush.push({
              x: startLineX,
              y: axis_LeftLine.y - 25,
              w: 15,
              h: 15,
              text: codes.replace("undefined", "").replace("undefined", ""),
            });
          } else if (jsoPeple[i].line_type == 2) {
            let imgcar = new Image();
            imgcar.src = require("@/assets/image/ding" +
              jsoPeple[i].type +
              ".png");
            imgcar.onload = function () {
              context.drawImage(
                imgcar,
                startLineX - 1,
                axis_LeftLine_Two.y - 25,
                15,
                15
              );
              //DK
              //context.fillText(codes, startLineX + 5, axis_LeftLine_Two.y - 28);
            }; //
            locationPush.push({
              x: startLineX,
              y: axis_LeftLine_Two.y - 25,
              w: 15,
              h: 15,
              text: codes.replace("undefined", "").replace("undefined", ""),
            });
          }
        }
      }
      canvas.onclick = function (event) {
        var x = event.pageX - canvas.getBoundingClientRect().left;
        var y = event.pageY - canvas.getBoundingClientRect().top;
        for (let item of locationPush) {
          if (
            x >= item.x &&
            x <= item.x + item.w &&
            y >= item.y &&
            y <= item.y + item.h
          ) {
            console.log(item.text);
            that.$message({
              type: "none",
              customClass: "el-message-local",
              dangerouslyUseHTMLString: true,
              showClose: true,
              duration: 8000,
              offset: 60,
              message: item.text,
            });
            break;
          }
        }
      };
      //绘制道岔
      function drawDaocha() {
        let json = [
          {
            id: 1,
            type: 1,
            start_flag: 1,
            start_length: 100,
          },
          {
            id: 1,
            type: 2,
            start_flag: 2,
            start_length: 500,
          },
          {
            id: 1,
            type: 3,
            start_flag: 5,
            start_length: 780,
          },
          {
            id: 1,
            type: 4,
            start_flag: 7,
            start_length: 580,
          },
        ];
        let start = 0;
        for (let i = 0; i < json.length; i++) {
          let start =
            parseInt(json[i].start_flag) * 1000 +
            parseInt(json[i].start_length);
          let startX = (start - lineTypeMinMileage) * everys;
          let img = new Image();
          img.src = require("@/assets/image/icon-dc" + i + ".png");
          img.onload = function () {
            context.drawImage(img, startX, 0, 48, 35);
          };
        }
      }
      //绘制限速区
      function drawSpeedAxis(speedListJson) {
        let json = speedListJson;
        for (let i = 0; i < json.length; i++) {
          context.strokeStyle = "#ff9900";
          context.lineWidth = 10;
          context.fillStyle = "#ff9900";
          context.font = "12px Microsoft Yahei";
          let start =
            parseInt(json[i].start_flag) * 1000 +
            parseInt(json[i].start_length);
          let end =
            parseInt(json[i].end_flag) * 1000 + parseInt(json[i].end_length);
          let startX = (start - lineTypeMinMileage) * everys;
          let endX = (end - lineTypeMinMileage) * everys;
          let centerX = (endX + startX) / 2; //开始结束平均值

          let desc = json[i].speed.replace(".00", "") + "km/h";
          context.beginPath();
          //画水平直线
          if (json[i].line_type == 1) {
            // alert(startX)
            //startX =40;
            context.moveTo(startX + 30, axis_LeftLine.y);
            context.lineTo(endX, axis_LeftLine.y);
            context.fillRect(centerX, axis_LeftLine.y, 2, 30);
            context.fillText(desc, centerX - 5, axis_LeftLine.y + 42);
          } else if (json[i].line_type == 2) {
            if (startX == 0) {
              startX = 30;
            }
            context.moveTo(startX, axis_LeftLine_Two.y);
            context.lineTo(endX, axis_LeftLine_Two.y);
            context.fillRect(centerX, axis_LeftLine_Two.y, 2, 30);
            context.fillText(desc, centerX - 5, axis_LeftLine_Two.y + 42);
          }
          context.stroke();
        }
      }
      //绘制施工路段
      function drawBuildAxis(listJson) {
        let json = listJson;
        for (let i = 0; i < json.length; i++) {
          let start =
            parseInt(json[i].start_flag) * 1000 +
            parseInt(json[i].start_length);
          let end =
            parseInt(json[i].end_flag) * 1000 + parseInt(json[i].end_length);
          context.strokeStyle = "#08ce80";
          context.lineWidth = 10;
          context.fillStyle = "#08ce80";
          context.font = "12px Microsoft Yahei";
          let desc = json[i].name;
          context.beginPath();

          let startX = (start - lineTypeMinMileage) * everys;
          let endX = (end - lineTypeMinMileage) * everys;
          let centerX = (endX + startX) / 2; //开始结束平均值
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
        let json = alertListJson;
        for (let i = 0; i < json.length; i++) {
          let start =
            parseInt(json[i].start_flag) * 1000 +
            parseInt(json[i].start_length);
          let end =
            parseInt(json[i].end_flag) * 1000 + parseInt(json[i].end_length);
          context.strokeStyle = "#e53636";
          context.lineWidth = 10;
          context.fillStyle = "#e53636";
          context.font = "12px Microsoft Yahei";
          let desc =
            "防区 DK" +
            json[i].start_flag +
            "+" +
            json[i].start_length +
            "- DK" +
            json[i].end_flag +
            "+" +
            json[i].end_length;
          context.beginPath();
          let startX = (start - lineTypeMinMileage) * everys;
          let endX = (end - lineTypeMinMileage) * everys;
          let centerX = (endX + startX) / 2; //开始结束平均值
          if (json[i].line_type == 1) {
            if (startX == 0) {
              startX = 30;
            }
            context.moveTo(startX, axis_LeftLine.y);
            context.lineTo(endX, axis_LeftLine.y);
            context.fillRect(centerX, axis_LeftLine.y, 2, 20);
            context.fillText(desc, centerX - 80, axis_LeftLine.y + 30);
          } else if (json[i].line_type == 2) {
            if (startX == 0) {
              startX = 30;
            }
            context.moveTo(startX, axis_LeftLine_Two.y);
            context.lineTo(endX, axis_LeftLine_Two.y);
            context.fillRect(centerX, axis_LeftLine_Two.y, 2, 20);
            context.fillText(desc, centerX - 80, axis_LeftLine_Two.y + 30);
          }
          context.stroke();
          //
        }
      }

      //====================================
      //地铁站
      drawAxesLine(this.lineTypeList);
      drawAxesStationList(this.stationList);
      //防区
      if (this.alertList.length > 0) {
        if (this.alertCheckValue) {
          drawAlertAxis(this.alertList);
        }
      }
      //道岔
      if (this.daocCheckValue) {
        drawDaocha();
      }
      //限速区
      if (this.speedCheckValue) {
        drawSpeedAxis(this.speedList);
      }
      //施工路段
      if (this.buildCheckValue) {
        drawBuildAxis(this.buildList);
      }
      //定位
      drawAxesCar(this.carLocation);
      drawAxesPeple(this.peopleLocation);
    },
    //=====================================
    // progressCheckSelect(val) {
    //   this.progressList.map((item) => {
    //     if (item.name == val) {
    //       this.progressListItem = item.list;
    //     }
    //   });
    //   this.initCanvas();
    // },
    //防区
    alertCheckSelect() {
      if (this.alertList.length > 0) {
        this.initCanvas();
      }
    },
    //限速区
    speedCheckSelect() {
      this.initCanvas();
    },
    //施工路段
    buildCheckSelect() {
      this.initCanvas();
    },
    //道岔
    daocCheckSelect() {
      this.initCanvas();
    },
  },
  //
};
</script>
<style>
#diagram {
  background: #01023a;
  position: absolute;
  width: 100%;
  /* background: #01023a; */
}

#diagram .station {
  margin: 10px 0 0 0;
  position: relative;
  z-index: 999;
}

#diagram .progresslist {
  display: none;
  padding-top: 20px;
  padding-left: 30px;
  color: #fff;
}
#diagram .progresslist .namess {
  padding-bottom: 10px;
  display: inline-block;
  padding-right: 14px;
}
#diagram .progresslist .el-radio__label {
  color: #fff;
}
.clear {
  clear: both;
}
/*check-list*/
.check-lists {
  margin: 0px 30px 0 30px;
}
.check-lists .namess {
  color: #fff;
  margin-right: 15px;
}

.check-lists .el-checkbox__label {
  color: #fff;
  font-size: 14px;
}
.check-lists .bridgechk.is-checked {
  border-color: #cdaa7d !important;
}
.check-lists .bridgechk .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #cdaa7d;
  border-color: #cdaa7d;
}
.check-lists .bridgechk.is-checked .el-checkbox__label {
  color: #cdaa7d;
}
.check-lists .tunnelchk.is-checked {
  border-color: #25bfdb !important;
}
.check-lists .tunnelchk .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #25bfdb;
  border-color: #25bfdb;
}
.check-lists .tunnelchk.is-checked .el-checkbox__label {
  color: #25bfdb;
}
.check-lists .speedchk.is-checked {
  border-color: #ff9900 !important;
}
.check-lists .speedchk .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #ff9900;
  border-color: #ff9900;
}
.check-lists .speedchk.is-checked .el-checkbox__label {
  color: #ff9900;
}
.check-lists .slopechk.is-checked {
  border-color: #6e7b8b !important;
}
.check-lists .slopechk .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #6e7b8b;
  border-color: #6e7b8b;
}
.check-lists .slopechk.is-checked .el-checkbox__label {
  color: #6e7b8b;
}
.check-lists .alertchk.is-checked {
  border-color: #e53636 !important;
}
.check-lists .alertchk .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #e53636;
  border-color: #e53636;
}
.check-lists .alertchk.is-checked .el-checkbox__label {
  color: #e53636;
}
.check-lists .daocchk.is-checked {
  border-color: #107af7 !important;
}
.check-lists .daocchk .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #107af7;
  border-color: #107af7;
}
.check-lists .daocchk.is-checked .el-checkbox__label {
  color: #107af7;
}
.check-lists .buildchk.is-checked {
  border-color: #08ce80 !important;
}
.check-lists .buildchk .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #08ce80;
  border-color: #08ce80;
}
.check-lists .buildchk.is-checked .el-checkbox__label {
  color: #08ce80;
}

#notify {
  position: relative;
  top: -120px;
  left: 45%;
  display: none;
  z-index: 999999;
}
#notify span {
  background: #fff;
  border: 1px #ddd solid;
  border-radius: 6px;
  width: 100%;
  color: #000;
  padding: 5px 10px;
}
</style>

