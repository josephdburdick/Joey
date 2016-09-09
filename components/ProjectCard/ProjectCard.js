import React, {PropTypes} from 'react';
import cx from 'classnames';
import s from './ProjectCard.css';

class ProjectCard extends React.Component{
  static propTypes = {
    className: PropTypes.string,
    project: PropTypes.object
  }
  render(){
    const project = this.props.project;
    const projectTags = project.tags
    ? (
      <ul className="project-tags">
      {project.tags.map((tag, i) => (
        <li key={i}>{tag}</li>
      ))}
      </ul>
    )
    : null;
    const projectNumber = ('0' + (project.order + 1)).slice(-2);
    return (
      <div className={
        cx([
          `mdl-card mdl-shadow--2dp`,
          this.props.className
        ])}>
        <div className="mdl-card--expand" style={{
          backgroundImage: `url(${project.path}/bg.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        </div>
        <div className="mdl-card__supporting-text">
          <div className="info">
            <header>
              <div className={`project-number ${s['project-card__number']}`}>{projectNumber}</div>
              <h2 className="mdl-card__title-text">{project.title}</h2>
            </header>
          </div>
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
            href={project.path}>
            View Project
          </a>
        </div>
      </div>
    )
  }
}

export default ProjectCard;
