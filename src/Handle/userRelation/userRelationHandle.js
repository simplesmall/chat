// 用户关系
const userRelationHandle = {
  onMarkInMutelist(obj) {
    console.log('onMarkInMutelist........')
    console.log(obj)
  },
  onMutelist(obj) {
    console.log('onMutelist........')
    console.log(obj)
  },
  onMarkInBlacklist(obj) {
    console.log('onMarkInBlacklist........')
    console.log(obj)
  },
  onBlacklist(obj) {
    console.log('onBlacklist........')
    console.log(obj)
  },
}
export default userRelationHandle
