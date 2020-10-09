<template>
    <section>
        <transition name="fade" mode="out-in">
            <keep-alive v-if="isRouterAlive">
                <router-view :key="key"></router-view>
            </keep-alive>
        </transition>
    </section>
</template>
<script>
    export default {
      provide() {
         return {
             reload: this.reload
         }
      },
      data () {
          return {
              isRouterAlive: true,
          }
      },
      computed: {
        key() {
            return this.$route.fullPath
        }
    },
      methods: {
        reload() {
            
              this.isRouterAlive = false;
              this.$nextTick(() => {
                  this.isRouterAlive = true;
              });
          }
      }
    };
</script>
