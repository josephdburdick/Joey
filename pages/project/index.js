import React, { PropTypes } from 'react';
import 'whatwg-fetch';
import Layout from '../../components/Layout';
import s from './project.css';
import { title, html } from './index.md';
import mapper from '../../data/index.js';

console.log(mapper);
// const md = require('markdown-it')();

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolling: false,
      projectData: null
    };
  }
  componentWillMount() {
    // console.log(projectMapper);
    const projectId = this.props.route.params.projectId;
    debugger;
    // const projectPath = `/projects/${projectId}/${projectId}.md`;
    // // fetch(projectPath, { method: "GET" }).then((response) => {
    // //   return response.json();
    // // }).then((data) => {
    // //   console.log(data);
    // // });
    // const projectData = mapper(projectId).then((data) => {
    //   console.log(data);
    // });
    // const projectData = fetch(projectPath)
    //                       .then((project) => {
    //                         console.log(project.responseText);
    //                         const data = project;
    //                         debugger;
    //                       })
    //                       .catch((error) => {
    //                         console.log(error)
    //                       });
    // const projectData = require('/public/projects/aoa-ny/aoa-ny.md');
    // console.log(projectData);
    // this.setState({projectData});
    // console.log(this.state);
  }
  // componentDidMount() {
  //   const projectId = this.props.route.params.projectId;
  //   const projectPath = './index.md';
  //   const getProjectData = fetch(
  //     projectPath,
  //     {method: 'get'}
  //   ).then((project) => {
  //     return project.text();
  //   })
  //   .then((text) => {
  //     console.log(text);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  //
  //
  //   // const projectId = this.props.route.params.projectId;
  //   // this.serverRequest = fetch(`projects/${projectId}/logo.svg`)
  //   //                       .then((response, error) => {
  //   //                         if (!error) {
  //   //                           console.log(response);
  //   //                         }
  //   //                       })
  //   //                       .bind(this));
  //
  // }
  // componentWillUnmount() {
  //   this.serverRequest.abort();
  // }
  render() {
    return (
      <div>{this.props.route.params.projectId}</div>
    )
  }
}

Project.propTypes = {
  route: React.PropTypes.object
}

export default Project
