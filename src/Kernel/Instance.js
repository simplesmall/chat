// 登录实例化
import nimConfig from "../config/nim-config";
import {MD5} from "../utils/md5";
import syncHandle from "../Handle/sync/syncHandle";
import broadcastHandle from "../Handle/broadcast/broadcastHandle";
import sysMsgHandle from "../Handle/sysMsg/sysMsgHandle";
import msgHandle from "../Handle/msg/msgHandle";
import sessionHandle from "../Handle/session/sessionHandle";
import teamMsgHandle from "../Handle/teamMsg/teamMsgHandle";
import teamHandle from "../Handle/team/teamHandle";
import robotHandle from "../Handle/robot/robotHandle";
import userProfileHandle from "../Handle/userProfile/userProfileHandle";
import friendRelationHandle from "../Handle/friendRelation/friendRelationHandle";
import userRelationHandle from "../Handle/userRelation/userRelationHandle";
import multiLoginHandle from "../Handle/multiLogin/multiLoginHandle";
import loginHandle from "../Handle/login/loginHandle";

const Instance = {
  getInstance(NIM,BaseDomInstance) {
    this.DomInstance = BaseDomInstance
    return NIM.getInstance({
      debug: false,
      appKey: nimConfig.appKey,
      account: nimConfig.account,
      token: MD5(nimConfig.password),
      db: true,
      // 登录注销  login
      onconnect: (obj) => {
        this.connect(obj)
      },
      onwillreconnect: (obj) => {
        this.onWillReconnect(obj)
      },
      ondisconnect: (error) => {
        this.onDisconnect(error)
      },
      onerror: (error) => {
        this.onError(error)
      },

      // 多端登录  multiLogin
      onloginportschange: (obj) => this.onLoginPortsChange(obj),
      // 用户关系   userRelation
      onblacklist: (obj) => this.onBlacklist(obj),
      onsyncmarkinblacklist: (obj) => this.onMarkInBlacklist(obj),
      onmutelist: (obj) => this.onMutelist(obj),
      onsyncmarkinmutelist: (obj) => this.onMarkInMutelist(obj),
      // 好友关系   friendRelation
      onfriends: (obj) => this.onFriends(obj),
      onsyncfriendaction: (obj) => this.onSyncFriendAction(obj),
      // 用户名片   userProfile
      onmyinfo: (obj) => this.onMyInfo(obj),
      onupdatemyinfo: (obj) => this.onUpdateMyInfo(obj),
      onusers: (obj) => this.onUsers(obj),
      onupdateuser: (obj) => this.onUpdateUser(obj),
      // 机器人列表的回调  robot
      onrobots: (obj) => this.onRobots(obj),
      // 群组      team
      onteams: (obj) => this.onTeams(obj),
      onsynccreateteam: (obj) => this.onCreateTeam(obj),
      onUpdateTeam: (obj) => this.onUpdateTeam(obj),
      onteammembers: (obj) => this.onTeamMembers(obj),
      // onsyncteammembersdone: (obj)=>this.onSyncTeamMembersDone(obj),
      onupdateteammember: (obj) => this.onUpdateTeamMember(obj),
      // 群消息业务已读通知   teamMsg
      onTeamMsgReceipt: (obj) => this.onTeamMsgReceipt(obj),
      // 会话         session
      onsessions: (obj) => this.onSessions(obj),
      onupdatesession: (obj) => this.onUpdateSession(obj),
      // 消息         msg
      onroamingmsgs: (obj) => this.onRoamingMsgs(obj),
      onofflinemsgs: (obj) => this.onOfflineMsgs(obj),
      onmsg: (obj) => this.onMsg(obj),
      // 系统通知      sysMsg
      onofflinesysmsgs: (obj) => this.onOfflineSysMsgs(obj),
      onsysmsg: (obj) => this.onSysMsg(obj),
      onupdatesysmsg: (obj) => this.onUpdateSysMsg(obj),
      onsysmsgunread: (obj) => this.onSysMsgUnread(obj),
      onupdatesysmsgunread: (obj) => this.onUpdateSysMsgUnread(obj),
      onofflinecustomsysmsgs: (obj) => this.onOfflineCustomSysMsgs(obj),
      oncustomsysmsg: (obj) => this.onCustomSysMsg(obj),
      // 收到广播消息     broadcast
      onbroadcastmsg: (obj) => this.onBroadcastMsg(obj),
      onbroadcastmsgs: (obj) => this.onBroadcastMsgs(obj),
      // 同步完成         sync
      onsyncdone: (obj) => this.onSyncDone(obj)
    })
  },

// 同步完成
  onSyncDone(obj) {
    syncHandle.onSyncDone(obj)
  },

// 收到广播消息
  onBroadcastMsgs(obj) {
    broadcastHandle.onBroadcastMsgs(obj)
  },
  onBroadcastMsg(obj) {
    broadcastHandle.onBroadcastMsg(obj)
  },

// 系统通知
  onCustomSysMsg(obj) {
    sysMsgHandle.onCustomSysMsg(obj)
  },
  onOfflineCustomSysMsgs(obj) {
    sysMsgHandle.onOfflineCustomSysMsgs(obj,this.DomInstance)
  },
  onUpdateSysMsgUnread(obj) {
    sysMsgHandle.onUpdateSysMsgUnread(obj)
  },
  onSysMsgUnread(obj) {
    sysMsgHandle.onSysMsgUnread(obj)
  },
  onUpdateSysMsg(obj) {
    sysMsgHandle.onUpdateSysMsg(obj,this.DomInstance)
  },
  onSysMsg(obj) {
    sysMsgHandle.onSysMsg(obj,this.DomInstance)
  },
  onOfflineSysMsgs(obj) {
    sysMsgHandle.onOfflineSysMsgs(obj)
  },

// 消息
  onMsg(obj) {
    msgHandle.onMsg(obj,this.DomInstance)
  },
  onOfflineMsgs(obj) {
    msgHandle.onOfflineMsgs(obj,this.DomInstance)
  },
  onRoamingMsgs(obj) {
    msgHandle.onRoamingMsgs(obj,this.DomInstance)
  },

// 会话
  onUpdateSession(obj) {
    sessionHandle.onUpdateSession(obj,this.DomInstance)
  },
  onSessions(obj) {
    sessionHandle.onSessions(obj,this.DomInstance)
  },

// 群消息业务已读通知
  onTeamMsgReceipt(obj) {
    teamMsgHandle.onTeamMsgReceipt(obj)
  },

// 群组
  onUpdateTeamMember(obj) {
    teamHandle.onUpdateTeamMember(obj,this.DomInstance)
  },
  onSyncTeamMembersDone(obj) {
    teamHandle.onSyncTeamMembersDone(obj)
  },
  onTeamMembers(obj) {
    teamHandle.onTeamMembers(obj,this.DomInstance)
  },
  onUpdateTeam(obj) {
    teamHandle.onUpdateTeam(obj)
  },
  onCreateTeam(obj) {
    teamHandle.onCreateTeam(obj,this.DomInstance)
  },
  onTeams(obj) {
    teamHandle.onTeams(obj,this.DomInstance)
  },

// 机器人列表的回调
  onRobots(obj) {
    robotHandle.onRobots(obj)
  },

// 用户名片
  onUpdateUser(obj) {
    userProfileHandle.onUpdateUser(obj,this.DomInstance)
  },
  onUsers(obj) {
    userProfileHandle.onUsers(obj,this.DomInstance)
  },
  onUpdateMyInfo(obj) {
    userProfileHandle.onUpdateMyInfo(obj,this.DomInstance)
  },
  onMyInfo(obj) {
    userProfileHandle.onMyInfo(obj,this.DomInstance)
  },

// 好友关系
  onSyncFriendAction(obj) {
    friendRelationHandle.onSyncFriendAction(obj,this.DomInstance)
  },
  onFriends(obj) {
    friendRelationHandle.onFriends(obj,this.DomInstance)
  },

// 用户关系
  onMarkInMutelist(obj) {
    userRelationHandle.onMarkInMutelist(obj)
  },
  onMutelist(obj) {
    userRelationHandle.onMutelist(obj)
  },
  onMarkInBlacklist(obj) {
    userRelationHandle.onMarkInBlacklist(obj)
  },
  onBlacklist(obj) {
    userRelationHandle.onBlacklist(obj)
  },

// 多端登录
  onLoginPortsChange(obj) {
    multiLoginHandle.onLoginPortsChange(obj)
  },

// 连接
  connect(obj) {
    loginHandle.connect(obj,this.DomInstance)
  },
  onWillReconnect(obj) {
    // 此时说明 SDK 已经断开连接, 请开发者在界面上提示用户连接已断开, 而且正在重新建立连接
    loginHandle.onWillReconnect(obj)
  },

// 断开连接
  onDisconnect(error) {
    // 此时说明 SDK 处于断开状态, 开发者此时应该根据错误码提示相应的错误信息, 并且跳转到登录页面
    loginHandle.onDisconnect(error)
  },

// 出现错误
  onError(error) {
    loginHandle.onError(error)
  }
}
export default Instance
