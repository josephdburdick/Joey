import React, { PropTypes } from 'react';
import cx from 'classnames';
import Layout from '../../components/Layout';
import s from './home.css';
import { title, html, test } from './index.md';
import $ from 'jquery';

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
      windowWidth: 0,
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
    if (this._isMounted){

      console.log($(document).height());
      this.setState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        documentHeight: $(document).height(),
        median: ($(document).height() / 2) - 100
      });
    }
  }

  handleScroll(e) {
    if (this._isMounted){
      this.handleResize();
      this.setState({
        scrollTop: $(window).scrollTop()
      });
      this.state.scrollTop < 100 ? this.setState({isTop: true}) : this.setState({isTop: false});
      this.state.scrollTop > this.state.median ? this.setState({isBottom: true}) : this.setState({isBottom: false});

      console.log(this.state);
    }
  }

  render() {
    return (
      <Layout className={cx([
        s.content,
        this.state.isTop ? s['is-top'] : null,
        this.state.isBottom ? s['is-bottom'] : null
      ])
      }>
        <section>
          <div className={s.intro} dangerouslySetInnerHTML={{ __html: html }} />
        </section>

        <section>
          <p>Work</p>
          <div>{this.state.windowWidth}</div>
          <div>{this.state.scrollTop}</div>
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
