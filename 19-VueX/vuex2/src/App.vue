<template>
  <div id="app">


<!--  模块A的内容  -->
    <h2>模块A的消息: {{this.$store.state.moduleAName.message}}</h2>
    <h2>模块A的getMessage: {{this.$store.getters.getMessage}}</h2>
    <button @click="updateModuleAMessage('修改之后的内容')">修改模块A的内容</button>

<!-- 从store中取得全局变量   -->
    <h2>{{this.$store.state.counter}}</h2>
    <button @click="addition()">+</button>
    <button @click="subtraction()">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="incrementAsyn">异步操作+1</button>

    <HelloVuex />

    <hr>
    <h2>counter的平方: {{$store.getters.counterPower}}</h2>

    <hr>
<!--    <h2>大于20岁年龄的学生: </h2>
    <h3 v-for="student in $store.getters.more20Student">
      ID: {{student.id}}
      姓名: {{student.name}}
      年龄: {{student.age}}
      <hr>
    </h3>-->

    <hr>
    <h2>大于18岁年龄的学生: </h2>
    <h3 v-for="student in $store.getters.moreAgeStudent(18)">
      ID: {{student.id}}
      姓名: {{student.name}}
      年龄: {{student.age}}
      <hr>
    </h3>
    <button @click="addStudent">添加学生</button>

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

    addStudent(){
      this.$store.commit('addStudent',{id: 1006, name: '法外狂徒', age: 24});
    },
    /**
     * 提交mutations  第一个参数为事件类型 第二个参数为需要传递的参数（荷载）
     * */
    addCount(count){

      //普通提交
      //this.$store.commit('incrementCount',count);

      //对象提交
      this.$store.commit({
        type: 'incrementCount',
        count: count
      })
    },
    incrementAsyn(){
      this.$store.dispatch('incrementAsyn','携带参数').then( () => {console.log('里面完成提交')} );
    },
    /*修改全局变量*/
    addition(){
      this.$store.commit('increment');
    },
    subtraction(){
      this.$store.commit('decrement');
    },

    /**
     * 修改模块A中的消息
     * @param newMessage
     */
    updateModuleAMessage(newMessage){
      this.$store.commit('updateMessage',newMessage);
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
