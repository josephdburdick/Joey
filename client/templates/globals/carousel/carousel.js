Template.projectDetail.onCreated(() => {
  Template.instance().subscribe('projectDetail', FlowRouter.getParam('_id'));
});
Template.carousel.onRendered(() => {
	$('#carousel').slick();
	// setTimeout(() => {
	// 	$carousel.attr("tabindex",-1).focus();
	// }, 100);
});


Template.carousel.helpers({
	slides(){
		let project = Template.instance().data;
		return Array.from(project.slides, slide => `/images/projects/${project.projectId}/${slide}`);
	}
});
