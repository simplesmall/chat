/**
 * Created by 简小
 * Created on lucky 2020/12/14  21:58
 */
const state = {
  NIM: null,
  MD5: null,
  NetCall: null,
  nimInstance: null,
  testObj: {},
  LOGOUT: 'INIT LOGOUT.....',
  // 一下为各个功能模块部分的数据对象
  data: {
    broadcast: {},
    friendRelation: [],
    login: {},
    msgs: [],
    localMsgs: [],
    historyMsgs: [],
    multiLogin: {},
    robot: {},
    sessions: [],
    sync: {},
    sysMsg: {},
    team: {},
    teamMsg: {},
    userProfile: {},
    userRelation: {}
  }
}
export default state
