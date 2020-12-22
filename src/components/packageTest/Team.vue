<template>
  <div class="teamWrapper">
    <input type="file" name="打开文件" id="teamFile" style="display: none" @change="sendFileVtn">
    <el-row>
      <el-button @click="sendTeamMsg">发送群文字消息</el-button>
      <el-button @click="sendGeoTeam">发送群Geo消息</el-button>
      <el-button @click="sendFileClick">发送群文件消息</el-button>
      <el-button @click="sendTeamMsg">发送群文字消息</el-button>
    </el-row>
    <el-row style="margin-top: 30px">
      <el-button @click="createNormalTeam">创建普通群聊</el-button>
      <el-button @click="createAdvancedTeam">创建高级群聊</el-button>
      <el-button @click="getTeams">获取群列表</el-button>
      <el-button @click="getTeam">获取群</el-button>
      <el-button @click="getTeamMembers">获取群成员</el-button>
      <el-button @click="getTeamMemberByTeamIdAndAccount">通过群ID及成员账号获取群成员信息</el-button>
    </el-row>
    <el-input
      :rows="15"
      type="textarea"
      placeholder="teams"
      v-model="teams"
      style="margin-top: 30px"
    >
    </el-input>
    <el-input
      :rows="15"
      type="textarea"
      placeholder="teams"
      v-model="msgs"
      style="margin-top: 30px"
    >
    </el-input>
    <el-input
      :rows="15"
      type="textarea"
      placeholder="teams"
      v-model="historyMsg"
      style="margin-top: 30px"
    >
    </el-input>
  </div>
</template>

<script>
import MainLogin from '../../Kernel/MainLogin'
import TeamExec from '../../Execute/team/TeamExec'
import TeamMsgExec from '../../Execute/team/TeamMsgExec'

export default {
  name: 'Team',
  data () {
    return {
      localNim: null,
      teams: null,
      msgs: null,
      historyMsg: null
    }
  },
  created () {
    this.initNim()
  },
  methods: {
    // 打开选择文件按钮
    sendFileClick () {
      document.getElementById('teamFile').click()
    },
    // 群发送文件
    sendFileVtn () {
      if (document.getElementById('teamFile').value === null || document.getElementById('teamFile').value === '') {
        this.$message({
          message: '取消发送',
          type: 'warning'
        })
      } else {
        console.log(document.getElementById('teamFile').value)
        TeamMsgExec.sendFileTeam(this.localNim, '2936534891', document.getElementById('teamFile'), this)
      }
    },
    // 通过群ID及成员账号获取群成员信息
    getTeamMemberByTeamIdAndAccount () {
      TeamExec.getTeamMemberByTeamIdAndAccount(this.localNim, '2936534891', 'simple4', this)
    },
    // 获取群成员
    getTeamMembers () {
      TeamExec.getTeamMembers(this.localNim, '2936534891', this)
    },
    // 获取群列表
    getTeam () {
      TeamExec.getTeam(this.localNim, '2835316201')
    },
    // 获取群列表
    getTeams () {
      TeamExec.getTeams(this.localNim, this)
    },
    // 发送消息
    sendTeamMsg () {
      var textMsgTest = '大家好,我是浪里小白龙'
      TeamMsgExec.sendTextMsgTeam(this.localNim, '2936531934', textMsgTest, this)
      TeamExec.getTeamHistoryMsgs(this.localNim, '2936531934', this)
    },
    // 发送Geo
    sendGeoTeam () {
      TeamMsgExec.sendGeoTeam(this.localNim, '2936531934', this)
    },
    // 创建普通群聊
    createNormalTeam () {
      var accounts = ['jiandan', 'simple4']
      TeamExec.createNormalTeam(this.localNim, accounts, this)
    },
    // 创建高级群聊
    createAdvancedTeam () {
      var accounts = ['jiandan', 'simple4']
      TeamExec.createAdvancedTeam(this.localNim, accounts, this)
    },
    // 初始化nim
    initNim () {
      this.localNim = MainLogin.checkNim(this)
    }
  },
  watch: {
    '$store.state.data.teams': function (val) {
      this.teams = JSON.stringify(val)
    },
    '$store.state.data.sessions': function (val) {
      this.msgs = JSON.stringify(val)
      // team-2936531934
    },
    '$store.state.data.historyMsgs': function (val) {
      this.historyMsg = val
    }
  }
}
</script>

<style scoped>
.teamWrapper{
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
</style>
