<template>
  <div>
    <el-button v-show="show" @click="showNim">默认按钮</el-button>
    <el-button type="primary" @click="reverseShowBtn">登录按钮</el-button>
    <el-button type="primary" @click="disConnectBtn(nim)" v-show="isLogin">退出按钮</el-button>
  </div>
</template>

<script>
  import Instance from "../Kernel/Instance";

  export default {
    name: 'NimTest',
    data() {
      return {
        show: false,
        nim: null,
        isLogin: false
      }
    },
    created() {
      this.showSDK()
    },
    methods: {
      showNim(){
        console.log(this.nim)
      },
      getInstance(NIM){
        this.nim = Instance.getInstance(NIM)
        this.isLogin = true
      },

      disConnectBtn(nim) {
        console.log(nim)
        if (nim === null) {
          this.$message('没有登录,无法退出..')
        } else {
          nim.disconnect()
          this.isLogin = false
        }
        console.log('断开连接.....')
      },
      reverseShowBtn() {
        this.show = !this.show
        this.getInstance(this.$store.getters.NIMGetter)
      },
      showSDK() {
        console.log(this.nim === null)
        console.log('this.$store.getters.NIMGetter')
        console.log('this.$store.getters.NetCallGetter')
        console.log('this.$store.getters.MD5Getter')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
