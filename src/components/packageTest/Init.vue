<template>
  <div>
    <el-button v-show="show" @click="showNim">showNim</el-button>
    <el-button type="primary" @click="reverseShowBtn">登录按钮</el-button>
    <el-button type="primary" @click="destoryBtn">清除登录</el-button>
    <el-button type="primary" @click="connectBtn">重新连接</el-button>
    <el-button type="primary" @click="disConnectBtn(localNim)" v-show="isLogin">退出连接</el-button>
    <el-row style="margin-top: 30px">
      <el-button v-show="isLogin" type="success">ON</el-button>
      <el-button v-show="!isLogin" type="danger">OFF</el-button>
      <el-input
        v-show="isLogin && nimShow"
        type="textarea"
        :rows="6"
        placeholder="请输入内容"
        v-model="content">
      </el-input>
    </el-row>
    <el-row
    style="margin-top: 30px"
    >
      <el-button @click="changeMyInfo">修改个人信息</el-button>
      <el-button @click="showMyInfo">显示个人信息</el-button>
      <el-button @click="showUsers">显示好友信息</el-button>
      <el-button @click="getUser">获取用户资料</el-button>
      <el-button @click="getUsers">获取用户组资料</el-button>
    </el-row>
    <el-input
    type="textarea"
    style="margin-top: 20px"
    :rows="15"
    v-model="MyInfo"
    placeholder="显示好友和个人信息"
    >
    </el-input>
  </div>
</template>

<script>
import MainLogin from '../../Kernel/MainLogin'
import UserProfileExec from '../../Execute/userProfile/UserProfileExec'

export default {
  name: 'Init',
  data () {
    return {
      show: false,
      localNim: null,
      isLogin: false,
      content: null,
      nimShow: false,
      MyInfo: null
    }
  },
  created () {
    this.initNim()
  },
  methods: {
    // 获取用户资料
    getUsers () {
      let accounts = ['simple1', 'simple2']
      UserProfileExec.getUsers(this.localNim, accounts, this)
      this.MyInfo = JSON.stringify(this.$store.getters.usersGetter)
    },
    // 获取用户资料
    getUser () {
      UserProfileExec.getUser(this.localNim, 'simple1', this)
      // this.MyInfo = JSON.stringify(this.$store.getters.myInfoGetter)
    },
    // 修改个人信息
    changeMyInfo () {
      var newObj = {
        nick: 'simple4',
        avatar: 'http://newAvatar' + new Date(),
        sign: '这是我此刻的最新签名' + new Date(),
        gender: 'male',
        email: 'new@email.com',
        birth: '1900-01-01',
        tel: '13390900909',
        custom: {type: 'newCustom', value: 'new'}
      }
      UserProfileExec.updateMyInfo(this.localNim, newObj, this)
      this.MyInfo = JSON.stringify(this.$store.getters.myInfoGetter)
    },
    // 显示好友信息
    showUsers () {
      this.MyInfo = JSON.stringify(this.$store.getters.usersGetter)
    },
    // 显示自己信息
    showMyInfo () {
      this.MyInfo = JSON.stringify(this.$store.getters.myInfoGetter)
    },
    // 针对非 destory 的断开连接可以选择再次连接
    connectBtn () {
      // 重新连接
      this.localNim.connect()
      this.isLogin = true
    },
    // 清除登录实例,单例模式所以完全清除内存
    destoryBtn () {
      // 主动清除单例实例
      this.localNim.destroy({
        done: (err) => {
          console.log(err)
          console.log(this.$store.getters.nimInstanceGetter)
          console.log('实例已被完全清除')
        }
      })
    },
    // 断开可以重连,清除则不可以
    disConnectBtn (nim) {
      if (nim === null) {
        this.$message('没有登录,无法退出..')
      } else {
        nim.disconnect()
        this.isLogin = false
      }
      console.log('断开连接.....')
    },
    // 测试显示实例化 nim
    showNim () {
      this.nimShow = true
      this.content = JSON.stringify(this.localNim.name)
      console.log(this.localNim)
    },
    // 登录创建实例执行
    reverseShowBtn () {
      this.show = !this.show
      this.initNim()
    },
    // 初始化Nim
    initNim () {
      this.localNim = MainLogin.checkNim(this)
      this.isLogin = true
      console.log('===================>this.$store.getters.nimInstanceGetter')
      console.log(this.$store.getters.nimInstanceGetter)
    }
  }
}
</script>

<style scoped>
</style>
