/**
 * Created by 简小
 * Created on lucky 2020/12/14  21:58
 */
import NIM from '../SDK/NIM_Web_NIM_v8.1.0.js'
import {MD5} from '../utils/md5.js'
import WebRTC from '../SDK/NIM_Web_WebRTC_v8.1.0'

const mutations = {
  // 初始化SDK
  initUtils (state) {
    state.NIM = NIM
    state.NetCall = WebRTC
    state.MD5 = MD5
    console.log('Init NetCall as webRTC version successful')
  },
  // 初始化 nim 实例
  setNimInstanceMut (state, nim) {
    state.nimInstance = nim
  },
  setTestObjMut (state, params) {
    for (let i = 0; i < params.length; i++) {
      state.testObj[params[i].key] = params[i].val
    }
  },
  // LOG测试方法
  LOGOUTMUT (state, param) {
    console.log('执行到我这里了,This传值没问题...', param)
    state.LOGOUT = param
  },
  // 设置好友对象
  setFriendRelationMut (state, param) {
    state.data['friendRelation'] = param
  },
  // 设置会话对象
  setSessionsMut (state, param) {
    state.data['sessions'] = param
  },
  // 设置本地消息对象
  setLocalMsgsMut (state, msgs) {
    state.data['localMsgs'] = msgs
  },
  // 设置历史消息对象
  setHistoryMsgsMut (state, msgs) {
    state.data['historyMsgs'] = msgs
  },
  // 设置消息对象
  setMsgsMut (state, msgs) {
    state.data['msgs'][msgs.key] = msgs.val
  },
  setTeamsMut (state, teams) {
    state.data['teams'] = teams
  },
  setTeamMembersMut (state, teamMembers) {
    state.data['teamMembers'][teamMembers.key] = teamMembers.val
  },
  setMyInfoMut (state, info) {
    state.data['myInfo'] = info
  },
  setUsersMut (state, users) {
    state.data['users'] = users
  }
}

export default mutations
