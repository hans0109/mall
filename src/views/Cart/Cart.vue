<template>
  <div id="cart">
    <nav-bar class="cart-nav"><div slot="center">购物车</div></nav-bar>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";

  export default {
    name: "Cart",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  #cart {
    height: 100vh;
    position: relative;
  }
  .cart-nav {
    background-color: #f4f4f4;
    color: black;
  }
</style>