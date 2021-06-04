<!--
  - CopyRight (c) 2021 ShaoxiongDu<dev@shaoxiongdu.cn>  All Rights Reserved
  -->

<template>

  <div>

    <h2>用户界面</h2>
    <p>用户界面数据</p>

    <h4>计算属性方法: 用户ID:{{userId}}</h4>

    <h5 style="color: red">直接取值: userCode: {{$route.params.userCode}}</h5>

  </div>

</template>

<script>
export default {
  name: "User",
  computed: {
    userId(){
      /**取得当前活跃的路由对象*/
      return this.$route.params.userCode;
    }
  }
}
</script>

<style scoped>

</style>