<template>
  <div class="goods_list">
    <div v-for="item in goods_list_data" class="goods_list_wrap">
      <a :href="item.link">
        <img :src="item.img" alt="">
        <div class="goods_list_title">{{item.title}}</div>
        <div class="goods_list_recommend">{{item.recommend}}</div>
        <div class="goods_list_price">
          <p class="goods_list_new_price">￥{{item.new_price}}</p>
          <p class="goods_list_old_price">￥{{item.old_price}}</p>
        </div>
      </a>

    </div>
  </div>

</template>

<script>
  export default {
    name: "GoodsListData",
    props: {
      goods_list_data: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      GoGoodsDetail(link){
        this.$router.replace(link)
      }
    }
  }
</script>

<style scoped>
  .goods_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 8px 0;
  }
  .goods_list_wrap {
    width: 48%;
    background-color: #fff;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 8px;
  }
  .goods_list_wrap img{
    width: 100%;
  }
  .goods_list_title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
    color: #ff8198;
    font-size: 15px;
    padding: 5px 10px;
  }
  .goods_list_price {
    display: flex;
    padding: 22px 0 8px;
  }
  .goods_list_old_price {
    text-decoration: line-through;
    color: #ccc;
    font-size: 14px;
  }
  .goods_list_new_price {
    color: #fff;
    background-color: #ff8198;
    padding: 5px;
    border-radius: 10px;
    margin: 0 5px;
  }
  .goods_list_recommend{
    float: right;
    background-color: #d43e2e;
    color: #fff;
    padding: 5px;
    font-size: 12px;
    border-radius: 10px;
  }
</style>