Template.carousel.onRendered(() => {
	let $carousel = $('#carousel');
	$carousel.slick({
		arrows: !Modernizr.touch ? true : false
	});
	setTimeout(() => {
		$carousel.attr('tabindex', -1).focus();
	}, 100);

});


Template.carousel.helpers({
	logo(){
		if (this.projectId){
			return `/images/projects/${this.projectId}/${this.logo}`;
		}
	},
	slides(){
		if (this.projectId){
			return Array.from(this.slides, slide => `/images/projects/${this.projectId}/${slide}`);
		} else {
			return this.slides;
		}
	}
});

Template.carousel.events({
	'keydown *': (event) => {
		let ignoredKeys = [37, 39, 27];
		if (ignoredKeys.indexOf(event.keyCode)) event.preventDefault();
	},
	'keyup *': (event) => {
		switch (event.keyCode) {
			case 37:
				$('#carousel').slickPrev();
			break;
			case 39:
				$('#carousel').slickNext();
			break;
			case 27:
				console.log('Escape to Home');
				FlowRouter.go('index');
			break;
		}
	}
});
