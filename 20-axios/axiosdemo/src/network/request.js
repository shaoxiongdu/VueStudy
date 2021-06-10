/*
 * CopyRight (c) 2021 ShaoxiongDu<dev@shaoxiongdu.cn>  All Rights Reserved
 */

import axios from "axios";

export function homeRequest(config){

  //创建axios实例对象
  const homeAxios = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  //拦截器
  homeAxios.interceptors.request.use(

    /**
     *  请求发送成功 回调 对config中的信息拦截过滤
     *  作用：
     *    config中的一些信息不符合服务器格式 在此处修改
     *    显示正在加载图标
     *    判断是否携带token用户认证，如果否，拦截请求，跳转登录页面
     * @param config
     * @returns {AxiosRequestConfig}
     */
    config => {

    console.log('成功发送请求拦截器执行' + config)
      //返回
      return config;
    },

    // 请求发送失败回调
    error => {
    console.log('error' + config)
    }
  );

  homeAxios.interceptors.response.use(
    /**
     * 响应成功回调
     *  作用：
     *
     * @param response
     * @returns {AxiosResponse}
     */
    response => {
      console.log('成功响应拦截器执行' + response);
      return response;
    },
    //响应失败回调
    error =>{
      console.log(error)
    }
  );

  //发送网络请求并返回promise
  return homeAxios(config);

}



