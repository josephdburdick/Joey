import React, {PropTypes} from 'react';
import 'whatwg-fetch';
import Layout from '../../components/Layout';
import Link from '../../components/Link';
import Button from '../../components/Button';
import s from './project.css';
import projects from '../../core/projects.js';
import Project from './Project';
import LazyLoad from 'react-lazyload';
import MobileDetect from 'mobile-detect';

import history from '../../core/history';

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null,
      isHighDef: null,
      isMobile: null
    };
  }

  projectCardClick = event => {
    event.preventDefault();
    history.push(event.currentTarget.pathname);
  }

  componentWillMount() {
    const md = new MobileDetect(window.navigator.userAgent);
    this.setState({
      isHighDef: window.devicePixelRatio > 1,
      isMobile: !!md.mobile()
    });
  }

  componentDidMount() {
    this._isMounted = true;
    const {title} = projects.get(this.props.route.params.projectId);

    document.title = `JOEY: ${title}`;
    window.document.addEventListener('keyup', (e) => {
      if (e.keyCode === 27) {
        history.push({
          pathname: '/',
          state: this.state
        })
      }
    });
  }

  render() {
    const project = projects.get(this.props.route.params.projectId);
    return (
      <Layout className={s.content} ref={node => (this.root = node)}>
        <Button href="/" colored accent ripple type="fab" className="btn-back" onClick={this.projectCardClick.bind(this)}>
          <i className="material-icons">clear</i>
        </Button>
        <Project project={project} />
      </Layout>
    )
  }
}

ProjectPage.propTypes = {
  route: PropTypes.object
}

export default ProjectPage
