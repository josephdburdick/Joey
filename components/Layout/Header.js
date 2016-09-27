import React from 'react';
import Navigation from './Navigation';
import history from '../../core/history.js';

import Link from '../Link';
import Button from '../Button';
import cx from 'classnames';
import s from './Header.css';
import Logo from '../Logo/Logo';
import {
  logoDefaults,
  createLogoRequest,
  requestLogoImage,
  getLogoState
} from '../Logo/logo-methods';
import Modal from '../Modal/Modal';
import {
  name,
  title,
  hood,
  city,
  html
} from '../../pages/about/index.md';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false,
      logo: {}
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.getLogoState = getLogoState.bind(this);
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  componentWillMount() {
    requestLogoImage(createLogoRequest({...logoDefaults}))
      .then(({data}) => this.getLogoState({ gifs: data, ...logoDefaults}))
      .then(logoState => {
        this.setState({logo: logoState });
        // console.log(logoState);
      });
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
        <span className="mdl-chip__text">Close Info</span>
        <button type="button" className="mdl-chip__action">
          <i className="material-icons">cancel</i>
        </button>
      </span>
    ) : (
      <Button
        ripple
        type="icon"
        onClick={this.toggleModal}>
        <i className="material-icons">comment</i>
      </Button>
    );
    return (
      <header className={cx([
        'mdl-layout__header',
        s.header
      ])} ref={node => (this.root = node)}>
        <div className={s.container}>
          <Logo {...this.state.logo} />
          <div className="hidden--sm">
            {name}<br/>
            {title}<br/>
          </div>
          <div className="hidden--sm">
            {hood}<br/>
            {city}
          </div>
          <div className={s.divider} />
          <div>
            {renderModalToggleButton}
          </div>
        </div>
        <Modal isOpen={this.state.isModalOpen} transitionName="modal-anim">
          <div className={s.modal} dangerouslySetInnerHTML={{__html: html }} />
        </Modal>
      </header>
    );
  }

}

export default Header;
