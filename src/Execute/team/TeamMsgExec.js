import msgHandle from '../../Handle/msg/msgHandle'

const TeamMsgExec = {
  // 发送群消息
  sendTextMsgTeam (nim, teamId, text, root) {
    var msg = nim.sendText({
      scene: 'team',
      to: teamId,
      text: text,
      done: (error, msg) => {
        console.log(error)
        console.log(msg)
        console.log('发送' + msg.scene + ' ' + msg.type + '消息' + (!error ? '成功' : '失败') + ', id=' + msg.idClient)
        msgHandle.pushMsg(msg, root)
      }
    })
    console.log('正在发送team text消息, id=' + msg.idClient)
  },
  // 预览文件
  previewFileTeam (nim, teamId, fileInput, root) {
    nim.previewFile({
      type: 'image',
      fileInput: fileInput,
      fastPass: '{"w":200,"h":110,"md5":"xxxxxxxxx"}',
      uploadprogress: (obj) => {
        console.log('文件总大小: ' + obj.total + 'bytes')
        console.log('已经上传的大小: ' + obj.loaded + 'bytes')
        console.log('上传进度: ' + obj.percentage)
        console.log('上传进度文本: ' + obj.percentageText)
      },
      done: (error, file) => {
        console.log('上传image' + (!error ? '成功' : '失败'))
        // show file to the user
        if (!error) {
          var msg = nim.sendFile({
            scene: 'team',
            to: teamId,
            file: file,
            done: (error, msg) => {
              console.log('发送' + msg.scene + ' ' + msg.type + '消息' + (!error ? '成功' : '失败') + ', id=' + msg.idClient)
              msgHandle.pushMsg(msg, root)
            }
          })
          console.log('正在发送p2p image消息, id=' + msg.idClient)
        }
      }
    })
  },
  // 发送文件
  sendFileTeam (nim, teamId, fileInput, root) {
    nim.sendFile({
      scene: 'team',
      to: teamId,
      type: 'image',
      fileInput: fileInput,
      fastPass: '{"w":200,"h":110,"md5":"xxxxxxxxx"}',
      beginupload: function (upload) {
        // - 如果开发者传入 fileInput, 在此回调之前不能修改 fileInput
        // - 在此回调之后可以取消图片上传, 此回调会接收一个参数 `upload`, 调用 `upload.abort();` 来取消文件上传
      },
      uploadprogress: (obj) => {
        console.log('文件总大小: ' + obj.total + 'bytes')
        console.log('已经上传的大小: ' + obj.loaded + 'bytes')
        console.log('上传进度: ' + obj.percentage)
        console.log('上传进度文本: ' + obj.percentageText)
      },
      uploaddone: (error, file) => {
        console.log(error)
        console.log(file)
        console.log('上传' + (!error ? '成功' : '失败'))
      },
      beforesend: (msg) => {
        console.log('正在发送p2p image消息, id=' + msg.idClient)
        msgHandle.pushMsg(msg, root)
      },
      done: (error, msg) => {
        if (!error) {
          msgHandle.pushMsg(msg, root)
        }
      }
    })
  },
  // 发送地理信息
  sendGeoTeam (nim, teamId, root) {
    nim.sendGeo({
      scene: 'team',
      to: teamId,
      geo: {
        lng: 116.3833,
        lat: 39.9167,
        title: 'Beijing'
      },
      done: (error, msg) => {
        if (!error) {
          msgHandle.pushMsg(msg, root)
        }
      }
    })
  },
  // 发送提醒消息
  sendTipMsgTeam (nim, teamId, tip, root) {
    nim.sendTipMsg({
      scene: 'team',
      to: teamId,
      tip: tip,
      done: (error, msg) => {
        if (!error) {
          msgHandle.pushMsg(msg, root)
        }
      }
    })
  },
  // 发送自定义消息
  sendCustomMsgTeam (nim, teamId, customContent, root) {
    var msg = nim.sendCustomMsg({
      scene: 'team',
      to: teamId,
      content: JSON.stringify(customContent),
      done: (error, msg) => {
        if (!error) {
          msgHandle.pushMsg(msg, root)
        }
      }
    })
    console.log('正在发送p2p自定义消息, id=' + msg.idClient)
  },
  // 转发消息
  forwardMsgTeam (nim, teamId, msg, root) {
    nim.forwardMsg({
      msg: msg,
      scene: 'team',
      to: teamId,
      done: (error, msg) => {
        if (!error) {
          msgHandle.pushMsg(msg, root)
        }
      }
    })
  },
  // 撤回消息
  deleteMsgTeam (nim, msg) {
    nim.deleteMsg({
      msg: msg,
      done: (error) => {
        console.log('撤回消息' + (!error ? '成功' : '失败'), error)
      }
    })
  }
}

export default TeamMsgExec
