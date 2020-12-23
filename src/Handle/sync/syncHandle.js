// 同步完成
import NetcallListener from '../../Kernel/NetcallListener'
const syncHandle = {
  onSyncDone (obj, root) {
    console.log('onSyncDone........')
    console.log(obj)
    console.log(root.$store.state)
    // 同步完成的位置进行注册监听事件
    NetcallListener.initWebRTCEvent(root.$store.getters.nimInstanceGetter, root)
  }
}
export default syncHandle
