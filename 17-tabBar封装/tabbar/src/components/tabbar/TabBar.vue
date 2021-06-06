<!--
  - CopyRight (c) 2021 ShaoxiongDu<dev@shaoxiongdu.cn>  All Rights Reserved
  -->

<template>

  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style>

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



</style>
