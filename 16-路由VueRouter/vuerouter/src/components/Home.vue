<!--
  - CopyRight (c) 2021 ShaoxiongDu<dev@shaoxiongdu.cn>  All Rights Reserved
  -->

<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容</p>

    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>

    <router-view />

    <h2>{{message}}</h2>
  </div>

</template>

<script>
export default {
  name: "Home",
  /*创建之前调用*/
 /* created() {
    document.title = '首页'
  },*/
  data(){
    return{
      message: '你好 vue'
    }
  }
}
</script>

<style scoped>

</style>