import React from 'react'
import ListItem from 'material-ui/List/ListItem'
import ListItemAvatar from 'material-ui/List/ListItemAvatar'
import ListItemText from 'material-ui/List/ListItemText'
import { withStyles } from 'material-ui/styles'
import cx from 'classnames'
import Avatar from 'material-ui/Avatar'
import PropTypes from 'prop-types'
import { topicPrimaryStyle, topicSecondaryStyle } from './style'
import { tabs } from '../../utils/variable-define'


const Primary = ({ classes, topic }) => {
  const classnames = cx({
    [classes.tab]: true,
    [classes.top]: topic.top,
  })
  return (
    <div className={classes.root}>
      <span className={classnames}>{topic.top ? '置顶' : tabs[topic.tab]}</span>
      <span className={classes.title}>{topic.title}</span>
    </div>
  )
}

const Secondary = ({ classes, topic }) => {
  return (
    <span className={classes.root}>
      <span className={classes.username}>{topic.author.loginname}</span>
      <span className={classes.count}>
        <span className={classes.accentColor}>{topic.reply_count}</span>
        <span>/</span>
        <span>{topic.visit_count}</span>
      </span>
      <span>创建时间：{topic.create_at}</span>
    </span>
  )
}

Primary.propTypes = {
  topic: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}
Secondary.propTypes = {
  topic: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}
const StyledPrimary = withStyles(topicPrimaryStyle)(Primary)
const StyledSecondary = withStyles(topicSecondaryStyle)(Secondary)
const TopicListItem = ({ onClick, topic }) => {
  return (
    <ListItem button onClick={onClick}>
      <ListItemAvatar>
        <Avatar src={topic.author.avatar_url} />
      </ListItemAvatar>
      <ListItemText
        primary={<StyledPrimary topic={topic} />}
        secondary={<StyledSecondary topic={topic} />}
      />
    </ListItem>
  )
}

TopicListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  topic: PropTypes.object.isRequired,
}
export default TopicListItem
