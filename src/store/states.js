/**
 * Created by 简小
 * Created on lucky 2020/12/14  21:58
 */
const state = {
  // SDK
  NIM: null,
  MD5: null,
  NetCall: null,
  // 全局实例
  netcallInstance: null,
  nimInstance: null,
  // 测试用
  testObj: {},
  LOGOUT: 'INIT LOGOUT.....',
  // 以下为各个功能模块部分的数据对象
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
    myInfo: {},
    users: [],
    sync: {},
    sysMsg: {},
    teams: [],
    teamMembers: [],
    teamMsg: {},
    userProfile: {},
    userRelation: {}
  }
}
export default state
