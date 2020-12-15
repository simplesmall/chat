// 系统通知
const sysMsgHandle = {
  onCustomSysMsg(obj) {
    console.log('onCustomSysMsg........')
    console.log(obj)
  },
  onOfflineCustomSysMsgs(obj) {
    console.log('onOfflineCustomSysMsgs........')
    console.log(obj)
  },
  onUpdateSysMsgUnread(obj) {
    console.log('onUpdateSysMsgUnread........')
    console.log(obj)
  },
  onSysMsgUnread(obj) {
    console.log('onSysMsgUnread........')
    console.log(obj)
  },
  onUpdateSysMsg(obj) {
    console.log('onUpdateSysMsg........')
    console.log(obj)
  },
  onSysMsg(obj) {
    console.log('onSysMsg........')
    console.log(obj)
  },
  onOfflineSysMsgs(obj) {
    console.log('onOfflineSysMsgs........')
    console.log(obj)
  }
}
export default sysMsgHandle
