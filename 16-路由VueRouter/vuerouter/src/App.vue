<template>
  <div id="app">
    <div id="nav" align="center">
      <router-link to="/home">首页</router-link>
      &nbsp;
      <router-link to="/about">关于</router-link>
      &nbsp;
      <router-link :to="/user/+userCode">用户</router-link>
      &nbsp;
      <router-link :to="{path: '/profile',query: {name: 'dsx',age: 22}}">档案</router-link>
      &nbsp;&nbsp;
      <button @click="profileBtn">通过代码跳转到档案</button>

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
      userCode: '171648234',
      user: {
        name: 'dsx',
        age: 22,
      }
    }
  },
  methods: {

    /*通过函数实现参数传递*/
    profileBtn(){
      /**
       * 调用push 参数为一个对象
       * 其中key为query的值 会添加到url的参数列表中 类似get方式
       */
      this.$router.push({
        path: '/profile',
        query: this.user
      })
    },
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
