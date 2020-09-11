<template>
  <div class="detail_title">
    <div class="detail_title_wrap">
      <div class="detail_title_price">
        <p class="detail_title_new_price">￥{{title.new_price}}</p>
        <p class="detail_title_old_price">￥{{title.old_price}}</p>
        <p class="detail_title_why">强烈推荐</p>
      </div>
      <div class="detail_title_title">{{title.title}}</div>
      <div class="detail_title_recommend">{{title.recommend}}</div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "DetailTitle",
    props: {
      title: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail_title {
    margin-top: 8px;
    background-color: #fff;
    border-radius: 12px;
  }
  .detail_title_price {
    display: flex;
    padding: 10px 10px 5px;
  }
  .detail_title_new_price {
    padding: 8px;
    color: red;
    font-size: 20px;
    font-weight: 600;
  }
  .detail_title_old_price {
    text-decoration: line-through;
    color: #ccc;
    font-size: 14px;
  }
  .detail_title_why {
    position: absolute;
    right: 5px;
    background-color: #ff4500;
    border-radius: 15px;
    padding: 8px;
    color: white;
    font-size: 14px;
  }
  .detail_title_title {
    padding: 5px 10px;
    font-weight: 700;
    color: black;
    font-size: 17px;
  }
  .detail_title_recommend {
    padding: 5px 2px 10px;
    font-size: 14px;
  }
</style>