Template.projectList.onCreated(() => {
  Template.instance().subscribe('allProjects');
});

Template.projectList.helpers({
  projects() {
    return Projects.find();
  }
});
