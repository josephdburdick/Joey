Template.projectList.onCreated(() => {
  Template.instance().subscribe('allProjects');
});

Template.projectList.helpers({
  projects() {
    return Projects.find();
  },
  projectNumber(project){
    return Projects.find({"id": {$lt: project._id}}).count();
  }
});
