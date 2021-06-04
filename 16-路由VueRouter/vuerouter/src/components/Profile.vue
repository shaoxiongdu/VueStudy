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
  name: "Profile"
}
</script>

<style scoped>

</style>