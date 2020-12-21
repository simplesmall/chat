import sessionHandle from '../../Handle/session/sessionHandle'

const SessionExec = {
  // 获取本地会话列表  lastSessionId从获取最近会话的sessions中获取到
  getLocalSessions (nim, lastSessionId, that) {
    nim.getLocalSessions({
      lastSessionId: lastSessionId,
      limit: 100,
      done: (error, obj) => {
        console.log(obj)
        console.log('获取本地会话列表' + (!error ? '成功' : '失败'))
        if (!error) {
          sessionHandle.onSessions(obj.sessions, that)
        }
      }
    })
  },
  // 通过sessionId获取本地会话  sessionId从获取最近会话的sessions中获取到
  getLocalSession (nim, sessionId, that) {
    nim.getLocalSession({
      sessionId: sessionId,
      done: (error, obj) => {
        console.log(error)
        console.log(obj)
        console.log('获取本地会话操作' + (!error ? '完成' : '失败'), error, obj)
        if (!error) {
          sessionHandle.onSession(obj, that)
        }
      }
    })
  },
  //  插入一条本地会话记录
  insertLocalSession (nim, account, that) {
    nim.insertLocalSession({
      scene: 'p2p',
      to: 'account',
      done: (error, obj) => {
        console.log('插入本地会话记录' + (!error ? '成功' : '失败'), error, obj)
        if (!error) {
          sessionHandle.onSessions(obj.session, that)
        }
      }
    })
  },
  // 更新本地会话
  updateLocalSession (nim, id) {
    nim.updateLocalSession({
      id: id,
      localCustom: '{"key","value"}',
      done: (error, obj) => {
        console.log(error)
        console.log(obj)
        console.log('更新本地会话' + (!error ? '成功' : '失败'))
      }
    })
  },
  // 删除本地会话
  deleteLocalSession (nim, id) {
    nim.deleteLocalSession({
      id: id,
      done: (error, obj) => {
        console.log(error)
        console.log(obj)
        console.log('删除本地会话' + (!error ? '成功' : '失败'))
      }
    })
  },
  // 删除服务器上的会话
  deleteSession (nim, scene, account) {
    nim.deleteSession({
      scene: 'p2p',
      to: 'account',
      done: (error, obj) => {
        console.log(error)
        console.log(obj)
        console.log('删除服务器上的会话' + (!error ? '成功' : '失败'))
      }
    })
  },
  // 批量删除服务器上的会话
  deleteSessions (nim) {
    nim.deleteSessions({
      sessions: [{
        scene: 'p2p',
        to: 'account'
      }, {
        scene: 'p2p',
        to: 'account1'
      }],
      done: (error, obj) => {
        console.log(error)
        console.log(obj)
        console.log('批量删除会话' + (!error ? '成功' : '失败'))
      }
    })
  }
}
export default SessionExec
