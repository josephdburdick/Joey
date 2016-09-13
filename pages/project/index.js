import React, {PropTypes} from 'react';
import 'whatwg-fetch';
import Slider from '../../components/Slider/Slider';
import Layout from '../../components/Layout';
import Link from '../../components/Link';
import s from './project.css';
import {title, html} from './index.md';
import projects from '../../core/projects.js';
import LazyLoad from 'react-lazyload';
import history from '../../core/history';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null,
      isHighDef: null,
      isMobile: null
    };
  }

  componentWillMount() {
    const projectId = this.props.route.params.projectId;
    const project = projects.get(this.props.route.params.projectId);
    if (project) {
      this.setState({
        project,
        isHighDef: window.devicePixelRatio > 1,
        isMobile: 'ontouchstart' in document.documentElement
      });
    }
  }

  projectLinkClick(e) {
    const href = e.target.href;
    e.preventDefault();
    function scrollToTop(scrollDuration, cb) {
      const scrollHeight = window.scrollY,
        scrollStep = Math.PI / (scrollDuration / 15),
        cosParameter = scrollHeight / 2;
      var scrollCount = 0,
        scrollMargin,
        scrollInterval = setInterval(function () {
          if (window.scrollY != 0) {
            scrollCount = scrollCount + 1;
            scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
            window.scrollTo(0, (scrollHeight - scrollMargin));
          } else {
            clearInterval(scrollInterval);
            cb && typeof cb === "function" ? cb() : null;
          }
        }, 15);
    }
    scrollToTop(2000, () => { history.push(href) });
  }

  render() {
    const p = this.state.project;
    const renderSlides = p.slides.map((slide, i) => {
      const imageUrl = !this.state.isMobile && window.devicePixelRatio > 1
        ? ([
          slide.split('.')[0],
          p.hiDefAffix,
          '.',
          slide.split('.')[1]
        ].join(''))
        : slide;
      return <LazyLoad key={i} height="100vh"><img src={p.slidesPath + imageUrl}/></LazyLoad>
    });
    const projectsList = Object.values(projects.all).map(project => <li key={project.name}>
      <Link to={project.route} className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">{project.name}</Link>
    </li>);
    const template = (
      <section>
        <code>
          {JSON.stringify(p)}
        </code>
        <Slider {...this.state} slides={renderSlides} />
        <ul>
          {projectsList}
        </ul>
      </section>
    );
    return (
      <Layout className={s.content}>
        <Link to="/">Back</Link>
        {template}
      </Layout>
    )
  }
}

Project.propTypes = {
  route: PropTypes.object
}

export default Project
