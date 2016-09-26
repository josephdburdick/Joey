import React, {PropTypes} from 'react';
import cx from 'classnames';
import Layout from '../../components/Layout';
import s from './home.css';
import {title, html} from './index.md';
import history from '../../core/history.js';
import Slider from '../../components/Slider/Slider';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projects from '../../core/projects';

const renderSlides = projects.sorted().map((project, i) => <ProjectCard project={project} className={s['project-card']} key={i} />);

class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isMobile: null,
      isHighDef: null
    }
  }
  componentDidMount() {
    this._isMounted = true;
    document.title = title;
    setTimeout(() => {
      this.refs.projects.classList.add(s['projects--mounted']);
    }, 200);
  }

  render() {
    return (
      <Layout className={s.content}>
        <section className={s.projects} ref="projects">
          <Slider {...this.state } slides={ renderSlides } className={s.slider} />
        </section>
      </Layout>
    );
  }
}

export default HomePage;
