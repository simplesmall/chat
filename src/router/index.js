import Vue from 'vue'
import Router from 'vue-router'
import Chat from '../views/Chat'

import Init from "../components/packageTest/Init";
import Friends from '../components/packageTest/Friends'
import History from '../components/packageTest/History'
import ChatRoom from '../components/packageTest/ChatRoom'
import Team from '../components/packageTest/Team'
import Message from '../components/packageTest/Message'
import Session from '../components/packageTest/Session'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Init',
      component: Init
    },
    {
      path: '/friends',
      name: 'Friends',
      component: Friends
    },
    {
      path: '/history',
      name: 'history',
      component: History
    },
    {
      path: '/chatroom',
      name: 'chatroom',
      component: ChatRoom
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/msg',
      name: 'Message',
      component: Message
    },
    {
      path: '/session',
      name: 'Session',
      component: Session
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    }
  ]
})
