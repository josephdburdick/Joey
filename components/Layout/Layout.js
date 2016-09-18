import React, { PropTypes } from 'react';
import cx from 'classnames';
import Header from './Header';
import s from './Layout.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Layout extends React.Component {
  static propTypes = {
    className: PropTypes.string
  };

  render() {
    return (
      <div ref={node => (this.root = node)}>
        <div className={`mdl-layout mdl-layout__inner-container`}>
          <main>
            <ReactCSSTransitionGroup
              transitionName="page"
              transitionEnterTimeout={2000}
              transitionLeaveTimeout={1000}>
              {/* {React.cloneElement(<div {...this.props} className={cx(s.content, this.props.className)} />, {key: this.props.className})} */}
              <div {...this.props} key={this.props.className} className={cx(s.content, this.props.className)} />
            </ReactCSSTransitionGroup>
          </main>
          <Header />
        </div>
      </div>
    );
  }
}

export default Layout;
