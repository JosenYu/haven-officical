<template>
  <div class="home">
    <!-- 海报 -->
    <TheBill />
    <TheUse class="home_the-use" />
    <!-- 轮播图 -->
    <swiper class="home_swiper" :options="swiperOption">
      <swiper-slide
        class="swiper-slide"
        v-for="(item, index) in items"
        :key="index"
      >
        <img class="swiper-slide__img" :src="item.imgSrc" alt="轮播图" />
      </swiper-slide>
      <!-- 翻页器 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!-- 分类 -->
    <TheSort />
  </div>
</template>

<script>
// @ is an alias to /src
import getRes from "@/assets/api/home";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "home",
  data: () => ({
    swiperOption: {
      autoplay: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      }
    },
    items: [
      {
        imgSrc: require("@/assets/img/no-img.jpg")
      },
      {
        imgSrc: require("@/assets/img/no-img.jpg")
      },
      {
        imgSrc: require("@/assets/img/no-img.jpg")
      }
    ]
  }),
  components: {
    swiper,
    swiperSlide,
    TheUse: () => import("@/components/home/TheUse"),
    TheBill: () => import("@/components/home/TheBill"),
    TheSort: () => import("@/components/home/TheSort")
  },
  mounted() {
    getRes.getImg();
  },
  computed: {}
};
</script>
<style lang="stylus" scoped>
.home
  .home_the-use
    margin 20px 0
  .home_swiper
    .swiper-slide
      .swiper-slide__img
        width 100%
</style>
