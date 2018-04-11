var Header = function(){
	function scrollHeader(){
		var $header = $("#header");
		var $phone = $("#phone");
		var safeTop = 110;
		var scrollBefore = 0;

		$(window).scroll(function (e) {
			if(scrollBefore > $(this).scrollTop()){
				$header.addClass("scroll-reverse");
				$phone.addClass("scroll-reverse");
			}
			else{
				$header.removeClass("scroll-reverse");
				$phone.removeClass("scroll-reverse");
			}
			if ($(this).scrollTop() > safeTop){
				$header.addClass("scroll");
				$phone.addClass("scroll");
				$phone.removeClass("active");
			}
			else{
				$header.removeClass("scroll");
				$header.removeClass("scroll-reverse");
				$phone.removeClass("scroll");
				$phone.removeClass("scroll-reverse");
			}
			scrollBefore = $(this).scrollTop();
		});
	}
	
	function start(){
		scrollHeader();
	}
	
	return{
		start:start
	}
}();

var Menu = function(){
	function toggleMenu(event) {
		typeof event !== 'undefined' && event.preventDefault();
		if( $('#menu').hasClass('open') ) {
			closeMenu();
		}
		else {
			openMenu();
		}
	}

	function openMenu() {
		$('body').css('overflow', 'hidden');
		$('#menu').addClass('open');
		$('#header').addClass('open');
	}

	function closeMenu() {
		$('#menu').removeClass('open');
		$('#header').removeClass('open');
		$('body').css('overflow', 'visible');
	}

	function start(){
		$('.toggleMenu').on('click', toggleMenu);
	}
	return{
		toggleMenu:toggleMenu,
		start:start
	};

}();

var IsMobile = function() {
	function checkMobile(){
		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			return true;
		}
		else {
			return false;
		}
	}
	function start(){
		if(!checkMobile()){
			$('body').addClass('desktop');
		}
	}
	return{
		checkMobile:checkMobile,
		start:start
	};
}();

$(function(){
	IsMobile.start();
	Menu.start();
});
