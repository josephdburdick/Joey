import React, { PropTypes } from 'react';
import 'whatwg-fetch';
import Layout from '../../components/Layout';
import s from './project.css';
import { title, html } from './index.md';
import Projects from '../../core/projects.js';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null
    };
  }
  componentWillMount() {
    const projectId = this.props.route.params.projectId;
    this.setState({ project: Projects.get(this.props.route.params.projectId) });
  }
  componentDidMount() {
    console.log(this.state.project)
  }
  render() {
    const logo = this.state.project.logo;
    const prefix = `/projects/${this.state.project.name}/`;
    return (
      <div style={{backgroundColor: 'red'}}>
        <img src={`${prefix + logo}`}/>
      </div>
    )
  }
}

Project.propTypes = {
  route: PropTypes.object
}

export default Project
