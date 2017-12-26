// JavaScript Document

$(document).ready(function(){
	
	var $all = $("#index_main_carousel_container");
	var $first = $all.children().eq(0);
	var $second = $all.children().eq(1);
	var $third = $all.children().eq(2); 
	
	$first.css("display", "block");
	$second.css("display", "none");
	$third.css("display", "none");
	
	$('#slide_icon_L_container').hover(function(){$('#slide_icon_L').fadeIn(0);}, function(){$('#slide_icon_L').fadeOut(0);});
	$('#slide_icon_R_container').hover(function(){$('#slide_icon_R').fadeIn(0);}, function(){$('#slide_icon_R').fadeOut(0);});
	
	function reset_timer() {
		clearTimeout(timer);
		setTimeout(timer, 7000);
	}
	
	var timer = setTimeout(timer, 7000);

	$('#slide_icon_L_container').click(function(){
		
		
		if($first.is(':visible') === true ) {
			$first.fadeOut(0);
			$third.fadeIn(0);
		}
		
		else if($second.is(':visible') === true) {
			$second.fadeOut(0);
			$first.fadeIn(0);
		}
		
		else if($third.is(':visible') === true) {
			$third.fadeOut(0);
			$second.fadeIn(0);
			reset_timer();
		}
	});

	
	$('#slide_icon_R_container').click(function(){
		
		
		if($first.is(':visible') === true ) {
			$first.fadeOut(0);
			$second.fadeIn(0);
		}
		
		else if($second.is(':visible') === true) {
			$second.fadeOut(0);
			$third.fadeIn(0);
		}
		
		else if($third.is(':visible') === true) {
			$third.fadeOut(0);
			$first.fadeIn(0);
			reset_timer();
		}

	});
	
	function timer(){
  		if($first.is(':visible') === true ) {
			$first.fadeOut(0);
			$second.fadeIn(0);
		}
		
		else if($second.is(':visible') === true) {
			$second.fadeOut(0);
			$third.fadeIn(0);
		}
		
		else if($third.is(':visible') === true) {
			$third.fadeOut(0);
			$first.fadeIn(0);
		}
			setTimeout(timer, 7000);
	}
});