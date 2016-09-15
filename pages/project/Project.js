import React, {PropTypes} from 'react';
import 'whatwg-fetch';
import Slider from 'react-slick';
import Layout from '../../components/Layout';
import Link from '../../components/Link';
import s from './project.css';
import {title, html} from './index.md';
import projects from '../../core/projects.js';
import LazyLoad from 'react-lazyload';
import history from '../../core/history';
import moment from 'moment';
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
    const settings = {
      lazyLoad: false,
      arrows: false,
      //className: s.slide,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
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
                <div className="section-body">{moment(new Date(project.date)).fromNow()}</div>
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
                <div className="section-body">
                  {project.tags.map((tag, i) => <span className="mdl-chip" key={i}><span className="mdl-chip__text">{tag}</span></span>)}
                </div>
              </section>
            </div>
          </aside>
          <div className={s.figures}>
            {renderSlides[0]}
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
