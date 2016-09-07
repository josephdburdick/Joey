import React, {PropTypes} from 'react';
import prefix from 'react-prefixer';
import s from './Slider.css';
import ProjectCard from '../ProjectCard/ProjectCard.js';
import {title, html} from './slider.md';
import $ from 'jquery';

class Slider extends React.Component {
  static propTypes = {
    windowHeight: PropTypes.number.isRequired,
    windowWidth: PropTypes.number.isRequired,
    slides: PropTypes.object
  }
  constructor(props){
    super(props);
    this.state = {
      pageX: 0,
      pageY: 0,
      offsetX: 0,
      offsetY: 0,
      totalWidth: 0,
      style: {
        left: '0px'
      }
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }
  handleMouseEnter(e){
    this.setState({
      totalWidth: $(e.currentTarget).outerWidth()
    });
  }
  handleMouseMove(e){
    this.setState({
      pageX: e.pageX,
      pageY: e.pageY,
      style: prefix({
        transform: `translateX(-${e.pageX}px)`
      })
    });
    console.log(this.state.style);
  }
  render() {
    const projects = Object.values(this.props.slides).sort((a, b) => a.order - b.order);
    const slides = projects.map((project, i) => <li className={s['project-card']} key={i}><ProjectCard project={project}/></li>);

    return (
      <div>
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={{
          __html: html
        }}/>
        <div className={s.slider} onMouseEnter={this.handleMouseEnter} onMouseMove={this.handleMouseMove}>
          <ul style={this.state.style}>
            {slides}
          </ul>
        </div>
      </div>
    )
  }
}

export default Slider;
