import Vue from 'vue'
import Router from 'vue-router'

import layout from '../views/layout/layout'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('../views/login'),
    hidden: true
  },
  {
    path: '/404', component: () => import('../views/404')
  },
  {
    path: '/',
    component: layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('../views/dashboard/index')
    }]
  }
]

export default new Router({
  routes: constantRouterMap
})
