Template.projectList.onCreated(() => {
  Template.instance().subscribe('allProjects');

	let $body = $('body');

	$body.on('mousewheel', function(event, delta) {
		console.log(event, delta);
		$body[0].scrollLeft -= Math.round(parseInt(delta * 45));
		return false;
	});
});

Template.projectList.helpers({
  projects() {
    return Projects.find();
  }
});

Template.projectList.events({
  'mouseenter .projectPane': (ev) => {
    $(ev.currentTarget).toggleClass('hover');
  },
  'mouseleave .projectPane': (ev) => {
    $(ev.currentTarget).toggleClass('hover');
  }
});
