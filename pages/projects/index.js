import React from 'react'
import {Link} from 'react-router'
import sortBy from 'lodash/sortBy'
import DocumentTitle from 'react-document-title'
import {prefixLink} from 'gatsby-helpers'
import access from 'safe-access'
import {config} from 'config'
import Projects from './Projects';

class Index extends React.Component {
  render() {
    const route = this.props.route;
    return (
      <Projects {...this.props} />
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object
}

export default Index
