<template>
  <div class="goods_list">
    <nav-bar class="good_list_nav">
      <div slot="left" @click="Back" class="good_list_nav_img">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="good_list_nav">物品列表</div>
    </nav-bar>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true" @pullingUp="loadMore">
      <goods-list-data :goods_list_data="goods_list_data"></goods-list-data>

    </scroll>

  </div>

</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import Scroll from "../../components/common/scroll/Scroll";
  import GoodsListData from "./childComps/GoodsListData";

  import {GetUrlParams} from "../../common/utils";
  import {getGoodsListData} from "../../network/goods_list"

  export default {
    name: "GoodsList",
    components: {
      NavBar,
      Scroll,
      GoodsListData
    },
    data() {
      return {
        param: '',
        goods_list_data: []
      }
    },
    created() {
      this.GetParam()
    },
    methods: {
      GetParam() {
        this.param = GetUrlParams('param')
        getGoodsListData(this.param).then(res => {
          this.goods_list_data = res["data"]["goods_list_info_data"]
          console.log(res);
        })
      },
      contentScroll(position) {
        this.isShowBackTop = -(position.y) > 500

        this.isTabFixed = -(position.y) > this.tabOffsetTop
      },
      loadMore() {},
      Back(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  *{
    background-color: #eee;
  }
  .good_list_nav {
    background-color: #fff;
    color: black;
  }
  .good_list_nav_img{
    background-color: #fff;
    margin-top: 5px;
  }
  .good_list_nav_img img {
    width: 6vw;
    background-color: #fff;
  }
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>