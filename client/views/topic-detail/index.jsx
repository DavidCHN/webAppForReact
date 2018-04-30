import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import marked from 'marked'
import {
  inject,
  observer,
} from 'mobx-react'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import { CircularProgress } from 'material-ui/Progress'
import { topicDetailStyle } from './styles'
import { TopicStore } from '../../store/topic-store'
import Container from '../layout/container'
import Reply from './reply'
import formatDate from '../../utils/date-format'

@inject((stores) => {
  return {
    topicStore: stores.topicStore,
  }
}) @observer

class TopicDetail extends React.Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  componentDidMount() {
    const id = this.getTopicId()
    this.props.topicStore.getTopicDetail(id)
  }
  getTopicId() {
    return this.props.match.params.id
  }

  render() {
    const id = this.getTopicId()
    const { classes } = this.props
    const topic = this.props.topicStore.detailsMap[id]
    if (!topic) {
      return (
        <Container>
          <section className={classes.loadingContainer}>
            <CircularProgress color="primary" />
          </section>
        </Container>
      )
    }
    return (
      <div>
        <Container>
          <Helmet>
            <title>{topic.title}</title>
          </Helmet>
          <header className={classes.header}>
            <h3>{topic.title}</h3>
          </header>
          <section className={classes.body}>
            <p dangerouslySetInnerHTML={{ __html: marked(topic.content) }} />
          </section>
        </Container>
        <Paper elevation={4} className={classes.replies}>
          <header className={classes.replyHeader}>
            <span>{`${topic.reply_count} 回复`}</span>
            <span>{`最新回复 ${formatDate(topic.last_reply_at, 'yy年m月dd日')}`}</span>
          </header>
          <section>
            {
              topic.replies.map((reply) => { return <Reply reply={reply} key={reply.id} /> })
            }
          </section>
        </Paper>
      </div>
    )
  }
}
TopicDetail.wrappedComponent.propTypes = {
  topicStore: PropTypes.instanceOf(TopicStore).isRequired,
}

TopicDetail.propTypes = {
  match: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(topicDetailStyle)(TopicDetail)
