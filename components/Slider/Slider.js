import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './Slider.css';

import HorizontalScroll from 'react-scroll-horizontal';

const throttle = (type, name, obj) => {
  obj = obj || window;
  let running = false;
  const func = () => {
    if (running) {
      return;
    }
    running = true;
    requestAnimationFrame(() => {
      obj.dispatchEvent(new CustomEvent(name));
      running = false;
    });
  };
  obj.addEventListener(type, func);
};

class Slider extends React.Component {
  static propTypes = {
    slides: PropTypes.array,
    className: PropTypes.string,
    isMobile: PropTypes.bool,
  };
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: this.props.windowWidth,
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    (() => {
      throttle('resize', 'optimizedResize');
    })();

    window.addEventListener('optimizedResize', this.handleResize);
  }

  componentWillUnmount() {
    this._isMounted = false;
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleResize(e) {
    if (this._isMounted) {
      this.setState({
        windowWidth: window.innerWidth,
      });
    }
  }

  render() {
    const renderScrollArea =
      !this.props.isMobile && window.innerWidth > 768 ? (
        <HorizontalScroll reverseScroll>{this.props.slides}</HorizontalScroll>
      ) : (
        <div
          className={cx('scroll-horizontal', this.props.className ? this.props.className : null)}
        >
          {this.props.slides}
        </div>
      );
    return <div className={s.slider}>{renderScrollArea}</div>;
  }
}

export default Slider;
