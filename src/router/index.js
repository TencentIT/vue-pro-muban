import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/404',
      component: () => import('../pages/404')
    },
    {
      path: '/updateBrower',
      component: () => import('../pages/updateBrower')
    },
    {
      path: '/login',
      component: () => import('../pages/login')
    },
    {
      path: '/home',
      component: () => import('../pages/home')
    },
    {
      path: '*',
      redirect: {
        path: '/404'
      }
    }
  ]
})
