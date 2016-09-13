import React, {PropTypes} from 'react';
import cx from 'classnames';
import Layout from '../../components/Layout';
import s from './home.css';
import {title, html} from './index.md';

import Logo from '../../components/Logo/Logo';
import Slider from '../../components/Slider/Slider';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Link from '../../components/Link/Link';
import projects from '../../core/projects';

class HomePage extends React.Component {
  componentDidMount() {
    this._isMounted = true;
    document.title = title;
  }
  transition = event => {
    event.preventDefault();
    history.push({ pathname: event.currentTarget.pathname });
  };
  render() {
    const renderSlides = Object.values(projects.all)
                          .sort((a, b) => a.order - b.order)
                          .map((project, i) => <ProjectCard project={project} transition={this.trasition} className={s['project-card']} key={i} {...this.props} />);
    return (
      <Layout className={s.content}>
        <section className={s.work}>
          <Slider {...this.state } slides={ renderSlides } />
        </section>

      </Layout>
    );
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

}

export default HomePage;
