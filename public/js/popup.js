var Popup = function(){
	var popupArray = [];
	var actualPopup = '';

	function fillPopupArray(){
		$('.openPopup').each(function(){
			popupArray.push($(this).attr('id'));
		});
	}

	function fillPopupArrayDina(el){
		var parent = el.closest('.galleryContainer');
		var pops = parent.find('.openPopup');
		popupArray = [];
		pops.each(function(){
			popupArray.push($(this).attr('id'));
		});
	}

	function openPopup(e){
		e.preventDefault();
		target = $(e.currentTarget);
		fillPopupArrayDina(target);
		actualPopup = popupArray.indexOf(target.attr('id'));
		content = target.find('.popupContent').clone();
		$('#popContent').html(content);
		$('#popup').addClass('active');
		$('body').css('overflow', 'hidden');
	}
	
	function closePopup(e){
		e.preventDefault();
		$('#popup').removeClass('active');
		$('body').css('overflow', 'visible');
	}
	
	function prevPopup(e){
		e.preventDefault();
		var pop = '';
		if(actualPopup >= 1){
			pop = popupArray[actualPopup - 1];
		}
		else{
			pop = popupArray[popupArray.length - 1];
		}

		$('#' + pop).trigger('click');
	}
	
	function nextPopup(e){
		e.preventDefault();
		var pop = '';
		if(actualPopup < popupArray.length - 1){
			pop = popupArray[actualPopup + 1];
		}
		else{
			pop = popupArray[0];
		}

		$('#' + pop).trigger('click');
	}

	function keyGalleryEvent(e){
		if(e.keyCode == 27){ /* flecha izquierda */
			closePopup(e);
		}
		else if(e.keyCode == 39){ /* flecha derecha */
			prevPopup(e);
		}
		else if(e.keyCode == 37){ /* flecha izquierda */
			nextPopup(e);
		} 
	}

	function start(){
		//fillPopupArray();
		$(document).keyup(keyGalleryEvent);
		$('.openPopup').on('click', openPopup);
		$('.closePopup').on('click', closePopup);
		$('.prevPopup').on('click', prevPopup);
		$('.nextPopup').on('click', nextPopup);
		$('#popContent').swipe( {
			swipeLeft:function(event, direction, distance, duration, fingerCount) {
				prevPopup(event);
			},
			swipeRight:function(event, direction, distance, duration, fingerCount) {
				nextPopup(event);
			},
			threshold:0
		});
	}
	
	return{
		start:start
	}
}();

$(function(){
	Popup.start();
});