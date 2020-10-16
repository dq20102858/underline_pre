<template>
  <div id="data-view">
    <dv-full-screen-container>
      <top-header />
      <div class="main-content">
        <div class="block-left-right-content">
          <project-intro></project-intro>
          <div class="block-top-bottom-content">
            <div class="block-diagram">
              <diagram></diagram>
            </div>
            <div class="block-diagram-content">
               <videolist></videolist>
               <operation></operation>
            </div>
          </div>
        </div>
        <div class="bottom-content">
          <schedule></schedule>
          <personnel></personnel>
          <monitors></monitors>
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
    diagram
  },
  data() {
    return {
      fatherWidth: 0
    };
  },
  mounted() {
    // this.fatherWidth = document.getElementById("diagram").clientWidth;
  },
  created() {},
  methods: {}
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
  text-align: left;font-size: 14px;    color: #00d9ff;
}

.datav-ptitle {
  padding: 0px 0 0 30px;
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
  background: #01023a url("~@/assets/image/datav-bg.png") no-repeat 60px 70px;
  background-size: 800px;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.block-left-right-content {
  flex: 1;
  display: flex;
  margin-top: 10px;
}

.block-top-bottom-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.block-diagram {
  display: block;
  height: 45%;
  width: 100%;
}
.block-diagram-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 52%;
  overflow: hidden;
}

.bottom-content {
  height: 33%;
  display: flex;
  padding-bottom: 20px;
}
.threebox {
  width: 33.333%;
  float: left;
}
</style>