import {
  observable,
  // toJS,
  // computed,
  action,
  extendObservable,
  computed,
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
  @observable syncing
  @observable topics
  @observable details
  constructor({ syncing, topics, details } = { syncing: false, topics: [], details: [] }) {
    this.syncing = syncing
    this.topics = topics.map((topic) => {
      return new Topic(createTopic(topic))
    })
    this.details = details.map((topic) => {
      return new Topic(createTopic(topic))
    })
  }
  addTopic(topic) {
    this.topics.push(new Topic(createTopic(topic)))
  }

  @computed get detailsMap() {
    return this.details.reduce((result, detail) => {
      result[detail.id] = detail//eslint-disable-line
      return result
    }, {})
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

  @action getTopicDetail(id) {
    return new Promise((resolve, reject) => {
      if (this.detailsMap[id]) {
        resolve(this.detailsMap[id])
      } else {
        get(`/topic/${id}`, {
          mdrender: false,
        }).then((resp) => {
          if (resp.success) {
            const topic = new Topic(createTopic(resp.data))
            this.details.push(topic)
            resolve(topic)
          } else {
            reject()
          }
        }).catch(reject)
      }
    })
  }
}

export default TopicStore
