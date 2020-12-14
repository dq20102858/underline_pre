<template>
  <div id="project-intro">
    <div class="intro-box">
      <div class="datav-ptitle"><h3>工程概况</h3></div>
      <div id="scroll" class="intro-info">
        <div id="inner1">
          <!-- <el-scrollbar style="height:100%"> -->
          <p>
            无锡地铁4号线一期工程轨道系统施工工程项目01标段施工内容包括正线、配线、场段线及与在建3号线的联络线（从3号线岔心后66.043m为4号线施工范围）的轨道工程。正线刘潭站至西园弄站（含），共8站7区间，里程为DK0+257.300～DK11+455.670，正线及配线双线长度25.054km,含单开道岔11组，交叉渡线3组；场段线包括天河停车场及其出入场线,铺轨长度5.403km,含单开道岔14组，交叉渡线1组。
          </p>
          <p>
            主要施工内容包括轨道系统设备及材料的供货、运输、安装、测试、试验、交验、试运行、试运营、缺陷责任期内的工程缺陷修复等。
          </p>
          <!-- </el-scrollbar> -->
        </div>
        <div id="inner2"></div>
      </div>
      <div class="datav-ptitle"><h3>参建单位</h3></div>
      <div class="intro-item">
        <p><i></i>建设单位：<span>无锡地铁集团有限公司</span></p>
        <p><i></i>设计单位：<span>北京城建设计发展集团股份有限公司</span></p>
        <p><i></i>监理单位：<span>重庆赛迪工程咨询有限公司</span></p>
        <p><i></i>施工单位：<span>中铁十七局集团有限公司</span></p>
        <p><i></i>合作单位：<span>中国电信有限公司无锡分公司</span></p>
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
        <div class="v-dot6"><i></i></div>
        <div class="dname6">青山湾荣院站</div>
        <div class="v-dot7"><i></i></div>
        <div class="dname7">河埒口站</div>
        <div class="v-dot8"><i></i></div>
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
  mounted() {
    this.srcollTxt();
  },
  methods: {
    getCompanyList() {
      this.request({
        url: "/apply/getCompanyLists",
        method: "get",
      }).then((res) => {
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
          page,
        },
      }).then((res) => {
        let data = res.data;
        if (data.status == 1) {
          this.dataList = data.data.data;
          this.page_cur = parseInt(data.data.current_page);
          this.pageTotal = data.data.total;
          this.page_size = data.data.per_page;
          this.page_total = data.data.last_page;
        }
      });
    },
    srcollTxt() {
      var _scroll = document.getElementById("scroll"),
        _inner1 = document.getElementById("inner1"),
        _inner2 = document.getElementById("inner2"),
        speed =50;
      _inner2.innerHTML = _inner1.innerHTML;
      function marquee() {
        if (_inner1.offsetHeight <= _scroll.scrollTop) {
          _scroll.scrollTop = 0;
        } else {
          _scroll.scrollTop++;
        }
      }
      var interval = setInterval(marquee, speed);
      _scroll.onmouseover = function () {
        clearInterval(interval);
      };
      _scroll.onmouseout = function () {
        interval = setInterval(marquee, speed);
      };
    },
    //
  },
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
  height: 300px;
  margin: 15px 30px;
  background: rgba(8, 19, 87, 0.6);
  padding: 15px;
  line-height: 1.8;
  overflow: hidden;
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
.v-dot6 {
  top: 220px;
  left: 95px;
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #ffff00;
  border-radius: 50%;
}
.v-dot6:before {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  opacity: 0.7;
  background-color: #ffff00;
  animation: scaless 1s infinite cubic-bezier(0, 0, 0.49, 1.02);
}
.v-dot7 {
  top: 260px;
  left: 70px;
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #ffff00;
  border-radius: 50%;
}
.v-dot7:before {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  opacity: 0.7;
  background-color: #ffff00;
  animation: scaless 1s infinite cubic-bezier(0, 0, 0.49, 1.02);
}
.v-dot8 {
  top: 300px;
  left: 69px;
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #ffff00;
  border-radius: 50%;
}
.v-dot8:before {
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
