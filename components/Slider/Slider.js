import React, {PropTypes} from 'react';
import prefix from 'react-prefixer';
import cx from 'classnames';
import s from './Slider.css';
import ProjectCard from '../ProjectCard/ProjectCard.js';
import {title, html} from './slider.md';
import HorizontalScroll from 'react-scroll-horizontal';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Slider extends React.Component {
  static propTypes = {
    slides: PropTypes.array,
    className: PropTypes.string
  }
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: this.props.windowWidth
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    (() => {
      const throttle = (type, name, obj) => {
        obj = obj || window;
        let running = false;
        const func = function () {
          if (running) {
            return;
          }
          running = true;
          requestAnimationFrame(function () {
            obj.dispatchEvent(new CustomEvent(name));
            running = false;
          });
        };
        obj.addEventListener(type, func);
      };

      throttle('resize', 'optimizedResize');
    })();

    window.addEventListener('optimizedResize', this.handleResize);
  }

  handleResize(e) {
    if (this._isMounted) {
      this.setState({
        windowWidth: window.innerWidth
      });
    }
  }

  render() {
    const renderScrollArea = !this.state.isMobile && window.innerWidth > 768 ? (
      <HorizontalScroll reverseScroll={true}>
        {this.props.slides}
      </HorizontalScroll>
    ) : (
      <div className={cx('scroll-horizontal', this.props.className ? this.props.className : null)}>
        {this.props.slides}
      </div>
    );
    return (
      <div className={s.slider}>
        {renderScrollArea}
      </div>
    )
  }
  componentWillUnmount() {
    this._isMounted = false;
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleScroll);
  }
}

export default Slider;
