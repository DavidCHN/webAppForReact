import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import {
  inject,
  observer,
} from 'mobx-react'
import AppBar from 'material-ui/AppBar'
import Typography from 'material-ui/Typography'
import ToolBar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import HomeIcon from 'material-ui-icons/Home'

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },

}
@inject((stores) => {
  return {
    appState: stores.appState,
  }
}) @observer
class MainAppBar extends React.Component {
  static contextTypes = {
    router: PropTypes.object,
  }
  constructor() {
    super()
    this.onHomeIconClick = this.onHomeIconClick.bind(this)
    this.createButtonClick = this.createButtonClick.bind(this)
    this.loginButtonClick = this.loginButtonClick.bind(this)
  }
  componentDidMount() {

  }

  onHomeIconClick() {
    this.context.router.history.push('/list?tab=all')
  }
  /* eslint-disable */
  createButtonClick() {

  }
  loginButtonClick() {
    if (this.props.appState.user.isLogin) {
      this.context.router.history.push('/user/info')
    } else {
      this.context.router.history.push('/user/login')
    }

  }
  /* eslint-enable */
  render() {
    const { classes } = this.props
    const { user } = this.props.appState
    return (
      <div className={classes.root}>
        <AppBar position="fixed" >
          <ToolBar>
            <IconButton color="default" onClick={this.onHomeIconClick}>
              <HomeIcon />
            </IconButton>
            <Typography type="title" color="default" className={classes.flex}>兰州市供水集团公司智慧水务 </Typography>
            <Button color="default" onClick={this.createButtonClick}> 新建主题</Button>
            <Button color="default" onClick={this.loginButtonClick}>
              {
                user.isLogin ? user.info.loginname : '登陆'
              }
            </Button>
          </ToolBar>
        </AppBar>
      </div>
    )
  }
}

MainAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}
MainAppBar.wrappedComponent.propTypes = {
  appState: PropTypes.object.isRequired,
}

export default withStyles(styles)(MainAppBar)
