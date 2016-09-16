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

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <header className={cx([
        'mdl-layout__header',
        s.header
      ])} ref={node => (this.root = node)}>
        <div className={s.container}>
          <Logo className={s.logo} />
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

            <ul className="mdl-menu mdl-menu--top-right mdl-js-menu mdl-js-ripple-effect"
              data-mdl-for="demo-menu-top-right">
              <li className="mdl-menu__item">Some Action</li>
              <li className="mdl-menu__item">Another Action</li>
              <li disabled className="mdl-menu__item">Disabled Action</li>
              <li className="mdl-menu__item">Yet Another Action</li>
            </ul>
          </div>
        </div>
      </header>
    );
  }

}

export default Header;
