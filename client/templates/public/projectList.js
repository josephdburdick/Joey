Template.projectList.onCreated(() => {
  Template.instance().subscribe('allProjects');
});

Template.projectList.onRendered(() => {
  if (!Modernizr.touch){
		$('#projectList').append('<div class="icon-scroll"></div>');
	}
});

Template.projectList.helpers({
  projects() {
    return Projects.find();
  }
});

Template.projectList.events({
  'mouseenter .project-pane': (event) => {
    $(event.currentTarget).toggleClass('hover latest').siblings().removeClass('hover latest');
  },
  'mouseleave .project-pane': (event) => {
    $(event.currentTarget).toggleClass('hover').addClass('latest');
  },
	'mousewheel #projectList': (event) => {
		event.preventDefault();
		let
			$track = $('#projectList .project-list'),
			scrollTime = 1.2,
			scrollDistance = 170,
			delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3,
			currentDistance = $track.scrollLeft();

		$track.scrollLeft(currentDistance -= Math.round(parseInt(delta * scrollDistance)));
		return false;
	},
	'keydown *': (event) => {
		let ignoredKeys = [13, 37, 39, 27];
		console.log(event);
		if (ignoredKeys.indexOf(event.keyCode)) event.preventDefault();
	},
	'keyup *': (event) => {
		console.log(event);
		switch (event.keyCode) {
			case 13:
				event.preventDefault();
				console.log('Enter');
			break;
			case 39:
				event.preventDefault();
				console.log('Left or Right Arrow');
			break;
			case 27:
				event.preventDefault();
				console.log('Escape on List');
			break;
		}
	}
});
