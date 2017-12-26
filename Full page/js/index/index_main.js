$(function(){
	var $window = $(window).height();
	$("#index_main_carousel_container").css("height", $window);
	
	$(window).resize(function(){
		var $window = $(window).height();
		$("#index_main_carousel_container").css("height", $window);
	});
});