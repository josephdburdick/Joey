import React, { PropTypes } from 'react';
import cx from 'classnames';
import Layout from '../../components/Layout';
import s from './home.css';
import { title, html } from './index.md';
import history from '../../core/history.js';
import Slider from '../../components/Slider/Slider';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projects from '../../core/projects';
import MobileDetect from 'mobile-detect';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
    };
  }
  componentDidMount() {
    this._isMounted = true;
    document.title = title;
    this.handleMount();
  }
  handleMount() {
    setTimeout(() => {
      this.refs.projects.classList.add(s['projects--mounted']);
    }, 200);
  }
  goRoute(event) {
    event.preventDefault();
    const { pathname } = event.currentTarget;
    history.push({ pathname });
  }

  render() {
    const renderSlides = projects
      .sorted()
      .map((project, i) => (
        <ProjectCard
          project={project}
          className={s['project-card']}
          key={i}
          goRoute={this.goRoute}
        />
      ));
    const isMobile = 'ontouchstart' in window.document.documentElement;

    return (
      <div className={s.content}>
        <section className={s.projects} ref="projects">
          <Slider
            isMobile={isMobile}
            isHighDef={window.devicePixelRatio > 1}
            slides={renderSlides}
            className={s.slider}
          />
        </section>
      </div>
    );
  }
}

export default HomePage;
