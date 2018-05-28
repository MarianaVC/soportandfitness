var Contact = function(){

	function addError(element){
		if(!element.hasClass("error")){
			element.addClass("error");
		}
	}

	function removeError(element){
		if(element.hasClass("error")){
			element.removeClass("error");
		}
	}

	function validForm(form){
		var error = false;
		form.find('input').removeClass("error");

		form.find('input[type="text"],input[type="tel"]').each(function(){
			if(!$(this).val().length>0){
				addError($(this));
				error=true;
			}
			else{
				removeError($(this));
			}
		});

		form.find('input[type="email"]').each(function(){
			if(!$(this).val().length>0){
				addError($(this));
				error=true;
			}
			else{
				var mailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
				if(!mailRegex.test($(this).val())){
					addError($(this));
					error=true;
				}
				else{
					removeError($(this));
				}
			}
		});

		form.find('textarea:not(.form-no-obligatorio)').each(function(){
			if(!$(this).val().length>0){
				addError($(this));
				error=true;
			}
			else{
				removeError($(this));
			}
		});

		return error;
	}
	
	function sendForm(e){
		e.preventDefault();
		var form = $(this).closest("form");
		var isValid = validForm(form);
	}

	function start(){
		$(".btnSubmit").on('click', sendForm);
	}
	
	return{
		start:start
	}
}();

$(function(){
	Contact.start();
});