<template>
  <div id="app">

    <router-view/>

    <div id="tab-bar">

      <div class="tab-bar-item">首页</div>
      <div class="tab-bar-item">分类</div>
      <div class="tab-bar-item">购物车</div>
      <div class="tab-bar-item">我的</div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

/*引入样式文件*/
  @import "./assets/css/base.css";

/*导航栏样式*/
  #tab-bar{
    display: flex;
    /*背景*/
    background-color: #F6F6F6;

    /*绝对位置*/
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;

    /*阴影*/
    box-shadow: 0px -1px 1px rgba(100,100,100,0.2);
  }

/*导航栏元素样式*/
  .tab-bar-item{

    flex: 1;
    /*文字居中*/
    text-align: center;
    height: 49px;

  }
</style>
