// 好友关系
const friendRelationHandle = {
  // 同步好友
  onSyncFriendAction (obj,root) {
    console.log('onSyncFriendAction........')
    console.log(obj)
    switch (obj.type) {
      case 'addFriend':
        console.log('你在其它端直接加了一个好友' + obj.account + ', 附言' + obj.ps)
        this.onAddFriend(obj.friend,root)
        break
      case 'applyFriend':
        console.log('你在其它端申请加了一个好友' + obj.account + ', 附言' + obj.ps)
        break
      case 'passFriendApply':
        console.log('你在其它端通过了一个好友申请' + obj.account + ', 附言' + obj.ps)
        this.onAddFriend(obj.friend,root)
        break
      case 'rejectFriendApply':
        console.log('你在其它端拒绝了一个好友申请' + obj.account + ', 附言' + obj.ps)
        break
      case 'deleteFriend':
        console.log('你在其它端删了一个好友' + obj.account)
        this.onDeleteFriend(obj.account,root)
        break
      case 'updateFriend':
        console.log('你在其它端更新了一个好友', obj.friend)
        this.onUpdateFriend(obj.friend,root)
        break
    }
  },
  // 收到好友列表
  onFriends (obj,root) {
    console.log('onFriends........')
    console.log('收到好友列表', obj);
    root.$store.dispatch('LOGOUTACT','收到好友列表')
    let dataFriends = root.$store.getters.friendRelationGetter
    let friends = root.$store.getters.nimInstanceGetter.mergeFriends(dataFriends,obj)
    root.$store.dispatch('setFriendRelationAct',friends)
    let invalid = root.$store.getters.nimInstanceGetter.cutFriends(friends,obj.invalid)
    root.$store.dispatch('setFriendRelationAct',invalid)
    // data.friends = nim.mergeFriends(data.friends, obj);
    // data.friends = nim.cutFriends(data.friends, obj.invalid);
    console.log(JSON.stringify(friends))
    this.refreshFriendsUI();
  },
  // ############   实际数据操作函数
  // 添加好友
  onAddFriend(friend,root) {
    let dataFriends = root.$store.getters.friendRelationGetter
    let friends = root.$store.getters.nimInstanceGetter.mergeFriends(dataFriends,friend)
    root.$store.dispatch('setFriendRelationAct',friends)
    console.log(JSON.stringify(friends))
    // data.friends = nim.mergeFriends(data.friends, friend);
    root.$store.dispatch('LOGOUTACT','添加好友操作')
    this.refreshFriendsUI();
  },
  // 更新好友
  onUpdateFriend(friend,root) {
    let dataFriends = root.$store.getters.friendRelationGetter
    let friends = root.$store.getters.nimInstanceGetter.mergeFriends(dataFriends,friend)
    root.$store.dispatch('setFriendRelationAct',friends)
    console.log(JSON.stringify(friends))
    // data.friends = nim.mergeFriends(data.friends, friend);
    root.$store.dispatch('LOGOUTACT','更新好友操作')
    this.refreshFriendsUI();
  },
  // 删除好友
  onDeleteFriend(account,root) {
    let dataFriends = root.$store.getters.friendRelationGetter
    let friends = root.$store.getters.nimInstanceGetter.cutFriendsByAccounts(dataFriends,account)
    root.$store.dispatch('setFriendRelationAct',friends)
    console.log(JSON.stringify(friends))

    // data.friends = nim.cutFriendsByAccounts(data.friends, account);
    root.$store.dispatch('LOGOUTACT','删除好友操作')
    this.refreshFriendsUI();
  },
  refreshFriendsUI() {
      // 刷新界面
  }
}
export default friendRelationHandle
