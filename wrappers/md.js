import React from 'react'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import ReadNext from '../components/ReadNext'
import { rhythm } from 'utils/typography'
import { config } from 'config'
import Bio from 'components/Bio'

import '../css/zenburn.css'

class MarkdownWrapper extends React.Component {
  render () {
    const { route } = this.props
    const post = route.page.data
    const tags = () => {
      if (post.tags) {
        let tags = post.tags.map((tag, i) => <li key={i}>{tag}</li>)
        return (
          <ul>
            {tags}
          </ul>
        );
      }
    };
    const slides = () => {
      if (post.slides) {
        let slides = post.slides.map((slide, i) => <li key={i}>{slide}</li>)
        return (
          <ul>
            {slides}
          </ul>
        );
      }
    };
    return (
      <DocumentTitle title={`${post.title} | ${config.blogTitle}`}>
        <div className="markdown">
          <h1>{post.title}</h1>
          { tags() }
          { slides() }
          <div dangerouslySetInnerHTML={{ __html: post.body }} />

          <em
            style={{
              display: 'block'
            }}
          >
            Posted {moment(post.date).format('MMMM D, YYYY')}
          </em>
          <hr/>
          <Bio />
          <hr/>
          <ReadNext post={post} pages={route.pages} />
        </div>
      </DocumentTitle>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper
