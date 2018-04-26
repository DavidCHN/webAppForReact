import React from 'react'
import Helmet from 'react-helmet'

export default class TopicDetail extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <Helmet>
          <title> This is TopicDetail Page</title>
          <meta name="description" content="This is meta description" />
        </Helmet>
        <div> This is TopicDetail Page</div>
      </div>
    )
  }
}
