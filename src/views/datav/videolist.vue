<template>
  <div id="videobox">
    <!-- <iframe
      src="http://172.28.2.200:8083/single/%E6%83%A0%E5%B1%B1%E7%AB%99%E8%B4%A7%E8%BF%90%E8%BD%A6%E9%81%93"
      scrolling="no"
    ></iframe> -->

    <img
      :src="require('@/assets/image/video0.jpg')"
      style="width: 650px; height: 350px"
    />
  </div>
</template>
<script>
export default {
  name: "videolist",
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style>
#videobox {
  width: 100%;
  height: 100%;
  text-align: center;
}
#videobox iframe {
  margin: 0 auto;
  border: none;
  height: 90%;
  width: 90%;
}
#videolist {
  margin: 10px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
#videolist .videos {
  width: 50%;
  height: 50%;
  overflow: hidden;
  display: block;
  margin-top: 1px;
}
#videolist iframe {
  border: none;
  height: 100%;
  width: 100%;
}
</style>
