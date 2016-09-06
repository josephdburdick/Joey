import React, {PropTypes} from 'react';

class Slider extends React.Component {
  static propTypes = {
    windowHeight: PropTypes.number.isRequired,
    windowWidth: PropTypes.number.isRequired,
    slides: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      windowHeight: 0,
      windowWidth: 0
    };
  }
  render() {
    const projects = Object.values(this.props.slides).sort((a, b) => a.order - b.order);
    const projectCard = (project) => {
      console.log(project);
      const projectTags = project.tags
        ? (
          <ul className="project-tags">
            {project.tags.map((tag) => (
              <li>{tag}</li>
            ))}
          </ul>
        )
        : null;
      const projectNumber = ('0' + (project.order + 1)).slice(-2)
      return (
        <li className="project" id={`project-card__${project.name}`}>
          <div className="demo-card-square mdl-card mdl-shadow--2dp">
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
              <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                View Project
              </a>
            </div>
          </div>
        </li>
      )
    };
    const slides = projects.map((project) => projectCard(project));
    return (
      <div>
        <ul>
          {slides}
        </ul>
      </div>
    )
  }
}

export default Slider;
