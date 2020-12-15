// 会话
const sessionHandle = {
  onUpdateSession(obj) {
    console.log('onUpdateSession........')
    console.log(obj)
  },
  onSessions(obj) {
    console.log('onSessions........')
    console.log(obj)
  }
}
export default sessionHandle
