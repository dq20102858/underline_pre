<template>
  <div id="data-view">
    <dv-full-screen-container>
      <top-header />
      <div class="main-content">
        <div class="one-content">
          <diagram></diagram>
        </div>
        <div class="two-content">
          <project-intro></project-intro>
          <div class="block-content">
            <div class="block-item">
              <videolist></videolist>
              <operation></operation>
            </div>
            <div class="block-item">
              <schedule></schedule>
              <monitors></monitors>
            </div>
          </div>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>
<script>
import topHeader from "./topHeader";
import schedule from "./schedule"; //项目进度
import personnel from "./personnel"; //人员进出
import monitors from "./monitors"; //实时监测
import projectIntro from "./projectIntro"; //
import operation from "./operation"; //
import videolist from "./videolist"; //
import diagram from "./diagram"; //运行图

var _thisall = this;
export default {
  name: "DataView",
  components: {
    topHeader,
    schedule,
    personnel,
    monitors,
    projectIntro,
    operation,
    videolist,
    diagram,
  },
  data() {
    return {
      fatherWidth: 0,
    };
  },
  methods: {},
  mounted() {},
  created() {},
};
</script>
<style>
#data-view {
  width: 100%;
  height: 100%;
  background: #01023a;
  color: #fff;
}
#data-view .dv-scroll-board .rows .row-item {
  height: 40px;
  line-height: 40px;
  text-align: center;
}
#data-view .dv-scroll-board .header div {
  text-align: left;
  font-size: 14px;
  color: #00d9ff;
}

.datav-ptitle {
  padding: 10px 0 0 30px;
}
.datav-ptitle h3 {
  border-left: 5px solid #15e4ff;
  color: #15e4ff;
  font-size: 20px;
  font-weight: 700;
  padding-left: 10px;
}
.datav-list {
  padding: 20px 30px;
  overflow: hidden;
}
#dv-full-screen-container {
  background: #01023a url("~@/assets/image/datav-bg.png") no-repeat 60px 320px;
  background-size: 800px;
  display: flex;
  flex-direction: column;
}
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.one-content {
  display: flex;
  height: 28%;
  width: 100%;
}
.two-content {
  flex: 1;
  display: flex;
  height: 62%;
}
.block-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.block-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 52%;
  overflow: hidden;
}
</style>