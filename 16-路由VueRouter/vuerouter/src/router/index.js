/*
 * CopyRight (c) 2021 ShaoxiongDu<dev@shaoxiongdu.cn>  All Rights Reserved
 */


import VueRouter from "vue-router";

import Vue from "vue";

import Home from "../components/Home";
import About from "../components/About";

/*通过Vue.use使用插件*/
Vue.use(VueRouter);

/*配置映射关系*/
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]

/*创建router对象*/
const router = new VueRouter({

  /*配置映射关系*/
  routes,
  /*设置为history*/
  mode: 'history',
  /*处于活跃的加入此类*/
  linkActiveClass: 'active'
});

export default router
