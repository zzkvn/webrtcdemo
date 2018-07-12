import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Room from './views/Room.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'room',
      component: Room
    },
    {
      path: '/gum',
      name: 'gum',
      component: Home
    }
  ]
})
