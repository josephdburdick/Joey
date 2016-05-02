import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { prune, include as includes } from 'underscore.string'
import find from 'lodash/find'
import _ from 'lodash'
import { rhythm, fontSizeToMS } from 'utils/typography'

class ReadNextProject extends React.Component {
  render () {
    const { pages, post } = this.props
    const { readNext } = post
    const projectPages = pages.filter((page) => page.data.layout === "project");
    const projects = _.sortBy(projectPages, 'data.order');
    const currentProjectIndex = _.indexOf(projects, _.find(projects, {path: post.path}));

    let nextProject = projects[currentProjectIndex + 1];
    let lastProject = projects[currentProjectIndex - 1];

    if (!nextProject) {
      // return React.createElement('noscript', null)
      return (<Link to="/">Return Home</Link>)
    } else {

      // Create pruned version of the body.
      const html = nextProject.data.body
      const body = prune(html.replace(/<[^>]*>/g, ''), 200)

      return (
        <div>
          <h6
            style={{
              margin: 0,
              fontSize: fontSizeToMS(-1).fontSize,
              lineHeight: fontSizeToMS(-1).lineHeight,
              letterSpacing: -0.5,
            }}
          >
            NEXT PROJECT:
          </h6>
          <h3
            style={{
              marginBottom: rhythm(1/4),
            }}
          >
            <Link
              to={{
                pathname: prefixLink(nextProject.path),
                query: {
                  readNext: true,
                },
              }}
            >
              {nextProject.data.title}
            </Link>
          </h3>
          <p>{body}</p>
          <hr />
        </div>
      )
    }
  }
}

ReadNextProject.propTypes = {
  post: React.PropTypes.object.isRequired,
  pages: React.PropTypes.array,
}

export default ReadNextProject
