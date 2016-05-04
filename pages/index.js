import React from 'react'
import {Link} from 'react-router'
import sortBy from 'lodash/sortBy'
import DocumentTitle from 'react-document-title'
import {prefixLink} from 'gatsby-helpers'
import {rhythm} from 'utils/typography'
import access from 'safe-access'
import {config} from 'config'
import include from 'underscore.string/include'

class Projects extends React.Component {
  render() {
    const projectLinks = []
    // Sort projects.
    const sortedPages = sortBy(this.props.route.pages, (project) => access(project, 'data.order')).reverse();
    const totalPages = sortedPages.length - 1;
    console.log(totalPages);
    sortedPages.forEach((project) => {
      if (access(project, 'file.ext') === 'md' && !include(project.path, '/404')) {
        const projectNumber = totalPages - project
        const title = access(project, 'data.title') || project.path
        const logo = project.path + access(project, 'data.logo');
        const bgImage = project.path + 'bg.jpg';
        const slideCount = access(project, 'data.slides').length;

        projectLinks.push(
          <li key={project.path} className="project-item" style={{backgroundImage: `url(${bgImage})`}}>
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
      <div>
        <div className="projects-list-container">
          <ul className="projects-list">
            { projectLinks }
          </ul>
        </div>
      </div>
    )
  }
}

Projects.propTypes = {
  route: React.PropTypes.object
}

export default Projects
