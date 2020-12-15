// 登录连接
const loginHandle = {
  // 连接
  connect(obj) {
    console.log('登录成功.............')
    console.log(obj)
  },
  onWillReconnect(obj) {
    // 此时说明 SDK 已经断开连接, 请开发者在界面上提示用户连接已断开, 而且正在重新建立连接
    console.log('即将重连');
    console.log(obj.retryCount);
    console.log(obj.duration);
  },

  // 断开连接
  onDisconnect(error) {
    // 此时说明 SDK 处于断开状态, 开发者此时应该根据错误码提示相应的错误信息, 并且跳转到登录页面
    console.log('丢失连接');
    console.log(error);
    if (error) {
      switch (error.code) {
        // 账号或者密码错误, 请跳转到登录页面并提示错误
        case 302:
          break;
        // 重复登录, 已经在其它端登录了, 请跳转到登录页面并提示错误
        case 417:
          break;
        // 被踢, 请提示错误后跳转到登录页面
        case 'kicked':
          break;
        // 退出登录,做数据清理
        case 'logout':
          break
        default:
          break;
      }
    }
  },

  // 出现错误
  onError(error) {
    console.log(error);
  },
}
export default loginHandle
