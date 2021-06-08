/*
 * CopyRight (c) 2021 ShaoxiongDu<dev@shaoxiongdu.cn>  All Rights Reserved
 */
import Vue from "vue";
import Vuex from 'vuex'

//安装Vuex插件
Vue.use(Vuex)

//创建对象
const store = new Vuex.Store({

  /**
   * 定义状态变量 全局可使用
   */
  state: {
    counter: 1000,
    students: [
      {id: 1001, name: '王五', age: 18},
      {id: 1002, name: '李四', age: 19},
      {id: 1003, name: '赵六', age: 20},
      {id: 1004, name: '张三', age: 21},
      {id: 1005, name: '杜七', age: 22},
    ]
  },

  /**
   * 对状态变量的写操作 在此处进行
   * 可在devtools中debug
   */
  mutations: {
    increment(){
      this.state.counter++;
    },
    decrement(){
      this.state.counter--;
    }
  },

  /**
   * 异步操作
   */
  actions: {

  },

  /*相当于计算属性*/
  getters: {
    counterPower(state){
      return state.counter * state.counter;
    },

    /**
     * 大于20岁的学生
     * @param state
     * @returns {({name: string, id: number, age: number}|{name: string, id: number, age: number}|{name: string, id: number, age: number}|{name: string, id: number, age: number}|{name: string, id: number, age: number})[]}
     */
    more20Student(state){
      return state.students.filter(student => student.age >= 20);
    },

    /**
     * 携带参数的getter
     * 年龄大于特定数值的学生
     * @param state  无法直接传参 需要返回一个方法 将参数放入返回的方法中
     * @returns {function(*): ({name: string, id: number, age: number}|{name: string, id: number, age: number}|{name: string, id: number, age: number}|{name: string, id: number, age: number}|{name: string, id: number, age: number})[]}
     */
    moreAgeStudent(state){
      return age => state.students.filter(stu => stu.age > age);
    }
  },
  /**
   * 划分模块
   */
  modules: {

  },
})

export default store

