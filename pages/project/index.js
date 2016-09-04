import React, { PropTypes } from 'react';
import 'whatwg-fetch';
import Layout from '../../components/Layout';
import s from './project.css';
import { title, html } from './index.md';
import projects from '../../core/projects.js';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null
    };
  }
  componentWillMount() {
    const projectId = this.props.route.params.projectId;
    const project = projects.get(this.props.route.params.projectId);
    if (project) {
      this.setState({ project: projects.get(this.props.route.params.projectId) });
    }
  }
  render() {
    const p = this.state.project;
    const prefix = `/projects/${this.state.project.name}/slides/`;
    const template = !!p ? (
      <img src={prefix + p.slides[1]} />
    ) : <div>Project not found</div>
    return (
      <div>
        {template}
      </div>
    )
  }
}

Project.propTypes = {
  route: PropTypes.object
}

export default Project
