Template.projectDetail.onCreated(() => {
	// this.asideVisible = new ReactiveVar(false);
});

Template.projectDetail.onRendered(() => {
	setTimeout(function(){
		$('#project-detail--aside, #face-mask').addClass('active');
	}, 500);
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
	'keyup *': (event) => {
		switch (event.keyCode) {
			case 13:
				$('#project-detail--aside').toggleClass('active');
				$('#face-mask').removeClass('active');
			break;
			case 37:
				console.log('slickPrev');
				$('#carousel').slick('slickPrev');
			break;
			case 39:
				console.log('slickNext');
				$('#carousel').slick('slickNext');
			break;
			case 27:
				console.log('Escape to Home');
				FlowRouter.go('index');
				// event.preventDefault();
			break;
		}
	},
	'click #face-mask': (event) => {
		$('#project-detail--aside').toggleClass('active');
		$('#face-mask').removeClass('active');
	}
});
