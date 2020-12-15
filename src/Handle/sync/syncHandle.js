// 同步完成
const syncHandle = {
  onSyncDone(obj) {
    console.log('onSyncDone........')
    console.log(obj)
  }
}
export default syncHandle
