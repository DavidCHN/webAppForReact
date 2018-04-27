import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Tabs, { Tab } from 'material-ui/Tabs'
import { AppState } from '../../store/app-state'
import Container from '../layout/container'

import TopicListItem from './list-item'


@inject('appState') @observer
export default class TopicList extends React.Component {
  constructor() {
    super()
    this.state = {
      tabIndex: 0,
    }
    this.changeTab = this.changeTab.bind(this)
    this.onClickHandle = this.onClickHandle.bind(this)
  }
  componentDidMount() {

  }


  /* eslint-disable */
  onClickHandle() {

  }
  /* eslint-enable */
  asyncBootstrapper() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.props.appState.count = 3
        resolve(true)
      })
    })
  }
  changeTab(event, index) {
    this.setState({
      tabIndex: index,
    })
  }
  render() {
    const {
      tabIndex,
    } = this.state
    const topic = {
      title: 'This is a topic title',
      username: 'Sino',
      reply_count: 20,
      visit_count: 100,
      create_data: '2018-04-15',
      tab: '分享',
    }

    return (
      <Container>
        <Helmet>
          <title> This is TopicList Page</title>
          <meta name="description" content="This is meta description" />
        </Helmet>
        <Tabs value={tabIndex} onChange={this.changeTab}>
          <Tab label="管道" />
          <Tab label="管线" />
          <Tab label="阀门" />
          <Tab label="楼宇" />
          <Tab label="道路" />
          <Tab label="测试" />
        </Tabs>
        <TopicListItem onClick={this.onClickHandle} topic={topic} />
      </Container>
    )
  }
}
TopicList.propTypes = {
  appState: PropTypes.instanceOf(AppState),
}

