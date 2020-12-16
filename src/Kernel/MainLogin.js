import Instance from './Instance'

const MainLogin = {
  getInstance (NIM, root) {
    let localNim = Instance.getInstance(NIM, root)
    root.$store.dispatch('setNimInstanceAct', localNim)
    return localNim
  },
  checkNim (root) {
    let checkNim = null
    checkNim = root.$store.getters.nimInstanceGetter === null
      ? this.getInstance(root.$store.getters.NIMGetter, root)
      : root.$store.getters.nimInstanceGetter
    console.log(checkNim === null ? 'nim 为空,主人小心XXXXXXXXXXXXXXXXXXXX' : 'nim 准备完毕,主人走我们去搞事情√√√√√√√√√√')
    return checkNim
  }
}
export default MainLogin
