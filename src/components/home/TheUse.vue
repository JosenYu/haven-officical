<template lang="pug">
  .the-use
    .left-box
      h2.left-box_title 我们的那点故事
    .right-box
    .mid-box
      p FROM THE PART OF BEGINNING 
      p Usage of the Internet is becoming more common due to rapid advancement of technology and the power of globalization. Societies are becoming more inter-connected. Thoughts from different
      router-link.mid-box_goto(to="") 去看看 
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
.the-use
  text-align left
  height 600px
  position relative
  &:after
    content ''
    display block
    clear both
  .left-box, .right-box
    float left
    display table-cell
    width 50%
    height 100%
    color white
  .left-box
    background-image linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)
    .left-box_title
      padding 10px
      margin 0
      height 600px
      line-height 600px
  .right-box
    background-image url('../../assets/img/home/story-bg.jpg')
    background-size cover
    background-repeat no-repeat
  .mid-box
    position absolute
    width 50%
    height 50%
    padding 60px
    background-color white
    left 0
    right 0
    top 0
    bottom 0
    margin auto
    .mid-box_goto
      border 1px solid black
      color #FF3CAC
      padding 10px
      text-decoration none
</style>
