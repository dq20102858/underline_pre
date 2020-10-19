<template>
  <div class="app-video" ref="videoHeight">
    <iframe :src="videoUrl" :height="videoHeight" width="100%"></iframe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      videoUrl: "",
      videoHeight: "600px",
      videoList: []
    };
  },
  updated() {},
  mounted() {
    window.open("http://192.168.5.2/doc/page/login.asp");
  },
  created() {
    this.getVideos();
  },
  methods: {
    getVideos() {
      this.request({
        url: "/video/getVideoList",
        method: "get"
      }).then(res => {
        let data = res.data;
        if (data.status == 1) {
          this.videoUrl = data.data.data[0].url;
          this.videoHeight = this.$refs.videoHeight.clientHeight;
          console.log(this.videoHeight);
        }
      });
    }
  }
};
</script>
<style>
.app-video {
  background: none;
  width: 100%;
  height: calc(100vh - 50px);
}
</style>
