<template>
  <div id="app">
    <TheHeader />
    <router-view class="router-view" />
  </div>
</template>
<style lang="stylus">
body
  margin 0
  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    .router-view
      display inline-block
      width 70%
</style>
<script>
export default {
  components: {
    TheHeader: () => import("@/components/TheHeader")
  }
};
</script>
