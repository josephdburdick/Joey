import React, {PropTypes} from 'react';
import 'whatwg-fetch';
import moment from 'moment';
import Layout from '../../components/Layout';
import Link from '../../components/Link';
import s from './project.css';
import projects from '../../core/projects.js';
import LazyLoad from 'react-lazyload';
import MobileDetect from 'mobile-detect';

class Project extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.refs.aside.classList.add(s['aside--mounted']);
      this.refs.slideshow.classList.add(s['slideshow--mounted']);
    }, 500);
  }

  render() {
    const project = this.props.project;
    const renderProjectSlides = project.slides.map((slide, i) => {
      const imageUrl = !this.props.isMobile && window.devicePixelRatio > 1 || !this.props.isMobile && window.innerWidth > 1200
        ? ([
          slide.split('.')[0],
          project.hiDefAffix,
          '.',
          slide.split('.')[1]
        ].join(''))
        : slide;
      return <div className={`mdl-card mdl-shadow--2dp ${s.slide}`} key={i}><img src={project.slidesPath + imageUrl}/></div>
    });
    const renderProjectTags = project.tags.map((tag, i) => (
      <span className="mdl-chip" key={i}>
        <span className="mdl-chip__text">{tag}</span>
      </span>
    ));
    return (
      <section ref={node => (this.root = node)}>
        <div className={s.container}>
          <aside className={s.aside} ref="aside">
            <div>
              <section>
                <div className={s.heading}>name</div>
                <div className="section-body">{project.title}</div>
              </section>
              <section>
                <div className={s.heading}>date</div>
                <div className="section-body">{moment(new Date(project.date)).format('MMMM YYYY')}</div>
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
                  {renderProjectTags}
                </div>
              </section>
            </div>
          </aside>
          <div className={s.slideshow} ref="slideshow">
            {renderProjectSlides}
          </div>
        </div>
      </section>
    )
  }
  componentWillUnmount(){
    this.refs.aside.classList.remove(s['aside--mounted']);
  }
}

export default Project
