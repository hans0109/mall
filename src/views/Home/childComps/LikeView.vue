<template>
  <div class="like">
    <img src="https://img11.360buyimg.com/jdphoto/jfs/t1/31601/22/15554/14040/5cc2a86fEbdb1098b/88174b36f85283b6.png" alt="">
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
    }
  }
</script>

<style scoped>
  .like {
    padding: 10px 0;
  }
  .like img{
    width: 100%;
    border-bottom: 10px solid #eee;
  }
</style>