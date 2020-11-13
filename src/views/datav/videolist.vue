<template>
  <div id="videolist">
    <div class="videos">
      <iframe
        src="http://172.28.2.200:8083/single/%e5%88%98%e6%bd%ad%e7%ab%99%e5%8f%b3%e7%ba%bf%e6%b4%9e%e5%8f%a3"
        scrolling="no"
      ></iframe>
    </div>
    <div class="videos">
      <iframe
        src="http://172.28.2.200:8083/single/%E5%88%98%E6%BD%AD%E7%AB%99%E9%9A%A7%E9%81%93%E5%85%A5%E6%96%99%E5%8F%A3"
        scrolling="no"
      ></iframe>
    </div>
    <div class="videos">
      <iframe
        src="http://172.28.2.200:8083/single/%E5%B9%BF%E7%9F%B3%E7%AB%99-%E5%85%A5%E6%96%99%E5%8F%A3"
        scrolling="no"
      ></iframe>
    </div>
    <div class="videos">
      <iframe
        src="http://172.28.2.200:8083/single/%E6%83%A0%E5%B1%B1%E7%AB%99%E8%B4%A7%E8%BF%90%E8%BD%A6%E9%81%93"
        scrolling="no"
      ></iframe>
    </div>
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
#videolist {
  margin: 10px 20px;
  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
  /* // height: 100%;
  //padding-top: 0px; */
  /* position: relative;
  width: calc(50%-25px);
  margin: 10px;
  display: flex;
  */
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
