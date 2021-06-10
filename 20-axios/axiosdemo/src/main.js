import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  render: h => h(App)
})

/*创建对应的axios实例*/
const homeAxios = axios.create({
  baseURL: 'http://123.207.32.32:8000',

  /**
   * 超时时间5s
   */
  timeout: 5000
})

const typeAxios = axios.create({
  baseURL: 'https://123.42.23.435:8080',

  /**
   * 超时时间10s
   */
  timeout: 10000
})

homeAxios({
  url: '/home/multidata'
}).then( response => console.log('Home实例对象返回的数据' + response.data) );

import {homeRequest} from "./network/request";

homeRequest({
  url: '/home/multidata'
}).then( data => {console.log( '封装模块:' + data)} ).catch(error => console.log(error));

