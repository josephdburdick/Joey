import React, {PropTypes} from 'react';
import 'whatwg-fetch';
import Slider from '../../components/Slider/Slider';
import Layout from '../../components/Layout';

import Link from '../../components/Link';
import Button from '../../components/Button';
import s from './project.css';
import {title, html} from './index.md';
import projects from '../../core/projects.js';
import Project from './Project';
import LazyLoad from 'react-lazyload';

import history from '../../core/history';

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: this.props.project,
      isHighDef: null,
      isMobile: null
    };
  }
  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }
  componentWillMount() {
    if (!this.props.project){
      const projectId = this.props.route.params.projectId;
      const project = projects.get(this.props.route.params.projectId);
      this.setState({ project });
    }
    this.setState({
      isHighDef: window.devicePixelRatio > 1,
      isMobile: 'ontouchstart' in document.documentElement
    });
  }

  render() {
    const projectsList = Object.values(projects.all).map(project => <li key={project.name}>
      <Link to={project.route} className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">{project.name}</Link>
    </li>);
    return (
      <Layout className={s.content} ref={node => (this.root = node)}>
        <Button
          to="/"
          colored
          accent
          ripple
          type="fab">
          <i className="material-icons">clear</i>
        </Button>
        <Project {...this.state} />
      </Layout>
    )
  }
}

ProjectPage.propTypes = {
  route: PropTypes.object
}

export default ProjectPage
