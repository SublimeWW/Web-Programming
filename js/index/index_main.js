$(function(){
	var $window = $(window).height();
	var section_height = $("#index_main").height();
	$("#index_main_background").css("height", $window);
	$("#index_main").css("padding-top", $window - section_height - 50);
	
	$(window).resize(function(){
		var $window = $(window).height();
		var section_height = $("#index_main").height();
		$("#index_main_background").css("height", $window);
		$("#index_main").css("padding-top", $window - section_height - 50);
	});
});