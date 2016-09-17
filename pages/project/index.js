import React, {PropTypes} from 'react';
import 'whatwg-fetch';
import Slider from '../../components/Slider/Slider';
import Layout from '../../components/Layout';
import Link from '../../components/Link';
import Button from '../../components/Button';
import s from './project.css';
import {title, html} from './index.md';
import projects from '../../core/projects.js';
import Project from './Project';
import LazyLoad from 'react-lazyload';
import MobileDetect from 'mobile-detect';

import history from '../../core/history';

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null,
      isHighDef: null,
      isMobile: null
    };
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
  }

  componentWillMount() {
    const md = new MobileDetect(window.navigator.userAgent);
    this.setState({
      isHighDef: window.devicePixelRatio > 1,
      isMobile: !!md.mobile()
    });
  }

  render() {
    const project = projects.get(this.props.route.params.projectId);
    const renderProjectSlides = project.slides.map((slide, i) => {
      const imageUrl = !this.state.isMobile && window.devicePixelRatio > 1 || !this.state.isMobile && window.innerWidth > 1200
        ? ([
          slide.split('.')[0],
          project.hiDefAffix,
          '.',
          slide.split('.')[1]
        ].join(''))
        : slide;
      return <div className={s.slide} key={i}><img src={project.slidesPath + imageUrl}/></div>
    });
    const renderProjectTags = project.tags.map((tag, i) => (
      <span className="mdl-chip" key={i}>
        <span className="mdl-chip__text">{tag}</span>
      </span>
    ));
    return (
      <Layout className={s.content} ref={node => (this.root = node)}>
        <Button href="/" colored accent ripple type="fab" className="btn-back" onClick={this.projectCardClick.bind(this)}>
          <i className="material-icons">clear</i>
        </Button>
        <Project project={project} />
      </Layout>
    )
  }
}

ProjectPage.propTypes = {
  route: PropTypes.object
}

export default ProjectPage
