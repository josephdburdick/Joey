Template.projectList.onCreated(() => {
  Template.instance().subscribe('allProjects');
});

Template.projectList.helpers({
  projects() {
    return Projects.find();
  },
  index: function(){
    return Projects.find({"_id": {$lt: this._id}}).count() + 1;
  },
  projectListWidth: function(){
    let projectCount = Projects.find().count(),
        totalWidth = [];

  }
});
