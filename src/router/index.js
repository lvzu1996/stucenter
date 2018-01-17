import Vue from 'vue'
import Router from 'vue-router'

const Report = () => import('@/pages/Report/Report')
const Operation = () => import('@/pages/Operation/Operation')
const Push = () => import('@/pages/Push/Push')
const Stuinfo = () => import('@/pages/Stuinfo/Stuinfo')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/report',
      name: 'Report',
      component: Report
    },
    {
      path: '/operation',
      name: 'Operation',
      component: Operation
    },
    {
      path: '/push',
      name: 'Push',
      component: Push
    },
    {
      path: '/stuinfo',
      name: 'Stuinfo',
      component: Stuinfo
    }
  ]
})
