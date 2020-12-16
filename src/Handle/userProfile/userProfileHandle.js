// 用户名片
const userProfileHandle = {
  onUpdateUser (obj, root) {
    console.log('onUpdateUser........')
    console.log(obj)
    console.log('用户名片更新了', obj)
    // data.users = nim.mergeUsers(data.users, user);
  },
  onUsers (users, root) {
    console.log('onUsers........')
    console.log(users)
    console.log('收到用户名片列表', users)
    // data.users = nim.mergeUsers(data.users, users);
  },
  onUpdateMyInfo (obj, root) {
    console.log('onUpdateMyInfo........')
    console.log(obj)
    console.log('我的名片更新了', obj)
    // data.myInfo = NIM.util.merge(data.myInfo, user);
    // updateMyInfoUI();
  },
  onMyInfo (obj, root) {
    console.log('onMyInfo........')
    console.log(obj)
    console.log('收到我的名片', obj)
    // data.myInfo = user;
    // updateMyInfoUI();
  },
}
export default userProfileHandle
