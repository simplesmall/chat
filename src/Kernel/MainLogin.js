import Instance from './Instance'
import NetcallListener from './NetcallListener'
// import NetcallListener from './NetcallListener'
const MainLogin = {
  // 登录创建实例方法
  getInstance (NIM, root) {
    // ⑤⑤⑤⑤⑤
    let localNim = Instance.getInstance(NIM, root)
    // 〇〇〇〇〇
    root.$store.dispatch('setNimInstanceAct', localNim)
    console.log(root.$store.getters.nimInstanceGetter)
    return localNim
  },
  // 检查返回创建的实例,没有则调用上面getInstance创建实例
  checkNim (root) {
    let checkNim = null
    checkNim = root.$store.getters.nimInstanceGetter === null
      ? this.getInstance(root.$store.getters.NIMGetter, root)
      : root.$store.getters.nimInstanceGetter
    // ①①①①①
    console.log(checkNim === null ? 'nim 为空,主人小心XXXXXXXXXXXXXXXXXXXX' : 'nim 准备完毕,主人走我们去搞事情√√√√√√√√√√')
    return checkNim
  },
  // 检查是否有netcall实例,没有则创建返回
  checkNetcall (root) {
    let NetCall = root.$store.getters.NetCallGetter
    let nim = this.checkNim(root)
    // 超级重要,不USE一下后面的netcall实例甚至都没法用
    root.$store.getters.NIMGetter.use(NetCall)
    let netcallInstance = NetCall.getInstance({
      nim: nim,
      container: document.getElementById('localStreamView'),
      remoteContainer: document.getElementById('remoteContainer'),
      chromeId: '',
      // 是否开启日志打印
      debug: true
    })
    // ②②②②②
    // console.log('封装netcallInstance 之前..............................')
    // ③③③③③
    root.$store.dispatch('setNetcallInstanceAct', netcallInstance)
    console.log(root.$store.getters.netcallInstanceGetter)
    // ④④④④④
    // console.log('封装netcallInstance 之后..............................')
    // 监听事件放在同步nim完成的地方
    // NetcallListener.initWebRTCEvent(netcallInstance, this)
  }
}
export default MainLogin
