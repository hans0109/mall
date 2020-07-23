<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">首页</div></nav-bar>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="SwiperImage" @SwiperImageLoad.once="SwiperImageLoad" ref="homeSwiper"></home-swiper>
      
    </scroll>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import Scroll from "../../components/common/scroll/Scroll";

  import {getHomeData} from "../../network/home";

  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      Scroll
    },
    data() {
      return {
        SwiperImage: []
      }
    },
    created() {
      this.getHomeData()
    },
    methods: {
      SwiperImageLoad() {

      },
      contentScroll(position) {
        this.isShowBackTop = -(position.y) > 500

        this.isTabFixed = -(position.y) > this.tabOffsetTop
      },

      loadMore() {

      },
      getHomeData() {
        getHomeData().then(res => {
          if(res.code === 200){
            this.SwiperImage = res.data.swiper_image_info
          }
        })
      }
    }
  }
</script>

<style scoped>
  #home {
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background-color: #f4f4f4;
    color: black;
  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
