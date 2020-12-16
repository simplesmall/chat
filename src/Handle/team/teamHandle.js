// 群组
const teamHandle = {
  onUpdateTeamMember (obj, root) {
    console.log('onUpdateTeamMember........')
    console.log(obj)
    console.log('群成员信息更新了', obj)
    this.onTeamMembers(obj, root)
  },
  onSyncTeamMembersDone (obj) {
    console.log('onSyncTeamMembersDone........')
    console.log(obj)
    console.log('同步群列表完成')
  },
  onTeamMembers (team, root) {
    console.log('群id', team.teamId, '群成员', team.members)
    var teamId = team.teamId
    var members = team.members
    // data.teamMembers = data.teamMembers || {};
    // data.teamMembers[teamId] = nim.mergeTeamMembers(data.teamMembers[teamId], members);
    // data.teamMembers[teamId] = nim.cutTeamMembers(data.teamMembers[teamId], members.invalid);
    console.log('同步群列表完成')
    this.refreshTeamMembersUI()
  },
  onUpdateTeam (obj) {
    console.log('onUpdateTeam........')
    console.log(obj)
    console.log('群状态更新', obj)
  },
  onCreateTeam (team, root) {
    console.log('onCreateTeam........')
    console.log(team)
    console.log('你创建了一个群', team)
    // data.teams = nim.mergeTeams(data.teams, team)
    // refreshTeamsUI();
    this.onTeamMembers(team, root)
  },
  onTeams (teams,root) {
    console.log('onTeams........')
    console.log(teams)
    console.log('群列表', teams)
    // data.teams = nim.mergeTeams(data.teams, teams);
    this.onInvalidTeams(teams.invalid)
  },

  // #####实际数据操作函数
  onInvalidTeams (teams) {
    // data.teams = nim.cutTeams(data.teams, teams);
    // data.invalidTeams = nim.mergeTeams(data.invalidTeams, teams);
    this.refreshTeamsUI()
  },
  refreshTeamsUI () {
    // 刷新界面
  },
  refreshTeamMembersUI () {
    // 刷新界面
  }
}
export default teamHandle
