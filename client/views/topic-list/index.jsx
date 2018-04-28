import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import queryString from 'query-string'
import Tabs, { Tab } from 'material-ui/Tabs'
import List from 'material-ui/List'
import { CircularProgress } from 'material-ui/Progress'
import { AppState } from '../../store/app-state'
import Container from '../layout/container'
import TopicListItem from './list-item'
import { tabs } from '../../utils/variable-define'

@inject((stores) => {
  return {
    appState: stores.appState,
    topicStore: stores.topicStore,
  }
}) @observer
export default class TopicList extends React.Component {
  static contextTypes = {
    router: PropTypes.object,
  }
  constructor() {
    super()
    this.changeTab = this.changeTab.bind(this)
    this.onClickHandle = this.onClickHandle.bind(this)
  }
  componentDidMount() {
    const tab = this.getTab()
    this.props.topicStore.fetchTopics(tab)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.search !== this.props.location.search) {
      this.props.topicStore.fetchTopics(this.getTab(nextProps.location.search))
    }
  }


  /* eslint-disable */
  onClickHandle() {

  }
  /* eslint-enable */
  getTab(search) {
    const searchs = search || this.props.location.search
    const query = queryString.parse(searchs)
    return query.tab || 'all'
  }
  changeTab(event, value) {
    this.context.router.history.push({
      pathname: '/list',
      search: `?tab=${value}`,
    })
  }
  asyncBootstrapper() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.props.appState.count = 3
        resolve(true)
      })
    })
  }
  render() {
    const {
      topicStore,
    } = this.props
    const topicList = topicStore.topics
    const syncingTopic = topicStore.syncing
    const tab = this.getTab()
    // const topic = {
    //   title: 'This is a topic title',
    //   username: 'Sino',
    //   reply_count: 20,
    //   visit_count: 100,
    //   create_data: '2018-04-15',
    //   tab: '分享',
    // }

    return (
      <Container>
        <Helmet>
          <title> This is TopicList Page</title>
          <meta name="description" content="This is meta description" />
        </Helmet>
        <Tabs value={tab} onChange={this.changeTab}>
          {
            Object.keys(tabs).map((t) => {
              return <Tab key={t} label={tabs[t]} value={t} />
            })
          }
        </Tabs>
        <List>
          {
            topicList.map((topic) => {
              return <TopicListItem key={topic.id} onClick={this.onClickHandle} topic={topic} />
            })
          }
        </List>
        {
          syncingTopic ?
            (
              <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                padding: '40px 0',
              }}
              >
                <CircularProgress color="primary" size={100} />
              </div>
            ) :
            null
        }
      </Container>
    )
  }
}
TopicList.wrappedComponent.propTypes = {
  appState: PropTypes.instanceOf(AppState).isRequired,
  topicStore: PropTypes.object.isRequired,
}
TopicList.propTypes = {
  location: PropTypes.object.isRequired,
}

