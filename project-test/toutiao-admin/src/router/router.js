import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path:'/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index'),
    children: [
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

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
