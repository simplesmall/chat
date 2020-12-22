import Instance from './Instance'

const MainLogin = {
  // 登录创建实例方法
  getInstance (NIM, root) {
    let localNim = Instance.getInstance(NIM, root)
    root.$store.dispatch('setNimInstanceAct', localNim)
    return localNim
  },
  // 检查返回创建的实例,没有则调用上面getInstance创建实例
  checkNim (root) {
    let checkNim = null
    checkNim = root.$store.getters.nimInstanceGetter === null
      ? this.getInstance(root.$store.getters.NIMGetter, root)
      : root.$store.getters.nimInstanceGetter
    console.log(checkNim === null ? 'nim 为空,主人小心XXXXXXXXXXXXXXXXXXXX' : 'nim 准备完毕,主人走我们去搞事情√√√√√√√√√√')
    return checkNim
  },
  // 检查是否有netcall实例,没有则创建返回
  checkNetcall (root) {
    let NetCall = root.$store.getters.NetCallGetter
    let nim = this.checkNim(root)
    let netcallInstance = NetCall.getInstance({
      nim: nim,
      container: document.getElementById('container'),
      remoteContainer: document.getElementById('remoteContainer'),
      chromeId: '',
      // 是否开启日志打印
      debug: false
    })
    root.$store.dispatch('setNetcallInstanceAct', netcallInstance)
  }
}
export default MainLogin
