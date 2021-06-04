<!--
  - CopyRight (c) 2021 ShaoxiongDu<dev@shaoxiongdu.cn>  All Rights Reserved
  -->

<template>
  <div>
    <h2>我是关于</h2>
    <p>我是关于页面内容</p>
  </div>

</template>

<script>
export default {
  name: "About",
  created() {
    console.log(' About 创建')
  },
  /**
   * 处于活跃前 回调 必须使用keep-alive才会被调用
   * */
  activated() {
    console.log('About 活跃状态');
    this.$router.push(this.currentPath)
        .catch(err => {})
  },
  /**
   * 必须使用keep-alive才会被调用
   * */
  deactivated() {
    console.log('About 非活跃状态');
  },
  /*销毁前回调*/
  destroyed() {
    console.log('About 被销毁');
  },

}
</script>

<style scoped>

</style>