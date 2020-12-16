<template>
    <div>
      <el-row>
        <el-button @click="getFriends">获取好友列表</el-button>
        <el-button @click="addFriend('simple1')">直接加为好友</el-button>
        <el-button @click="applyFriend('simple1')">applyFriend</el-button>
        <el-button @click="deleteFriend('simple1')">deleteFriend</el-button>
        <el-button></el-button>
        <el-button></el-button>
      </el-row>
      <el-input
        type="textarea"
        :rows="8"
        placeholder="请输入内容"
        v-model="Msg">
      </el-input>
    </div>
</template>

<script>
  import MainLogin from '../../Kernel/MainLogin'

  export default {
    name: 'Friends',
    data(){
      return{
        localNim:null,
        Msg:null
      }
    },
    created () {
      this.initNim()
    },
    methods:{
      // 删除好友
      deleteFriend(account){
        this.localNim.deleteFriend({
          account: account,
          delAlias: true,
          done: (error, obj)=>{
          console.log(error);
          console.log(obj);
          console.log('删除好友' + (!error?'成功':'失败'));
          if (!error) {
            this.Msg = JSON.stringify(obj)
            // onDeleteFriend(obj.account);
          }
        }
        });
      },
      // 申请加为好友
      applyFriend(account){
        this.localNim.applyFriend({
          account: account,
          ps: 'ps',
          done: (error, obj)=>{
          console.log('申请加为好友' + (!error?'成功':'失败'));
          this.Msg = JSON.stringify(obj)
          console.log(obj);
        }
        });
      },
      // 直接添加好友
      addFriend(account){
        this.localNim.addFriend({
          account:account,
          ps:'ps',
          done:(error,obj)=>{
            console.log(obj);
            console.log('直接加为好友' + (!error?'成功':'失败'));
            if (!error) {
              this.Msg = JSON.stringify(obj)
            }
          }
        })
      },
      // 初始化Nim
      initNim(){
          this.localNim = MainLogin.checkNim(this)
      },
      // 获取好友列表
      getFriends(){
        this.localNim.getFriends({
          done: (error,friends)=>{
            console.log('获取好友列表' + (!error?'成功':'失败'), error, friends);
            if (!error) {
              this.Msg = JSON.stringify(friends)
            }
          }
        });
      },
    }
  }
</script>

<style scoped>

</style>
