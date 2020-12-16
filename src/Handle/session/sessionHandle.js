// 会话
const sessionHandle = {
  onUpdateSession(session,root) {
    console.log('onUpdateSession........')
    console.log(session)
    console.log('会话更新了', session);
    // data.sessions = nim.mergeSessions(data.sessions, session);
    this.updateSessionsUI();
  },
  onSessions(sessions,root) {
    console.log('onSessions........')
    console.log(sessions)
    console.log('收到会话列表', sessions);
    // data.sessions = nim?.mergeSessions(data.sessions, sessions);
    this.updateSessionsUI()
  },
  updateSessionsUI(){

  },
}
export default sessionHandle
