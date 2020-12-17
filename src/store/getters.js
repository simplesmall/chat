/**
 * Created by 简小
 * Created on lucky 2020/12/14  22:03
 */
const getters = {
  NIMGetter(state){
    return state.NIM
  },
  NetCallGetter(state){
    return state.NetCall
  },
  MD5Getter(state){
    return state.MD5
  },
  nimInstanceGetter(state){
    return state.nimInstance
  },
  TestObjGetter(state){
    return state.testObj
  },
  friendRelationGetter(state){
    return state.data['friendRelation']
  }
}
export default getters
