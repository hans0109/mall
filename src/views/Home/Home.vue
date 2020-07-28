<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">首页</div></nav-bar>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="SwiperImage" ref="homeSwiper"></home-swiper>
      <recomment-view :recommends="recommends"></recomment-view>
      <like-view :like="likeView" @ImageLoad="ImageLoad"></like-view>
      <home-bottom></home-bottom>
    </scroll>
  </div>
</template>

<script>
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommentView from "./childComps/RecommentView";
  import LikeView from "./childComps/LikeView";
  import HomeBottom from "./childComps/HomeBottom";

  import NavBar from "../../components/common/navbar/NavBar";
  import Scroll from "../../components/common/scroll/Scroll";

  import {getHomeData} from "../../network/home";

  export default {
    name: 'Home',
    components: {
      HomeSwiper,
      RecommentView,
      LikeView,
      HomeBottom,

      NavBar,
      Scroll,
    },
    data() {
      return {
        SwiperImage: [],
        recommends: [],
        likeView: []
      }
    },
    created() {
      this.getHomeData()
    },
    methods: {
      contentScroll(position) {
        this.isShowBackTop = -(position.y) > 500

        this.isTabFixed = -(position.y) > this.tabOffsetTop
      },
      loadMore() {},
      ImageLoad() {
        this.$refs.scroll.refresh()
      },
      getHomeData() {
        getHomeData().then(res => {
          if(res.code === 200){
            this.SwiperImage = res.data.swiper_image_info
            this.recommends = res.data.home_sort_info
            this.likeView = res.data.home_recommend_info
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
