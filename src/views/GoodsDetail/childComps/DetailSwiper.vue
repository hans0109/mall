<template>
  <div>

    <Swiper>
      <SwiperItem v-for="item in banners" class="swiper_img">
        <img :src="item.img" alt="">
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from "components/common/swiper"

  export default {
    name: "DetailSwiper",
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
        this.$emit('DetailSwiperImageLoad')
      }
    }
  }
</script>

<style scoped>
  .swiper_img img {
    width: 100%;
  }
</style>