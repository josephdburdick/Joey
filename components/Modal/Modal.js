import React from 'react';
import cx from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Link from '../Link';
import s from './Modal.css';

export default class Modal extends React.Component {
  constructor(){
    super();
    this.state = {
      isModalOpen: false
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
  }

  openModal(){
    this.setState({ isModalOpen: true });
  }

  closeModal(){
    this.setState({ isModalOpen: false });
  }

  render() {
    if(this.props.isOpen){
      return (
        <ReactCSSTransitionGroup
          transitionName={this.props.transitionName}
          transitionEnterTimeout={this.props.transitionEnterTimeout}
          transitionLeaveTimeout={this.props.transitionLeaveTimeout}>
          <div className="modal" onClick={this.props.toggleModal}>
            {this.props.children}
          </div>
        </ReactCSSTransitionGroup>
      );
    } else {
      return (
        <ReactCSSTransitionGroup
          transitionName={this.props.transitionName}
          transitionEnterTimeout={this.props.transitionEnterTimeout}
          transitionLeaveTimeout={this.props.transitionLeaveTimeout}
        />
      );
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
}

Modal.defaultProps = {
  transitionEnterTimeout: 200,
  transitionLeaveTimeout: 200
}
