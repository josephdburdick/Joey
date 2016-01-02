Template.projectList.onCreated(() => {
  Template.instance().subscribe('allProjects');
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
			scrollTime = 1.2,
			scrollDistance = 170,
			delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;

		$('body')[0].scrollLeft -= Math.round(parseInt(delta * scrollDistance));
		return false;
	},
	'keydown *': (event) => {
		let ignoredKeys = [13, 37, 39, 27];
		if (ignoredKeys.indexOf(event.keyCode)) event.preventDefault();
	},
	'keyup *': (event) => {
		switch (event.keyCode) {
			case 13:
				console.log('Enter');
			break;
			case 37:
				console.log('Left Arrow');
			break;
			case 39:
				console.log('Right Arrow');
			break;
			case 27:
				console.log('Escape on List');
			break;
		}
	}
});
