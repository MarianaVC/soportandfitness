var Popup = function(){
	var popupArray = [];
	var actualPopup = '';

	function fillPopupArray(){
		$('.openPopup').each(function(){
			popupArray.push($(this).attr('id'));
		});
	}

	function openPopup(e){
		e.preventDefault();
		target = $(e.currentTarget);
		actualPopup = popupArray.indexOf(target.attr('id'));
		content = target.find('.popupContent').clone();
		$('#popContent').html(content);
		$('#popup').addClass('active');
	}
	
	function closePopup(e){
		e.preventDefault();
		$('#popup').removeClass('active');
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

	function start(){
		fillPopupArray();
		$('.openPopup').on('click', openPopup);
		$('.closePopup').on('click', closePopup);
		$('.prevPopup').on('click', prevPopup);
		$('.nextPopup').on('click', nextPopup);
	}
	
	return{
		start:start
	}
}();

$(function(){
	Popup.start();
});