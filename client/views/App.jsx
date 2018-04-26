import React from 'react'
import MainAppBar from './layout/app-bar'
import Routes from '../config/router'

export default class App extends React.Component {
  componentDidMount() {

  }
  render() {
    return [
      <MainAppBar />,
      <Routes key="routes" />,
    ]
  }
}
