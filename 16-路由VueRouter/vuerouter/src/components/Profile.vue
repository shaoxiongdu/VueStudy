<!--
  - CopyRight (c) 2021 ShaoxiongDu<dev@shaoxiongdu.cn>  All Rights Reserved
  -->

<template>
  <div>

<!--  通过$.route.query查询参数信息  -->
    <h2>档案组件</h2>
    <p>姓名: {{$route.query.name}}</p>
    <p>年龄: {{$route.query.age}}</p>

  </div>
</template>

<script>
export default {
  name: "Profile",
  created() {
    console.log(' Profile 创建')
  },
  /**
   * 处于活跃前 回调 必须使用keep-alive才会被调用
   * */
  activated() {
    console.log('Profile 活跃状态');
    this.$router.push(this.currentPath)
        .catch(err => {})
  },
  /**
   * 必须使用keep-alive才会被调用
   * */
  deactivated() {
    console.log('Profile 非活跃状态');
  },
  /*销毁前回调*/
  destroyed() {
    console.log('Profile 被销毁');
  },

}
</script>

<style scoped>

</style>