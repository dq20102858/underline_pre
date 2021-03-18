<template>
  <div id="schedule">
    <div class="datav-ptitle"><h3>项目进度</h3></div>
    <div id="progress" ref="proWrapper" :style="conheight">
      <!-- <table class="lineTable zylineTable">
        <tr class="linebar">
          <td style="width: 90px;">
            <div title="左线" class="tdtitle">左线</div>
          </td>
          <td class="tdbar">
            <div class="bar">
              <em :style="{ width: cwidth + 'px' }"></em>
            </div>
          </td>
        </tr>
        <tr class="linebar">
          <td style="width: 90px;">
            <div title="右线" class="tdtitle">右线</div>
          </td>
          <td class="tdbar">
            <div class="bar">
              <em :style="{ width: cwidth + 'px' }"></em>
            </div>
          </td>
        </tr>
      </table> -->

      <div class="station">
        <canvas id="canvasStation" height="50" ref="canvasStation">
          <p>您的系统不支持此程序!</p>
        </canvas>
      </div>
      <div class="linebox" ref="reflinebox">
        <table class="lineTable">
          <tr
            class="linebar"
            v-for="(item, index) in listSchedule"
            :key="item.id"
            v-if="index < 3"
          >
            <td style="width:90px;">
              <div class="tdtitle" :title="item.name">{{ item.name }}</div>
            </td>
            <td class="tdbar">
              <div class="bar" v-for="lines in item.lines" :key="lines.id">
                <em
                  :style="{ width: cwidth + 'px' }"
                  v-html="lineFill(lines.lists, lines.name)"
                  ><b>{{ lines.name }}</b>
                  <!-- <i v-for="lists in lines.lists" :key="lists.id" :style="{{lineFill(lists.start_flag)}}"></i> -->
                </em>
                <span>{{ lines.name }}</span>
              </div>
            </td>
          </tr>
        </table>

        <!-- <div class="flagstion">
            <div class="items" style="left:120px">
              <div class="titles">
                <h3>西园里</h3>
                <i></i>
              </div>
              <div
                class="linew"
                :style="{ height: stationlineHeight + 'px' }"
              ></div>
            </div>
          </div> -->
        <div class="clear"></div>
      </div>
      <div class="lineboxwel">
        <span><em class="a1"></em>轨道线</span>
        <span><em class="a2"></em>施工完成</span>
        <span><em class="a3"></em>施工未完成</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
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

  updated() {
    this.getStationList();
    this.stationlineHeight = this.$refs.reflinebox.offsetHeight;
  },
  created() {
    this.getProjectProcessMap();
  },
  methods: {
    getProjectProcessMap() {
      this.request({
        url: "/project/projectProcessMap",
        method: "get"
      }).then(response => {
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
          this.listSchedule = data.data.datas;
        }
      });
    },

    getStationList() {
      let clientWidth = this.$refs.proWrapper.clientWidth;
      let canvasWidth = clientWidth - 130;
      this.cwidth = canvasWidth;
      let lineTypeBetwentMileage =
        this.lineTypeMaxMileage - this.lineTypeMinMileage;
      let lineTypeTotalMileage =
        this.lineTypeMaxMileage + this.lineTypeMinMileage;
      this.everyLineType = (
        parseInt(this.cwidth) / lineTypeBetwentMileage
      ).toFixed(5);
      this.every = (parseInt(canvasWidth) / lineTypeBetwentMileage).toFixed(5);
      // console.log("cwidth" + this.cwidth + "_" + this.everyLineType);

      const canvas = this.$refs.canvasStation;
      let cansText = canvas.getContext("2d");
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
      let json = this.stationList;
      let lineTypeMinMileage = this.lineTypeMinMileage;
      let lineTypeMaxMileage = this.lineTypeMaxMileage;
      let every = this.every; //每米长度等于px
      //console.log("every：" + every);
      //
      let img = new Image();
      img.src = require("@/assets/image/staxs.jpg");
      img.onload = function() {
        let start = 0;
        let distance=[0,20,20,20,40,60,30,40,30];
        for (let i = 0; i < json.length; i++) {
          // 绘制站点图
          let total =
            parseInt(json[i].start_flag) * 1000 +
            parseInt(json[i].start_length);
          let startLineX = (total - lineTypeMinMileage) * every;
          // 计算当前站点的x轴
          cansText.drawImage(img, startLineX, 20, 12, 42);
          let endLineX = lineTypeMaxMileage - total;
          // //站名
          cansText.font = "12px Microsoft Yahei";
          cansText.fillStyle = "#fff";
          let origin = json[i].name;
       
          cansText.fillText(origin, startLineX-distance[i], 15);
        
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
    lineFill: function(paras, linename) {
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
      let result = "";
      let start = 0;
      for (let i = 0; i < paras.length; i++) {
        let starMileage =
          parseInt(paras[i].start_flag) * 1000 +
          parseInt(paras[i].start_length);
        let endMileage =
          parseInt(paras[i].end_flag) * 1000 + parseInt(paras[i].end_length);
        let leftPosition =
          parseFloat(starMileage - this.lineTypeMinMileage) *
          this.everyLineType;
        let widthPosition =
          parseFloat(endMileage - starMileage) * this.everyLineType;

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
          widthPosition =
            parseFloat(endMileage - this.lineTypeMinMileage) *
            this.everyLineType;
        }
        let titles =
          "DK " +
          paras[i].start_flag +
          "+" +
          paras[i].start_length +
          "~" +
          paras[i].end_flag +
          "+" +
          paras[i].end_length;
        result +=
          "<i title='" +
          titles +
          "' style='width:" +
          widthPosition +
          "px;left:" +
          leftPosition +
          "px'></i>";
      }
      return result;
    }
  },
  mounted() {
    window.addEventListener("resize", this.getStationList);
  },
  destroyed() {
    window.removeEventListener("resize", this.getStationList);
  }
};

//prototype
CanvasRenderingContext2D.prototype.fillTextVertical = function(text, x, y) {
  var context = this;
  var canvas = context.canvas;

  var arrText = text.split("");
  var arrWidth = arrText.map(function(letter) {
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
  arrText.forEach(function(letter, index) {
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
#schedule {
  width: 50%;
  height: 33.3%;
}
#progress {
  width: 100%;
  height: 100%;
  background: #01023a;
}
.progress {
  background: #01023a;
  padding-bottom: 30px;
}
.station {
  margin: 20px 0px 0px 90px;
  position: relative;
  z-index: 999;
}
#schedule .linebox {
  position: relative;
  margin-top: -7px;
}
.zylineTable {
  margin-top: 20px;
  margin-bottom:10px;
}
.zylineTable .bar em {
  height: 10px;
  background: #fff;
  border: 1px #fff solid !important;
}
/* lineTable */
#schedule .lineTable {
  width: 100%;
  border-collapse: collapse;
}
#schedule .lineTable td {
  color: #fff;
}
#schedule .lineTable .tdtitle {
  text-align: center;
  overflow: hidden;
  height: 12px;
  padding-left: 5px;
  width: 92px;
  font-size: 12px;
  line-height: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#schedule .tdbar .bar {
  height: 14px;
  overflow: hidden;
  margin-bottom: 5px;
}
#schedule .tdbar .bar:last-child {
  border-bottom: 0;
}

#schedule .tdbar .bar span {
  font-size: 12px;
  color: #fff;
  line-height: 12px;
  text-align: center;
}
#schedule .tdbar .bar em {
  height: 10px;
  display: inline-block;
  position: relative;
  overflow: hidden;
  border: 1px #1a9417 solid;
}

#schedule .tdbar .bar em i {
  position: absolute;
  top: 0;
  background: #27db07;
  height: 12px;
  display: inline-block;
  overflow: hidden;
}
.tdbar .bar em i:first-child {
  border-left: 0;
}
.tdbar .bar em i:last-child {
  border-left: 0;
}
.clear {
  clear: both;
}

.lineboxwel {
  text-align: right;
  padding-top:20px;
  padding-right: 5px;
}
.lineboxwel span {
  text-align: center;
  display: inline-block;
  color: #fff; margin-right: 30px;
  font-size: 12px;
}
.lineboxwel em {
  height: 6px;
  width: 60px;
  display: block;
  margin-bottom: 5px;
}
.lineboxwel em.a1 {
  background: #fff;
}
.lineboxwel em.a2 {
  background: #27db07;
}
.lineboxwel em.a3 {
  border: 1px #1a9417 solid;
}
/* //#27DB07 */
</style>

