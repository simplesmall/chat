import teamHandle from '../../Handle/team/teamHandle'

const TeamExec = {
  // 创建普通群
  createNormalTeam (nim, accounts, root) {
    nim.createTeam({
      type: 'normal',
      name: '普通群',
      avatar: 'avatar',
      accounts: accounts,
      level: 50,
      ps: '我建了一个普通群',
      done: (error, obj) => {
        console.log(error)
        console.log(obj)
        console.log('创建' + obj.team.type + '群' + (!error ? '成功' : '失败'))
        if (!error) {
          teamHandle.onCreateTeam(obj.team, root)
        }
      }
    })
  },
  // 创建高级群
  createAdvancedTeam (nim, accounts, root) {
    nim.createTeam({
      type: 'advanced',
      name: '高级群',
      avatar: 'avatar',
      accounts: accounts,
      intro: '群简介',
      announcement: '群公告',
      // joinMode: 'needVerify',
      // beInviteMode: 'needVerify',
      // inviteMode: 'manager',
      // updateTeamMode: 'manager',
      // updateCustomMode: 'manager',
      level: 50,
      ps: '我建了一个高级群',
      custom: '群扩展字段, 建议封装成JSON格式字符串',
      done: (error, obj) => {
        console.log(error)
        console.log(obj)
        console.log('创建' + obj.team.type + '群' + (!error ? '成功' : '失败'))
        if (!error) {
          teamHandle.onCreateTeam(obj.team, root)
        }
      }
    })
  },
  // 获取群聊历史消息
  getTeamHistoryMsgs (nim, teamId, root) {
    nim.getHistoryMsgs({
      scene: 'team',
      to: teamId,
      done: (error, obj) => {
        console.log('获取team历史消息' + (!error ? '成功' : '失败'))
        console.log(obj)
        if (!error) {
          console.log(obj.msgs)
          root.$store.dispatch('setHistoryMsgsAct', JSON.stringify(obj.msgs))
        }
      }
    })
  },
  // 拉人入群
  addTeamMembers (nim, teamId, accounts) {
    nim.addTeamMembers({
      teamId: teamId,
      accounts: accounts,
      ps: '欢迎加入我们的群聊......',
      custom: '',
      done: (error, obj) => {
        console.log(obj)
        console.log('入群邀请发送' + (!error ? '成功' : '失败'))
      }
    })
  },
  // 踢人出群
  removeTeamMembers (nim, teamId, accounts) {
    nim.removeTeamMembers({
      teamId: teamId,
      accounts: accounts,
      done: (error, obj) => {
        console.log(error)
        console.log(obj)
        console.log('踢人出群' + (!error ? '成功' : '失败'))
      }
    })
  },
  // 接受入群邀请
  acceptTeamInvite (nim, teamId, from) {
    // 假设 sysMsg 是通过回调 `onsysmsg` 收到的系统通知
    nim.acceptTeamInvite({
      idServer: 'sysMsg.idServer',
      teamId: teamId,
      from: from,
      done: (error, obj) => {
        console.log(error)
        console.log(obj)
        console.log('接受入群邀请' + (!error ? '成功' : '失败'))
      }
    })
  },
  // 拒绝入群邀请
  rejectTeamInvite (nim, teamId, from) {
    nim.rejectTeamInvite({
      idServer: 'sysMsg.idServer',
      teamId: teamId,
      from: from,
      ps: '就不',
      done: (error, obj) => {
        console.log(error)
        console.log(obj)
        console.log('拒绝入群邀请' + (!error ? '成功' : '失败'))
      }
    })
  },
  // 申请入群
  applyTeam (nim, teamId) {
    nim.applyTeam({
      teamId: teamId,
      ps: '请加',
      done: (error, obj) => {
        console.log(error)
        console.log(obj)
        console.log('申请入群' + (!error ? '成功' : '失败'))
      }
    })
  },
  // 通过入群申请
  passTeamApply (nim, teamId, from) {
    nim.passTeamApply({
      idServer: 'sysMsg.idServer',
      teamId: teamId,
      from: from,
      done: (error, obj) => {
        console.log(error)
        console.log(obj)
        console.log('通过入群申请' + (!error ? '成功' : '失败'))
      }
    })
  },
  // 拒绝入群申请
  rejectTeamApply (nim, teamId, from) {
    // 假设 sysMsg 是通过回调 `onsysmsg` 收到的系统通知
    nim.rejectTeamApply({
      idServer: 'sysMsg.idServer',
      teamId: teamId,
      from: from,
      ps: '就不',
      done: (error, obj) => {
        console.log(error)
        console.log(obj)
        console.log('拒绝入群申请' + (!error ? '成功' : '失败'))
      }
    })
  },
  // 添加群管理员
  addTeamManagers (nim, teamId, accounts) {
    nim.addTeamManagers({
      teamId: teamId,
      accounts: accounts,
      done: (error, obj) => {
        console.log(error)
        console.log(obj)
        console.log('添加群管理员' + (!error ? '成功' : '失败'))
      }
    })
  },
  // 移除群管理员
  removeTeamManagers (nim, teamId, accounts) {
    nim.removeTeamManagers({
      teamId: teamId,
      accounts: accounts,
      done: (error, obj) => {
        console.log(error)
        console.log(obj)
        console.log('移除群管理员' + (!error ? '成功' : '失败'))
      }
    })
  },
  // 主动退群
  leaveTeam (nim, teamId) {
    nim.leaveTeam({
      teamId: teamId,
      done: (error, obj) => {
        console.log(error)
        console.log(obj)
        console.log('主动退群' + (!error ? '成功' : '失败'))
      }
    })
  },
  // 转让群
  transferTeam (nim, teamId, account) {
    nim.transferTeam({
      teamId: teamId,
      account: account,
      leave: false,
      done: (error, obj) => {
        console.log(error)
        console.log(obj)
        console.log('转让群' + (!error ? '成功' : '失败'))
      }
    })
  },
  // 解散群
  dismissTeam (nim, teamId) {
    nim.dismissTeam({
      teamId: teamId,
      done: (error, obj) => {
        console.log(error)
        console.log(obj)
        console.log('解散群' + (!error ? '成功' : '失败'))
      }
    })
  },
  // 修改自己的群属性
  updateInfoInTeam (nim, teamId) {
    nim.updateInfoInTeam({
      teamId: teamId,
      // 此参数为可选参数
      // nickInTeam: '群昵称',
      // 静音群, 此参数为可选参数
      // muteTeam: true,
      // muteNotiType: 1,
      // 第三方扩展字段
      // custom: '{}'
      done: (error, obj) => {
        console.log(error)
        console.log(obj)
        console.log('修改自己的群属性' + (!error ? '成功' : '失败'))
      }
    })
  },
  // 修改别人的群昵称
  updateNickInTeam (nim, teamId, account, nickName) {
    nim.updateNickInTeam({
      teamId: teamId,
      account: account,
      nickInTeam: nickName,
      done: (error, obj) => {
        console.log(error)
        console.log(obj)
        console.log('修改别人的群属性' + (!error ? '成功' : '失败'))
      }
    })
  },
  // 获取群
  getTeam (nim, teamId) {
    nim.getTeam({
      teamId: teamId,
      done: (error, obj) => {
        console.log(error)
        console.log(obj)
        console.log('获取群' + (!error ? '成功' : '失败'))
      }
    })
  },
  // 获取群列表
  getTeams (nim, root) {
    nim.getTeams({
      done: (error, teams) => {
        console.log('获取群列表' + (!error ? '成功' : '失败'))
        console.log(error)
        console.log(teams)
        if (!error) {
          teamHandle.onTeams(teams, root)
        }
      }
    })
  },
  // 获取群成员
  getTeamMembers (nim, teamId, root) {
    nim.getTeamMembers({
      teamId: teamId,
      done: (error, obj) => {
        console.log(error)
        console.log(obj)
        console.log('获取群成员' + (!error ? '成功' : '失败'))
        if (!error) {
          teamHandle.onTeamMembers(obj, root)
        }
      }
    })
  },
  // 通过群ID及成员账号获取群成员信息
  getTeamMemberByTeamIdAndAccount (nim, teamId, account, root) {
    nim.getTeamMemberByTeamIdAndAccount({
      teamId: teamId,
      account: account,
      done: (error, obj) => {
        console.log(error)
        console.log(obj)
        console.log('获取群成员信息' + (!error ? '成功' : '失败'))
        if (!error) {
          // teamHandle.onTeamMember(obj, root)
        }
      }
    })
  }
}
export default TeamExec
