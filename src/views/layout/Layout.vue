<template>
  <div class="app-wrapper" :class="classObj">
    <div class="app-ishow" v-if="noMenu">
      <sidebar class="sidebar-container"></sidebar>
      <div class="main-container">
        <navbar :msg="msg"></navbar>
        <!-- <tags-view></tags-view> -->
        <app-main></app-main>
      </div>
    </div>
    <div v-else>
     <app-main></app-main>
    </div>
  </div>
</template>
<script>
import { Navbar, Sidebar, AppMain } from "./components";
// import ResizeMixin from "./mixin/ResizeHandler";
export default {
  data() {
    return {
      msg: 0,
      noMenu: true
    };
  },
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  // mixins: [ResizeMixin],
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar;
    },
    device() {
      return this.$store.state.app.device;
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === "mobile"
      };
    }
  },
  mounted() {
    this.isMenu();
  },
  methods: {
    isMenu() {
      let curpath = this.$route.path;
      console.log(curpath);
      // if (curpath == "/datav") {
      if (curpath.indexOf("datav") != -1) {
        this.noMenu = false;
      } 
    },
    handleClickOutside() {
      this.$store.dispatch("closeSideBar", { withoutAnimation: false });
    }
  }
};
</script>