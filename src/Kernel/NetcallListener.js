const NetcallListener = {
  initWebRTCEvent (netcallInstance, root) {
    console.log('initWebRTCEvent.......................')
    // 是否被叫中
    let beCalling = false
    // 呼叫类型
    // eslint-disable-next-line no-unused-vars
    let type = null
    // 被叫信息
    let beCalledInfo = null
    // 是否正忙
    let busy = false
    // NetCall SDK 赋值
    let Netcall = root.$store.getters.NetCallGetter

    // 开启监听
    netcallInstance.on('beCalling', (obj) => {
      console.log('on beCalling', obj)
      const channelId = obj.channelId
      // 被叫回应主叫自己已经收到了通话请求
      netcallInstance.control({
        channelId,
        command: Netcall.NETCALL_CONTROL_COMMAND_START_NOTIFY_RECEIVED
      })
      // 只有在没有通话并且没有被叫的时候才记录被叫信息, 否则通知对方忙并拒绝通话
      if (!netcallInstance.calling && !beCalling) {
        type = obj.type
        beCalling = true
        beCalledInfo = obj
      } else {
        if (netcallInstance.calling) {
          busy = netcallInstance.notCurrentChannelId(obj)
        } else if (beCalling) {
          busy = beCalledInfo.channelId !== channelId
        }
        if (busy) {
          netcallInstance.control({
            channelId,
            command: Netcall.NETCALL_CONTROL_COMMAND_BUSY
          })
          // 拒绝通话
          netcallInstance.response({
            accepted: false,
            beCalledInfo: obj
          })
        }
      }
    })
    // 被叫接受的通知
    netcallInstance.on('callAccepted', function (obj) {
      console.log('on callAccepted', obj)
      // 取消呼叫倒计时
      // clearCallTimer()
      // 可以开启音视频连接操作。。。
    })
    // 被叫拒绝的通知
    netcallInstance.on('callRejected', function (obj) {
      console.log('on callRejected', obj)
      // 取消呼叫倒计时
      // clearCallTimer()
      // 挂断
      // hangup()
      // 做清理工作
      // resetWhenHangup()
    })
    // 通话中收到远端的控制指令
    netcallInstance.on('control', function (obj) {
      console.log('收到指令', obj)
    })
    // 收到挂断通知
    netcallInstance.on('hangup', function (obj) {
      console.log('on hangup', obj)
      // 判断需要挂断的通话是否是当前正在进行中的通话
      if (!beCalledInfo || beCalledInfo.channelId === obj.channelId) {
        // 清理工作
        // resetWhenHangup()
      }
    })
    // 其他端已处理的通知
    netcallInstance.on('callerAckSync', function (obj) {
      console.log('其他端已经做了处理', obj)
    })
    // 用户加入房间通知
    netcallInstance.on('joinChannel', function (obj) {
      // 通知上层有其他用户加入了房间，上层做相应逻辑和UI处理
      // 这里可以预览加入的同学的视频流
      // 播放对方声音
      netcallInstance.startDevice({
        type: Netcall.DEVICE_TYPE_AUDIO_OUT_CHAT
      }).catch(function () {
        console.log('播放对方的声音失败')
      })

      // 预览加入的同学的视频流
      netcallInstance.startRemoteStream({
        account: obj.account,
        node: document.getElementById('remoteContainer')
      })

      // 设置对方预览画面大小
      netcallInstance.setVideoViewRemoteSize({
        account: 'testAccount',
        width: 500,
        height: 500,
        cut: true
      })
    })
    // 用户离开房间通知
    netcallInstance.on('leaveChannel', function (obj) {
      // 通知上层有其他用户离开了会议，上层做相应逻辑和UI处理

      // 停止预览该同伴的视频流
      netcallInstance.stopRemoteStream({
        account: obj.account
      })
    })
    // 音量大小实时回调通知
    netcallInstance.on('audioVolumn', function (obj) {
      console.log('音量', obj)
    })

    // 通话结束的清理工作

    /* let netcall = netcallInstance
    // 停止本地视频预览
    netcall.stopLocalStream()
    // 停止对端视频预览
    netcall.stopRemoteStream()
    // 停止设备麦克风
    netcall.stopDevice(Netcall.DEVICE_TYPE_AUDIO_IN)
    // 停止设备摄像头
    netcall.stopDevice(Netcall.DEVICE_TYPE_VIDEO)
    // 停止播放本地音频
    netcall.stopDevice(Netcall.DEVICE_TYPE_AUDIO_OUT_LOCAL)
    // 停止播放对端音频
    netcall.stopDevice(Netcall.DEVICE_TYPE_AUDIO_OUT_CHAT) */

    // 点对点开启音视频连接

    /* let promise
    promise = Promise.resolve()
    promise.then(function () {
      // 开启麦克风
      return netcall.startDevice({
        type: Netcall.DEVICE_TYPE_AUDIO_IN
      }).catch(function (err) {
        console.log('启动麦克风失败')
        console.error(err)
      })
    })
      // 设置采集音量
      .then(function () {
        netcall.setCaptureVolume(255)
        // 开启摄像头
        return netcall.startDevice({
          type: Netcall.DEVICE_TYPE_VIDEO,
          width: 640,
          height: 480
        })
          .catch(function (err) {
            console.log('启动摄像头失败')
            console.error(err)
          })
      })
      // 设置本地预览画面大小
      .then(function () {
        netcall.setVideoViewSize({
          with: 500,
          height: 500,
          cut: true
        })
      })
      // 开启RTC连接
      .then(function () {
        console.log('开始webrtc')
        return netcall.startRtc()
      })
      .then(function () {
        console.log('webrtc连接成功')
      })
      .catch(function (err) {
        console.log('发生错误, 挂断通话')
        console.log(err)
        netcall.hangup()
      }) */

    // 在回调里监听对方加入通话，并显示对方的视频画面
    netcallInstance.on('joinChannel', function (obj) {
      console.log('user join', obj)
      // 播放对方声音
      netcallInstance.startDevice({
        type: Netcall.DEVICE_TYPE_AUDIO_OUT_CHAT
      }).catch(function (err) {
        console.log('播放对方的声音失败')
        console.error(err)
      })
      // 预览对方视频画面
      netcallInstance.startRemoteStream({
        account: obj.account,
        node: document.getElementById('remoteContainer')
      })
      // 设置对方预览画面大小
      netcallInstance.setVideoViewRemoteSize({
        account: 'testAccount',
        width: 500,
        height: 500,
        cut: true
      })
    })
  }
}
export default NetcallListener
