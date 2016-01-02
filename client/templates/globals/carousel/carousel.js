Template.carousel.onRendered(() => {
	let $carousel = $('#carousel');
  $carousel.slick({
    dots: true,
    arrows: !!Modernizr.touch ? false : true,
		infinite: true,
	  slidesToShow: 1
	});
	setTimeout(() => {
		$carousel.focus();
	}, 100);
});


Template.carousel.helpers({
	slides(){
		let project = Template.instance().data;
		return Array.from(project.slides, slide => `/images/projects/${project.projectId}/${slide}`);
	}
});
