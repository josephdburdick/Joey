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
    const isActive = !!this.props.project.slides.length;
    const renderProjectCardButton = isActive ?
      <Button href={project.route} accent ripple>View Project</Button> : <Button accent ripple disabled>Coming Soon</Button>;
    return (
      <div className={
        cx([
          `mdl-card mdl-shadow--2dp`,
          s['project-card'],
          this.props.className,
          !isActive ? s['project-card--disabled'] : null
        ])}>
          <div className={cx(
              'mdl-card--expand',
              s['project-card--expand']
            )} style={{backgroundImage: `url(${project.path}/bg.jpg)`}} />
          <div className={s['project-card__info']}>
            <div className="mdl-card__supporting-text">
              <header>
                <div className={`project-number ${s['project-card__number']}`}>{projectNumber}</div>
                <h2 className={`mdl-card__title-text ${s['project-card__title']}`}>{project.title}</h2>
              </header>
            </div>
            <div className="mdl-card__actions mdl-card--border">
              {renderProjectCardButton}
            </div>
          </div>
      </div>
    )
  }
}

export default ProjectCard;
