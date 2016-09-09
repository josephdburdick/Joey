import projectsData from '../data/index.js';

function Project(project) {
  this.name = project.name;
  this.order = project.order;
  this.title = project.title;
  this.date = project.date;
  this.tags = project.tags;
  this.logo = project.logo;
  this.agency = project.agency;
  this.slides = Object.values(project.slides).map(slide => slide);
  this.path = `/projects/${this.name}`;
  this.slidesPath = `/projects/${this.name}/slides/`;
  this.hiDefAffix = '@2x';
};

const all = {} || projects.all;
Object.values(projectsData).map(project => all[project.name] = new Project(project));

const projects = {
  all,
  get(project) {
    try {
      if (this.all[project]){
        return this.all[project];
      } else {
        throw new Error(`Project "${project}" not found.`);
      }
    } catch (error) {
      return false;
    }
  },
  toJSON() {
    return JSON.stringify(this.all);
  }
};

export default projects;
