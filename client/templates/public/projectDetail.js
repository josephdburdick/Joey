Template.projectDetail.onCreated(() => {
  Template.instance().subscribe('projectDetail', FlowRouter.getParam('_id'));
});

Template.projectDetail.helpers({
  project() {
    return Projects.findOne();
  }
});

Template.projectDetail.events({
});
