<template >
  <div id="app">
    <tab-bar>
      <tab-bar-item>
        <template v-slot:item-icon>
          <img  src="./assets/img/tabbar/home.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img  src="./assets/img/tabbar/home-active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>
            首页
          </div>
        </template>

      </tab-bar-item>

      <tab-bar-item>
        <template v-slot:item-icon>
          <img  src="./assets/img/tabbar/type.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img  src="./assets/img/tabbar/type-active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>
            分类
          </div>
        </template>
      </tab-bar-item>

      <tab-bar-item>
        <template v-slot:item-icon>
          <img  src="./assets/img/tabbar/shopping-cart.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img  src="./assets/img/tabbar/shopping-cart-active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>
            购物车
          </div>
        </template>
      </tab-bar-item>

      <tab-bar-item>
        <template v-slot:item-icon>
          <img  src="./assets/img/tabbar/user.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img  src="./assets/img/tabbar/user-active.svg" alt="">
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

  import TabBar from "./components/tabbar/TabBar";
  import TabBarItem from "./components/tabbar/TabBarItem";
export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

/*引入样式文件*/
  @import "./assets/css/base.css";

</style>
