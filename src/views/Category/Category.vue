<template>
  <div id="category">
    <nav-bar class="category-nav"><div slot="center">分类</div></nav-bar>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";

  export default {
    name: "Category",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  #category {
    height: 100vh;
    position: relative;
  }
  .category-nav {
    background-color: #f4f4f4;
    color: black;
  }
</style>