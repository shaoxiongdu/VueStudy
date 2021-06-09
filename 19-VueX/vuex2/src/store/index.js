/*
 * CopyRight (c) 2021 ShaoxiongDu<dev@shaoxiongdu.cn>  All Rights Reserved
 */
import Vue from "vue";
import Vuex from 'vuex'

//安装Vuex插件
Vue.use(Vuex)

/**
 * 划分模块 用$store.state.moduleAName.XXX取
 * @type {{mutations: {}, state: {message: string}, actions: {}}}
 */
const moduleA = {
  state: {
    message: '模块A的信息'
  },
  actions: {

  },
  getters: {

    /**
     * 参数中前缀root 则传递root中的数据
     * @param state
     * @param getters
     * @param rootState
     * @returns {string}
     */
    getMessage(state,getters,rootState){
      return '模块A： ' + state.message + 'root模块：' + rootState.message;
    }
  },
  mutations: {
    updateMessage(state,payload){
      state.message = payload;
    }
  }
}

const moduleB = {
  state: {
    message: '模块B的信息'
  },
  actions: {

  },
  mutations: {

  }
}

//创建对象
const store = new Vuex.Store({

  /**
   * 定义状态变量 全局可使用 通过$store.state.XXX访问
   */
  state: {
    message: 'root中的信息',
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
   * 对状态变量state更新操作的唯一方式
   * 可在devtools中debug
   */
  mutations: {

    /**
     *
     * @param state 全局状态变量
     * @param student 载荷
     */
    addStudent(state,payload){
      state.students.push(payload);
    },

    /**
     * 默认传递的参数为状态变量
     * @param state
     */
    increment(state){
      state.counter++;
    },
    decrement(state){
      state.counter--;
    },

    /**
     * @param state
     * @param payload 载荷 将传递的参数作为payload对象
     */
    incrementCount(state,payload){
      state.counter += payload.count;
    }

  },

  /**
   * 异步操作放此处 如果要修改状态变量 调用mutations方法
   */
  actions: {

    incrementAsyn(context,payload){


        return new Promise( (resolve, reject) => {
          setTimeout(() => {
            context.commit('increment');
            console.log('actions中执行：' + payload);
            resolve();
          },1000)

        })

    }

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
    moduleAName: moduleA,
    moduleBName: moduleB
  },
})

export default store

