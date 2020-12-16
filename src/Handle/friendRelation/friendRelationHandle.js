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
    // data.friends = nim.mergeFriends(data.friends, obj);
    // data.friends = nim.cutFriends(data.friends, obj.invalid);
    this.refreshFriendsUI();
  },
  // ############   实际数据操作函数
  onAddFriend(friend,root) {
    // data.friends = nim.mergeFriends(data.friends, friend);
    this.refreshFriendsUI();
  },
  onUpdateFriend(friend,root) {
    // data.friends = nim.mergeFriends(data.friends, friend);
    this.refreshFriendsUI();
  },
  onDeleteFriend(account,root) {
    // data.friends = nim.cutFriendsByAccounts(data.friends, account);
    this.refreshFriendsUI();
  },
  refreshFriendsUI() {
      // 刷新界面
  }
}
export default friendRelationHandle
