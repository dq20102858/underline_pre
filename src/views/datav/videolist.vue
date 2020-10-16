<template>
  <div id="videolist">
    <div class="videos">
      <div class="grid-content">
        <img :src="require('@/assets/image/video1.png')" />
      </div>
      <div class="grid-content">
        <img :src="require('@/assets/image/video2.png')" />
      </div>
      <div class="grid-content">
        <img :src="require('@/assets/image/video3.png')" />
      </div>
      <div class="grid-content">
        <img :src="require('@/assets/image/video4.png')" />
      </div>
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
  methods: {}
};
</script>

<style>
#videolist {
  position: relative;
  width: 50%;
}
#videolist .videos {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  padding-left: 20px;
  padding-top: 0px;
}
#videolist .videos .grid-content {
  width: 50%;
  height: 50%;
  padding: 5px;
  overflow: hidden;
  display: block;
}
#videolist .videos .grid-content img {
  width: 100%;
}
#scroll-board {
  box-sizing: border-box;
  margin-left: 20px;
  height: 100%;
  overflow: hidden;
}
</style>
