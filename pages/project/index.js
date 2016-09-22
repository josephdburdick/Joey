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

  componentWillMount() {
    console.log(this.props);
    const md = new MobileDetect(window.navigator.userAgent);
    console.log(md.mobile());
    this.setState({
      isHighDef: window.devicePixelRatio > 1,
      isMobile: !!md.mobile()
    });
  }

  componentDidMount() {
    this._isMounted = true;
    const project = projects.get(this.props.route.params.projectId);
    this.setState({ project });

    document.title = `JOEY: ${project.title}`;
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
    const previousProject = projects.previousProject(project);
    const nextProject = projects.nextProject(project);
    return (
      <Layout className={s.content} ref={node => (this.root = node)}>
        <div className="btn-back">
          <span className="hidden--sm">
            Previous project: &nbsp;<Link to={previousProject.route}>{previousProject.title}</Link>
          </span>
          <span className="hidden--sm">
            Next project: &nbsp;<Link to={nextProject.route}>{nextProject.title}</Link>
          </span>
          <Button href="/" colored accent ripple type="fab">
            <i className="material-icons">clear</i>
          </Button>
        </div>
        <Project project={project} />
      </Layout>
    )
  }
}

ProjectPage.propTypes = {
  route: PropTypes.object
}

export default ProjectPage
