const NetCallExec = {
  // 发起呼叫
  call (account, root) {
    let netcall = root.$store.getters.netcallInstanceGetter
    let Netcall = root.$store.getters.NetCallGetter
    const pushConfig = {
      enable: true,
      needBadge: true,
      needPushNick: true,
      pushContent: '',
      custom: '测试自定义数据',
      pushPayload: '',
      sound: '',
      forceKeepCalling: 0
    }
    const sessionConfig = {
      videoQuality: Netcall.CHAT_VIDEO_QUALITY_HIGH,
      videoFrameRate: Netcall.CHAT_VIDEO_FRAME_RATE_15,
      videoBitrate: 0,
      recordVideo: false,
      recordAudio: false,
      highAudio: false,
      bypassRtmp: false,
      rtmpUrl: '',
      rtmpRecord: false,
      splitMode: Netcall.LAYOUT_SPLITLATTICETILE
    }
    netcall
      .call({
        type: Netcall.NETCALL_TYPE_VIDEO,
        account: account,
        pushConfig: pushConfig,
        sessionConfig: sessionConfig
      })
      .then(function (obj) {
        // 成功发起呼叫
        console.log('call success', obj)
        // 连接媒体网关
        netcall.startRtc().then(function () {
          // 开启麦克风
          return netcall.startDevice({
            type: Netcall.DEVICE_TYPE_AUDIO_IN
          }).catch(function (err) {
            console.log('启动麦克风失败')
            console.error(err)
          })
        })
          .then(function () {
            // 设置采集音量
            netcall.setCaptureVolume(255)
            /* 开启摄像头
             return netcall.startDevice({
                 type: Netcall.DEVICE_TYPE_VIDEO
             })
                 .catch(function (err) {
                     console.log('启动摄像头失败')
                     console.error(err)
                 }) */
          })
          /* .then(function () {
              //预览本地画面
              netcall.startLocalStream(
                  document.getElementById('localContainer')
              )

              // 设置本地预览画面大小
              netcall.setVideoViewSize({
                  width: 400,
                  height: 300,
                  cut: true
              })
          }) */
          .catch(function (err) {
            console.log('发生错误')
            console.log(err)
            // this.$store.dispatch('hangUp')
          })
      })
      .catch(function (err) {
        // 被叫不在线
        if (err.event.code === 11001) {
          console.log('callee offline', err)
        }
      })
    // 在回调里监听对方加入通话，并显示对方的视频画面
    netcall.on('remoteTrack', obj => {
      console.log('用户加入....', obj)
      // 在此处修改加入通话的对象属性
      // this.$store.dispatch('setVideoObjOnlineAct', true)
      // this.$store.dispatch('setVideoObjAccountAct', obj.account)

      // this.$store.state.tempSession.tempObj.to = obj.account

      // this.$store.dispatch('setIsCalledAct', true)
      // if (document.getElementById('playAudio').loop) {
      //   document.getElementById('playAudio').loop = false
      // }
      // 播放对方声音
      netcall.startDevice({
        type: Netcall.DEVICE_TYPE_AUDIO_OUT_CHAT
      }).catch(function (err) {
        console.log('播放对方的声音失败')
        console.error(err)
      })
      // 预览对方视频画面
      netcall.startRemoteStream({
        account: obj.account,
        node: document.getElementById('remoteContainer')
      })
      // 设置对方预览画面大小
      netcall.setVideoViewRemoteSize({
        account: obj.account,
        width: 500,
        height: 500,
        cut: true
      })
    })
    // 设置超时计时器
    // eslint-disable-next-line no-unused-vars
    // let callTimer = setTimeout(function () {
    //   if (!netcall.callAccepted) {
    //     console.log('超时未接听, hangup')
    //     this.resetWhenHangup(netcall, root)
    //   }
    // }, 1000 * 30)
  },
  // 挂断清理
  resetWhenHangup (root) {
    const netcall = root.$store.getters.netcallInstanceGetter
    netcall.hangup()
    // beCalledInfo = null
    // beCalling = false
    this.clearCallTimer()
    netcall.stopLocalStream()
    netcall.stopRemoteStream()
    netcall.stopDeviceAudioIn()
    netcall.stopDeviceAudioOutLocal()
    netcall.stopDeviceAudioOutChat()
    netcall.stopDeviceVideo()
  },
  // 清除计时器
  clearCallTimer () {},
  // 设置自己画面的尺寸
  setVideoViewSize (width, height, root) {
    const netcall = root.$store.getters.netcallInstanceGetter
    netcall.setVideoViewSize({
      width: width,
      height: height,
      cut: true
    })
  },
  // 设置对方画面尺寸
  setVideoViewRemoteSize (width, height, root) {
    const netcall = root.$store.getters.netcallInstanceGetter
    const account = 'simple4'
    netcall.setVideoViewRemoteSize({
      account: account,
      width: width,
      height: height,
      cut: true
    })
  },
  // 启动麦克风设备
  startDeviceAudioIn (root) {
    const netcall = root.$store.getters.netcallInstanceGetter
    const Netcall = root.$store.getters.NetCallGetter
    netcall.startDevice({
      type: Netcall.DEVICE_TYPE_AUDIO_IN
      // device  // 不传device参数默认启动第一个此类设备
    }).then(() => {
      // 通知对方自己开启了麦克风
      netcall.control({
        command: Netcall.NETCALL_CONTROL_COMMAND_NOTIFY_AUDIO_ON
      })
      console.log('启动麦克风成功')
    }).catch(() => {
      console.log('启动麦克风失败')
    })
  },
  // 停止麦克风设备
  stopDeviceAudioIn (root) {
    const netcall = root.$store.getters.netcallInstanceGetter
    const Netcall = root.$store.getters.NetCallGetter
    netcall.stopDevice(Netcall.DEVICE_TYPE_AUDIO_IN).then(() => {
      // 通知对方自己关闭了麦克风
      netcall.control({
        command: Netcall.NETCALL_CONTROL_COMMAND_NOTIFY_AUDIO_OFF
      })
      console.log('关闭麦克风成功')
    })
  },
  // 启动播放自己声音的设备
  startDeviceAudioOutLocal (root) {
    const netcall = root.$store.getters.netcallInstanceGetter
    const Netcall = root.$store.getters.NetCallGetter
    netcall.startDevice({
      type: Netcall.DEVICE_TYPE_AUDIO_OUT_LOCAL
      // device
    }).catch(() => {
      console.log('播放自己的声音失败')
    })
  },
  // 停止播放自己声音的设备
  stopDeviceAudioOutLocal (root) {
    const netcall = root.$store.getters.netcallInstanceGetter
    const Netcall = root.$store.getters.NetCallGetter
    netcall.stopDevice(Netcall.DEVICE_TYPE_AUDIO_OUT_LOCAL)
  },
  // 启动播放对方声音的设备
  startDeviceAudioOutChat (root) {
    const netcall = root.$store.getters.netcallInstanceGetter
    const Netcall = root.$store.getters.NetCallGetter
    netcall.startDevice({
      type: Netcall.DEVICE_TYPE_AUDIO_OUT_CHAT
      // device
    }).catch(() => {
      console.log('播放对方的声音失败')
    })
  },
  // 停止播放对方声音的设备
  stopDeviceAudioOutChat (root) {
    const netcall = root.$store.getters.netcallInstanceGetter
    const Netcall = root.$store.getters.NetCallGetter
    netcall.stopDevice(Netcall.DEVICE_TYPE_AUDIO_OUT_CHAT)
  },
  // 启动摄像头设备
  startDeviceVideo (width, height, root) {
    const netcall = root.$store.getters.netcallInstanceGetter
    const Netcall = root.$store.getters.NetCallGetter
    netcall.startDevice({
      type: Netcall.DEVICE_TYPE_VIDEO,
      width: width,
      height: height
    }).then(() => {
      // 通知对方自己开启了摄像头
      netcall.control({
        command: Netcall.NETCALL_CONTROL_COMMAND_NOTIFY_VIDEO_ON
      })
      console.log('开启摄像头成功')
    }).catch(() => {
      // 通知对方自己的摄像头不可用
      netcall.control({
        command: Netcall.NETCALL_CONTROL_COMMAND_SELF_CAMERA_INVALID
      })
      console.log('启动摄像头失败')
    })
  },
  // 停止摄像头设备
  stopDeviceVideo (root) {
    const netcall = root.$store.getters.netcallInstanceGetter
    const Netcall = root.$store.getters.NetCallGetter
    netcall.stopDevice(Netcall.DEVICE_TYPE_VIDEO).then(() => {
      // 通知对方自己关闭了摄像头
      netcall.control({
        command: Netcall.NETCALL_CONTROL_COMMAND_NOTIFY_VIDEO_OFF
      })
      console.log('关闭摄像头成功')
    })
  },
  // 开启本地视频流
  startLocalStream (root) {
    const netcall = root.$store.getters.netcallInstanceGetter
    netcall.startLocalStream()
    console.log('开启本地视频流')
  },
  // 停止本地视频流
  stopLocalStream (root) {
    const netcall = root.$store.getters.netcallInstanceGetter
    netcall.stopLocalStream()
    console.log('关闭本地视频流')
  },
  // 开启远程视频流
  startRemoteStream (root) {
    const netcall = root.$store.getters.netcallInstanceGetter
    const account = 'simple4'
    netcall.startRemoteStream({
      account: account,
      node: document.getElementById('remoteContainer')
    })
  },
  // 关闭远程视频流
  stopRemoteStream (root) {
    const netcall = root.$store.getters.netcallInstanceGetter
    netcall.stopRemoteStream()
  },
  // 预览本地摄像头  必须先打开本地摄像头
  startLocalStreamView (container, root) {
    const netcall = root.$store.getters.netcallInstanceGetter
    netcall.startLocalStream(container)
    console.log('开启本地视频流本地预览....')
  }
}

export default NetCallExec
