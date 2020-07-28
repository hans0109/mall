<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.icon" @load="recommendImg">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommentView",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      recommendImg() {
        this.$emit('recommendImageLoad')
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    text-align: center;
    font-size: 12px;

    padding: 0 10px 20px;
    border-top: 10px solid #eee;
    border-bottom: 10px solid #eee;
  }
  .recommend-item {
    flex: 1;
    padding: 5px;
  }
  .recommend-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>
