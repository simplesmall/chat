// 用户名片
const userProfileHandle = {
  onUpdateUser(obj) {
    console.log('onUpdateUser........')
    console.log(obj)
  },
  onUsers(obj) {
    console.log('onUsers........')
    console.log(obj)
  },
  onUpdateMyInfo(obj) {
    console.log('onUpdateMyInfo........')
    console.log(obj)
  },
  onMyInfo(obj) {
    console.log('onMyInfo........')
    console.log(obj)
  },
}
export default userProfileHandle
