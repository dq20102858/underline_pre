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
        class="bridgechk"
        v-model="bridgeCheckValue"
        @change="bridgeCheckSelect"
        label="桥"
      ></el-checkbox>
      <el-checkbox
        class="tunnelchk"
        v-model="tunnelCheckValue"
        @change="tunnelCheckSelect"
        label="隧道"
      ></el-checkbox>
      <!-- <el-checkbox
          class="speedchk"
          v-model="speedCheckValue"
          @change="speedCheckSelect"
          label="限速区"
        ></el-checkbox>-->
      <el-checkbox
        class="alertchk"
        v-model="alertCheckValue"
        @change="alertCheckSelect"
        label="防区"
      ></el-checkbox>
      <!-- <el-checkbox v-model="checked5" label="道岔" border></el-checkbox> -->
      <el-checkbox
        class="slopechk"
        v-model="slopeCheckValue"
        @change="slopeCheckSelect"
        label="坡度"
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
    <div class="progresslist" v-if="this.progressCheckValue != ''">
      <span class="namess">施工进度：</span>
      <el-radio-group
        v-model="progressCheckValue"
        @change="progressCheckSelect"
      >
        <el-radio
          v-for="item in progressList"
          :key="item.name"
          :label="item.name"
          >{{ item.name }}</el-radio
        >
      </el-radio-group>
    </div>
  </div>
</template>
<script>
let canvas;
let context;
let axis_Height = 200;
let offsetX = 0;
let tick_Spacing = 100;
let tick_Height = 8; //刻度线高度
//标尺起点
let axis_LeftLine = {
  x: 30,
  y: 70,
};
let axis_LeftLine_Two = {
  x: 30,
  y: 150,
};
//出入场线
let axis_OutLine = {
  x: 30,
  y: axis_Height - 160,
};
let axis_OutLine_Two = {
  x: 30,
  y: axis_Height - 50,
};

let axis_Applay = {
  x: 30,
  y: axis_Height - 450,
};
let axis_Applay_two = {
  x: 30,
  y: axis_Height - 330,
};
let applyClickXY = [];
export default {
  data() {
    return {
      conheight: {
        height: "",
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
      carLocation: [],
    };
  },
  props: ["fatherWidth"],
  updated() {},
  created() {
    this.getProjectProcessMap();
  },
  mounted() {
    window.addEventListener("resize", this.initCanvas);
  },
  destroyed() {
    window.removeEventListener("resize", this.initCanvas);
  },
  methods: {
    getProjectProcessMap() {
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
          //请点
          this.applyList = data.data.apply_lists;
          this.speedList = data.data.speed_lists; //限速区
          this.buildList = data.data.work_lists; //施工地段
          this.alertList = data.data.alert_lists; //防区
          this.peopleLocation = data.data.people_location; //人员定位
          this.carLocation = data.data.real_location; //车辆定位
          //施工进度
          if (data.data.project.length > 0) {
            this.progressList = data.data.project;
            this.progressCheckValue = data.data.project[0]["name"];
            this.progressListItem = data.data.project[0].list;
          }
          this.initCanvas();
          //
        }
      });
    },

    initCanvas() {
      const that = this;
      let canvasWidth = this.$refs.canvasWrapper.clientWidth - 30;
      this.cwidth = canvasWidth;
      let lineTypeBetwentMileage =
        this.lineTypeMaxMileage - this.lineTypeMinMileage;
      let lineTypeTotalMileage =
        this.lineTypeMaxMileage + this.lineTypeMinMileage;
      this.everys = (parseInt(this.cwidth) / lineTypeBetwentMileage).toFixed(5);
      console.log("canvasWidth：" + this.cwidth + "_" + this.everys);

      let lineTypeMinMileage = this.lineTypeMinMileage;
      let lineTypeMaxMileage = this.lineTypeMaxMileage;
      let everys = this.everys; //每米长度等于px
      // console.log("everys" + everys);

      const canvas = this.$refs.canvasStation;
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
                70,
                10
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
                70,
                10
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
        let jsoPeple1 = [
          {
            id: 1,
            name: "R",
            start_flag: 1,
            start_length: 804,
            line_type: 1,
          },
          {
            id: 1,
            name: "Y",
            start_flag: 4,
            start_length: 232,
            line_type: 2,
          },
        ];

        let start = 0;
        context.fillStyle = "#fff ";
        context.font = "10px  Microsoft Yahei";
        for (let i = 0; i < jsoPeple.length; i++) {
          if (jsoPeple[i].line_type == 1) {
            let imgcar = new Image();
            imgcar.src = require("@/assets/image/ding" +
              jsonData[i].type +
              ".png");
            imgcar.onload = function () {
              let total =
                parseInt(jsoPeple[i].start_flag) * 1000 +
                parseInt(jsoPeple[i].start_length);
              let startLineX = (total - lineTypeMinMileage) * everys;
              context.drawImage(
                imgcar,
                startLineX,
                axis_LeftLine.y - 25,
                20,
                20
              );
              //DK
              let codes =
                "[ " +
                jsoPeple[i].name +
                " ZDK" +
                jsoPeple[i].start_flag +
                " +" +
                jsoPeple[i].start_length +
                " ]";
              context.fillText(codes, startLineX + 5, axis_LeftLine.y - 28);
            };
          } else if (jsoPeple[i].line_type == 2) {
            let imgcar = new Image();
            imgcar.src = require("@/assets/image/ding" +
              jsonData[i].type +
              ".png");
            imgcar.onload = function () {
              let total =
                parseInt(jsoPeple[i].start_flag) * 1000 +
                parseInt(jsoPeple[i].start_length);
              let startLineX = (total - lineTypeMinMileage) * everys;
              context.drawImage(
                imgcar,
                startLineX - 1,
                axis_LeftLine_Two.y - 25,
                20,
                20
              );
              //DK 
              let codes =
                "[ " +
                jsoPeple[i].name +
                " YDK" +
                jsoPeple[i].start_flag +
                " +" +
                jsoPeple[i].start_length +
                " ]";
              context.fillText(codes, startLineX + 5, axis_LeftLine_Two.y - 28);
            }; //
          }
        }
      }
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
      //绘制请点
      function drawAxesApply(jsonData) {
        let json = jsonData;
        let json1 = [
          {
            line_type: 1,
            number: "A1-2-007-1",
            command_num: "(2020)\u5b57\u7b2c04.21-007-2",
            description: "\u98ce\u98ce\u5149\u5149",
            work_area: "DK0+600\u81f3DK1+804",
            start_time: "2020-04-28 00:00:00",
            end_time: "2020-04-28 23:59:59",
            start_flag: "0",
            start_length: "600",
            end_flag: "1",
            end_length: "804",
            type: "A1",
            start_total: 600,
            end_total: 10604,
          },
          {
            line_type: 1,
            number: "A4-2-007-1",
            command_num: "(2020)\u5b57\u7b2c04.21-007-2",
            description: "\u98ce\u98ce\u5149\u5149",
            work_area: "DK4+232\u81f3DK5+245",
            start_time: "2020-04-28 00:00:00",
            end_time: "2020-04-28 23:59:59",
            start_flag: "4",
            start_length: "232",
            end_flag: "5",
            end_length: "245",
            type: "A4",
            start_total: 40232,
            end_total: 50245,
          },

          {
            line_type: 2,
            number: "A3-2-007-1",
            command_num: "(2020)\u5b57\u7b2c04.21-007-2",
            description: "\u98ce\u98ce\u5149\u5149",
            work_area: "DK14+160\u81f3DK21+370",
            start_time: "2020-04-28 00:00:00",
            end_time: "2020-04-28 23:59:59",
            start_flag: "6",
            start_length: "736",
            end_flag: "9",
            end_length: "808",
            type: "A3",
            start_total: 14600,
            end_total: 21370,
          },
        ];
        //  let clickXYApplyList = [];
        for (let i = 0; i < json.length; i++) {
          let start =
            parseInt(json[i].start_flag) * 1000 +
            parseInt(json[i].start_length);
          let end =
            parseInt(json[i].end_flag) * 1000 + parseInt(json[i].end_length);
          let dksatrt =
            "YDK" + json[i].start_flag + " +" + json[i].start_length;
          let dkend = "YDK" + json[i].end_flag + " +" + json[i].end_length;
          let startX = (start - lineTypeMinMileage) * everys;
          if (parseInt(json[i].start_flag) == 0) {
            startX = startX + axis_LeftLine.x;
          }
          let endX = (end - lineTypeMinMileage) * everys;
          let centerX = (endX + startX) / 2; //开始结束平均值

          //  startX=startX+axis_LeftLine.x;
          console.log("startX：" + startX);

          let desc = json[i].type;
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
              i: json[i],
            });

            let img = new Image();
            img.src = require("@/assets/image/" + desc + ".png");
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
              i: json[i],
            });
            let img = new Image();
            img.src = require("@/assets/image/" + desc + ".png");
            img.onload = function () {
              context.drawImage(
                img,
                centerX - 29,
                axis_Applay_two.y - 56,
                60,
                54
              );
            };
          }
          context.stroke();
          //
        }
        canvas.onclick = function (event) {
          var x = event.pageX - canvas.getBoundingClientRect().left;
          var y = event.pageY - canvas.getBoundingClientRect().top;

          console.log("X：" + x + "_" + y);
          //console.log("clickXY：" + JSON.stringify(applyClickXY));
          for (let item of applyClickXY) {
            if (
              x >= item.x &&
              x <= item.x + item.w &&
              y >= item.y &&
              y <= item.y + item.h
            ) {
              let infos = item.i;
              that
                .$confirm(
                  "<p style='color:#4b6eca;padding-left:20px'><span style='color:#1d397a'>作业编号：</span>" +
                    infos.number +
                    "</p><p style='color:#4b6eca;padding-left:20px'><span style='color:#1d397a'>作业令号</span>：" +
                    infos.command_num +
                    "</p>" +
                    "<p style='color:#4b6eca;padding-left:20px'><span style='color:#1d397a'>开始时间：</span>" +
                    infos.start_time +
                    "</p><p style='color:#4b6eca;padding-left:20px'><span style='color:#1d397a'>结束时间：</span>" +
                    infos.end_time +
                    "</p>" +
                    "<p style='color:#4b6eca;padding-left:20px'><span style='color:#1d397a'>施工区间：</span>" +
                    infos.work_area +
                    "</p><p style='color:#4b6eca;padding-left:20px'><span style='color:#1d397a'>施工内容：</span>" +
                    infos.description +
                    "</p>",
                  {
                    distinguishCancelAndClose: true,
                    dangerouslyUseHTMLString: true,
                    showCancelButton: false,
                    showConfirmButton: false,
                  }
                )
                .catch(() => {});
              break;
            }
          }
        };
      }
      //绘制施工进度
      function drawProgressAxis(sprogressListJson) {
        let json = sprogressListJson;
        console.log(sprogressListJson);
        let json1 = [
          {
            id: 233,
            pro_id: 110,
            pro_name: "\u6d4b\u8bd52",
            line_type: 1,
            start_flag: "0",
            start_length: "257",
            end_flag: "0",
            end_length: "300",
            line: "\u5de6\u7ebf",
          },
        ];
        for (let i = 0; i < json.length; i++) {
          if (json[i].start_flag != null) {
            let start =
              parseInt(json[i].start_flag) * 1000 +
              parseInt(json[i].start_length);
            let end =
              parseInt(json[i].end_flag) * 1000 + parseInt(json[i].end_length);

            let startX =
              axis_LeftLine.x + (start - lineTypeMinMileage) * everys;
            let endX = axis_LeftLine.x + (end - lineTypeMinMileage) * everys;
            // console.log(
            //   "startX：" + startX + " endX：" + endX + "_" + lineTypeMinMileage
            // );
            context.lineWidth = 10;
            context.strokeStyle = "#27DB07";
            context.beginPath();
            if (json[i].line_type == 1) {
              context.moveTo(startX, axis_LeftLine.y);
              context.lineTo(endX + 1, axis_LeftLine.y);
            } else if (json[i].line_type == 2) {
              context.moveTo(startX, axis_LeftLine_Two.y);
              context.lineTo(endX + 1, axis_LeftLine_Two.y);
            } else if (json[i].line_type == 3) {
              if (start == 0) {
                startX = 0;
                endX = end * everys;
              }
              context.moveTo(startX, axis_OutLine.y);
              context.lineTo(endX + 1, axis_OutLine.y);
            } else if (json[i].line_type == 4) {
              if (start == 0) {
                startX = 0;
                endX = end * everys;
              }
              context.moveTo(startX, axis_OutLine_Two.y);
              context.lineTo(endX + 1, axis_OutLine_Two.y);
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

      function drawAxisTicksNum(
        start,
        startLen,
        end,
        endLen,
        axis_Width,
        axis_Line_X,
        axis_Line_y,
        axis_DK
      ) {
        //查找起始坐标
        let first = darpNum(startLen);
        let last = darpNum(endLen);
        let lastMileage = end + endLen;
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
        let num_Ticks = axis_Width;
        //起点
        let startTicksNum = axis_DK + start / 1000 + " + " + startLen;
        context.fillText(startTicksNum, axis_Line_X, axis_Line_y + 30);
        context.moveTo(offsetX + 1, axis_Line_y + 5);
        context.lineTo(offsetX + 1, axis_Line_y + 20);
        //
        //终点
        let endTicksNum = axis_DK + end / 1000 + " + " + endLen;
        //alert(endTicksNum);
        context.fillText(
          endTicksNum,
          axis_Width + axis_Line_X, //guohonglin add
          axis_Line_y + 30
        );
        context.moveTo(
          axis_Width + axis_Line_X, //guohonglin add
          axis_Line_y + 5
        );
        context.lineTo(
          axis_Width + axis_Line_X, //guohonglin add
          axis_Line_y + 20
        );
        context.stroke();

        //中间

        axis_Line_X = (parseInt(first) - parseInt(startLen)) * everys;
        let num = 0;
        let minKm = start / 1000;
        for (let i = 1; i <= axis_Width; i++) {
          let nums = parseInt(first) + parseInt(200 * num);
          var endFlagNum = parseInt(minKm * 1000) + parseInt(nums);
          if (endFlagNum < lastMileage) {
            if (nums == 1000) {
              minKm++;
              //画数字
              context.fillText(
                axis_DK + minKm + " + 000",
                axis_Line_X + i * tick_Spacing,
                axis_Line_y + 20
              );
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

              context.fillText(
                nums,
                axis_Line_X + i * tick_Spacing,
                axis_Line_y + 20
              );
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
        let nums;
        let startLens = parseInt(startLen);
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
    progressCheckSelect(val) {
      this.progressList.map((item) => {
        if (item.name == val) {
          this.progressListItem = item.list;
        }
      });
      this.initCanvas();
    },
    //桥
    bridgeCheckSelect() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      this.initCanvas();
    },
    //隧道
    tunnelCheckSelect() {
      this.initCanvas();
    },
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
    //坡度
    slopeCheckSelect() {
      this.initCanvas();
    },
    //道岔
    daocCheckSelect() {
      this.initCanvas();
    },
  },
  //进度
};

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
  if (
    baseline == "bottom" ||
    baseline == "alphabetic" ||
    baseline == "ideographic"
  ) {
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
      context.rotate((90 * Math.PI) / 180);
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
</script>
<style>
#diagram {
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
</style>

