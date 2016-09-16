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
import Project from '../project/Project.js';
import Link from '../../components/Link/Link';
import projects from '../../core/projects';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = { project: false }
    this.projectCardClick = this.projectCardClick.bind(this);
    this.modalToggle = this.modalToggle.bind(this);
  }
  componentDidMount() {
    this._isMounted = true;
    document.title = title;
  }
  projectCardClick = event => {
    event.preventDefault();
    const project = projects.get(event.currentTarget.dataset.name);

    this.setState({ project });
    /*
    This pushes the route to the address bar.
    history.push({
      pathname: event.currentTarget.pathname,
      state: this.state
    });
    */
  };
  modalToggle = event => {
    event.preventDefault();
    this.setState({ project: !!!this.state.project });
  }
  render() {
    const renderSlides = projects.sorted().map((project, i) => <ProjectCard project={project} projectCardClick={this.projectCardClick} className={s['project-card']} key={i} {...this.props} />);
    return (
      <Layout className={s.content}>
        <section className={cx([
          s.work,
          s.scale,
          this.state.project ? s['scale--down'] : ''
        ])}>
          <Slider {...this.state } slides={ renderSlides } />
        </section>

        <div className={cx([
          s.modal,
          this.state.project ? s['modal--on'] : s['modal--off']
        ])}>
          {this.state.project ? (
            <span>
              <Button href="#" colored accent ripple type="fab" onClick={this.modalToggle} className="btn-back">
                <i className="material-icons">clear</i>
              </Button>

              <Project project={this.state.project} />
            </span>
          ) : null}
        </div>
      </Layout>
    );
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

}

export default HomePage;
