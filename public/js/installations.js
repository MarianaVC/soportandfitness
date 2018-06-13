var MenuScroll = function(){

	function measureScroll(e){
		$('.menuScroll').each(function(){
			$this = $(this);
			inner = $this.find('.menuScrollInner');
			if($this.width() < inner.width()){
				$this.find('.menuControl.right').addClass('active');
			}
		});
	}

	function moveRight(e){
		e.preventDefault();
		var parent = $(this).closest('.menuScroll');
		var inner = parent.find('.menuScrollInner');
		var max = parseInt(parent.width() - inner.width());
		var margin = parseInt(inner.css('margin-left'));
		if(margin >= max){
			inner.css('margin-left', margin - 60);
		}
		if((margin-60) < max){
			$(this).removeClass('active');
		}
		if((margin-60) < 0){
			parent.find('.menuControl.left').addClass('active');
		}
	}

	function moveLeft(e){
		e.preventDefault();
		var parent = $(this).closest('.menuScroll');
		var inner = parent.find('.menuScrollInner');
		var max = parseInt(parent.width() - inner.width());
		var margin = parseInt(inner.css('margin-left'));
		if(margin < 0){
			inner.css('margin-left', margin + 60);
			parent.find('.menuControl.right').addClass('active');
		}
		if((margin+60) >= 0){
			$(this).removeClass('active');
		}
	}

	function start(){
		measureScroll(null);
		$('.menuControl.right').on('click', moveRight);
		$('.menuControl.left').on('click', moveLeft);
		$( window ).resize(measureScroll);
	}
	
	return{
		start:start
	}
}();

var Installations = function(){

	function toggleBranch(e){
		e.preventDefault();
		var $this = $(e.currentTarget);
		var target = $this.data('target');
		$('.targetBranch, .toggleBranch').removeClass('active');
		$('#' + target + ', .' + target).addClass('active');
	}

	function start(){
		$('.toggleBranch').on('click', toggleBranch);
	}
	
	return{
		start:start
	}
}();

$(function(){
	Installations.start();
	MenuScroll.start();
});