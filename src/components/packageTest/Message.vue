<template>
  <div>
    <el-row>
      <el-button @click="sendText('jiandan','你猜猜')">发送文本消息</el-button>
      <el-button @click="openFile">文件预览</el-button>
      <el-button @click="sendFileClick">发送文件</el-button>
      <el-button @click="sendGeo('simple1')">发送位置</el-button>
      <el-button @click="sendGeo('simple1')">发送sendTipMsg</el-button>
      <el-button @click="sendGeo('jiandan')">发送sendCustomMsg</el-button>
      <el-button @click="forwardMsg('simple1')">消息转发forwardMsg</el-button>
      <el-button @click="deleteMsg()">撤回消息</el-button>
    </el-row>
    <input type="file" name="打开文件" id="file" style="display: none" @change="previewFile('jiandan')">
    <input type="file" name="发送文件" id="sendFile" style="display: none" @change="sendFile('jiandan')">
    <el-input
    style="margin: 40px"
    :rows="2"
    placeholder="输入要发送的文字消息"
    v-model="textMsg"
    >
    </el-input>
    <el-row style="margin-top: 30px;">
      <el-input
      :rows="18"
      type="textarea"
      placeholder="messages"
      v-model="messages"
      >
      </el-input>
    </el-row>
  </div>
</template>

<script>
import MainLogin from '../../Kernel/MainLogin'
import MsgExec from '../../Execute/msg/MsgExec'

export default {
  name: 'Message',
  data () {
    return {
      localNIm: null,
      textMsg: null,
      messages: null
    }
  },
  created () {
    this.initNim()
  },
  methods: {
    // 撤回消息
    deleteMsg () {
      var msg = {
        'scene': 'p2p',
        'from': 'simple4',
        'fromNick': '这是昵称',
        'fromClientType': 'Web',
        'fromDeviceId': 'f483fd86071f962ed80ce011418fa8a5',
        'to': 'jiandan',
        'time': 1608546570125,
        'type': 'geo',
        'text': '',
        'isHistoryable': true,
        'isRoamingable': true,
        'isSyncable': true,
        'cc': true,
        'isPushable': true,
        'isOfflinable': true,
        'isUnreadable': true,
        'isReplyMsg': true,
        'needPushNick': true,
        'needMsgReceipt': false,
        'isLocal': false,
        'resend': false,
        'idClient': 'f8a0067f7fca914300a2a70befbdc3c5',
        'idServer': '502245561423',
        'userUpdateTime': 1599558984467,
        'status': 'success',
        'geo': {
          'lng': 116.3833,
          'lat': 39.9167,
          'title': 'Beijing'
        },
        'target': 'jiandan',
        'sessionId': 'p2p-jiandan',
        'flow': 'out'
      }
      MsgExec.deleteMsg(this.localNIm, msg)
    },
    // 转发消息
    forwardMsg (account) {
      var msg = {
        'scene': 'p2p',
        'from': 'simple4',
        'fromNick': '这是昵称',
        'fromClientType': 'Web',
        'fromDeviceId': 'f483fd86071f962ed80ce011418fa8a5',
        'to': 'jiandan',
        'time': 1608546570125,
        'type': 'geo',
        'text': '',
        'isHistoryable': true,
        'isRoamingable': true,
        'isSyncable': true,
        'cc': true,
        'isPushable': true,
        'isOfflinable': true,
        'isUnreadable': true,
        'isReplyMsg': true,
        'needPushNick': true,
        'needMsgReceipt': false,
        'isLocal': false,
        'resend': false,
        'idClient': 'f8a0067f7fca914300a2a70befbdc3c5',
        'idServer': '502245561423',
        'userUpdateTime': 1599558984467,
        'status': 'success',
        'geo': {
          'lng': 116.3833,
          'lat': 39.9167,
          'title': 'Beijing'
        },
        'target': 'jiandan',
        'sessionId': 'p2p-jiandan',
        'flow': 'out'
      }

      MsgExec.forwardMsg(this.localNIm, account, msg, this)
    },
    // 发送自定义消息
    sendCustomMsg (account) {
      var content = {
        'First': '11111',
        'ArrsyTest': [1, 2, 3, 4]
      }
      MsgExec.sendCustomMsg(this.localNIm, account, JSON.stringify(content), this)
    },
    // 发送提示消息
    sendTipMsg (account) {
      MsgExec.sendTipMsg(this.localNIm, account, '你好,外星人', this)
    },
    // 发送位置
    sendGeo (account) {
      MsgExec.sendGeo(this.localNIm, account, this)
    },
    sendFileClick () {
      document.getElementById('sendFile').click()
    },
    // 预览文件
    sendFile (account) {
      if (document.getElementById('sendFile').value === null || document.getElementById('sendFile').value === '') {
        this.$message({
          message: '取消发送',
          type: 'warning'
        })
      } else {
        console.log(document.getElementById('sendFile').value)
        MsgExec.sendFile(this.localNIm, account, document.getElementById('sendFile'), this)
      }
    },
    // 打开本地文件
    openFile () {
      document.getElementById('file').click()
    },
    // 预览文件
    previewFile (account) {
      if (document.getElementById('file').value === null || document.getElementById('file').value === '') {
        this.$message({
          message: '取消发送',
          type: 'warning'
        })
      } else {
        console.log(document.getElementById('file').value)
        MsgExec.previewFile(this.localNIm, account, document.getElementById('file'), this)
      }
    },
    // 发送文字消息
    sendText (account) {
      MsgExec.sendText(this.localNIm, account, JSON.stringify(this.textMsg), this)
      this.textMsg = null
    },
    // 初始化nim
    initNim () {
      this.localNIm = MainLogin.checkNim(this)
    }
  },
  watch: {
    '$store.state.data.sessions': function (val) {
      this.messages = JSON.stringify(val)
    }
  }
}
</script>

<style scoped>

</style>
