<template>
  <div class="app-video">
    <!-- <iframe src ="http://192.168.5.2" id="ifr1" name="ifr1" scrolling="yes" style="width:100%; height:600px;">
  <p>Your browser does not support iframes.</p>
    </iframe>-->
  </div>
</template>
<script>
import "videojs-flash";
export default {
  data() {
    return {
      videoList: []
    };
  },
  mounted() {
     window.open("http://192.168.5.2");
  },
  methods: {
  }
};
</script>
<style>
.app-video .video-js {
  background: none;
  width: 100%;
  height: 180px;
}
.videolist {
  overflow: hidden;
}
.videolist .grid-content {
  background: #fff;
  border: 1px #3655a5 solid;
  border-radius: 6px;
  padding: 2px;
}
.videolist .grid-title {
  color: #1d397a;
  font-size: 16px;
  padding: 10px 8px 8px 8px;
}
.videolist .el-row {
  margin-bottom: 20px;
}
.videolist .el-row :last-child {
  margin-bottom: 0;
}
.videolist .el-col {
  border-radius: 4px;
  margin-bottom: 20px;
}
</style>
