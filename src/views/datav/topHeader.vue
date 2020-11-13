<template>
  <div id="top-header">
    <div id="top-times" class="top-times">{{ times }}</div>
    <div class="center-title">无锡地铁四号线施工大数据平台
      <dv-decoration-3 style="width:420px;height:15px;" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { timer: "", times: "" };
  },
  mounted() {
    this.timer = setInterval(this.timeRun, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  created() {
  },
  methods: {
    timeRun() {
      var now = new Date();
      var year = now.getFullYear();
      var month = now.getMonth() + 1; //月份少1
      var date = now.getDate();
      var week = "星期" + "日一二三四五六".split(/(?!\b)/)[now.getDay()];
      var hours = now.getHours();
      if (hours < 10) {
        hours = "0" + hours;
      }
      var minutes = now.getMinutes();
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      var seconds = now.getSeconds();
      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      this.times =
        year +
        "年" +
        month +
        "月" +
        date +
        "日 " +
        week +
        "  " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds;
    }

    //
  }
};
</script>
<style>
#top-header {
  background: url("~@/assets/image/datav-head-bg.png") no-repeat bottom
    center;
  background-size: 100% auto;
  height: 80px;
}
.top-linebg {
  height: 80px;
}
.top-times {
  padding: 10px 0 0 30px;
  color: #00d9ff;
  font-size: 18px;
}

.header-left-decoration,
.header-right-decoration {
  width: 25%;
  height: 60px;
}
.center-title {
  position: absolute;
  font-size: 30px;
  font-weight: bold;
  left: 50%;
  top: 15px;
  transform: translateX(-50%);
}
</style>
