var Activities = function(){
	function setupVideo(){
		if( $("body").hasClass("desktop") ) {
			$(".activityVideo").each(function(i){
				var videoCont = $(this);
				var attributes = {
					'id': 'video-player-' + i,
					'width': 400,
					'height': 400,
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

			});
		}
		else{
			$(".activityVideo").remove();
		}
	}

	function playVideo(e){
		e.preventDefault();
		target = $(e.currentTarget);
		id = target.find('video').attr('id');
		videoP = document.getElementById(id);
		playPromise = videoP.play();

		if (playPromise !== undefined) {
			playPromise.then(_ => {
				target.data('loaded', true);
			})
			.catch(error => {
				console.log(error);
			});
		}
	}

	function stopVideo(e){
		e.preventDefault();
		target = $(e.currentTarget);
		if(target.data('loaded')){
			id = target.find('video').attr('id');
			videoP = document.getElementById(id);
			videoP.pause();
		}
	}

	function start(){
		setupVideo();
		if( $("body").hasClass("desktop") ) {
			$('.openPopup').mouseenter(playVideo);
			$('.openPopup').mouseleave(stopVideo);
		}
	}
	
	return{
		start:start
	}
}();

$(function(){
	Activities.start();
});