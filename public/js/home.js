var Home = function(){
	function mainSlider(){
		var slider = $(".mainSlider");
		slider.owlCarousel({
			mouseDrag : false,
			animateOut : 'fadeOut',
			singleItem : true,
			items: 1,
			nav: true,
			loop: false,
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

	function playVideo(){
		if( $("body").hasClass("desktop") ) {
			$(".full-screen-video").each(function(i){
				var videoCont = $(this);
				var id = 'video-player' + i;
				var attributes = {
					'id': id,
					'class': 'video-js vjs-default-skin',
					'width': 1920,
					'height': 1080,
					'poster': videoCont.data('poster'),
					'controls': false,
					'preload': 'auto',
					'autoplay': true,
					'loop': true,
					'muted': true,
					'data-setup': '{ "controls": false, "preload": "auto" }'
				};

				var source = document.createElement('source');
				$(source).attr('type', 'video/mp4');
				$(source).attr('src', videoCont.data('video'));
				var obj = $('<video />').attr(attributes);
				videoCont.append(obj);
				$(obj).append(source);


				var videoP = document.getElementById(id);
				videoP.addEventListener('loadeddata', function() {

					var promise = videoP.play();
					videoCont.addClass("loaded");

					if (promise !== undefined) {
						promise.then(_ => {

						}).catch(error => {
							var btnPlay = videoCont.find('.play');
							btnPlay.addClass('active');
							btnPlay.data('video', id);
							btnPlay.on('click', manualPlay);
						});
					}

				}, false);
			});
		}
		else{
			$(".full-screen-video").remove();
		}
	}

	function manualPlay(e){
		e.preventDefault();
		var target = $(e.currentTarget);
		var id = target.data('video');
		var videoCont = target.closest('.full-screen-video');
		var videoP = document.getElementById(id);
		target.removeClass('active');
		videoP.play();
		videoCont.addClass('loaded');
	}

	function start(){
		playVideo();
		mainSlider();
	}
	
	return{
		start:start
	}
}();

$(function(){
	Home.start();
});