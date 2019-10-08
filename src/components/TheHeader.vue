<template lang="pug">
.the-header
  .left-box
    img.left-box_logo(src='@/assets/img/favicon.jpg')
    h1.left-box_title haveFun
  .right-box
    .goto(v-show="change")
      router-link.goto-link(to="/") 主页 
      router-link.goto-link(to="") 关于我
      router-link.goto-link(to="/kobe") KOBE 
    .show-goto(@click='change=!change')
      .transform-top(:class="{'change-top':change}")
      .transform-bottom(:class="{'change-bottom':change}")
</template>

<script>
export default {
  data: () => ({
    change: false
  }),
  methods: {}
};
</script>

.<style lang="stylus" scoped>
.the-header
  display flex
  justify-content space-between
  align-items center
  padding 10px
  .left-box
    float left
    text-align left
    .left-box_logo
      width 20%
      vertical-align middle
    .left-box_title
      display inline
  .right-box
    &:after
      content ''
      display block
      clear both
    .goto
      display inline-block
      float left
      animation myShow 1s
      .goto-link
        display inline-block
        margin-right 50px
        text-decoration none
        color black
        &:hover
          color green
    .show-goto
      display inline-block
      float right
      .transform-top, .transform-bottom
        height 5px
        width 30px
        background-color black
        transition-duration 1s
      .transform-bottom
        margin-top 10px
      .change-top
        transform rotate(40deg) translate(10px, 10px)
      .change-bottom
        transform rotate(-40deg)
@keyframes myShow
  from
    transform translate(50%) scale(0.5)
  to
    transform translate(0) scale(1)
</style>
