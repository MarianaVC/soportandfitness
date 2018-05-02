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
			$(".full-screen-video").each(function(){
				var videoCont = $(this);
				var attributes = {
					'id': 'video-player',
					'class': 'video-js vjs-default-skin',
					'width': 1920,
					'height': 1080,
					'poster': videoCont.data('poster'),
					'controls': false,
					'preload': 'auto',
					'autoplay': false,
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


				videoP = document.getElementById('video-player');
				videoP.addEventListener('loadeddata', function() {
					videoCont.addClass("loaded");
					//videoPlayer = videojs('video-player');
					//videoPlayer.play();// Video is loaded and can be played
					videoP.play();
				}, false);
			});
		}
		else{
			$(".full-screen-video").remove();
		}
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