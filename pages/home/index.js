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
      top: false,
      bottom: false,
      scrollTop: 0,
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
    $(window)
      .on('resize', this.handleResize)
      .on('scroll', this.handleScroll)
      .trigger('resize');
  }

  handleResize(e) {
    if (this._isMounted){
      this.setState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
      });
    }
  }

  handleScroll(e) {
    if (this._isMounted){
      this.setState({
        scrollTop: $(window).scrollTop(),
        documentHeight: $(document).height()
      });
      this.state.scrollTop === 0 ? this.setState({top: true}) : this.setState({top: false});
      this.state.scrollTop + this.state.windowHeight === this.state.documentHeight ? this.setState({bottom: true}) : this.setState({bottom: false});
      this.handleResize();

      console.log(this.state);
    }
  }

  render() {
    return (
      <Layout className={cx([
        s.content,
        this.state.top ? s['is-top'] : null,
        this.state.bottom ? s['is-bottom'] : null
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
