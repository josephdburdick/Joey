Template.projectList.onCreated(() => {
  Template.instance().subscribe('allProjects');

	let
		$body = $('body'),
		$doc = $(document);

	$body.on('mousewheel', (event, delta) => {
		$body[0].scrollLeft -= Math.round(parseInt(delta * 45));
		return false;
	});

	$doc
		.on('keydown', (ev) => {
			let ignoredKeys = [13, 37, 39, 27];
			if (ignoredKeys.indexOf(ev.keyCode)) ev.preventDefault();
		})
		.on('keyup', (ev) => {
			switch (ev.keyCode) {
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
					console.log('Escape');
				break;
			}
	});
});

Template.projectList.helpers({
  projects() {
    return Projects.find();
  }
});

Template.projectList.events({
  'mouseenter .project-pane': (ev) => {
    $(ev.currentTarget).toggleClass('hover');
  },
  'mouseleave .project-pane': (ev) => {
    $(ev.currentTarget).toggleClass('hover');
  }
});
