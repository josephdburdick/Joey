import React from 'react';
import Layout from '../../components/Layout';
import s from './about.css';
import { title, html } from './index.md';

class AboutPage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <div className={s.content}>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    );
  }

}

export default AboutPage;
