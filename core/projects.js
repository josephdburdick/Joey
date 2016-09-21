import projectsData from '../data/index.js';
import { Project } from './createProject';

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
    const currentProjectIndex = this.sorted().indexOf(currentProject);
    const newIndex = !!(this.sorted()[currentProjectIndex - 1]) ? this.sorted().indexOf(this.sorted()[currentProjectIndex - 1]) : this.sorted().indexOf(this.sorted()[0]);
    return this.sorted()[newIndex];
  },
  nextProject(currentProject){
    const currentProjectIndex = this.sorted().indexOf(currentProject);
    const newIndex = !!(this.sorted()[currentProjectIndex + 1]) ? this.sorted().indexOf(this.sorted()[currentProjectIndex + 1]) : this.sorted().indexOf(this.sorted()[this.sorted().length]);
    return this.sorted()[newIndex];
  }
};

export default projects;
