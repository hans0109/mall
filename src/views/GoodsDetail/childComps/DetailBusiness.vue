<template>
  <div v-if="business.length !== 0" class="business_raw">
    <div class="business_icon">
      <img :src="business[0]['img']" alt="">
      <div class="business_title_raw">
        <div class="business_title">{{business[0]['title']}}</div>
        <div class="business_star">店铺得分 {{business[0]['discuss']}}分</div>
      </div>
    </div>
    <div class="business_counter_raw">
      <div class="business_counter_fan">
        <div class="business_counter_fan_title">粉丝人数</div>
        <div class="business_counter_obb">{{business[1]['discuss']}}</div>
      </div>
      <div class="business_counter_all">
        <div class="business_counter_fan_title">全部商品</div>
        <div class="business_counter_obb">{{business[2]['discuss']}}</div>
      </div>
      <div class="business_counter_discuss">
        <div>
          <span>评价</span>
          <span class="business_counter_discuss_color">{{business[3]['discuss']}}</span>
          <span class="business_counter_discuss_color">| {{business[3]['discuss'] | discuss }}</span>
        </div>
        <div>
          <span>物流</span>
          <span class="business_counter_discuss_color">{{business[4]['discuss']}}</span>
          <span class="business_counter_discuss_color">| {{business[4]['discuss'] | discuss }}</span>
        </div>
        <div>
          <span>售后</span>
          <span class="business_counter_discuss_color">{{business[5]['discuss']}}</span>
          <span class="business_counter_discuss_color">| {{business[5]['discuss'] | discuss }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBusiness",
    props: {
      business: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {

      }
    },
    filters: {
      discuss(value) {
        if(value < 7){
          return '低'
        }
        else if(value < 9){
          return '中'
        }
        else {
          return '高'
        }
      }
    }
  }
</script>

<style scoped>
  .business_raw {
    margin-top: 12px;
    background-color: white;
    border-radius: 10px;
  }
  .business_icon {
    display: flex;
    padding: 10px;
  }
  .business_icon img {
    width: 10vw;
    border-radius: 10px;
    overflow: hidden;
  }
  .business_title_raw {
    font-size: 14px;
    padding: 0 10px;
  }
  .business_title {

  }
  .business_star {
    margin-top: 4px;
  }
  .business_counter_raw {
    margin-top: 5px;
    display: flex;
    justify-content: space-evenly;
  }
  .business_counter_fan {
    text-align: center;
  }
  .business_counter_fan_title {
    margin-bottom: 10px;
    color: #bbb;
    font-size: 14px;
  }
  .business_counter_obb {
    font-size: 16px;
    margin-bottom: 10px;
  }
  .business_counter_all {
    text-align: center;
  }
  .business_counter_discuss {
    font-size: 14px;
  }
  .business_counter_discuss_color {
    margin-left: 4px;
    color: #d43e2e;
  }
</style>