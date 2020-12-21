/**
 * Created by 简小
 * Created on lucky 2020/12/14  21:58
 */
const actions = {
  initUtils (context) {
    context.commit('initUtils')
  },
  setNimInstanceAct (context, nim) {
    context.commit('setNimInstanceMut', nim)
  },
  setTestObjAct (context, params) {
    context.commit('setTestObjMut', params)
  },
  LOGOUTACT (context, param) {
    context.commit('LOGOUTMUT', param)
  },
  setFriendRelationAct (context, param) {
    context.commit('setFriendRelationMut', param)
  },
  setSessionsAct (context, param) {
    context.commit('setSessionsMut', param)
  },
  setLocalMsgsAct (context, msgs) {
    context.commit('setLocalMsgsMut', msgs)
  },
  setHistoryMsgsAct (context, msgs) {
    context.commit('setHistoryMsgsMut', msgs)
  },
  setMsgsAct (context, msgs) {
    context.commit('setMsgsMut', msgs)
  }
}
export default actions
