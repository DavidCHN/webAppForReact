import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import TopicList from '../views/topic-list/index'
import TopicDetail from '../views/topic-detail/index'
import TestAPI from '../views/test/api-test'

export default () => {
  return ([
    <Route path="/" render={() => { return (<Redirect to="/list" />) }} exact key="first" />,
    <Route path="/list" component={TopicList} key="list" />,
    <Route path="/detail" component={TopicDetail} key="detail" />,
    <Route path="/test" component={TestAPI} key="test" />,
  ]
  )
}
