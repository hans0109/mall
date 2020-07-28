<template>
  <div id="category">
    <nav-bar class="category-nav"><div slot="center">分类</div></nav-bar>
    <category-list :left_list="left_list" :right_list="right_list" @titleClick="titleClick"></category-list>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import CategoryList from "./childComps/CategoryList";

  import {getCategoryData} from "../../network/category";

  export default {
    name: "Category",
    data() {
      return {
        category: [],
        left_list: [],
        right_list: []
      }
    },
    components: {
      NavBar,
      CategoryList
    },
    created() {
      this.getCategoryData()
    },
    methods: {
      getCategoryData(){
        getCategoryData().then(res => {
          const category = JSON.parse(JSON.stringify(res.data.category_data))
          this.category = category
          this.left_list = category.map(v => v.title)
          this.right_list = category[0].childList
        })
      },
      titleClick(index) {
        this.right_list = this.category[index].childList
      }

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
  .category_wrap{
    display: flex;
  }
  .category_left{
    flex: 2;
  }
  .category_right{
    flex: 5;
  }
</style>