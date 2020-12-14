<template>
  <div id="monitors">
    <div class="datav-ptitle"><h3>实时监测</h3></div>
    <div class="datav-list">
      <div class="progress-item">
        <div class="atxt">请点单位</div>
        <el-progress
          :percentage="11.3"
          color="#fe5a27"
          :stroke-width="10"
        ></el-progress>
        <div class="anum">6/<em>10</em></div>
      </div>
      <div class="progress-txt">进场单位/<em>总数</em></div>
      <div class="progress-item">
        <div class="atxt">进场人数</div>
        <el-progress
          :percentage="43"
          color="#ffd980"
          :stroke-width="10"
        ></el-progress>
         <div class="anum">110/<em>110</em></div>
      </div>
       <div class="progress-txt">进场人数/<em>总人数</em></div>
      <div class="progress-item">
        <div class="atxt">离场人数</div>
        <el-progress
          :percentage="50"
          color="#26da06"
          :stroke-width="10"
        ></el-progress>
         <div class="anum">0/<em>110</em></div>
      </div>
      <div class="progress-txt">离场人数/<em>总人数</em></div>
      <div class="progress-item">
        <div class="atxt">&nbsp;&nbsp;&nbsp;&nbsp;安全帽</div>
        <el-progress
          :percentage="50"
          color="#2e92ff"
          :stroke-width="10"
        ></el-progress>
      </div>
      <div class="progress-txt">安全帽/<em>总人数</em></div>
      <div class="progress-item">
        <div class="atxt">反光背心</div>
        <el-progress
          :percentage="50"
          color="#6be0e3"
          :stroke-width="10"
        ></el-progress>
         <div class="anum">20/<em>40</em></div>
      </div>
      <div class="progress-txt">反光背心/<em>总人数</em></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Monitors",
  data() {
    return {};
  },
  created() {},
  methods: {
    getCompanyList() {
      this.request({
        url: "/apply/getCompanyLists",
        method: "get"
      }).then(res => {
        let data = res.data;
        if (data.status == 1) {
          this.companyList = data.data;
        }
      });
    },
    getDataList() {
      let page = this.page_cur;
      this.request({
        url: "/location/getDevicePages",
        method: "get",
        params: {
          page
        }
      }).then(res => {
        let data = res.data;
        if (data.status == 1) {
          this.dataList = data.data.data;
          this.page_cur = parseInt(data.data.current_page);
          this.pageTotal = data.data.total;
          this.page_size = data.data.per_page;
          this.page_total = data.data.last_page;
        }
      });
    }
    //
  }
};
</script>

<style>
#monitors {  width: 50%;
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
.progress-txt  em {
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
