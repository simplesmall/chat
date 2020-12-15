// 好友关系
const friendRelationHandle = {
  onSyncFriendAction(obj) {
    console.log('onSyncFriendAction........')
    console.log(obj)
  },
  onFriends(obj) {
    console.log('onFriends........')
    console.log(obj)
  },
}
export default friendRelationHandle
