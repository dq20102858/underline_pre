<template>
  <div id="project-intro">
    <div class="intro-box">
      <div class="datav-ptitle"><h3>项目介绍</h3></div>
      <div class="intro-info">
        <el-scrollbar style="height:100%">
          无锡地铁4号线一期工程起自刘潭站，串联了
          城北商务区、河埒商务区、蠡湖新城和太湖
          新城，穿越惠山区、梁溪区、滨湖区三个板
          块，至博览中心站，线路全长24.4km，全部 为地下线，设站 18
          座。线路北端设天河停车 场，南端设具区路车辆段，在金匮公园设一
          座主变电所。已于2017年全面开工，预计 2021年开通运营。</el-scrollbar
        >
      </div>
      <div class="datav-ptitle"><h3>项目概况</h3></div>
      <div class="intro-item">
        <p><i></i>项目位置：<span>无锡</span></p>
        <p><i></i>建设单位：<span>中铁十七局</span></p>
        <p><i></i>设计单位：<span>中铁十七局</span></p>
        <p><i></i>监管单位：<span>无锡电信</span></p>
        <p><i></i>总包单位：<span>纳新科技</span></p>
        <p><i></i>建筑面积：<span>18万平方米</span></p>
      </div>
    </div>
    <div class="intro-box">
     123
    </div>
  </div>
</template>
<script>
export default {
  name: "ProjectIntro",
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
#project-intro {
  position: relative;
  width: 33.3%;
  border: 1px #fff solid;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.intro-box {
  width: 50%;
  flex: 1;
}
.intro-info {
  height: 40%;
  overflow: hidden;
  margin: 15px 30px;
  background: rgba(8, 19, 87, 0.6);
  padding: 15px;
  line-height: 1.8;
}
.intro-item {
  overflow: hidden;
  margin: 15px 30px;
  background: rgba(8, 19, 87, 0.3);
  padding: 15px;
  line-height: 1.8;
}
.intro-item i {
  display: inline-block;
  height: 5px;
  width: 5px;
  border-radius: 100%;
  vertical-align: middle;
  background: #15e4ff; margin-right: 5px;
}
#project-intro .el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>
