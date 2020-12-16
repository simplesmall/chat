// 群消息业务已读通知
const teamMsgHandle = {
  onTeamMsgReceipt(teamMsgReceipts) {
    console.log('onTeamMsgReceipt........')
    console.log(teamMsgReceipts)
    console.log('群消息已读通知', teamMsgReceipts)
  },
}
export default teamMsgHandle
