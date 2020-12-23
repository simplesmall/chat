<template>
    <div class="outerWrapper">
        <el-row>
          <el-button @click="startDeviceAudioIn">启动麦克风设备</el-button>
          <el-button @click="stopDeviceAudioIn">停止麦克风设备</el-button>
          <el-button @click="startDeviceVideo">启动摄像头设备</el-button>
          <el-button @click="stopDeviceVideo">停止摄像头设备</el-button>
          <el-button @click="startLocalStream">开启本地视频流</el-button>
          <el-button @click="stopLocalStream">关闭本地视频流</el-button>
          <el-button @click="startLocalStreamView">预览本地摄像头</el-button>
          <el-button @click="setVideoViewSize">setVideoViewSize</el-button>
        </el-row>
      <el-row style="margin-top: 10px">
        <el-button @click="startRemoteStream">开启远端视频流</el-button>
        <el-button @click="call">发起视频</el-button>
        <el-button @click="resetWhenHangup">挂断清理</el-button>
        <el-button @click="showNetcall">输出netcall实例</el-button>
      </el-row>
      <div class="videoLine">
        <div id="localStreamView" style="width: 400px;height: 400px;background:pink;"></div>
        <div id="remoteContainer" style="width: 400px;height: 400px;background:pink;"></div>
      </div>
      <el-input
        style="margin-top: 30px"
        :rows="18"
        type="textarea"
        placeholder="Netcall 连接测试显示区"
        v-model="netcallContent"
      >

      </el-input>
    </div>
</template>

<script>
import MainLogin from '../../Kernel/MainLogin'
import NetCallExec from '../../Execute/netCall/NetCallExec'

export default {
  name: 'NetcallDemo',
  data () {
    return {
      netcallContent: null
    }
  },
  created () {
    this.checkNetcall()
  },
  methods: {
    showNetcall () {
      console.log(this.$store.state.netcallInstance)
    },
    // 挂断清理
    resetWhenHangup () {
      NetCallExec.resetWhenHangup(this)
    },
    // 开启视频
    call () {
      NetCallExec.call('simple1', this)
    },
    // 开启远端视频流
    startRemoteStream () {
      NetCallExec.startRemoteStream(this)
      NetCallExec.setVideoViewRemoteSize(600, 600, this)
    },
    // 设置本地预览框大小
    setVideoViewSize () {
      NetCallExec.setVideoViewSize(300, 300, this)
    },
    // 预览本地摄像头
    startLocalStreamView () {
      NetCallExec.startLocalStreamView(document.getElementById('localStreamView'), this)
      NetCallExec.setVideoViewSize(600, 600, this)
    },
    // 开启本地视频流
    startLocalStream () {
      NetCallExec.startLocalStream(this)
      NetCallExec.setVideoViewSize(400, 400, this)
    },
    // 关闭本地视频流
    stopLocalStream () {
      NetCallExec.stopLocalStream(this)
    },
    // 停止摄像头设备
    stopDeviceVideo () {
      NetCallExec.stopDeviceVideo(this)
    },
    // 启动摄像头设备
    startDeviceVideo () {
      NetCallExec.startDeviceVideo(400, 400, this)
    },
    // 启动麦克风设备
    startDeviceAudioIn () {
      NetCallExec.startDeviceAudioIn(this)
    },
    // 关闭麦克风设备
    stopDeviceAudioIn () {
      NetCallExec.stopDeviceAudioIn(this)
    },
    checkNetcall () {
      MainLogin.checkNetcall(this)
    }
  }
}
</script>

<style scoped>
  .videoLine{
    display: flex;
    flex-direction: row;
    margin-top: 5px;
    justify-content: space-evenly;
  }
.outerWrapper{
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  overflow-y: scroll;
}
</style>
