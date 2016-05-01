import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { prune, include as includes } from 'underscore.string'
import find from 'lodash/find'
import { rhythm, fontSizeToMS } from 'utils/typography'

class ReadPrevious extends React.Component {
  render () {
    const { pages, post } = this.props
    const { readNext } = post
    let previousPost
    if (readNext) {
      previousPost = find(pages, (page) => {
        debugger;
        includes(page.path, readNext)
      }
      )
    }
    if (!previousPost) {
      return React.createElement('noscript', null)
    } else {
      previousPost = find(pages, (page) =>
        includes(page.path, readNext.slice(1, -1))
      )
      // Create pruned version of the body.
      const html = previousPost.data.body
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
            READ THIS NEXT:
          </h6>
          <h3
            style={{
              marginBottom: rhythm(1/4),
            }}
          >
            <Link
              to={{
                pathname: prefixLink(previousPost.path),
                query: {
                  readNext: true,
                },
              }}
            >
              {previousPost.data.title}
            </Link>
          </h3>
          <p>{body}</p>
          <hr />
        </div>
      )
    }
  }
}

ReadPrevious.propTypes = {
  post: React.PropTypes.object.isRequired,
  pages: React.PropTypes.array,
}

export default ReadPrevious
