// 会话
const sessionHandle = {
  onUpdateSession (session, root) {
    console.log('onUpdateSession........')
    console.log(session)
    console.log('会话更新了', session)
    let dataSessions = root.$store.getters.sessionsGetter
    dataSessions = root.$store.getters.nimInstanceGetter.mergeSessions(dataSessions, session)
    root.$store.dispatch('setSessionsAct', dataSessions)
    // data.sessions = nim.mergeSessions(data.sessions, session);
    this.updateSessionsUI()
  },
  onSessions (sessions, root) {
    console.log('onSessions........')
    console.log(sessions)
    console.log('收到会话列表', sessions)
    let dataSessions = root.$store.getters.sessionsGetter
    dataSessions = root.$store.getters.nimInstanceGetter.mergeSessions(dataSessions, sessions)
    root.$store.dispatch('setSessionsAct', dataSessions)
    // data.sessions = nim?.mergeSessions(data.sessions, sessions);
    this.updateSessionsUI()
  },
  onSession (sessions, root) {
    console.log('onSessions........')
    console.log(sessions)
    console.log('收到会话列表', sessions)
    let dataSessions = root.$store.getters.sessionsGetter
    dataSessions = root.$store.getters.nimInstanceGetter.mergeSessions(dataSessions, sessions)
    root.$store.dispatch('setSessionsAct', dataSessions)
    // data.sessions = nim?.mergeSessions(data.sessions, sessions);
    this.updateSessionsUI()
  },
  updateSessionsUI () {

  }
}
export default sessionHandle
