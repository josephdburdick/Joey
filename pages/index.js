import React from 'react'
import {Link} from 'react-router'
import sortBy from 'lodash/sortBy'
import DocumentTitle from 'react-document-title'
import {prefixLink} from 'gatsby-helpers'
import {rhythm} from 'utils/typography'
import access from 'safe-access'
import {config} from 'config'
import include from 'underscore.string/include'
import $ from 'jquery';


class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolling: false,

    };
    this.scrollHorizontal = this.scrollHorizontal.bind(this);
  }
  scrollHorizontal(event) {
    console.log(event);
    // $('#scroll-horizontal').scrollLeft
  }
  onMouseEnter(event) {
    console.log(event);
  }
  onMouseLeave(event) {
    console.log(event);
  }
  render() {
    // require('jquery-mousewheel');
    const $window = $(window);
    const projectLinks = []
    // Sort projects.
    const sortedPages = sortBy(this.props.route.pages, (project) => access(project, 'data.order')).reverse();
    const totalPages = sortedPages.length - 1;
    console.log(totalPages);

    $window.on('mousewheel', (event) => this.scrollHorizontal(event));

    sortedPages.forEach((project) => {
      if (access(project, 'file.ext') === 'md' && !include(project.path, '/404')) {
        const projectNumber = totalPages - project;
        const title = access(project, 'data.title') || project.path;
        const logo = project.path + access(project, 'data.logo');
        const bgImage = project.path + 'bg.jpg';
        const slideCount = access(project, 'data.slides').length;

        projectLinks.push(
          <li key={project.path} className="project-item" style={{backgroundImage: `url(${bgImage})`}} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
            <Link to={prefixLink(project.path)} className="project-item__link">
              <div className="card">
                <div class="card-header">{title}</div>
                <img src={logo} />
              </div>
            </Link>
          </li>
        )
      }
    })
    return (
      <main>
        <div className="projects-list-container" id="scroll-horizontal">
          <ul className="projects-list">
            { projectLinks }
          </ul>
        </div>
      </main>
    )
  }
}

Projects.propTypes = {
  route: React.PropTypes.object
}

export default Projects
