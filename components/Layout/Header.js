import React from 'react';
import Navigation from './Navigation';
import history from '../../core/history.js';

import Link from '../Link';
import Button from '../Button';
import cx from 'classnames';
import s from './Header.css';
import Logo from '../Logo/Logo';
import Modal from '../Modal/Modal';
import {title, html} from '../../pages/about/index.md';

class Header extends React.Component {
  constructor(){
    super();
    this.state = {
      isModalOpen: false
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  render() {
    const renderModalToggleButton = this.state.isModalOpen ? (
      <span className={cx([
        'mdl-chip mdl-chip--deletable',
        s['btn-modal--open']
      ])} onClick={this.toggleModal}>
        <span className="mdl-chip__text">Close Modal</span>
        <button type="button" className="mdl-chip__action">
          <i className="material-icons">cancel</i>
        </button>
      </span>
    ) : (
      <Button
        ripple
        type="icon"
        onClick={this.toggleModal}>
        <i className="material-icons">more_vert</i>
      </Button>
    );
    return (
      <header className={cx([
        'mdl-layout__header',
        s.header
      ])} ref={node => (this.root = node)}>
        <div className={s.container}>
          <Logo
            url=""
            className={s.logo}
            search="perfect loop"
            limit={5}
            size="fixed_height"
            interval={5000} {...this.props} />
          <div className={s['hidden--mobile']}>
            Joseph Burdick<br/>
            Interactive Designer & Developer<br/>
          </div>
          <div className={s['hidden--mobile']}>
            Brooklyn<br/>
            New York City
          </div>
          <div className={s.divider} />
          <div>

               {renderModalToggleButton}
          </div>
        </div>
        <Modal
          isOpen={this.state.isModalOpen}
          transitionName="modal-anim"
        >
          <div className={s.modal}>
            <div dangerouslySetInnerHTML={{__html: html }}></div>
          </div>
        </Modal>
      </header>
    );
  }

}

export default Header;
