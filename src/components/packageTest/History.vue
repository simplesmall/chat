<template>
  <div>
    <el-row>
      <el-button @click="getLocalMsgByIdClient(connectId)">获取idClient本地历史记录</el-button>
      <el-button @click="getLocalMsgs(sessionId)">获取本地历史记录</el-button>
      <el-button @click="getHistoryMsgs(to)">获取云端历史记录</el-button>
    </el-row>
    <el-input
      type="textarea"
      :rows="8"
      placeholder="JSON"
      v-model="Msg">
    </el-input>
  </div>
</template>

<script>
  import MainLogin from '../../Kernel/MainLogin'
  import HistoryExec from '../../Execute/history/HistoryExec'

  export default {
    name: 'History',
    data(){
      return{
        localNim:null,
        connectId:'aff5c593-0b96-4456-abb0-3b9fe6977ad4',
        sessionId: 'p2p-simple1',
        to:'jiandan',
        Msg:null
      }
    },
    created () {
      this.initNim()
    },
    methods:{
      // 初始化Nim
      initNim () {
        this.localNim = MainLogin.checkNim(this)
      },
      // 获取 idClient 对应的本地消息
      getLocalMsgByIdClient(IdClient){
        HistoryExec.getLocalMsgByIdClient(this.localNim,IdClient)
      },
      //获取本地历史记录
      getLocalMsgs (sessionId){
        HistoryExec.getLocalMsgs(this.localNim,sessionId)
      },
      // 获取云端历史记录
      getHistoryMsgs (to){
        HistoryExec.getHistoryMsgs(this.localNim,to)
      }
    }
  }
</script>

<style scoped>

</style>
