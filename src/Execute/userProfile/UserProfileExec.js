import userProfileHandle from '../../Handle/userProfile/userProfileHandle'

const UserProfileExec = {
  // 更新我的用户信息
  updateMyInfo (nim, newObj, root) {
    nim.updateMyInfo({
      nick: newObj.nick,
      avatar: newObj.avatar,
      sign: newObj.sign,
      gender: newObj.gender,
      email: newObj.email,
      birth: newObj.birth,
      tel: newObj.tel,
      custom: newObj.custom,
      done: (error, user) => {
        console.log('更新我的名片' + (!error ? '成功' : '失败'))
        console.log(error)
        console.log(user)
        if (!error) {
          userProfileHandle.onUpdateMyInfo(user, root)
        }
      }
    })
  },
  // 获取用户资料
  getUser (nim, account, root) {
    nim.getUser({
      account: account,
      done: (error, user) => {
        console.log(error)
        console.log(user)
        console.log('获取用户资料' + (!error ? '成功' : '失败'))
        if (!error) {
          userProfileHandle.onUsers(user, root)
        }
      }
    })
  },
  // 获取用户资料数组
  getUsers (nim, accounts, root) {
    nim.getUsers({
      accounts: ['account1', 'account2'],
      done: (error, users) => {
        console.log(error)
        console.log(users)
        console.log('获取用户资料数组' + (!error ? '成功' : '失败'))
        if (!error) {
          userProfileHandle.onUsers(users, root)
        }
      }
    })
  }
}
export default UserProfileExec
