import {
  observable,
  // toJS,
  // computed,
  action,
  extendObservable,
} from 'mobx'
import {
  get,
  // post,
} from '../utils/http'
import { topicSchema } from '../utils/variable-define'

const createTopic = (topic) => {
  return Object.assign({}, topicSchema, topic)
}
class Topic {
  constructor(data) {
    extendObservable(this, data)
  }
  @observable syncing = false
}
class TopicStore {
  @observable topics
  @observable syncing
  constructor({ syncing, topics } = { syncing: false, topics: [] }) {
    this.syncing = syncing
    this.topics = topics.map((topic) => {
      return new Topic(createTopic(topic))
    })
  }
  addTopic(topic) {
    this.topics.push(new Topic(createTopic(topic)))
  }
  @action fetchTopics(tab) {
    return new Promise((resolve, reject) => {
      this.syncing = true
      this.topics = []
      get('/topics', {
        mdrender: false,
        tab,
      }).then((resp) => {
        if (resp.success) {
          const topics = resp.data.map((topic) => { return new Topic(createTopic(topic)) })
          this.topics = topics
          this.syncing = false
          resolve()
        } else {
          this.syncing = false
          reject()
        }
      }).catch((err) => {
        reject(err)
      })
    })
  }
}

export default TopicStore
