const HistoryExec = {
  // 获取 idClient 对应的本地消息
  getLocalMsgByIdClient (nim, IdClient) {
    nim.getLocalMsgByIdClient({
      idClient: IdClient,
      done: (error, obj) => {
        console.log(obj)
        console.log('获取本地消息' + (!error ? '成功' : '失败'))
        if (!error) {
          console.log(obj.msg)
        }
      }
    })
  },
  // 获取本地历史记录
  getLocalMsgs (nim, sessionId, root) {
    nim.getLocalMsgs({
      sessionId: sessionId, // 表示单聊场景(p2p)，对方账号为account。
      limit: 100,
      done: (error, obj) => {
        console.log('获取本地消息' + (!error ? '成功' : '失败'), error)
        console.log(obj)
        root.$store.dispatch('setLocalMsgsAct', JSON.stringify(obj.msgs))
      }
    })
  },
  // 更新本地消息
  updateLocalMsg (nim, idClient) {
    nim.updateLocalMsg({
      idClient: idClient,
      localCustom: '{"key","value"}',
      done: (error, obj) => {
        console.log(obj)
        console.log('更新本地消息' + (!error ? '成功' : '失败'))
      }
    })
  },
  // 删除本地消息
  deleteLocalMsg (nim, msg) {
    nim.deleteLocalMsg({
      msg: msg,
      done: (error, obj) => {
        console.log('删除本地消息' + (!error ? '成功' : '失败'), error, obj)
      }
    })
  },
  // 删除某个会话的本地消息
  deleteLocalMsgsBySession (nim, account) {
    nim.deleteLocalMsgsBySession({
      scene: 'p2p',
      to: account,
      delLastMsg: true,
      done: (error, obj) => {
        console.log(error)
        console.log(obj)
        console.log('删除会话本地消息' + (!error ? '成功' : '失败'))
      }
    })
  },
  // 删除所有本地消息
  deleteAllLocalMsgs (nim) {
    nim.deleteAllLocalMsgs({
      done: (error, obj) => {
        console.log(obj)
        console.log('删除所有本地消息' + (!error ? '成功' : '失败'))
      }
    })
  },
  // ########云端历史记录
  //  获取云端历史记录
  getHistoryMsgs (nim, to, root) {
    nim.getHistoryMsgs({
      scene: 'p2p',
      to: to,
      done: (error, obj) => {
        console.log('获取p2p历史消息' + (!error ? '成功' : '失败'))
        console.log(obj)
        if (!error) {
          console.log(obj.msgs)
          root.$store.dispatch('setHistoryMsgsAct', JSON.stringify(obj.msgs))
        }
      }
    })
  },
  //  删除点对点云端历史记录
  clearServerHistoryMsgs (nim, account) {
    nim.clearServerHistoryMsgs({
      account: 'xxx',
      delRoam: false,
      done: (error, obj) => {
        console.log('删除服务器消息' + (!error ? '成功' : '失败'), error, obj)
      }
    })
  }
}
export default HistoryExec
