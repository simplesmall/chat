<template>
  <div>
    <el-row>
      <el-button @click="getFriends">获取好友列表</el-button>
      <el-button @click="addFriend('simple1')">直接加为好友</el-button>
      <el-button @click="applyFriend('simple1')">applyFriend</el-button>
      <el-button @click="deleteFriend('simple1')">deleteFriend</el-button>
      <el-button @click="updateFriend('simple1')">updateFriend</el-button>
      <el-button @click="dynamicAdd('Bill','HUahuahua')">动态添加属性方法</el-button>
      <el-button @click="getTestObj">Getter取值</el-button>
      <el-button></el-button>
      <el-button></el-button>
    </el-row>
    <el-input
      type="textarea"
      :rows="8"
      placeholder="请输入内容"
      v-model="Msg">
    </el-input>
    <el-input
      type="textarea"
      :rows="8"
      placeholder="JSON"
      v-model="JsonContent">
    </el-input>
  </div>
</template>

<script>
  import MainLogin from '../../Kernel/MainLogin'
  import friendRelationHandle from '../../Handle/friendRelation/friendRelationHandle'
  import FriendExec from '../../Execute/friendExec/FriendExec'

  export default {
    name: 'Friends',
    data () {
      return {
        localNim: null,
        Msg: null,
        TestObj: {},
        JsonContent: null
      }
    },
    created () {
      this.initNim()
    },
    methods: {
      // 初始化Nim
      initNim () {
        this.localNim = MainLogin.checkNim(this)
      },
      getTestObj () {
        console.log(this.$store.getters.TestObjGetter)
        this.JsonContent = JSON.stringify(this.$store.getters.TestObjGetter)
      },
      dynamicAdd (key, val) {
        console.log('Before add ...........', JSON.stringify(this.TestObj))
        let tempKey = key
        let tempVal = val
        let tempNam = 'MyArray'
        let tempArray = ['First', 'Apple', 123]
        this.TestObj[tempKey] = tempVal
        this.TestObj[tempNam] = tempArray
        this.Msg = JSON.stringify(this.TestObj)
        console.log('After add ...........', JSON.stringify(this.TestObj))

        let obj = {
          'key': '123',
          'val': tempArray
        }
        let obj1 = {
          'key': '222',
          'val': tempNam
        }
        let arr = []
        arr.push(obj, obj1)
        this.$store.dispatch('setTestObjAct', arr)
      },
      // 更新好友  更新指定账号的好友信息
      updateFriend(account){
        FriendExec.updateFriend(this.localNim,account,this)
      },
      // 删除好友
      deleteFriend (account) {
        FriendExec.deleteFriend(this.localNim,account,this)
        /*this.localNim.deleteFriend({
          account: account,
          delAlias: true,
          done: (error, obj) => {
            console.log(error)
            console.log(obj)
            console.log('删除好友' + (!error ? '成功' : '失败'))
            if (!error) {
              this.Msg = JSON.stringify(obj)
              // onDeleteFriend(obj.account);
            }
          }
        })*/
      },
      // 申请加为好友
      applyFriend (account) {
        FriendExec.applyFriend(this.localNim,account,this)
        /*this.localNim.applyFriend({
          account: account,
          ps: 'ps',
          done: (error, obj) => {
            console.log('申请加为好友' + (!error ? '成功' : '失败'))
            this.Msg = JSON.stringify(obj)
            if (!error){
              friendRelationHandle.onAddFriend(obj, this)
            }
            console.log(obj)
          }
        })*/
      },
      // 直接添加好友
      addFriend (account) {
        FriendExec.addFriend(this.localNim,account,this)
      },
      // 获取好友列表
      getFriends () {
        FriendExec.getFriends(this.localNim,this)
      },
    }
  }
</script>

<style scoped>

</style>
