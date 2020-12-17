import friendRelationHandle from '../../Handle/friendRelation/friendRelationHandle'

const FriendExec = {
  // 删除好友
  deleteFriend (nim,account,that) {
    nim.deleteFriend({
      account: account,
      delAlias: true,
      done: (error, obj) => {
        console.log(error)
        console.log(obj)
        console.log('删除好友' + (!error ? '成功' : '失败'))
        if (!error) {
          friendRelationHandle.onDeleteFriend(account,that)
        }
      }
    })
  },
  // 申请加为好友
  applyFriend (nim,account,that) {
    nim.applyFriend({
      account: account,
      ps: 'ps',
      done: (error, obj) => {
        console.log('申请加为好友' + (!error ? '成功' : '失败'))
        this.Msg = JSON.stringify(obj)
        if (!error){
          friendRelationHandle.onAddFriend(obj, that)
        }
        console.log(obj)
      }
    })
  },
  // 直接添加好友
  addFriend (nim,account,that) {
    nim.addFriend({
      account: account,
      ps: 'ps',
      done: (error, obj) => {
        console.log(obj)
        console.log('直接加为好友' + (!error ? '成功' : '失败'))
        if (!error) {
          this.Msg = JSON.stringify(obj)
          friendRelationHandle.onAddFriend(obj.friend,that);
        }
      }
    })
  },
  // 通过好友申请
  passFriendApply(nim,account){
    nim.passFriendApply({
      // idServer: sysMsg.idServer,
      account: account,
      ps: 'ps',
      done: (error, obj)=> {
      console.log(error);
      console.log(obj);
      console.log('通过好友申请' + (!error?'成功':'失败'));
      if (!error) {
        friendRelationHandle.onAddFriend(obj.friend,this);
      }
    }
    });
  },
  // 获取好友列表
  getFriends (nim,that) {
    nim.getFriends({
      done: (error, friends) => {
        console.log('获取好友列表' + (!error ? '成功' : '失败'), error, friends)
        if (!error) {
          this.Msg = JSON.stringify(friends)
          friendRelationHandle.onFriends(friends,that)
        }
      }
    })
  },
  // 拒绝好友请求
  rejectFriendApply(nim,account,that){
    nim.rejectFriendApply({
      // idServer: sysMsg.idServer,
      account: account,
      ps: 'ps',
      done: (error, obj)=>{
      console.log('拒绝好友申请' + (!error?'成功':'失败'));
      // that 作为传值发送 that.$message 往外面传值显示提醒
      console.log(obj);
    }
    });
  },
  // 更新好友  更新指定账号的好友信息
  updateFriend(nim,account,that){
    nim.updateFriend({
      account: account,
      alias: 'alias',
      custom: 'custom',
      done: (error, obj) =>{
      console.log(obj);
      console.log('更新好友' + (!error?'成功':'失败'));
      if (!error) {
        friendRelationHandle.onUpdateFriend(obj,that);
      }
    }
    });
  }
}

export default FriendExec
