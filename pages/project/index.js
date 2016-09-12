import React, { PropTypes } from 'react';
import 'whatwg-fetch';
import Layout from '../../components/Layout';
import Link from '../../components/Link';
import s from './project.css';
import { title, html } from './index.md';
import projects from '../../core/projects.js';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null,
      isHighDef: null,
      isMobile: null
    };
  }
  componentWillMount() {
    const projectId = this.props.route.params.projectId;
    const project = projects.get(this.props.route.params.projectId);
    if (project) {
      this.setState({
        project,
        isHighDef: window.devicePixelRatio > 1,
        isMobile: 'ontouchstart' in document.documentElement
      });
    }
  }
  render() {
    const p = this.state.project;
    const renderSlides = p.slides.map((slide, i) => {
      const imageUrl = !this.state.isMobile && window.devicePixelRatio > 1 ? (
        [
          slide.split('.')[0],
          p.hiDefAffix,
          '.',
          slide.split('.')[1]
        ].join('')
      ): slide;
      return <img key={i} src={ p.slidesPath + imageUrl }/>
    });
    const projectsList = Object.values(projects.all).map(project =>
      <li key={project.name}><a href={project.path} className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">{project.name}</a></li>
    );
    const template = (
      <div>
        <code>
          {JSON.stringify(p)}
        </code>
        {renderSlides}
        <ul>
          {projectsList}
        </ul>
      </div>
    );
    // const projectMap = projects.all;
    return (
      <Layout className={s.content}>
        <Link to="/">Back</Link>
        {template}
      </Layout>
    )
  }
}

Project.propTypes = {
  route: PropTypes.object
}

export default Project
