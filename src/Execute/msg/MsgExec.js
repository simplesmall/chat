import msgHandle from '../../Handle/msg/msgHandle'

const MsgExec = {
  // 发送文字消息
  sendText (nim, account, text, root) {
    var msg = nim.sendText({
      scene: 'p2p',
      to: account,
      text: text,
      done: (error, msg) => {
        console.log(error)
        console.log(msg)
        console.log('发送' + msg.scene + ' ' + msg.type + '消息' + (!error ? '成功' : '失败') + ', id=' + msg.idClient)
        msgHandle.pushMsg(msg, root)
      }
    })
    console.log('正在发送p2p text消息, id=' + msg.idClient)
  },
  // 预览文件
  previewFile (nim, account, fileInput, root) {
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
            scene: 'p2p',
            to: account,
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
  sendFile (nim, account, fileInput, root) {
    nim.sendFile({
      scene: 'p2p',
      to: account,
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
  sendGeo (nim, account, root) {
    nim.sendGeo({
      scene: 'p2p',
      to: account,
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
  sendTipMsg (nim, account, tip, root) {
    nim.sendTipMsg({
      scene: 'p2p',
      to: account,
      tip: tip,
      done: (error, msg) => {
        if (!error) {
          msgHandle.pushMsg(msg, root)
        }
      }
    })
  },
  // 发送自定义消息
  sendCustomMsg (nim, account, customContent, root) {
    var msg = nim.sendCustomMsg({
      scene: 'p2p',
      to: account,
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
  forwardMsg (nim, account, msg, root) {
    nim.forwardMsg({
      msg: msg,
      scene: 'p2p',
      to: account,
      done: (error, msg) => {
        if (!error) {
          msgHandle.pushMsg(msg, root)
        }
      }
    })
  },
  // 撤回消息
  deleteMsg (nim, msg) {
    nim.deleteMsg({
      msg: msg,
      done: (error) => {
        console.log('撤回消息' + (!error ? '成功' : '失败'), error)
      }
    })
  }
}
export default MsgExec
