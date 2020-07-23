<template>
  <div id="profile">
    <nav-bar class="profile-nav"><div slot="center">个人中心</div></nav-bar>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";

  export default {
    name: "Profile",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  #profile {
    height: 100vh;
    position: relative;
  }
  .profile-nav {
    background-color: #f4f4f4;
    color: black;
  }
</style>