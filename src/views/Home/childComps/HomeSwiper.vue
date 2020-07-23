<template>
  <div>
    <Swiper>
      <SwiperItem v-for="item in banners">
        <a :href="item.link">
          <img :src="item.images" @load="imageLoad" alt="">
        </a>
      </SwiperItem>
    </Swiper>
  </div>

</template>

<script>
  import {Swiper, SwiperItem} from "components/common/swiper"

  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      imageLoad() {
        this.$emit('SwiperImageLoad')
      }
    }
  }
</script>

<style scoped>

</style>
