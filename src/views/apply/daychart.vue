<template>
  <div id="app-apply-chart">
    <div class="el-menu-top">
      <el-menu router default-active="daychart" mode="horizontal">
        <li class="ptitle">
          <img :src="require('@/assets/image/m_apply_on.png')" />施工请点
        </li>
        <el-submenu index="1">
          <template slot="title">日班计划</template>
          <el-menu-item index="daychart">日班图表</el-menu-item>
          <el-menu-item index="apply">日班列表</el-menu-item>
          <el-menu-item index="conflictcheck">冲突检测</el-menu-item>
        </el-submenu>
        <el-menu-item>
          <router-link :to="{name:'weekplan'}">周计划</router-link>
        </el-menu-item>
        <el-menu-item index="weekplanapply" v-if="sys_role==1">权限审批</el-menu-item>
      </el-menu>
    </div>
    <div class="app-page-chart">
      <div class="maintitle">日班图表</div>
      <div id="main" style="height:500px;width:100%;"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "daychart",
  data() {
    return {
      mark_line: [],
      project_kind_name: [],
      kcolor: ["red", "green", "yellow", "#467aff", "#44ddb5", "#c245d3"]
    };
  },
  computed: {
    ...mapGetters(["sys_role", "roles"])
  },
  mounted() {
    document
      .querySelector("#app-menu-items #menu_apply")
      .classList.add("is-active");
    this.getChart();
  },

  methods: {
    getChart() {
      this.request({
        url: "/apply/getDailyChart",
        method: "get"
      }).then(res => {
        let resdata = res.data;
        if (resdata.status == 1) {
          //myChart
          var myChart = this.$echarts.init(document.getElementById("main"));
          myChart.getDom().style.height =
            document.body.clientHeight - 280 + "px";
          //站点
          this.mark_line = JSON.parse(
            JSON.stringify(resdata.data.y).replace(/value/g, "yAxis")
          );
          console.log(this.mark_line);
          let minLineNum = Math.min.apply(
            Math,
            this.mark_line.map(function(item) {
              return parseInt(item.yAxis - 1);
            })
          );
          let maxLineNum = Math.max.apply(
            Math,
            this.mark_line.map(function(item) {
              return parseInt(item.yAxis + 1);
            })
          );
          //A1 A2 A3 A4
          let typeData = [];
          let dataTypeArr = resdata.data.data;
          dataTypeArr.forEach(item => {
            let jlist = [];
            item.lists.forEach(item => {
              jlist.push([item.name, item.value]);
            });
            typeData.push({ name: item.type, lists: jlist });
          });
          console.log("typeData：" + JSON.stringify(typeData));
          let seriesData = [];
          seriesData.push({
            name: "车站",
            type: "line",
            markLine: {
              silent: true,
              data: this.mark_line,
              label: {
                normal: {
                  position: "left",
                  formatter: function(value, index) {
                    let aa = value.name.replace(".00", "");
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
          let projectData = [];
          for (let k in typeData) {
            seriesData.push({
              name: typeData[k].name,
              type: "scatter",
              symbolSize: 8,
              itemStyle: { normal: { color: this.kcolor[k] } },
              data: typeData[k].lists
            });
          }
          console.log("projectData：" + JSON.stringify(seriesData));
          //时间
          let dayArr = [];
          let tday = resdata.data.x;
          for (var i in tday) {
            dayArr.push(i);
          }
          let dataMinA = new Date(dayArr.shift());
          let dataMaxA = new Date(dayArr.pop());

          let dataMin = new Date(dataMinA.getTime()).setHours(0, 0, 0, 0);
          let dataMax = new Date(dataMaxA.getTime()).setHours(23, 59, 59, 0);

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
                formatter: function(value, index) {
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
          window.addEventListener("resize", function() {
            myChart.resize();
          });
        }
      });
    }
  }
};
</script>
<style>
#app-apply-chart {
  background-color: #030a2e;
  height: 100vh;
}
.maintitle {
  text-align: center;
  font-size: 24px;
  color: #fff;
}
.el-menu--collapse .el-menu .el-submenu,
.el-menu--popup {
  min-width: 124px;
  text-align: center;
  padding: 0;
}
.el-menu--horizontal .el-menu .el-menu-item.is-active,
.el-menu--horizontal .el-menu .el-submenu.is-active > .el-submenu__title {
  background: #4b6eca;
  color: #fff;
}
.app-page-chart {
  font-size: 16px !important;
  padding: 30px;
}
.canvas_main {
  /*width: 100%;*/
}
</style>
