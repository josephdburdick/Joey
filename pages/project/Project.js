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
      project: this.props.project,
      isHighDef: null,
      isMobile: null
    };
  }

  componentWillMount() {
    this.setState({
      isHighDef: window.devicePixelRatio > 1,
      isMobile: 'ontouchstart' in document.documentElement
    });
  }

  componentDidMount(){
    this.refs.aside.classList.add(s['aside--mounted']);
  }

  render() {
    const project = this.props.project;
    const renderSlides = project.slides.map((slide, i) => {
      const imageUrl = !this.state.isMobile && window.devicePixelRatio > 1
        ? ([
          slide.split('.')[0],
          project.hiDefAffix,
          '.',
          slide.split('.')[1]
        ].join(''))
        : slide;
      return <LazyLoad key={i} height="100vh"><img src={project.slidesPath + imageUrl}/></LazyLoad>
    });

    return (
      <section>
        <div className={s.container}>
          <aside className={s.aside} ref="aside">
            <div>
              <section>
                <div className={s.heading}>name</div>
                <div className="section-body">{project.title}</div>
              </section>
              <section>
                <div className={s.heading}>date</div>
                <div className="section-body">{project.date}</div>
              </section>
              <section>
                <div className={s.heading}>agency</div>
                <div className="section-body">{project.agency}</div>
              </section>
              <section>
                <div className={s.heading}>description</div>
                <div className="section-body" dangerouslySetInnerHTML={{__html: project.html }} />
              </section>
              <section>
                <div className={s.heading}>tags</div>
                <div className="section-body">tags</div>
              </section>
            </div>
          </aside>
          <div className={s.figures}>
            {renderSlides}
          </div>
          {/* <Slider {...this.props} slides={renderSlides} /> */}
        </div>
      </section>
    )
  }
  componentWillUnmountMount(){
    this.refs.aside.classList.remove(s['aside--mounted']);
  }
}

export default Project
