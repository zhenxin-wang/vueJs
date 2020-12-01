import Vue from 'vue'
import App from './App'
import router from './router'

import request from '@/network/request'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// axios.defaults.baseURL = 'http://123.207.32.32:8000'
//
// axios({
//   url: '/content/multidata',
//   method: 'get'
// }).then(res => {
//   console.log(res);
// })
//
// axios({
//   url: '/content/data',
//   params: {
//     type:'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })


//创建axios实例
// const instance = axios.create()
request({
  url: '/content/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
