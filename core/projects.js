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
  }
};

export default projects;
