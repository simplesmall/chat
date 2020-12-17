<template>
  <div>
    <el-button v-show="show" @click="showNim">默认按钮</el-button>
    <el-button type="primary" @click="reverseShowBtn">登录按钮</el-button>
    <el-button type="primary" @click="destoryBtn">清除按钮</el-button>
    <el-button type="primary" @click="connectBtn">重新连接</el-button>
    <el-button type="primary" @click="disConnectBtn(nim)" v-show="isLogin">退出按钮</el-button>
  </div>
</template>

<script>
  import Instance from '../../Kernel/Instance'
  import MainLogin from '../../Kernel/MainLogin'

  export default {
    name: 'Init',
    data () {
      return {
        show: false,
        localNim: null,
        isLogin: false,
      }
    },
    created () {
      this.initNim()
    },
    methods: {
      // 针对非 destory 的断开连接可以选择再次连接
      connectBtn () {
        // 重新连接
        this.localNim.connect()
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
        console.log(nim)
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
        console.log(this.localNim)
      },
      // 登录创建实例方法
      getInstance (NIM, root) {
        this.localNim = Instance.getInstance(NIM, root)
        this.$store.dispatch('setNimInstanceAct', this.localNim)
        console.log('===================>this.$store.getters.nimInstanceGetter')
        console.log(this.$store.getters.nimInstanceGetter)
        this.isLogin = true
      },
      // 登录创建实例执行
      reverseShowBtn () {
        this.show = !this.show
        this.initNim()
      },
      // 测试用显示SDK信息
      // 初始化Nim
      initNim () {
        this.localNim = MainLogin.checkNim(this)
      }
    }
  }
</script>

<style scoped>
</style>
