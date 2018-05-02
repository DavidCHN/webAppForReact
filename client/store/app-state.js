import { observable, action } from 'mobx'
import { post } from '../utils/http'

export default class AppState {
  @observable user = {
    isLogin: false,
    info: {},
  }
  @action login(accessToken) {
    return new Promise((resolve, reject) => {
      post('/user/login', {}, { accessToken }).then((resp) => {
        if (resp.success) {
          this.user.isLogin = true
          this.user.info = resp.data
          resolve()
        } else {
          reject(resp)
        }
      }).catch(reject)
    })
  }
}

// const appState = new AppState()
// autorun(() => {
//   console.log(appState.msg)
// })

// setInterval(() => {
//   appState.add()
// })
// export default appState
