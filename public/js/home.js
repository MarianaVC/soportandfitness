var Home = function(){
	function mainSlider(){
		var slider = $(".mainSlider");
		slider.owlCarousel({
			mouseDrag : false,
			animateOut : 'fadeOut',
			singleItem : true,
			items: 1,
			nav: true,
			loop: true,
			navText: ["<",">"]
		});
	}

	function smallCarousel(){
		var options = {};
			options.mouseDrag = false;
			options.autoWidth = true;
			options.nav = true;
			options.margin = 25;
			options.loop = true;
			options.center = true;
			options.navText = ["<",">"];

			$('.smallCarousel').owlCarousel(options);
	}

	function start(){
		mainSlider();
		smallCarousel();
	}
	
	return{
		start:start
	}
}();

$(function(){
	Home.start();
});