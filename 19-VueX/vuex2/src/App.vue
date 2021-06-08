<template>
  <div id="app">

<!-- 从store中取得全局变量   -->
    <h2>{{this.$store.state.counter}}</h2>
    <button @click="addition()">+</button>
    <button @click="subtraction()">-</button>

    <HelloVuex />

    <hr>
    <h2>counter的平方: {{$store.getters.counterPower}}</h2>

    <hr>
    <h2>大于20岁年龄的学生: </h2>
    <h3 v-for="student in $store.getters.more20Student">
      ID: {{student.id}}
      姓名: {{student.name}}
      年龄: {{student.age}}
      <hr>
    </h3>

    <hr>
    <h2>大于18岁年龄的学生: </h2>
    <h3 v-for="student in $store.getters.moreAgeStudent(18)">
      ID: {{student.id}}
      姓名: {{student.name}}
      年龄: {{student.age}}
      <hr>
    </h3>

  </div>
</template>

<script>

import HelloVuex from './components/HelloVuex'

export default {
  name: 'App',
  components: {
    HelloVuex
  },
  methods: {

    /*修改全局变量*/
    addition(){
      this.$store.commit('increment');
    },
    subtraction(){
      this.$store.commit('decrement');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
