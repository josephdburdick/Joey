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

  render() {
    const renderSlides = Object.values(projects.all)
                          .sort((a, b) => a.order - b.order)
                          .map((project, i) => <ProjectCard project={project} className={s['project-card']} key={i} {...this.props} />);
    return (
      <Layout className={s.content}>
        <section className={s.intro}>
          <div>
            <Logo /><br />
            <div dangerouslySetInnerHTML={{
              __html: html
            }}/>
          </div>
        </section>

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
