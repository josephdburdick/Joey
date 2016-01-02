Template.projectDetail.onCreated(() => {
  Template.instance().subscribe('projectDetail', FlowRouter.getParam('_id'));
	// let self = this;
});
Template.carousel.onRendered(() => {
	let $carousel = $('#carousel');
	$carousel.slick();
	setTimeout(() => {
		$carousel.attr("tabindex", -1).focus();
	}, 100);
});


Template.carousel.helpers({
	slides(){
		let project = Template.instance().data;
		return Array.from(project.slides, slide => `/images/projects/${project.projectId}/${slide}`);
	}
});

Template.carousel.events({
	'keydown *': (event) => {
		let ignoredKeys = [27];
		if (ignoredKeys.indexOf(event.keyCode)) event.preventDefault();
	},
	'keyup *': (event) => {
		switch (event.keyCode) {
			case 37:
				$('#carousel').slick('slickPrev');
			break;
			case 39:
				$('#carousel').slick('slickNext');
			break;
			case 27:
				console.log('Escape to Home');
				FlowRouter.go('index');
			break;
		}
	}
});
