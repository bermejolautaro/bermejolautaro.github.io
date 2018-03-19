$(document).ready(function(){
	navScroll(); //Chequea si el scroll es mayor que 0 y ajusta el nav
	$(window).scroll(function(){
		navScroll();
		
		/*ESCONDER MENU SI SCROLLEAS*/
		if($(".navbar-toggle").css("display") == "flex"){
			$(".navbar-items").slideUp();
		}
		/*---------*/
	});
	
	$(window).resize(function(){
		if($(".navbar-toggle").css("display") == "none"){
			$(".navbar-items").css("display", "flex");
		}		
		else{
			$(".navbar-items").css("display", "none");
		}
	});
	
	$(".navbar-toggle a").click(function(){
		$(".navbar-items").slideToggle();
	});
	
});

$(window).on("load", function(){
	setTimeout(function(){
		$("body").removeClass("preload");
	}, 100);
});

function navScroll(){
	if ($(window).scrollTop() < 10) {
		$(".navbar-toggle a").removeClass("dark-nav-toggle");
		$(".navbar-brand a").removeClass("dark-nav-a dark-nav");
		$(".nav ul li a").removeClass("dark-nav-ul dark-nav");
		$(".nav ul li").removeClass("dark-nav-ul dark-nav");
		$(".nav").removeClass("dark-nav resize-nav");
		$(".navbar-items").removeClass("resize-navbar-items");
	} else {
		$(".navbar-toggle a").addClass("dark-nav-toggle");
		$(".navbar-brand a").addClass("dark-nav-a dark-nav");
		$(".nav ul li a").addClass("dark-nav-ul dark-nav");
		$(".nav ul li").addClass("dark-nav-ul dark-nav");
		$(".nav").addClass("dark-nav resize-nav");
		$(".navbar-items").addClass("resize-navbar-items");
	}
}