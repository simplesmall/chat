// 系统通知
const sysMsgHandle = {
  onCustomSysMsg (obj) {
    console.log('onCustomSysMsg........')
    console.log(obj)
  },
  onOfflineCustomSysMsgs (sysMsgs,root) {
    console.log('onOfflineCustomSysMsgs........')
    console.log(sysMsgs)
    console.log('收到离线系统通知', sysMsgs);
    this.pushSysMsgs(sysMsgs,root);
  },
  onUpdateSysMsgUnread (obj) {
    console.log('onUpdateSysMsgUnread........')
    console.log(obj)
    console.log('系统通知未读数更新了', obj);
    // data.sysMsgUnread = obj;
    this.refreshSysMsgsUI();
  },
  onSysMsgUnread (obj) {
    console.log('onSysMsgUnread........')
    console.log(obj)
  },
  onUpdateSysMsg (sysMsg,root) {
    console.log('onUpdateSysMsg........')
    console.log(sysMsg)
    this.pushSysMsgs(sysMsg,root);
  },
  onSysMsg (sysMsg,root) {
    console.log('onSysMsg........')
    console.log(sysMsg)
    console.log('收到系统通知', sysMsg)
    this.pushSysMsgs(sysMsg,root)
  },
  onOfflineSysMsgs (obj) {
    console.log('onOfflineSysMsgs........')
    console.log(obj)
  },

// ###########
  pushSysMsgs (sysMsgs,root) {
    // data.sysMsgs = nim.mergeSysMsgs(data.sysMsgs, sysMsgs)
    this.refreshSysMsgsUI()
  },
  refreshSysMsgsUI () {

  }
}
export default sysMsgHandle
