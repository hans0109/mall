<template>
  <div class="goods_detail">
    <nav-bar class="good_list_nav">
      <div slot="left" @click="Back" class="good_list_nav_img">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="good_list_nav">商品详情</div>
    </nav-bar>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true" @pullingUp="loadMore">
      <detail-swiper :banners="banners"></detail-swiper>
      <detail-title :title="title"></detail-title>
      <detail-business :business="business"></detail-business>

    </scroll>

  </div>
</template>

<script>
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailTitle from "./childComps/DetailTitle";
  import DetailBusiness from "./childComps/DetailBusiness";
  import NavBar from "../../components/common/navbar/NavBar";
  import Scroll from "../../components/common/scroll/Scroll";

  import {GetUrlParams} from "../../common/utils";
  import {getGoodsDetailData} from "../../network/goods_detail";

  export default {
    name: "GoodsDetail",
    components: {
      NavBar,
      DetailSwiper,
      Scroll,
      DetailTitle,
      DetailBusiness
    },
    data() {
      return {
        param: '',
        goods_detail: [],
        banners: [],
        title: {},
        business: []
      }
    },
    created() {
      this.GetParam()
    },
    methods: {
      Back(){
        this.$router.back()
      },
      GetParam() {
        this.param = GetUrlParams('param')
        getGoodsDetailData(this.param).then(res => {
          this.goods_detail = res["data"]["goods_detail"]
          this.title = this.goods_detail[0]
          this.banners = this.goods_detail[1]['childList']
          this.business = this.goods_detail[2]['childList']
          console.log(this.business)
        })
      },
      contentScroll(position) {
        this.isShowBackTop = -(position.y) > 500

        this.isTabFixed = -(position.y) > this.tabOffsetTop
      },
      loadMore() {},
    }
  }
</script>

<style scoped>
  * {
    background-color: #eee;
  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .goods_detail{

  }
  .good_list_nav {
    color: black;
    background-color: #fff;
  }
  .good_list_nav_img{
    margin-top: 5px;
    background-color: #fff;
  }
  .good_list_nav_img img {
    width: 6vw;
    background-color: #fff;
  }
</style>