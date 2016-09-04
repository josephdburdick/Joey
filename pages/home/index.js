import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './home.css';
import { title, html, test } from './index.md';
import $ from 'jquery';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: true,
      bottom: false,
      windowWidth: 0,
      scrollTop: 0
    };
    this.handleResize = this.handleResize.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  static propTypes = {
  };

  handleResize(e) {
    console.log(e);
    this.setState({windowWidth: window.innerWidth});
  }

  handleScroll(e) {
    let scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    // const scrollTop = window.pageYOffset;
    // this.setState({scrollTop: scrollTop});
  }

  componentDidMount() {
    document.title = title;
    // window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
    $(window).on('resize', this.handleResize);
    // $(window).on('scroll', function(e){
    //   console.log(e);
    // });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    $(window).on('scroll', this.handleScroll);
    return (
      <Layout className={s.content}>
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

}

export default HomePage;
