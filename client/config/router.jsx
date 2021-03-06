import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import TopicList from '../views/topic-list/index'
import TopicDetail from '../views/topic-detail/index'
import TestAPI from '../views/test/api-test'
import UserLogin from '../views/user/login'
import UserInfo from '../views/user/info'

export default () => {
  return ([
    <Route path="/" render={() => { return (<Redirect to="/list" />) }} exact key="first" />,
    <Route path="/list" component={TopicList} key="list" />,
    <Route path="/detail/:id" component={TopicDetail} key="detail" />,
    <Route path="/test" component={TestAPI} key="test" />,
    <Route path="/user/login" component={UserLogin} key="login" />,
    <Route path="/user/info" component={UserInfo} key="userinfo" />,
  ]
  )
}
