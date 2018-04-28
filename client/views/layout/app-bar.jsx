import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
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

class MainAppBar extends React.Component {
  constructor() {
    super()
    this.onHomeIconClick = this.onHomeIconClick.bind(this)
    this.createButtonClick = this.createButtonClick.bind(this)
    this.loginButtonClick = this.loginButtonClick.bind(this)
  }
  componentDidMount() {

  }
  /* eslint-disable */
  onHomeIconClick() {

  }
  createButtonClick() {

  }
  loginButtonClick() {

  }
  /* eslint-enable */
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar position="fixed" >
          <ToolBar>
            <IconButton color="default" onClick={this.onHomeIconClick}>
              <HomeIcon />
            </IconButton>
            <Typography type="title" color="default" className={classes.flex}>兰州市供水集团公司智慧水务 </Typography>
            <Button color="default" onClick={this.createButtonClick}> 新建主题</Button>
            <Button color="default" onClick={this.loginButtonClick}> 登陆</Button>
          </ToolBar>
        </AppBar>
      </div>
    )
  }
}

MainAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MainAppBar)
