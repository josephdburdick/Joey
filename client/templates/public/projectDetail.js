Template.projectDetail.onCreated(() => {
  Template.instance().subscribe('projectDetail', FlowRouter.getParam('_id'));
});

Template.projectDetail.helpers({
  project() {
    return Projects.findOne();
  },
	slides(project){
		return Array.from(project.slides, slide => `/images/projects/${project.projectId}/${slide}`);
	}
});

Template.projectDetail.events({
});
