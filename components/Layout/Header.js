/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Navigation from './Navigation';
import Link from '../Link';
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
      <header className={s.header} ref={node => (this.root = node)}>
        <Logo />
        <div className="col">
          Joseph Burdick<br/>
          Independent Designer & Developer<br/>
        </div>
        <div className="col">
        Bedstuy, Brooklyn<br/>
        New York City
        </div>
        <div className="col">
          <Link to="/about">About</Link><br />
          <Link to="/about">Contact</Link>
        </div>
        {/* <Navigation /> */}
      </header>
    );
  }

}

export default Header;
