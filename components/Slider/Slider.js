import React, {PropTypes} from 'react';
import ProjectCard from './ProjectCard.js';

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
    const slides = projects.map((project, i) => (<ProjectCard key={i} project={project}/>));

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
