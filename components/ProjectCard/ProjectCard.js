import React, {PropTypes} from 'react';
import cx from 'classnames';
import s from './ProjectCard.css';

class ProjectCard extends React.Component{
  static propTypes = {
    project: PropTypes.shape({
      order: PropTypes.number,
      name: PropTypes.string,
      title: PropTypes.string,
      data: PropTypes.date,
      layout: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      logo: PropTypes.string,
      agency: PropTypes.string,
      slides: PropTypes.arrayOf(PropTypes.string)
    })
  }
  render(){
    const project = this.props.project;
    const projectLink = `project/${project.name}`;
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
          s['project-card']
        ])}>
        <div className="mdl-card__title mdl-card--expand">
          <h2 className="mdl-card__title-text">{project.title}</h2>
        </div>
        <div className="mdl-card__supporting-text">
          <div className="info">
            <header>
              <div className="project-number">{projectNumber}</div>
              <div className="project-name">{project.title}</div>
              <hr/>
              {projectTags}
            </header>
          </div>
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
            href={projectLink}>
            View Project
          </a>
        </div>
      </div>
    )
  }
}

export default ProjectCard;
