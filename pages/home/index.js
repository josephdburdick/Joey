import React, {PropTypes} from 'react';
import cx from 'classnames';
import Layout from '../../components/Layout';
import s from './home.css';
import {title, html} from './index.md';
import $ from 'jquery';

import Slider from '../../components/Slider/Slider';
import projects from '../../core/projects';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTop: false,
      isBottom: false,
      scrollTop: 0,
      median: 0,
      windowHeight: 0,
      documentHeight: 0,
      windowWidth: 0
    };
    this.handleResize = this.handleResize.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    document.title = title;
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      documentHeight: $(document).height(),
      median: $(document).height() / 2
    });

    $(window)
      .on('resize', this.handleResize)
      .on('scroll', this.handleScroll)
      .trigger('resize');

  }

  handleResize(e) {
    if (this._isMounted) {
      this.setState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        documentHeight: $(document).height(),
        median: ($(document).height() / 4) - 100
      });
    }
  }

  handleScroll(e) {
    if (this._isMounted) {
      this.setState({scrollTop: $(window).scrollTop()});
      this.state.scrollTop < 100
        ? this.setState({isTop: true})
        : this.setState({isTop: false});
      this.state.scrollTop > this.state.median
        ? this.setState({isBottom: true})
        : this.setState({isBottom: false});
    }
  }

  render() {
    return (
      <Layout className={cx([
        s.content, this.state.isTop
          ? s['is-top']
          : null,
        this.state.isBottom
          ? s['is-bottom']
          : null
      ])}>
        <section className={s.intro}>
          <div dangerouslySetInnerHTML={{
            __html: html
          }}/>
        </section>

        <section className={s.work}>
          <div>
            <Slider { ...this.state }
              handleResize={ this.handleResize }
              handleScroll={ this.handleScroll }
              slides={ projects.all }
            />
          </div>
        </section>
      </Layout>
    );
  }

  componentWillUnmount() {
    this._isMounted = false;
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleScroll);
  }

}

export default HomePage;
