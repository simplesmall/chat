// 消息
const msgHandle = {
  onMsg (msg,root) {
    console.log('onMsg........')
    console.log(msg)
    console.log('收到消息', msg.scene, msg.type, msg)
    this.pushMsg(msg,root)
  },
  onOfflineMsgs (sysMsgs,root) {
    console.log('onOfflineMsgs........')
    console.log(sysMsgs)
    console.log('收到离线系统通知', sysMsgs);
    this.pushSysMsgs(sysMsgs,root);
  },
  onRoamingMsgs (obj,root) {
    console.log('onRoamingMsgs........')
    console.log(obj)
    console.log('漫游消息', obj);
    this.pushMsg(obj.msgs);
  },

//  ######
  pushMsg (msgs,root) {
    if (!Array.isArray(msgs)) {
      msgs = [msgs]
    }
    var sessionId = msgs[0].sessionId
    console.log(sessionId)
    // data.msgs = data.msgs || {}
    // data.msgs[sessionId] = nim.mergeMsgs(data.msgs[sessionId], msgs)
  },
  pushSysMsgs(sysMsgs,root) {
    // data.sysMsgs = nim.mergeSysMsgs(data.sysMsgs, sysMsgs);
    this.refreshSysMsgsUI()
  },
  refreshSysMsgsUI(){

  }
}
export default msgHandle
