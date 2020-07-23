<template>
    <tab-bar>
        <tab-baritem path="/home" active-color="#ff8198">
            <img src="~assets/img/tabbar/home.svg" slot="item-icon">
            <img src="~assets/img/tabbar/home_active.svg" slot="item-icon-active">
            <div slot="item-text">首页</div>
        </tab-baritem>
        <tab-baritem path="/category" active-color="#ff8198">
            <img src="~assets/img/tabbar/category.svg" slot="item-icon">
            <img src="~assets/img/tabbar/category_active.svg" slot="item-icon-active">
            <div slot="item-text">分类</div>
        </tab-baritem>
        <tab-baritem path="/cart" active-color="#ff8198">
            <img src="~assets/img/tabbar/shopcart.svg" slot="item-icon">
            <img src="~assets/img/tabbar/shopcart_active.svg" slot="item-icon-active">
            <div slot="item-text">购物车</div>
        </tab-baritem>
        <tab-baritem path="/profile" active-color="#ff8198">
            <img src="~assets/img/tabbar/profile.svg" slot="item-icon">
            <img src="~assets/img/tabbar/profile_active.svg" slot="item-icon-active">
            <div slot="item-text">我的</div>
        </tab-baritem>
    </tab-bar>
</template>

<script>
    import TabBar from "components/common/tabbar/TabBar";
    import TabBaritem from "components/common/tabbar/TabBaritem";
    export default {
        name: "mainTabbar",
        components: {
            TabBar,
            TabBaritem
        }
    }
</script>

<style scoped>

</style>
