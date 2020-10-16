<template>
  <div id="project-intro">
    <div class="intro-box">
      <div class="datav-ptitle" style="padding-top:0"><h3>项目介绍</h3></div>
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
      <div class="subwap">
        <div class="v-dot1"><i></i></div>
        <div class="dname1">刘潭</div>
        <div class="v-dot2"><i></i></div>
        <div class="dname2">广石路</div>
        <div class="dot dot3"><i></i></div>
        <div class="dname3">黄巷站</div>
        <div class="dot dot4"><i></i></div>
        <div class="dname4">盛岸站</div>
        <div class="v-dot5"><i></i></div>
        <div class="dname5">惠山古镇站</div>
        <div class="dot dot6"><i></i></div>
        <div class="dname6">青山湾荣院站</div>
        <div class="dot dot7"><i></i></div>
        <div class="dname7">河埒口站</div>
        <div class="dot dot8"><i></i></div>
        <div class="dname8">西园弄站</div>
        <div class="dot dot9"><i></i></div>
        <div class="dname9">体育中心站</div>
        <div class="dot dot10"><i></i></div>
        <div class="dname10">夏家边站</div>
        <div class="dot dot11"><i></i></div>
        <div class="dname11">蠡湖大桥站</div>
        <div class="dot dot12"><i></i></div>
        <div class="dname12">大剧院站</div>
        <div class="dot dot13"><i></i></div>
        <div class="dname13">五湖大道站</div>
        <div class="dot dot14"><i></i></div>
        <div class="dname14">周新苑站</div>
        <div class="dot dot15"><i></i></div>
        <div class="dname15">市民中心站</div>
        <div class="dot dot16"><i></i></div>
        <div class="dname16">吴都路站</div>
        <div class="dot dot17"><i></i></div>
        <div class="dname17">丰润道站</div>
        <div class="dot dot18"><i></i></div>
        <div class="dname18">博览中心站</div>
      </div>
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
  background: #15e4ff;
  margin-right: 5px;
}
#project-intro .el-scrollbar__wrap {
  overflow-x: hidden;
}

.subwap {
  position: relative;
  z-index: 1000;
  height: 600px;
  background: url(~@/assets/image/subline.png) no-repeat 50px center;
  background-size: auto 550px;
}
.subwap .dot {
  padding: 2px;
  border-radius: 100%;
  border: 1px rgba(255, 255, 255, 0.5) solid;
  position: absolute;
}
.subwap .dot i {
  height: 5px;
  width: 5px;
  background: #fff;
  border-radius: 100%;
  display: block;
}
.subwap .dots {
  padding: 2px;
  border-radius: 100%;
  border: 1px #f7de0f solid;
  position: absolute;
}
.subwap .dots i {
  height: 5px;
  width: 5px;
  background: #f7de0f;
  border-radius: 100%;
  display: block;
}
.dot1 {
  left: 192px;
  top: 28px;
}
.dname1 {
  position: absolute;
  left: 210px;
  top: 25px;
}
.dot2 {
  left: 160px;
  top: 46px;
}
.dname2 {
  position: absolute;
  left: 100px;
  top: 42px;
}
.dot3 {
  top: 96px;
  left: 136px;
}
.dname3 {
  position: absolute;
  top: 93px;
  left: 156px;
}
.dot4 {
  top: 136px;
  left: 100px;
}
.dname4 {
  position: absolute;
  top: 132px;
  left: 50px;
}
.dot5 {
  top: 170px;
  left: 108px;
}
.dname5 {
  position: absolute;
  top: 168px;
  left: 25px;
}
.dot6 {
  top: 220px;
  left: 95px;
}
.dname6 {
  position: absolute;
  top: 216px;
  left: 115px;
}
.dot7 {
  top: 260px;
  left: 70px;
}
.dname7 {
  position: absolute;
  top: 258px;
  left: 5px;
}
.dot8 {
  top: 300px;
  left: 69px;
}
.dname8 {
  position: absolute;
  top: 298px;
  left: 5px;
}
.dot9 {
  top: 330px;
  left: 70px;
}
.dname9 {
  position: absolute;
  top: 328px;
  left: 90px;
}
.dot10 {
  top: 365px;
  left: 63px;
}
.dname10 {
  position: absolute;
  top: 360px;
  left: 0px;
}
.dot11 {
  top: 392px;
  left: 82px;
}
.dname11 {
  position: absolute;
  top: 400px;
  left: 10px;
}
.dot12 {
  top: 418px;
  left: 124px;
}
.dname12 {
  position: absolute;
  top: 414px;
  left: 144px;
}
.dot13 {
  top: 444px;
  left: 154px;
}
.dname13 {
  position: absolute;
  top: 454px;
  left: 84px;
}
.dot14 {
  top: 455px;
  left: 188px;
}
.dname14 {
  position: absolute;
  top: 453px;
  left: 212px;
}
.dot15 {
  top: 490px;
  left: 204px;
}
.dname15 {
  position: absolute;
  top: 487px;
  left: 121px;
}
.dot16 {
  top: 520px;
  left: 209px;
}
.dname16 {
  position: absolute;
  top: 517px;
  left: 144px;
}
.dot17 {
  top: 558px;
  left: 224px;
}
.dname17 {
  position: absolute;
  top: 557px;
  left: 160px;
}
.dot18 {
  top: 555px;
  left: 249px;
}
.dname18 {
  position: absolute;
  top: 530px;
  left: 244px;
}
.v-dot1 {
  left: 192px;
  top: 28px;
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #ffff00;
  border-radius: 50%;
}
.v-dot1:before {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  opacity: 0.7;
  background-color: #ffff00;
  animation: scaless 1s infinite cubic-bezier(0, 0, 0.49, 1.02);
}
.v-dot2 {
  left: 160px;
  top: 46px;
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #ffff00;
  border-radius: 50%;
}
.v-dot2:before {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  opacity: 0.7;
  background-color: #ffff00;
  animation: scaless 1s infinite cubic-bezier(0, 0, 0.49, 1.02);
}
.v-dot5 {
  top: 170px;
  left: 108px;
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #ffff00;
  border-radius: 50%;
}
.v-dot5:before {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  opacity: 0.7;
  background-color: #ffff00;
  animation: scaless 1s infinite cubic-bezier(0, 0, 0.49, 1.02);
}
@keyframes scales {
  0% {
    transform: scale(1);
  }

  50%,
  75% {
    transform: scale(2);
  }

  78%,
  100% {
    opacity: 0;
  }
}
@keyframes scaless {
  0% {
    transform: scale(1);
  }

  50%,
  75% {
    transform: scale(3);
  }

  78%,
  100% {
    opacity: 0;
  }
}
</style>
