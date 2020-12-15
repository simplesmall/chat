// 收到广播消息
const broadcastHandle = {
  onBroadcastMsgs(obj) {
    console.log('onBroadcastMsgs........')
    console.log(obj)
  },
  onBroadcastMsg(obj) {
    console.log('onBroadcastMsg........')
    console.log(obj)
  }
}
export default broadcastHandle
