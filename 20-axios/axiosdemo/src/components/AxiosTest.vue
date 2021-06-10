<!--
  - CopyRight (c) 2021 ShaoxiongDu<dev@shaoxiongdu.cn>  All Rights Reserved
  -->

<template>
  <div>
    <h2>AxiosTest</h2>
    <button @click="sendRequest">发送单个请求</button>

    <button @click="asyncRequest">发送多个请求</button>
    <hr>

  </div>
</template>

<script>
import axios from "axios";

axios.defaults.baseURL = 'http://123.207.32.32:8000'

export default {
  name: "AxiosTest",
  data() {
    return {
      data: '',
      asyncData: ''
    }
  },
  methods: {

    /**
     * axios基本使用 单个请求
     */
    sendRequest(){
      console.log('请求发送成功')
      axios({
        url: '/home/multidata',
        params: {

        },
      }).then( response => {
        console.log('响应中的Data = ' + response.data)
        this.data = response.data
      } )
    },

    /**
     * 异步请求
     */
    asyncRequest(){
      axios.all([
        axios({
          url: '/home/multidata'
        }),
        axios({
          url: '/home/data',
          params: {
            type: 'sell',
            page: 4
          }
        })
      ]).then(results => console.log(this.asyncData = results));
    }

  }
}
</script>

<style scoped>

</style>
