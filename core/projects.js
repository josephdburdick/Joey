import projectsData from '../data/index.js';
import { Project } from './createProject';

let all = {};
Object.values(projectsData).map(project => all[project.name] = new Project(project));

const projects = {
  all,
  sorted(){ return Object.values(this.all).sort((a, b) => a.order - b.order) },
  get(project) {
    if (this.all[project]){
      return this.all[project];
    } else {
      return false;
    }
  }
};

export default projects;
