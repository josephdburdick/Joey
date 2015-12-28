Template.projectList.onCreated(() => {
  Template.instance().subscribe('allProjects');
});

Template.projectList.helpers({
  projects() {
    return Projects.find();
  },
  index(){
    return Projects.find({"_id": {$lt: this._id}}).count() + 1;
  },
  projectListWidth(){
    let projectCount = Projects.find().count(),
        totalWidth = [];

        debugger;

  }
});
