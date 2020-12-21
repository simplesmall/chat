<template>
  <div>
    <el-row>
      <el-button @click="getLocalSessions">获取本地最近会话列表</el-button>
      <el-button @click="getLocalSession">获取指定会话列表</el-button>
    </el-row>
    <el-row style="margin-top: 30px">
      <el-input
      type="textarea"
      :rows="18"
      placeholder="SESSIONS"
      v-model="sessions"
      >

      </el-input>
    </el-row>
  </div>
</template>

<script>
import MainLogin from '../../Kernel/MainLogin'
import SessionExec from '../../Execute/session/SessionExec'

export default {
  name: 'Session',
  data () {
    return {
      localNim: null,
      sessions: null
    }
  },
  created () {
    this.initNim()
  },
  methods: {
    initNim () {
      this.localNim = MainLogin.checkNim(this)
    },
    getLocalSessions () {
      SessionExec.getLocalSessions(this.localNim, 'p2p-jiandan', this)
      console.log('==============11111111111111111')
      console.log(this.$store.state.data.sessions)
    },
    getLocalSession () {
      SessionExec.getLocalSession(this.localNim, 'p2p-jiandan', this)
      console.log('==============222222222222222222')
      console.log(this.$store.state.data.sessions)
    }
  },
  watch: {
    '$store.state.data.sessions': function (val) {
      this.sessions = JSON.stringify(val)
    }
  }
}
</script>

<style scoped>

</style>
