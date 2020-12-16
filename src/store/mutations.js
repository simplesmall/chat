/**
 * Created by 简小
 * Created on lucky 2020/12/14  21:58
 */
import NIM from '../SDK/NIM_Web_NIM_v8.1.0.js'
import {MD5} from '../utils/md5.js'
import WebRTC from '../SDK/NIM_Web_WebRTC_v8.1.0'

const mutations = {
  initUtils (state) {
    state.NIM = NIM
    state.NetCall = WebRTC
    state.MD5 = MD5
    console.log('Init NetCall as webRTC version successful')
  },
  setNimInstanceMut (state,nim){
    state.nimInstance = nim
  }
}

export default mutations
