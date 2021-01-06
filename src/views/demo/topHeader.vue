<template>
  <div id="diagram">
    <div class="datav-ptitle" style="padding-top: 0"><h3>施工形象图</h3></div>
    <div class="station" ref="canvasWrapper">
      <canvas id="canvasStation" height="200" ref="canvasStation">
        <p>您的系统不支持此程序!</p>
      </canvas>
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
    <div id="notify" class="notify"></div>
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
let locationPush = [];
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

  methods: {
    getProjectProcessMap() {
        let data ={
    "data": {
        "stations": [
            {
                "id": 1,
                "name": "\u5218\u6f6d\u7ad9",
                "start_flag": 0,
                "start_length": 257,
                "line_type": 1
            },
            {
                "id": 2,
                "name": "\u5e7f\u77f3\u8def\u7ad9",
                "start_flag": 1,
                "start_length": 803,
                "line_type": 1
            },
            {
                "id": 3,
                "name": "\u9ec4\u5df7\u7ad9",
                "start_flag": 4,
                "start_length": 232,
                "line_type": 1
            },
            {
                "id": 4,
                "name": "\u76db\u5cb8\u7ad9",
                "start_flag": 5,
                "start_length": 249,
                "line_type": 1
            },
            {
                "id": 5,
                "name": "\u60e0\u5c71\u53e4\u9547\u7ad9",
                "start_flag": 6,
                "start_length": 736,
                "line_type": 1
            },
            {
                "id": 6,
                "name": "\u9752\u5c71\u6e7e\u8363\u9662\u7ad9",
                "start_flag": 8,
                "start_length": 694,
                "line_type": 1
            },
            {
                "id": 7,
                "name": "\u6cb3\u57d2\u53e3\u7ad9",
                "start_flag": 9,
                "start_length": 808,
                "line_type": 1
            },
            {
                "id": 8,
                "name": "\u897f\u56ed\u5f04\u7ad9",
                "start_flag": 11,
                "start_length": 270,
                "line_type": 1
            }
        ],
        "line_types": [
            {
                "id": 1,
                "name": "\u5de6\u7ebf",
                "start_flag": 0,
                "start_length": 257,
                "end_flag": 11,
                "end_length": 455,
                "start_total": 257,
                "end_total": 11455
            },
            {
                "id": 2,
                "name": "\u53f3\u7ebf",
                "start_flag": 0,
                "start_length": 257,
                "end_flag": 11,
                "end_length": 455,
                "start_total": 257,
                "end_total": 11455
            }
        ],
        "people_location": [
            {
                "id": 491579,
                "station_id1": "0x110002b2",
                "station_id2": "0x110002f0",
                "distance1": 57,
                "distance2": 160,
                "cal_distance1": 234.43,
                "cal_distance2": 65.57,
                "client_id": "0x07000181",
                "create_time": "2021-01-05 09:22:57",
                "user_id": 247,
                "line_type": 1,
                "depart_id": 7,
                "is_online": 1,
                "type": 1,
                "verify_code": "0x5102",
                "accelerate": "0x0000",
                "line": "\u5de6\u7ebf",
                "name": "\u5415\u946b",
                "depart_name": "\u6d4b\u91cf\u961f",
                "company_name": "\u4e2d\u94c1\u5341\u4e03\u5c40\u8f68\u905301\u6807\u9879\u76ee\u90e8",
                "post_name": "\u6d4b\u91cf1\u961f",
                "start_flag": "7",
                "start_length": 523
            },
            {
                "id": 491578,
                "station_id1": "0x110002b2",
                "station_id2": "0x110002f0",
                "distance1": 162,
                "distance2": 40,
                "cal_distance1": 57.58,
                "cal_distance2": 242.42,
                "client_id": "0x07000045",
                "create_time": "2021-01-05 09:22:38",
                "user_id": 217,
                "line_type": 1,
                "depart_id": 1,
                "is_online": 1,
                "type": 1,
                "verify_code": "0x052c",
                "accelerate": "0x0000",
                "line": "\u5de6\u7ebf",
                "name": "\u5218\u5065",
                "depart_name": "test_part",
                "company_name": "test",
                "post_name": "test_name",
                "start_flag": "7",
                "start_length": 445
            },
            {
                "id": 491577,
                "station_id1": "0x110002f0",
                "station_id2": "0x110002b2",
                "distance1": 94,
                "distance2": 77,
                "cal_distance1": 138.86,
                "cal_distance2": 161.14,
                "client_id": "0x07000371",
                "create_time": "2021-01-05 09:22:46",
                "user_id": 212,
                "line_type": 1,
                "depart_id": 7,
                "is_online": 1,
                "type": 1,
                "verify_code": "0x6258",
                "accelerate": "0x0000",
                "line": "\u5de6\u7ebf",
                "name": "\u674e\u4e1c\u6770",
                "depart_name": "\u8c03\u5ea6\u5ba4",
                "company_name": "\u4e2d\u94c1\u5341\u4e03\u5c40\u8f68\u905301\u6807\u9879\u76ee\u90e8",
                "post_name": "\u8c03\u5ea6",
                "start_flag": "7",
                "start_length": 450
            },
            {
                "id": 491572,
                "station_id1": "0x110002b2",
                "station_id2": "0x110002e1",
                "distance1": 36,
                "distance2": 37,
                "cal_distance1": 150.46,
                "cal_distance2": 149.54,
                "client_id": "0x0700029b",
                "create_time": "2021-01-05 09:21:49",
                "user_id": 6,
                "line_type": 1,
                "depart_id": 0,
                "is_online": 1,
                "type": 3,
                "verify_code": "0xde16",
                "accelerate": "0x0000",
                "line": "\u5de6\u7ebf",
                "name": "\u6d4b\u8bd5",
                "depart_name": "test",
                "start_flag": "7",
                "start_length": 237
            },
            {
                "id": 491558,
                "station_id1": "0x11000301",
                "station_id2": "0x110002b8",
                "distance1": 62,
                "distance2": 61,
                "cal_distance1": 149.46,
                "cal_distance2": 150.54,
                "client_id": "0x0700029e",
                "create_time": "2021-01-05 09:19:49",
                "user_id": 307,
                "line_type": 1,
                "depart_id": 79,
                "is_online": 1,
                "type": 1,
                "verify_code": "0xd1db",
                "accelerate": "0x3101",
                "line": "\u5de6\u7ebf",
                "name": "\u5f90\u8fbe",
                "depart_name": "\u5b89\u5168\u90e8",
                "company_name": "\u822a\u5929\u5927\u4e3a\u673a\u753502\u6807",
                "post_name": "\u5b89\u5168\u5458",
                "start_flag": "10",
                "start_length": 459
            },
            {
                "id": 491556,
                "station_id1": "0x1100029e",
                "station_id2": "0x110002fb",
                "distance1": 200,
                "distance2": 92,
                "cal_distance1": 0,
                "cal_distance2": 300,
                "client_id": "0x070002f4",
                "create_time": "2021-01-05 09:19:41",
                "user_id": 289,
                "line_type": 1,
                "depart_id": 72,
                "is_online": 1,
                "type": 1,
                "verify_code": "0xc532",
                "accelerate": "0x920b",
                "line": "\u5de6\u7ebf",
                "name": "\u7eaa\u6e90\u6770",
                "depart_name": "\u5b89\u8d28\u90e8",
                "company_name": "\u4e2d\u94c1\u4e00\u5c40\u96c6\u56e2\u7535\u52a1\u5de5\u7a0b\u6709\u9650\u516c\u53f8\u4f9b\u753501\u6807",
                "post_name": "\u5b89\u5168\u5458",
                "start_flag": "9",
                "start_length": 1008
            },
            {
                "id": 491546,
                "station_id1": "0x1100029e",
                "station_id2": "0x110002b8",
                "distance1": 200,
                "distance2": 57,
                "cal_distance1": 0,
                "cal_distance2": 300,
                "client_id": "0x070000b1",
                "create_time": "2021-01-05 09:18:54",
                "user_id": 296,
                "line_type": 1,
                "depart_id": 72,
                "is_online": 1,
                "type": 1,
                "verify_code": "0xa9c0",
                "accelerate": "0xc800",
                "line": "\u5de6\u7ebf",
                "name": "\u8f66\u5c0f\u98de",
                "depart_name": "\u5b89\u8d28\u90e8",
                "company_name": "\u4e2d\u94c1\u4e00\u5c40\u96c6\u56e2\u7535\u52a1\u5de5\u7a0b\u6709\u9650\u516c\u53f8\u4f9b\u753501\u6807",
                "post_name": "\u5b89\u5168\u5458",
                "start_flag": "10",
                "start_length": 8
            },
            {
                "id": 491506,
                "station_id1": "0x11000289",
                "station_id2": "0x110002f2",
                "distance1": 6,
                "distance2": 58,
                "cal_distance1": 173.21,
                "cal_distance2": 126.79,
                "client_id": "0x0700029c",
                "create_time": "2021-01-05 09:13:26",
                "user_id": 303,
                "line_type": 2,
                "depart_id": 43,
                "is_online": 1,
                "type": 1,
                "verify_code": "0xd810",
                "accelerate": "0x0000",
                "line": "\u53f3\u7ebf",
                "name": "\u8881\u6d77\u9501",
                "depart_name": "\u5de5\u7a0b\u90e8",
                "company_name": "\u4e2d\u94c1\u4e0a\u6d77\u5c40\u571f\u5efa03\u6807\u9879\u76ee\u90e8",
                "post_name": "\u90e8\u957f",
                "start_flag": "7",
                "start_length": 462
            },
            {
                "id": 491484,
                "station_id1": "0x1100029e",
                "station_id2": "0x110002b8",
                "distance1": 200,
                "distance2": 56,
                "cal_distance1": 0,
                "cal_distance2": 300,
                "client_id": "0x070002ab",
                "create_time": "2021-01-05 09:09:45",
                "user_id": 290,
                "line_type": 1,
                "depart_id": 72,
                "is_online": 1,
                "type": 1,
                "verify_code": "0xbef1",
                "accelerate": "0x0000",
                "line": "\u5de6\u7ebf",
                "name": "\u7eaa\u96c4\u946b",
                "depart_name": "\u5b89\u8d28\u90e8",
                "company_name": "\u4e2d\u94c1\u4e00\u5c40\u96c6\u56e2\u7535\u52a1\u5de5\u7a0b\u6709\u9650\u516c\u53f8\u4f9b\u753501\u6807",
                "post_name": "\u5b89\u5168\u5458",
                "start_flag": "10",
                "start_length": 8
            }
        ]
    }
};
    
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
        
          this.peopleLocation = data.data.people_location; //人员定位
       
          this.initCanvas();
          //
     // });
    },

    initCanvas() {
      const that = this;
      let canvasWidth =1000;// that.$refs.canvasWrapper.clientWidth - 30;
        console.log("canvasWidth：" + this.cwidth + "_" + this.everys);

      this.cwidth = canvasWidth;
      let lineTypeBetwentMileage =
        this.lineTypeMaxMileage - this.lineTypeMinMileage;
      let lineTypeTotalMileage =
        this.lineTypeMaxMileage + this.lineTypeMinMileage;
      this.everys = (parseInt(this.cwidth) / lineTypeBetwentMileage).toFixed(5);
    

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
      //人定位
      function drawAxesPeple(jsonData) {
       let jsoPeple = jsonData;
        let jsoPeplet = [
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
          } , {
            id: 1,
            name: "ZY01",
            start_flag: 2,
            start_length: 804,
            line_type: 2,
            type: "1",
            company_name: "",
            depart_name: "",
            post_name: "",
          }
        ];
        let start = 0;
        context.fillStyle = "#fff ";
        context.font = "10px  Microsoft Yahei";
        for (let i = 0; i < jsoPeple.length; i++) {
          let total =
            parseInt(jsoPeple[i].start_flag) * 1000 +
            parseInt(jsoPeple[i].start_length);
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
                20,
                20
              );
              //DK
              //context.fillText(codes, startLineX + 5, axis_LeftLine.y - 28);
            };
            locationPush.push({
              x: startLineX,
              y: axis_LeftLine.y - 25,
              w: 20,
              h: 20,
              text: codes,
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
                20,
                20
              );
              //DK
              //context.fillText(codes, startLineX + 5, axis_LeftLine_Two.y - 28);
            }; //
            locationPush.push({
              x: startLineX,
              y: axis_LeftLine_Two.y - 25,
              w: 20,
              h: 20,
              text: codes,
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

      //====================================
      drawAxesLine(this.lineTypeList);
      drawAxesStationList(this.stationList);
      drawAxesPeple(this.peopleLocation);

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
  },
  //进度
};
</script>
<style>
#diagram {
  position: absolute;
  width: 100%;
 background: #01023a; 
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

