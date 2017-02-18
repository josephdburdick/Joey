import React, {PropTypes} from 'react';
import cx from 'classnames';
import Layout from '../../components/Layout';
import s from './home.css';
import {title, html} from './index.md';
import history from '../../core/history.js';
import Slider from '../../components/Slider/Slider';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projects from '../../core/projects';
import MobileDetect from 'mobile-detect';

class HomePage extends React.Component {
  componentDidMount() {
    this._isMounted = true;
    document.title = title;
    setTimeout(() => {
      this.refs.projects.classList.add(s['projects--mounted']);
    }, 200);
  }

  goRoute(event){
    event.preventDefault();
    const { pathname } = event.currentTarget;
    history.push({pathname})
  }

  render() {
    const renderSlides = projects.sorted().map((project, i) => <ProjectCard project={project} className={s['project-card']} key={i} goRoute={this.goRoute} />);
    const md = new MobileDetect(window.navigator.userAgent);

    return (
      <div className={s.content}>
        <section className={s.projects} ref="projects">
          <Slider
            isMobile={!!md.mobile()}
            isHighDef={window.devicePixelRatio > 1}
            slides={ renderSlides }
            className={s.slider} />
        </section>
      </div>
    );
  }
}

export default HomePage;
