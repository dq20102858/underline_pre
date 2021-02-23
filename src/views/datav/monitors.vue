<template>
  <div id="monitors">
    <div class="datav-ptitle"><h3>实时监测</h3></div>
    <div class="datav-list">
      <div class="progress-item">
        <div class="atxt">请点单位</div>
        <el-progress v-if="getPercentage(dataInfo.todayCompanys,dataInfo.totalCompanys)"
          :percentage="getPercentage(dataInfo.todayCompanys,dataInfo.totalCompanys)"
          color="#fe5a27"
          :stroke-width="10"
        ></el-progress>
        <div class="anum">
          {{dataInfo.todayCompanys}}/<em>{{dataInfo.totalCompanys}}</em>
        </div>
      </div>
      <div class="progress-txt">进场单位/<em>总数</em></div>
      <div class="progress-item">
        <div class="atxt">进场人数</div>
        <el-progress v-if="getPercentage(dataInfo.todayTotalWorkers,dataInfo.totalAdmins)"
          :percentage="getPercentage(dataInfo.todayTotalWorkers,dataInfo.totalAdmins)"
          color="#ffd980"
          :stroke-width="10"
        ></el-progress>
        <div class="anum">{{dataInfo.todayTotalWorkers}}/<em>{{dataInfo.totalAdmins}}</em></div>
      </div>
      <div class="progress-txt">进场人数/<em>总人数</em></div>
      <div class="progress-item">
        <div class="atxt">离场人数</div>
        <el-progress v-if="getPercentage(dataInfo.todayLeafWorkers,dataInfo.todayTotalWorkers)"
          :percentage="getPercentage(dataInfo.todayLeafWorkers,dataInfo.todayTotalWorkers)"
          color="#26da06"
          :stroke-width="10"
        ></el-progress>
        <div class="anum">{{dataInfo.todayLeafWorkers}}/<em>{{dataInfo.todayTotalWorkers}}</em></div>
      </div>
      <div class="progress-txt">离场人数/<em>进场人数</em></div>
      <div class="progress-item">
        <div class="atxt">施工站点</div>
        <el-progress v-if="getPercentage(dataInfo.todayStations,8)"
          :percentage="getPercentage(dataInfo.todayStations,8)"
          color="#6be0e3"
          :stroke-width="10"
        ></el-progress>
        <div class="anum">{{dataInfo.todayStations}}/<em>8</em></div>
      </div>
      <div class="progress-txt">施工站点/<em>总数</em></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Monitors",
  data() {
    return {
      dataInfo: [],
    };
  },
  created() {
    this.getShowData();
  },
  methods: {
    getShowData() {
      this.request({
        url: "/apply/getShowDatas",
        method: "get",
      }).then((res) => {
        let data = res.data;
        if (data.status == 1) {
          this.dataInfo = data.data;
        }
      });
    },
  getPercentage(cur, total) {
      var pec = (parseInt(cur) / parseInt(total)) * 100;
      if (pec > 100) {
        pec = 100;
      }
      return pec;
    },
    //
  },
};
</script>

<style>
#monitors {
  width: 50%;
  position: relative;
}
#monitors .el-progress-bar__outer {
  height: 6px;
  border-radius: 100px;
  background-color: #2d436d;
}
.progress-item {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.progress-item .atxt {
  font-size: 14px;
  padding-right: 10px;
}
.progress-txt {
  font-size: 12px;
  text-align: right;
  display: block;
  margin-bottom: 12px;
  padding-top: 5px;
}
.progress-txt em {
  color: #00d9ff;
}
.progress-item .anum {
  font-size: 14px;
  margin-left: -40px;
}
.progress-item em {
  color: #00d9ff;
}
.progress-item .el-progress {
  flex: 1;
}
.el-progress__text {
  display: none;
}
</style>
