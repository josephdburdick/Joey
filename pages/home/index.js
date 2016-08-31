import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './home.css';
import { title, html, test } from './index.md';

class HomePage extends React.Component {

  static propTypes = {

  };

  componentDidMount() {
    document.title = title;
    console.log(test);
  }

  render() {
    return (
      <Layout className={s.content}>
        {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
        <section>
          Joseph Burdick is a designer & developer
          living in Brooklyn, New York.
        </section>
        <section>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </section>
        <section>
          <p>Work</p>
        </section>
      </Layout>
    );
  }

}

export default HomePage;
