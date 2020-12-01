//配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'

const Home = () => import("../components/Home");
const About = () => import("../components/About");
const User = () => import("../components/User")
const HomeNews = () => import("../components/HomeNews")
const HomeMessage = () => import("../components/HomeMessage")
const Profile = () => import("../components/Profile")
//1.通过vue。user(插件)，安装插件
Vue.use(VueRouter)

//2.创建VuewRouter路由对象
const routes = [
  {
    path: '/',
    redirect: '/home' //重定向
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
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
    meta: {
      title: '关于'
    },
    component: About,
    beforeEnter:(to,from, next)=>{//路由独享
      console.log('aaaaaaaaa');
      next()
    }
  },
  {
    path: '/user/:userId',
    meta: {
      title: '用户'
    },
    component: User
  },
  {
    path: '/profile',
    meta: {
      title: '档案'
    },
    component: Profile
  }
]
const router = new VueRouter({
  //配置路由和组件之间的应用关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})
//全局导航  --前置守卫
router.beforeEach((to,from,next)=>{
  //从from跳转到to,获取title赋值到浏览器title
  document.title = to.matched[0].meta.title
  next()
})
//后置勾子（hook）
router.afterEach((to,from)=>{

})
//3.将router对象传入到vue实例
export default router
