import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import { Joey } from '../assets/SVGs'

// import '../assets/css/styles.scss'

class Template extends React.Component {
  render () {
    const { location, children } = this.props
    const pathName = location.pathname;

    let header
    if (location.pathname === prefixLink('/')) {
      header = (
        <div className="main-logo--large">
          <Link to={prefixLink('/')}>
            { Joey }
          </Link>
        </div>
      )
    } else {
      header = (
        <div className="main-logo--small">
          <Link to={prefixLink('/')}>
            { Joey }
          </Link>
        </div>
      )
    }

    return (
      <main>
        {/*{header}*/}
        {children}
      </main>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
