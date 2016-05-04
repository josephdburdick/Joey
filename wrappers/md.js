import React from 'react'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import ReadNextProject from '../components/ReadNextProject'
import { rhythm } from 'utils/typography'
import { config } from 'config'

import '../assets/css/styles.scss'

class MarkdownWrapper extends React.Component {
  render () {
    const { route } = this.props
    const post = route.page.data
    const tags = () => {
      if (post.tags) {
        let tags = post.tags.map((tag, i) => <li key={i}>{tag}</li>);
        return (
          <ul>
            {tags}
          </ul>
        );
      }
    };
    const slides = () => {
      if (post.slides) {
        let slides = post.slides.map((slide, i) => <li key={i}><img src={`${route.path + 'slides/' + slide}`}/></li>);
        return (
          <ul>
            {slides}
          </ul>
        );
      }
    };
    return (
      <div>
        <div className="markdown">
          <h1>{post.title}</h1>
          { tags() }
          { slides() }
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
          <hr/>
          <ReadNextProject post={post} pages={route.pages} />
        </div>
      </div>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper
