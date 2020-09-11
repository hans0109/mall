<template>
  <div class="category_list">

    <div class="left_list" >
      <scroll class="content"
              ref="scroll"
              :probe-type="3"
              @scroll="contentScroll"
              :pull-up-load="true" @pullingUp="loadMore">
        <div class="left_list_wrap">
          <div v-for="(item, index) in left_list" :class="{active: index === currentIndex, noactive: index !== currentIndex}" >

            <div :class="{active_left_list_title: index === currentIndex, left_list_title: index !== currentIndex}" @click="getCurrentIndex(index)">{{item}}</div>
          </div>
        </div>

      </scroll>


    </div>
    <div class="right_list">
      <scroll class="content"
        ref="scroll"
        :probe-type="3"
        @scroll="contentScroll"
        :pull-up-load="true" @pullingUp="loadMore">
        <div v-for="item in right_list" class="right_list_wrap">
          <div class="right_list_title">{{item.title}}</div>
          <div class="right_img_wrap">

            <div v-for="item2 in item.childList" class="right_img_item">
              <a :href="item2.link">
                <img :src="item2.icon" alt="">
                <div class="right_img_title">{{item2.title}}</div>
              </a>
            </div>
          </div>
        </div>
    </scroll>

    </div>
  </div>
</template>

<script>
  import Scroll from "../../../components/common/scroll/Scroll";

  export default {
    name: "CategoryList",
    components: {
      Scroll
    },
    props: {
      left_list: {
        type: Array,
        default() {
          return [];
        }
      },
      right_list: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      getCurrentIndex(index) {
        this.currentIndex = index
        this.$emit('titleClick', index)
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
  .category_list {
    display: flex;
  }
  .left_list {
    flex: 1;
  }
  .right_list {
    flex: 3;
  }
  .active {
    background-color: #fff;
  }
  .noactive {
    background-color: #f4f4f4;
  }
  .left_list_wrap {
    width: 25vw;
  }
  .active_left_list_title {
    text-align: center;
    padding: 15px 10px;
    color: #ff8198;
  }
  .left_list_title {
    text-align: center;
    padding: 15px 10px;
  }
  .right_list_title{
    padding: 15px 10px;
    font-weight: 700;
    font-size: 15px;
    color: black;
  }
  .right_img_wrap {
    display: flex;
    flex-wrap: wrap;
  }
  .right_img_item {
    width: 30%;
    margin-left: 8px;
    padding: 10px;
  }
  .right_img_item img{
    width: 100%;
  }
  .right_img_title {
    text-align: center;
    font-size: 13px;
  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
  }
</style>