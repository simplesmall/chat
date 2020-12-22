<template>
  <div style="margin: 50px">
    <el-row>
      <router-link to="/">
        <el-button>初始化</el-button>
      </router-link>
      <router-link to="/friends">
        <el-button>好友关系</el-button>
      </router-link>
      <router-link to="/history">
        <el-button>历史记录</el-button>
      </router-link>
      <router-link to="/msg">
        <el-button>消息收发</el-button>
      </router-link>
      <router-link to="/session">
        <el-button>最近会话</el-button>
      </router-link>
      <router-link to="/chatroom">
        <el-button>聊天室</el-button>
      </router-link>
      <router-link to="/team">
        <el-button>群组功能</el-button>
      </router-link>
      <router-link to="/netcall">
        <el-button>netcall</el-button>
      </router-link>
      <!--<router-link to="/chat">
        <el-button>测试页面</el-button>
      </router-link>-->
    </el-row>
  </div>
</template>

<script>
import NimTest from '../packageTest/Init'

export default {
  name: 'HeaderTabs',
  components: {
    NimTest
  }
}
</script>

<style scoped>

</style>
