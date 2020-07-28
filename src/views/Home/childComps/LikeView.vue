<template>
  <div>
    <img src="https://img11.360buyimg.com/jdphoto/jfs/t1/31601/22/15554/14040/5cc2a86fEbdb1098b/88174b36f85283b6.png" alt="" class="like_img">
    <div class="like">
      <div v-for="item in like" class="recommend">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
          <div class="recommend_title">{{item.title}}</div>
          <div class="recommend_div">
            <p class="recommend_price">￥{{item.price}}</p>
            <p class="recommend_p">强烈推荐</p>
          </div>
        </a>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LikeView",
    props: {
      like: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    methods: {
      imageLoad() {
        this.$emit('ImageLoad')
      }
    }
  }
</script>

<style scoped>

  .like_img {
    width: 100%;
    border-bottom: 10px solid #eee;
  }
  .like {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .recommend {
    position: relative;
    width: 48%;
    padding: 5px;
  }
  .recommend img {
    width: 100%
  }
  .recommend_title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    font-size: 15px;
  }
  .recommend_div {
    display: flex;
    flex-wrap: wrap;
  }
  .recommend_price {
    flex: 1;
    width: 45%;
    color: #d43e2e;
    font-size: 16px;
  }
  .recommend_p {
    background-color: var(--color-tint);
    border-radius: 5px;
    width: 45%;
    color: white;
    font-size: 13px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>