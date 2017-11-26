// JavaScript Document


/*------------------------------------------------Visual Effect-----------------------------------------------------*/
$(document).ready(function(){
	$('#uni_header_nav_container').find('li').clone(Node).prependTo('#uni_header_hamburger_modal_container');
	
	var submenu = $("#uni_header_hamburger_modal_container");
	$('#uni_header_hamburger_bar').click(function(e){
  	e.preventDefault();
	if(submenu.is(":visible") ){
		$(this).removeClass("after");
	} else {
		$(this).addClass("after");
	}
  });
});


$(document).ready(function(){
	
	$("#uni_header_hamburger_bar").click(function(){
		var submenu = $("#uni_header_hamburger_modal_container");
		if( submenu.is(":visible") ){
			submenu.fadeOut(400);
			enableScroll();
			
		}else{
			submenu.fadeIn(400);
			$("#uni_header_hamburger_modal_container").css('height', $(window).height());
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