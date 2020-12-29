import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path:'/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/home/index'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/home')
      },
      {
        path: '/article',
        name: 'article',
        component: () => import('../views/article/article')
      },
      {
        path: '/material',
        name: 'material',
        component: () => import('../views/material/material')
      },
      {
        path: '/publish',
        name: 'publish',
        component: () => import('../views/publish/publish')
      },
      {
        path: '/comment',
        name: 'comment',
        component: () => import('../views/comment/comment')
      },
      {
        path: '/fans',
        name: 'fans',
        component: () => import('../views/fans/fans')
      },
      {
        path: '/settings',
        name: 'settings',
        component: () => import('../views/settings/settings')
      },
    ]
  },

]
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//路由导航守卫
// router.beforeEach((to,from,next)=>{
//   if (to.path === '/login'){
//     next()
//   }else{
//     next('/login')
//   }
// })
export default router

