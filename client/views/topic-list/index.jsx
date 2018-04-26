import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Tabs, { Tab } from 'material-ui/Tabs'
import { AppState } from '../../store/app-state'
import Container from '../layout/container'

@inject('appState') @observer
export default class TopicList extends React.Component {
  constructor() {
    super()
    this.state = {
      tabIndex: 0,
    }
    this.changeTab = this.changeTab.bind(this)
  }
  componentDidMount() {

  }
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
      </Container>
    )
  }
}
TopicList.propTypes = {
  appState: PropTypes.instanceOf(AppState),
}

