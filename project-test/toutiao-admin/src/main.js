import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import './index.less'

Vue.use(ElementUI)

Vue.config.productionTip = false

// 解决重复点击路由报错问题
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
