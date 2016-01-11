let Breakpoint = new ReactiveVar();

Template.projectList.onCreated(() => {
  Template.instance().subscribe('allProjects');
});

Template.projectList.onRendered(() => {
	Breakpoint.set(Modules.client.Breakpoint);

  if (!Modernizr.touch){
		$('#projectList').append('<div class="icon-scroll"></div>');
	}
});

Template.projectList.helpers({
  projects() {
    return Projects.find();
  },
	Breakpoint: function () {
    return Template.instance().state.get('Breakpoint');
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
			scrollDistance = 170;

		function sideScroll(){
			console.log('site is side scrolling.');
			let	currentDistance = $track.scrollLeft(),
					delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;

			$track.scrollLeft(currentDistance -= Math.round(parseInt(delta * scrollDistance)));

			return false;
		}
		function normalScroll(){

			console.log('site is normal scrolling.');
			// $track.unbind('mousewheel'); //.animate({'scrollTop': (currentDistance -= Math.round(parseInt(delta * scrollDistance)))});
			let scrollTop = $track.scrollTop(),
					delta = event.originalEvent.wheelDelta || event.originalEvent.detail;

					console.log(delta);
 			$track.scrollTop(scrollTop - Math.round(delta * 50));
			console.log(event);
			// return true;
			// if ($track.scrollLeft > 0){
			// 	debugger;
			// } else {
			// 	debugger;
			// }
		}

		if (Breakpoint.get().is('md')){
			sideScroll();
		} else {
			normalScroll();
		}
		$(window).on('change:breakpoint', function (e, current, previous) {
	    console.log('previous breakpoint was', previous);
	    console.log('current breakpoint is', current);
			if (Breakpoint.get().is('md')){
				sideScroll();
			} else {
				normalScroll();
			}
		});
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
