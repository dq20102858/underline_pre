<template>
    <el-scrollbar wrapClass="scrollbar-wrapper">
        <el-menu class="app-menu" mode="vertical" :show-timeout="200" :default-active="$route.path" :collapse="isCollapse">
            <sidebar-item :routes="permission_routers"></sidebar-item>
        </el-menu>
    </el-scrollbar>
</template>
<script>
    import { mapGetters } from "vuex";
    import SidebarItem from "./SidebarItem";
    export default {
      components: { SidebarItem },
      computed: {
        ...mapGetters(["permission_routers", "sidebar"]),
        isCollapse() {
          return !this.sidebar.opened;
        }
      }
    };
</script>
<style>
.sidebar-container .el-scrollbar__wrap{background-image: linear-gradient(#6289f2 ,#4b6eca, #3b5cae, #1d397a);height: 100%;}
.sidebar-container .app-menu {padding: 10px 0;}
.sidebar-container .app-menu.el-menu{background: none}
</style>