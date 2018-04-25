import { observable, computed, action } from 'mobx'

export default class AppState {
  constructor({ count, name } = { count: 100, name: 'CHINASINO' }) {
    this.count = count
    this.name = name
  }
  @observable count
  @observable name
  @computed get msg() {
    return `${this.name} say count is ${this.count}`
  }
  @action add() {
    this.count += 1
  }
  @action changeName(name) {
    this.name = name
  }
  toJson() {
    return {
      count: this.count,
      name: this.name,
    }
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
