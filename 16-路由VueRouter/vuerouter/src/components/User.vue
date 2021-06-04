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
  },
  created() {
    console.log(' User 创建')
  },
  /**销毁前回调*/
  destroyed() {
    console.log('User 被销毁');
  },
  /**
   * 处于活跃前 回调 必须使用keep-alive才会被调用
   * */
  activated() {
    console.log('User 活跃状态');
    this.$router.push(this.currentPath)
        .catch(err => {})
  },
  /**
   * 必须使用keep-alive才会被调用
   * */
  deactivated() {
    console.log('User 非活跃状态');
  },


}
</script>

<style scoped>

</style>