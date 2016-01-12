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
			scrollDistance = 170,
			mobileThreshold = Breakpoint.get().getBreakpoints().sm.max,
			currentBreakpoint = Breakpoint.get().current(),
			sideScroll = ()  => {
				let
					currentDistance = $track.scrollLeft(),
					delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;

				$track.scrollLeft(currentDistance -= Math.round(parseInt(delta * scrollDistance)));

				return false;
			},
			normalScroll = () => {
				let
					scrollTop = $track.scrollTop(),
					delta = event.originalEvent.wheelDelta / 120 || event.originalEvent.detail;

				$track.scrollTop(scrollTop - Math.round(delta * 50));
			},
			chooseScroll = (callbackFn) => {
				if (Breakpoint.get().getBreakpoints()[currentBreakpoint].max < mobileThreshold){
					normalScroll();
				} else {
					sideScroll();
				}
				if (callbackFn) callbackFn();
			},
			windowResizeListener = () => {
				$(window).on('change:breakpoint', function (e, current, previous) {
					chooseScroll();
				});
			},
			init = () => {
				windowResizeListener();
				chooseScroll();
			};

			init();

	},
	'keydown *': (event) => {
		let ignoredKeys = [13, 37, 39, 27];
		if (ignoredKeys.indexOf(event.keyCode)) event.preventDefault();
	},
	'keyup *': (event) => {
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
