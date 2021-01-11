<template>
  <div id="monitors">
    <div class="datav-ptitle"><h3>实时监测</h3></div>
    <div class="datav-list">
      <div class="progress-item">
        <div class="atxt">请点单位</div>
        <el-progress
          :percentage="getPercentage(dataInfo.todayCompanys/dataInfo.totalCompanys)"
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
        <el-progress
          :percentage="getPercentage(dataInfo.todayTotalWorkers,dataInfo.totalAdmins)"
          color="#ffd980"
          :stroke-width="10"
        ></el-progress>
        <div class="anum">{{dataInfo.todayTotalWorkers}}/<em>{{dataInfo.totalAdmins}}</em></div>
      </div>
      <div class="progress-txt">进场人数/<em>总人数</em></div>
      <div class="progress-item">
        <div class="atxt">离场人数</div>
        <el-progress
          :percentage="getPercentage(dataInfo.todayLeafWorkers,dataInfo.totalAdmins)"
          color="#26da06"
          :stroke-width="10"
        ></el-progress>
        <div class="anum">{{dataInfo.todayLeafWorkers}}/<em>{{dataInfo.totalAdmins}}</em></div>
      </div>
      <div class="progress-txt">离场人数/<em>总人数</em></div>
      <div class="progress-item">
        <div class="atxt">作业内容</div>
        <el-progress
          :percentage="getPercentage(dataInfo.todayWorkDes,dataInfo.todayTotalApplys)"
          color="#2e92ff"
          :stroke-width="10"
        ></el-progress>
        <div class="anum">{{dataInfo.todayWorkDes}}/<em>{{dataInfo.todayTotalApplys}}</em></div>
      </div>
      <div class="progress-txt">作业数量/<em>请点总数</em></div>
      <div class="progress-item">
        <div class="atxt">施工站点</div>
        <el-progress
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

          //totalCompanys: 25                 所有公司数
          //todayCompanys: 12               今日进场总公司数

          //totalAdmins: 137                   所有人员数
          //todayTotalWorkers: 646        今日进场总工人数

          //todayLeafWorkers: 9              今日离场总工人数

          //todayTotalApplys: 30             今日总请点数
          //todayWorkDes: 14                    今日作业内容总数

          //todayStations: 22                 今日站点数量

          console.log(data.data);
        }
      });
    },
    getPercentage(cur,total){
var pec=cur/total
return pec*100
    }
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
