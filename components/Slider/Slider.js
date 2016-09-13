import React, {PropTypes} from 'react';
import prefix from 'react-prefixer';
import s from './Slider.css';
import ProjectCard from '../ProjectCard/ProjectCard.js';
import {title, html} from './slider.md';
import HorizontalScroll from 'react-scroll-horizontal';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Slider extends React.Component {
  static propTypes = {
    slides: PropTypes.array
  }
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      isHighDef: null,
      isMobile: null
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    this.setState({
      isHighDef: window.devicePixelRatio > 1,
      isMobile: 'ontouchstart' in document.documentElement,
      windowWidth: window.innerWidth
    });
    (function () {
      var throttle = function (type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function () {
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
    const renderScrollArea = !this.state.isMobile && this.state.windowWidth > 768
      ? (
        <HorizontalScroll reverseScroll={true} pageLock={true}>
          {this.props.slides}
        </HorizontalScroll>
      )
      : (
        <div className="scroll-horizontal">
          {this.props.slides}
        </div>
      )
    return (
      <div>
        <div className={s.slider}>
          {renderScrollArea}
        </div>
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
