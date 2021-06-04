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
    /*元数据*/
    meta: {
      title: '首页'
    }
  },
  {
    path: '/profile',
    component: Profile,
    /*元数据*/
    meta: {
      title: '档案'
    }
  },
    /*懒加载*/
  {
    path: '/home',
    component: Home,
    /*元数据*/
    meta: {
      title: '首页'
    },
    /*嵌套路由*/
    children: [
      {
        path: '',
        component: HomeNews,
      },
      {
        path: 'news',
        component: HomeNews,
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About,
    /*元数据*/
    meta: {
      title: '关于'
    },
    /*路由独享前置钩子函数*/
    beforeEach: (to,from,next) => {
      alert('to about page');
      next();
    }
  },
    /*动态路由*/
  {
    path: '/user/:userCode',
    component: User,
    /*元数据*/
    meta: {
      title: '用户'
    }
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

/**
 * 设置全局守卫
 *    前置钩子函数（hook）(路由跳转之前调用)
 * beforeEach方法参数: 一个方法(三个参数:to,from,next)
 *
 * */
router.beforeEach((to,from,next) => {
  /*设置标题*/
  document.title = to.matched[0].meta.title;
  next();

});

/**
 * 后置钩子函数 (路由跳转之后调用)
 */
router.afterEach((to,from) => {})

export default router
