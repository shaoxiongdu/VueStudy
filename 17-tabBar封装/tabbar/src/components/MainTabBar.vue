<!--
  - CopyRight (c) 2021 ShaoxiongDu<dev@shaoxiongdu.cn>  All Rights Reserved
  -->

<template>
  <div>
    <tab-bar>
      <tab-bar-item   path="/home">
        <template v-slot:item-icon>
          <img  src="~assets/img/tabbar/home.svg">
        </template>
        <template v-slot:item-icon-active>
          <img  src="~assets/img/tabbar/home-active.svg">
        </template>
        <template v-slot:item-text>
          <div>
            首页
          </div>
        </template>

      </tab-bar-item>



      <tab-bar-item   path="/category">
        <template v-slot:item-icon>
          <img  src="~assets/img/tabbar/type.svg">
        </template>
        <template v-slot:item-icon-active>
          <img  src="~assets/img/tabbar/type-active.svg">
        </template>
        <template v-slot:item-text>
          <div>
            分类
          </div>
        </template>
      </tab-bar-item>

      <tab-bar-item   path="/cart">
        <template v-slot:item-icon>
          <img  src="~assets/img/tabbar/shopping-cart.svg">
        </template>
        <template v-slot:item-icon-active>
          <img  src="~assets/img/tabbar/shopping-cart-active.svg">
        </template>
        <template v-slot:item-text>
          <div>
            购物车
          </div>
        </template>

      </tab-bar-item>

      <tab-bar-item  path="/profile">
        <template v-slot:item-icon>
          <img  src="~assets/img/tabbar/user.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img  src="~assets/img/tabbar/user-active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>
            我的
          </div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>

import TabBar from "components/tabbar/TabBar";
import TabBarItem from "components/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
