import React, {PropTypes} from 'react';
import cx from 'classnames';
import s from './ProjectCard.css';
import Link from '../Link/Link';
import Button from '../Button/Button';
class ProjectCard extends React.Component{
  static propTypes = {
    className: PropTypes.string,
    project: PropTypes.object,
    projectCardClick: PropTypes.func
  }
  render(){
    const project = this.props.project;
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
              {/* <Link className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
                to={project.route}>
                View Project
              </Link> */}
              {/* <a
                href={project.route}
                data-route={project.route}
                data-name={project.name}
                ref={(ref) => this.projectCardLink = ref}
                className="mdl-button mdl-js-button mdl-button--accent mdl-js-ripple-effect"
                onClick={this.props.projectCardClick.bind(this)}>
                  View Project
              </a> */}
              <Button
                href={project.route}
                data-route={project.route}
                data-name={project.name}
                accent ripple
                // ref={(ref) => this.projectCardLink = ref}
                className="mdl-button mdl-js-button mdl-button--accent mdl-js-ripple-effect"
                onClick={this.props.projectCardClick.bind(this)}>
                  View Project
              </Button>
            </div>
          </div>
      </div>
    )
  }
}

export default ProjectCard;
