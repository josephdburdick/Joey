Template.projectDetail.onCreated(() => {
	this.asideOpen = new ReactiveVar(false);
});

Template.projectDetail.onRendered(() => {
	let template = Template.instance();
	setTimeout(() => {
		$('#project-detail--aside, #face-mask').addClass('active');
		template.asideOpen.set(true);
	}, 500);
});

Template.projectDetail.helpers({
  project() {
    return Projects.findOne();
  },
	slides(project){
		return Array.from(project.slides, slide => `/images/projects/${project.projectId}/${slide}`);
	},
	asideOpen(){
		return Template.instance().asideOpen.get();
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
				console.log('slickPrev');
				if ($('#face-mask').hasClass('active')){
					$('#face-mask').trigger('click');
				}
			break;
			case 39:
				console.log('slickNext');
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
