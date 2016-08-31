import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './projects.css';
import { title, html } from './index.md';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolling: false
    };
  }
  onMouseEnter(event) {
    console.log(event);
  }
  onMouseLeave(event) {
    console.log(event);
  }
  render() {
    // <li key={project.path} className="project-item" style={{backgroundImage: `url(${bgImage})`}} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
    //   <Link to={prefixLink(project.path)} className="project-item__link">
    //     <div className="card">
    //       <div class="card-header">{title}</div>
    //       <img src={logo} />
    //     </div>
    //   </Link>
    // </li>

    // return (
    //   <main>
    //     <div className="projects-list-container" id="scroll-horizontal">
    //       <ul className="projects-list">
    //         { projectLinks }
    //       </ul>
    //     </div>
    //   </main>
    // )
    console.log(this.props);
    return (
      <div>Projects</div>
    )
  }
}

Projects.propTypes = {
  route: React.PropTypes.object
}

export default Projects
