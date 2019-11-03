import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/table1',
      name: 'table1',
      component: () => import (/* webpackChunkName: "about" */ '../views/Table1')
    },
    {
      path: '/table2',
      name: 'table2',
      component: () => import (/* webpackChunkName: "about" */ '../views/Table2')
    },
    {
      path: '/table3',
      name: 'table3',
      component: () => import (/* webpackChunkName: "about" */ '../views/Table3')
    }
  ]
})