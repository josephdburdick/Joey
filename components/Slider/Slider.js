import React, {PropTypes} from 'react';

class Slider extends React.Component {
  static propTypes = {
    windowHeight: PropTypes.number.isRequired,
    windowWidth: PropTypes.number.isRequired,
    slides: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      windowHeight: 0,
      windowWidth: 0
    };
  }
  render() {
    const projects = Object.values(this.props.slides).sort((a, b) => a.order - b.order);
    console.log(projects);
    return (
      <div>
        <ul>
          <li className="project" id="index-macys">
            <div className="demo-card-square mdl-card mdl-shadow--2dp">
              <div className="mdl-card__title mdl-card--expand">
                <h2 className="mdl-card__title-text">Update</h2>
              </div>
              <div className="mdl-card__supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
              </div>
              <div className="mdl-card__actions mdl-card--border">
                <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                  View Updates
                </a>
              </div>
            </div>
            <div className="vertical-block">
              <div className="info">
                <header>
                  <span className="project-number">02</span>
                  <span className="project-name">Macy's</span>
                  <hr/>
                  <div className="project-tags">
                    <span>Web App</span>
                    <span>Project Management</span>
                    <span>Front-end Development</span>
                    <span>.NET implementation</span>
                    <span>Touch Sensitive</span>
                  </div>
                </header>
                <footer>
                  <a href="#!/work=macys" className="project-link">
                    <i className="icon-angle-down"></i>
                    View Project
                    <i className="icon-angle-down"></i>
                  </a>
                </footer>
              </div>
            </div>
          </li>
          <li className="project" id="index-macys">
            <div className="demo-card-square mdl-card mdl-shadow--2dp">
              <div className="mdl-card__title mdl-card--expand">
                <h2 className="mdl-card__title-text">Update</h2>
              </div>
              <div className="mdl-card__supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
              </div>
              <div className="mdl-card__actions mdl-card--border">
                <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                  View Updates
                </a>
              </div>
            </div>
            <div className="vertical-block">
              <div className="info">
                <header>
                  <span className="project-number">02</span>
                  <span className="project-name">Macy's</span>
                  <hr/>
                  <div className="project-tags">
                    <span>Web App</span>
                    <span>Project Management</span>
                    <span>Front-end Development</span>
                    <span>.NET implementation</span>
                    <span>Touch Sensitive</span>
                  </div>
                </header>
                <footer>
                  <a href="#!/work=macys" className="project-link">
                    <i className="icon-angle-down"></i>
                    View Project
                    <i className="icon-angle-down"></i>
                  </a>
                </footer>
              </div>
            </div>
          </li>
          <li className="project" id="index-macys">
            <div className="demo-card-square mdl-card mdl-shadow--2dp">
              <div className="mdl-card__title mdl-card--expand">
                <h2 className="mdl-card__title-text">Update</h2>
              </div>
              <div className="mdl-card__supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
              </div>
              <div className="mdl-card__actions mdl-card--border">
                <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                  View Updates
                </a>
              </div>
            </div>
            <div className="vertical-block">
              <div className="info">
                <header>
                  <span className="project-number">02</span>
                  <span className="project-name">Macy's</span>
                  <hr/>
                  <div className="project-tags">
                    <span>Web App</span>
                    <span>Project Management</span>
                    <span>Front-end Development</span>
                    <span>.NET implementation</span>
                    <span>Touch Sensitive</span>
                  </div>
                </header>
                <footer>
                  <a href="#!/work=macys" className="project-link">
                    <i className="icon-angle-down"></i>
                    View Project
                    <i className="icon-angle-down"></i>
                  </a>
                </footer>
              </div>
            </div>
          </li>
          <li className="project" id="index-macys">
            <div className="demo-card-square mdl-card mdl-shadow--2dp">
              <div className="mdl-card__title mdl-card--expand">
                <h2 className="mdl-card__title-text">Update</h2>
              </div>
              <div className="mdl-card__supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
              </div>
              <div className="mdl-card__actions mdl-card--border">
                <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                  View Updates
                </a>
              </div>
            </div>
            <div className="vertical-block">
              <div className="info">
                <header>
                  <span className="project-number">02</span>
                  <span className="project-name">Macy's</span>
                  <hr/>
                  <div className="project-tags">
                    <span>Web App</span>
                    <span>Project Management</span>
                    <span>Front-end Development</span>
                    <span>.NET implementation</span>
                    <span>Touch Sensitive</span>
                  </div>
                </header>
                <footer>
                  <a href="#!/work=macys" className="project-link">
                    <i className="icon-angle-down"></i>
                    View Project
                    <i className="icon-angle-down"></i>
                  </a>
                </footer>
              </div>
            </div>
          </li>
          <li className="project" id="index-macys">
            <div className="demo-card-square mdl-card mdl-shadow--2dp">
              <div className="mdl-card__title mdl-card--expand">
                <h2 className="mdl-card__title-text">Update</h2>
              </div>
              <div className="mdl-card__supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
              </div>
              <div className="mdl-card__actions mdl-card--border">
                <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                  View Updates
                </a>
              </div>
            </div>
            <div className="vertical-block">
              <div className="info">
                <header>
                  <span className="project-number">02</span>
                  <span className="project-name">Macy's</span>
                  <hr/>
                  <div className="project-tags">
                    <span>Web App</span>
                    <span>Project Management</span>
                    <span>Front-end Development</span>
                    <span>.NET implementation</span>
                    <span>Touch Sensitive</span>
                  </div>
                </header>
                <footer>
                  <a href="#!/work=macys" className="project-link">
                    <i className="icon-angle-down"></i>
                    View Project
                    <i className="icon-angle-down"></i>
                  </a>
                </footer>
              </div>
            </div>
          </li>
          <li className="project" id="index-macys">
            <div className="demo-card-square mdl-card mdl-shadow--2dp">
              <div className="mdl-card__title mdl-card--expand">
                <h2 className="mdl-card__title-text">Update</h2>
              </div>
              <div className="mdl-card__supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
              </div>
              <div className="mdl-card__actions mdl-card--border">
                <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                  View Updates
                </a>
              </div>
            </div>
            <div className="vertical-block">
              <div className="info">
                <header>
                  <span className="project-number">02</span>
                  <span className="project-name">Macy's</span>
                  <hr/>
                  <div className="project-tags">
                    <span>Web App</span>
                    <span>Project Management</span>
                    <span>Front-end Development</span>
                    <span>.NET implementation</span>
                    <span>Touch Sensitive</span>
                  </div>
                </header>
                <footer>
                  <a href="#!/work=macys" className="project-link">
                    <i className="icon-angle-down"></i>
                    View Project
                    <i className="icon-angle-down"></i>
                  </a>
                </footer>
              </div>
            </div>
          </li>
          <li className="project" id="index-macys">
            <div className="demo-card-square mdl-card mdl-shadow--2dp">
              <div className="mdl-card__title mdl-card--expand">
                <h2 className="mdl-card__title-text">Update</h2>
              </div>
              <div className="mdl-card__supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
              </div>
              <div className="mdl-card__actions mdl-card--border">
                <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                  View Updates
                </a>
              </div>
            </div>
            <div className="vertical-block">
              <div className="info">
                <header>
                  <span className="project-number">02</span>
                  <span className="project-name">Macy's</span>
                  <hr/>
                  <div className="project-tags">
                    <span>Web App</span>
                    <span>Project Management</span>
                    <span>Front-end Development</span>
                    <span>.NET implementation</span>
                    <span>Touch Sensitive</span>
                  </div>
                </header>
                <footer>
                  <a href="#!/work=macys" className="project-link">
                    <i className="icon-angle-down"></i>
                    View Project
                    <i className="icon-angle-down"></i>
                  </a>
                </footer>
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Slider;
