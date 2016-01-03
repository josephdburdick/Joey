Template.projectDetail.onCreated(() => {
  Template.instance().subscribe('projectDetail', FlowRouter.getParam('_id'));
});

Template.projectDetail.onRendered(() => {
	let template = Template.instance();
	setTimeout(() => {
		$('#project-detail--aside, #face-mask').addClass('active');
	}, 500);
});

Template.projectDetail.helpers({
  project() {
    return Projects.findOne();
  },
	logo(project){
		return !!project.logo ? `/images/projects/${project.projectId}/${project.logo}` : null;
	},
	carouselItems(project){
		let array = [];
		Array.from(project.slides, slide => `/images/projects/${project.projectId}/${slide}`);
	}
});

Template.projectDetail.events({
	'keydown *': (event) => {
		let ignoredKeys = [13, 37, 39, 27];
		if (ignoredKeys.indexOf(event.keyCode)) event.preventDefault();
	},
	'keyup *': (event) => {
		switch (event.keyCode) {
			case 13:
				$('#project-detail--aside').toggleClass('active');
				if ($('#face-mask').hasClass('active')){
					$('#face-mask').trigger('click');
					$('#carousel').get(0).focus();
				}
			break;
			case 37:
				if ($('#face-mask').hasClass('active')){
					$('#face-mask').trigger('click');
				}
			break;
			case 39:
				if ($('#face-mask').hasClass('active')){
					$('#face-mask').trigger('click');
				}
			break;
			case 27:
				console.log('Escape to Home');
				FlowRouter.go('index');
			break;
		}
	},
	'click #face-mask': (event) => {
		$('#project-detail--aside').removeClass('active');
		$('#face-mask').removeClass('active');
		$('#carousel').get(0).focus();
	}
});
