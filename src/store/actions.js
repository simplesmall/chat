/**
 * Created by 简小
 * Created on lucky 2020/12/14  21:58
 */
const actions = {
  // 初始化SDK
  initUtils (context) {
    context.commit('initUtils')
  },
  setNimInstanceAct(context,nim){
    context.commit('setNimInstanceMut',nim)
  }
}
export default actions
