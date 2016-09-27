import React, {PropTypes} from 'react';
import 'whatwg-fetch';
import debounce from 'javascript-debounce';
import Layout from '../../components/Layout';
import Link from '../../components/Link';
import Button from '../../components/Button';
import s from './project.css';
import projects from '../../core/projects.js';
import Project from './Project';
import MobileDetect from 'mobile-detect';
import history from '../../core/history';
class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHighDef: null,
      isMobile: null
    };
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
    const { title } = projects.get(this.props.route.params.projectId);
    document.title = `JOEY: ${title}`;
  }

  goRoute(event){
    event.preventDefault();
    const { pathname } = event.currentTarget;
    history.push({ pathname });
  }

  render() {
    const project = projects.get(this.props.route.params.projectId);
    const previousProject = projects.previousProject(project);
    const nextProject = projects.nextProject(project);
    const handleKeyUp = debounce((e) => {
      switch(e.keyCode){
        case 27:
          console.log('/');
          break;
        case 39:
          console.log('next');
          break;
        case 37:
          console.log('previous');
          break;
        default:
          return false;
          break;
      }
    }, 2000);
    window.document.addEventListener('keyup', handleKeyUp);
    return (
      <Layout className={s.content} ref={node => (this.root = node)}>
        <div className="btn-back">
          <span className="hidden--sm">
            Previous project: &nbsp;<Link to={previousProject.route}>{previousProject.title}</Link>
          </span>
          <span className="hidden--sm">
            Next project: &nbsp;<Link to={nextProject.route}>{nextProject.title}</Link>
          </span>
          <Button href="/" onClick={this.goRoute} className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
            <i className="material-icons">clear</i>
          </Button>
        </div>
        <Project project={projects.get(this.props.route.params.projectId)} goRoute={this.goRoute} />
      </Layout>
    )
  }
}

ProjectPage.propTypes = {
  route: PropTypes.object
}

export default ProjectPage
