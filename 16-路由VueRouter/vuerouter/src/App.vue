<template>
  <div id="app">
    <div id="nav" align="center">
      <router-link   replace  to="/home">首页</router-link>
      &nbsp;
      <router-link   replace to="/about">关于</router-link>
      &nbsp;
      <router-link  replace v-bind:to="/user/+userCode">用户</router-link>
      &nbsp;&nbsp;
      <button @click="home">通过代码跳转首页</button>
      &nbsp;
      <button @click="about">通过代码跳转关于</button>

      <router-view/>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userCode: '171648234'
    }
  },
  methods: {
    /**
     * 通过方法实现路由跳转
     */
    home(){
      console.log('home')
      /**
       * 通过this.$router取得index.js中定义的路由对象
       */
      this.$router.replace('/home')

    },

    about(){
      console.log('about');
      this.$router.push('/about')
    }
  }
}
</script>

<style>

  .active{
    color: red;
  }

</style>
