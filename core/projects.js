import projectsData from '../data/index.js';
import { Project } from './createProject';
import history from './history';

const all = Object.values(projectsData).reduce((all, project) => {
  return { ...all, [project.name]: new Project(project)};
}, {});

const projects = {
  all,
  sorted(){ return Object.values(this.all).sort((a, b) => a.order - b.order) },
  get(project) {
    return this.all[project] || false;
  },
  previousProject(currentProject){
    const projectsCount = this.sorted().length;
    const currentProjectIndex = this.sorted().indexOf(currentProject);
    const previousProject = !!this.sorted()[currentProjectIndex - 1] ? this.sorted()[currentProjectIndex - 1] : this.sorted()[projectsCount - 1]
    return previousProject;
  },
  nextProject(currentProject){
    const projectsCount = this.sorted().length;
    const currentProjectIndex = this.sorted().indexOf(currentProject);
    const nextProject = !!this.sorted()[currentProjectIndex + 1] ? this.sorted()[currentProjectIndex + 1] : this.sorted()[0]
    return nextProject;
  },
  goRoute(event){
    event.preventDefault();
    const { pathname } = event.currentTarget;
    history.push({pathname});
  }
};

export default projects;
