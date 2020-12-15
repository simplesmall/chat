// 群组
const teamHandle = {
  onUpdateTeamMember(obj) {
    console.log('onUpdateTeamMember........')
    console.log(obj)
  },
  onSyncTeamMembersDone(obj) {
    console.log('onSyncTeamMembersDone........')
    console.log(obj)
  },
  onTeamMembers(obj) {
    console.log('onTeamMembers........')
    console.log(obj)
  },
  onUpdateTeam(obj) {
    console.log('onUpdateTeam........')
    console.log(obj)
  },
  onCreateTeam(obj) {
    console.log('onCreateTeam........')
    console.log(obj)
  },
  onTeams(obj) {
    console.log('onTeams........')
    console.log(obj)
  },
}
export default teamHandle
