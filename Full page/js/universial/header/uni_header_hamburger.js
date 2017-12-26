// JavaScript Document


$(document).ready(function(){
	

	$('#uni_header_nav_container').find('li').clone(Node).addClass('card_clone').prependTo('.uni_header_modal'); //card_clone은 904픽셀 이상에서 display: none 을 위함.
	var submenu = $("#uni_header_modal_container");
	$('#uni_header_hamburger_container').click(function(e){
  	e.preventDefault();
		if( submenu.is(":visible") ){
			$(this).removeClass("after");
		}else{
			$(this).addClass("after");
		}
  	});
});


$(document).ready(function(){
	$("#uni_header_hamburger_container").click(function(){
		var submenu = $("#uni_header_modal_container");
		if( submenu.is(":visible") ){
			submenu.fadeOut(400);
			enableScroll();
		}else{
			submenu.fadeIn(300);
			$("#uni_header_modal_container").css('height', $(window).height());
			disableScroll();
		}
	});
});


// source referenced by **** https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily ****
function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}


function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}