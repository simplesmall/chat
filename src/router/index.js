import Vue from 'vue'
import Router from 'vue-router'
import Chat from '../views/Chat'
import NimTest from "../components/NimTest";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NimTest',
      component: NimTest
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    }
  ]
})
