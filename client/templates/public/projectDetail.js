Template.projectDetail.onCreated(() => {
  Template.instance().subscribe('projectDetail', FlowRouter.getParam('_id'));

	$(document)
		.on('keydown', (event) => {
			let ignoredKeys = [13, 27];
			if (ignoredKeys.indexOf(event.keyCode)) event.preventDefault();
		})
		.on('keyup', (event) => {
			switch (event.keyCode) {
				case 13:
					console.log('Enter: toggle project info');
				break;
				case 27:
					console.log('Escape on detail');
					FlowRouter.go('index');
				break;
			}
		});

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
