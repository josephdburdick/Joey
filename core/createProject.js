export function Project(project) {
  this.name = project.name;
  this.order = project.order;
  this.title = project.title;
  this.date = project.date;
  this.tags = project.tags;
  this.logo = project.logo;
  this.html = project.html;
  this.agency = project.agency;
  this.slides = Object.values(project.slides);
  this.path = `projects/${this.name}`;
  this.route = `/projects/${this.name}`;
  this.slidesPath = `/projects/${this.name}/slides/`;
  this.hiDefAffix = '@2x';
};
