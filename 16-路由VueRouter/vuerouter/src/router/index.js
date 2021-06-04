/*
 * CopyRight (c) 2021 ShaoxiongDu<dev@shaoxiongdu.cn>  All Rights Reserved
 */


import VueRouter from "vue-router";

import Vue from "vue";

/**
 * 路由懒加载  用到的时候 在加载  提升首页响应速度
 * */
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')
/*通过Vue.use使用插件*/
Vue.use(VueRouter);

/*配置映射关系*/
const routes = [

  /*默认路由*/
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/profile',
    component: Profile
  },
    /*懒加载*/
  {
    path: '/home',
    component: Home,
    /*嵌套路由*/
    children: [
      {
        path: '',
        component: HomeNews
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About
  },
    /*动态路由*/
  {
    path: '/user/:userCode',
    component: User
  }
]

/*创建router路由对象*/
const router = new VueRouter({

  /*配置映射关系*/
  routes,
  /*设置为history*/
  mode: 'history',
  /*处于活跃的加入此类属性*/
  linkActiveClass: 'active'
});

export default router
