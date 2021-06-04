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
      message: '你好 vue',
      /*保存当前路径 便于下次过来直接使用*/
      currentPath: ''
    }
  },
  created() {
    console.log(' home 创建')
  },
  /**
   * 处于活跃前 回调 必须使用keep-alive才会被调用
   * */
  activated() {
    console.log('home 活跃状态');
    this.$router.push(this.currentPath)
    .catch(err => {})
  },
  /**
   * 必须使用keep-alive才会被调用
   * */
  deactivated() {
    console.log('home 非活跃状态');
  },
  /*销毁前回调*/
  destroyed() {
    console.log('home 被销毁');
  },

  /**
   * 路由跳转之前回调
   * */
  beforeRouteLeave(to,from,next){
    this.currentPath = from.path;
    next();
  }
}
</script>

<style scoped>

</style>