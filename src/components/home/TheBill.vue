<template lang="pug">
  .the-bill
    .left-box
      img.left-box_img(:src='currentImg')
    .right-box
      ul.right-box_ul
        li.right-box_li(@click='currentImg=item.imgSrc' v-for="(item,index) in bill" :key="index")
          img.right-box_li__img(:src='item.imgSrc')
</template>
<script>
export default {
  data: () => ({
    currentImg: "",
    bill: [
      {
        imgSrc: "https://www.baidu.com/img/bd_logo1.png"
      },
      {
        imgSrc: require("@/assets/img/no-img.jpg")
      },
      {
        imgSrc: require("@/assets/img/no-img.jpg")
      }
    ]
  }),
  mounted() {
    this.currentImg = this.bill[0].imgSrc;
  }
};
</script>
<style lang="stylus" scoped>
.the-bill
  display flex
  justify-content space-between
  .left-box
    width 80%
    .left-box_img
      width 100%
      height 400px
  .right-box
    width 15%
    .right-box_ul
      height 100%
      list-style none
      margin 0
      padding 0
      .right-box_li
        margin-bottom 10px
        height 30%
        .right-box_li__img
          width 100%
</style>
