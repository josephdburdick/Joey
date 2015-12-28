Template.projectList.onCreated(() => {
  Template.instance().subscribe('allProjects');
});

Template.projectList.helpers({
  projects() {
    return Projects.find();
  }
});

Template.projectList.events({
  'mouseenter .projectPane': (ev) => {
    $(ev.currentTarget).toggleClass('hover');
  },
  'mouseleave .projectPane': (ev) => {
    $(ev.currentTarget).toggleClass('hover');
  }
});
