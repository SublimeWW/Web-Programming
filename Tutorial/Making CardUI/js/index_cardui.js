$(document).ready(function(){
		$(".index_cardui_card").hover(function(){
			var $ImageHeight = $(this).height();
			var $ImageWidth = $(this).width();
			$(this).find("nav").fadeIn(0);
			$(".index_cardui_card_discription").css("margin-top", ($ImageHeight - 134) + "px");
			$(".index_cardui_card_discription").css("width", ($ImageWidth) + "px");
	},							 
	function(){
		$(this).find("nav").fadeOut(0);
			$(".index_cardui_card_discription").delay(0).css("margin-top", " ");
	});
});