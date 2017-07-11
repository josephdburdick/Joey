import React, { PropTypes } from 'react';
import 'whatwg-fetch';
import s from './project.css';

class Project extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.refs.aside.classList.add(s['aside--mounted']);
      this.refs.slideshow.classList.add(s['slideshow--mounted']);
    }, 500);
  }

  render() {
    const { project, isMobile } = this.props;
    const renderTags =
      project && project.tags
        ? <section>
            <div className={s.heading}>tags</div>
            <div className="section-body">
              {project.tags.map((tag, i) =>
                <span className="mdl-chip" key={i}>
                  <span className="mdl-chip__text">
                    {tag}
                  </span>
                </span>
              )}
            </div>
          </section>
        : null;

    const renderTitle =
      project && project.title
        ? <section>
            <div className={s.heading}>name</div>
            <div className="section-body">
              {project.title}
            </div>
          </section>
        : null;

    const renderAgency =
      project && project.agency
        ? <section>
            <div className={s.heading}>agency</div>
            <div className="section-body">
              {project.agency}
            </div>
          </section>
        : null;

    const renderDescription =
      project && project.html
        ? <section>
            <div className={s.heading}>description</div>
            <div
              className="section-body"
              dangerouslySetInnerHTML={{ __html: project.html }}
            />
          </section>
        : null;

    const renderProjectSlides =
      project && project.slides.length
        ? project.slides.map((slide, i) => {
            const imageUrl =
              (!isMobile && window.devicePixelRatio > 1) ||
              (!isMobile && window.innerWidth > 1200)
                ? [
                    slide.split('.')[0],
                    project.hiDefAffix,
                    '.',
                    slide.split('.')[1]
                  ].join('')
                : slide;
            return (
              <div className={`mdl-card mdl-shadow--2dp ${s.slide}`} key={i}>
                <img src={project.slidesPath + imageUrl} />
              </div>
            );
          })
        : null;
    return (
      <section ref={node => (this.root = node)}>
        <div className={s.container}>
          <aside className={s.aside} ref="aside">
            <div>
              {renderTitle}
              {/*{renderDate}*/}
              {renderAgency}
              {renderDescription}
              {renderTags}
            </div>
          </aside>
          <div className={s.slideshow} ref="slideshow">
            <div
              className={`mdl-card mdl-shadow--2dp ${s.slide} ${s[
                'logo-slide'
              ]}`}
              style={{ backgroundColor: project.color }}
            >
              <img
                src={project.route + '/' + project.logo}
                alt={`${project.title} logo`}
                width="350"
              />
            </div>
            {renderProjectSlides}
          </div>
        </div>
      </section>
    );
  }
}
Project.propTypes = {
  isMobile: PropTypes.bool,
  project: PropTypes.shape({
    title: PropTypes.string,
    agency: PropTypes.string,
    html: PropTypes.string,
    slides: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    ),
    tags: PropTypes.arrayOf(PropTypes.string)
  })
};
export default Project;
