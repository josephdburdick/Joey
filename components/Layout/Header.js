import React from 'react';
import Navigation from './Navigation';
import Link from '../Link';
import Button from '../Button';
import cx from 'classnames';
import s from './Header.css';
import Logo from '../Logo/Logo';

class Header extends React.Component {
  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }
  render() {
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
            Designer & Developer<br/>
          </div>
          <div className={s['hidden--mobile']}>
            Brooklyn<br/>
            New York City
          </div>
          <div className={s.divider} />
          <div>
            <Button
              href="#"
              ripple
              type="icon">
              <i className="material-icons">more_vert</i>
            </Button>
          </div>
        </div>
      </header>
    );
  }

}

export default Header;
