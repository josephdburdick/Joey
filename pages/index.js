import React from 'react'
import {Link} from 'react-router'
import sortBy from 'lodash/sortBy'
import DocumentTitle from 'react-document-title'
import {prefixLink} from 'gatsby-helpers'
import {rhythm} from 'utils/typography'
import access from 'safe-access'
import {config} from 'config'
import include from 'underscore.string/include'

import { Joey } from '../assets/SVGs'

import styles from '../assets/css/styles';

class Projects extends React.Component {
  render() {
    const pageLinks = []
    // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, (page) => access(page, 'data.order')).reverse();

    sortedPages.forEach((page) => {
      if (access(page, 'file.ext') === 'md' && !include(page.path, '/404')) {
        const title = access(page, 'data.title') || page.path
        const logo = access(page, 'data.logo') || page.path
        pageLinks.push(
          <li key={page.path} className="project-item">
            <div className="project-item">
              <Link to={prefixLink(page.path)}>{title} {logo}</Link>
            </div>
          </li>
        )
      }
    })
    return (
      <div>
        { Joey }
        <div className="projects-list-container">
          <ul className="projects-list">
            { pageLinks }
          </ul>
        </div>
      </div>
    )
  }
}

Projects.propTypes = {
  route: React.PropTypes.object
}

export default Projects
