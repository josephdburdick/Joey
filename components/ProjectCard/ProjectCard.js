import React, {PropTypes} from 'react';
import cx from 'classnames';
import s from './ProjectCard.css';
import Link from '../Link/Link';

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
          s['project-card'],
          this.props.className
        ])}>
          <div className={`mdl-card--expand ${s['project-card--expand']}`} style={{backgroundImage: `url(${project.path}/bg.jpg)`}}>

          </div>
          <div className={s['project-card__info']}>
            <div className="mdl-card__supporting-text">
              <header>
                <div className={`project-number ${s['project-card__number']}`}>{projectNumber}</div>
                <h2 className={`mdl-card__title-text ${s['project-card__title']}`}>{project.title}</h2>
              </header>
            </div>
            <div className="mdl-card__actions mdl-card--border">
              <Link className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
                to={project.path}>
                View Project
              </Link>
            </div>
          </div>
      </div>
    )
  }
}

export default ProjectCard;
