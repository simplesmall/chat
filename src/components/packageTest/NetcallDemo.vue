<template>
    <div>
        <el-row>
          <el-button>连接测试</el-button>
          <el-button>连接测试</el-button>
          <el-button>连接测试</el-button>
          <el-button>连接测试</el-button>
          <el-button>连接测试</el-button>
        </el-row>
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
    checkNetcall () {
      MainLogin.checkNetcall(this)
      console.log(this.$store.getters.netcallInstanceGetter)
    }
  }
}
</script>

<style scoped>

</style>
