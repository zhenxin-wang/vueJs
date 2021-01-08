import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import './index.less'
import { ElementTiptapPlugin } from 'element-tiptap';
// 引入 ElementUI 样式
import 'element-ui/lib/theme-chalk/index.css';
// import element-tiptap 样式
import 'element-tiptap/lib/index.css';
Vue.use(ElementUI)
// 安装 element-tiptap 插件
Vue.use(ElementTiptapPlugin, { lang: 'zh' });
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
