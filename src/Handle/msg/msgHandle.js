// 消息
const msgHandle = {
  onMsg(obj) {
    console.log('onMsg........')
    console.log(obj)
  },
  onOfflineMsgs(obj) {
    console.log('onOfflineMsgs........')
    console.log(obj)
  },
  onRoamingMsgs(obj) {
    console.log('onRoamingMsgs........')
    console.log(obj)
  }
}
export default msgHandle
