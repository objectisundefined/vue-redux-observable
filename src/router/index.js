import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Counter from '@/components/Counter'
import Ping from '@/components/Ping'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    },
    {
      path: '/ping',
      name: 'Ping',
      component: Ping
    }
  ]
})
