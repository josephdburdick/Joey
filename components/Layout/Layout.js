import React, { PropTypes } from 'react';
import cx from 'classnames';
import Header from './Header';
import s from './Layout.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Layout extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <div ref={node => (this.root = node)}>
        <div className="mdl-layout__inner-container">
          <main>
            <Header {...this.props}/>
            <ReactCSSTransitionGroup
              transitionName="page"
              transitionEnterTimeout={4000}
              transitionLeaveTimeout={4000}
              transitionAppear={true}
              transitionAppearTimeout={2000}>
              <div {...this.props} className={cx(s.content, this.props.className)} />
            </ReactCSSTransitionGroup>
          </main>
        </div>
      </div>
    );
  }
}

export default Layout;
