<template>
  <div>
    参数为：{{param}}
  </div>

</template>

<script>
  import {GetUrlParams} from "../../common/utils";

  export default {
    name: "GoodsList",
    data() {
      return {
        param: ''
      }
    },
    created() {
      this.GetParam()
    },
    methods: {
      GetParam() {
        this.param = GetUrlParams('param')
      }
    }
  }
</script>

<style scoped>

</style>