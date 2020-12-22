// 用户名片
const userProfileHandle = {
  onUpdateUser (obj, root) {
    console.log('onUpdateUser........')
    console.log(obj)
    console.log('用户名片更新了', obj)
    let dataUsers = root.$store.getters.usersGetter
    dataUsers = root.$store.getters.nimInstanceGetter.mergeUsers(dataUsers, obj)
    root.$store.dispatch('setUsersAct', dataUsers)
    // data.users = nim.mergeUsers(data.users, user);
  },
  onUsers (users, root) {
    console.log('onUsers........')
    console.log(users)
    console.log('收到用户名片列表', users)
    let dataUsers = root.$store.getters.usersGetter
    console.log('收到用户名片列表==========222222', dataUsers) // 9
    console.log(root.$store.getters.nimInstanceGetter)
    dataUsers = root.$store.getters.nimInstanceGetter.mergeUsers(dataUsers, users)
    console.log('收到用户名片列表==========333333', dataUsers) // 9
    root.$store.dispatch('setUsersAct', dataUsers)
    // data.users = nim.mergeUsers(data.users, users);
  },
  onUpdateMyInfo (obj, root) {
    console.log('onUpdateMyInfo........')
    console.log(obj)
    console.log('我的名片更新了', obj)
    let NIM = root.$store.getters.NIMGetter
    let dataMyInfo = root.$store.getters.myInfoGetter
    dataMyInfo = NIM.util.merge(dataMyInfo, obj)
    root.$store.dispatch('setMyInfoAct', dataMyInfo)
    // data.myInfo = NIM.util.merge(data.myInfo, user);
    // updateMyInfoUI();
  },
  onMyInfo (obj, root) {
    console.log('onMyInfo........')
    console.log(obj)
    console.log('收到我的名片', obj)
    root.$store.dispatch('setMyInfoAct', obj)
    // data.myInfo = user;
    // updateMyInfoUI();
  }
}
export default userProfileHandle
