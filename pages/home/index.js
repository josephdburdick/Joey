import React, {PropTypes} from 'react';
import cx from 'classnames';
import Layout from '../../components/Layout';
import s from './home.css';
import {title, html} from './index.md';
import history from '../../core/history.js';
import Logo from '../../components/Logo/Logo';
import Slider from '../../components/Slider/Slider';
import Button from '../../components/Button/Button';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projects from '../../core/projects';

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
  projectCardClick = event => {
    event.preventDefault();
    /*
    This pushes the route to the address bar.
    */
    history.push({
      pathname: event.currentTarget.pathname,
      state: this.state
    });
  };

  render() {
    const renderSlides = projects.sorted().map((project, i) => <ProjectCard project={project} projectCardClick={this.projectCardClick} className={s['project-card']} key={i} {...this.props} />);
    return (
      <Layout className={s.content}>
        <section className={s.projects} ref="projects">
          <Slider {...this.state } slides={ renderSlides } className={s.slider} />
        </section>
      </Layout>
    );
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

}

export default HomePage;
