/**
 * Created by 简小
 * Created on lucky 2020/12/14  22:03
 */
const getters = {
  NIMGetter (state) {
    return state.NIM
  },
  NetCallGetter (state) {
    return state.NetCall
  },
  MD5Getter (state) {
    return state.MD5
  },
  nimInstanceGetter (state) {
    return state.nimInstance
  },
  TestObjGetter (state) {
    return state.testObj
  },
  friendRelationGetter (state) {
    return state.data['friendRelation']
  },
  sessionsGetter (state) {
    return state.data['sessions']
  },
  localMsgsGetter (state) {
    return state.data['localMsgs']
  },
  historyMsgsGetter (state) {
    return state.data['historyMsgs']
  },
  msgsGetter (state) {
    return state.data['msgs']
  },
  teamsGetter (state) {
    return state.data['teams']
  },
  teamMembersGetter (state) {
    return state.data['teamMembers']
  },
  myInfoGetter (state) {
    return state.data['myInfo']
  },
  usersGetter (state) {
    return state.data['users']
  },
  netcallInstanceGetter (state) {
    return state.netcallInstance
  }
}
export default getters
