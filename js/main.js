$(".footer-links1").click(function(){
	$(this).toggleClass("footer-links1--active ul");
})

$(".footer-links2").click(function(){
	$(this).toggleClass("footer-links2--active ul");
})

$(".footer-social").click(function(){
	$(this).toggleClass("footer-social--active ul");
})

$(".navigation-menu__burger").click(function(){
	$(".navigation-menu__burger-item").toggleClass("navigation-menu__burger-item--active");
	$(".navigation-menu__burger").toggleClass("navigation-menu__burger--active");
	$(".navigation--wrapper").toggleClass("navigation--wrapper--active");
	$(".navigation-list").toggleClass("navigation-list--active");
	$(".navigation-logo").toggleClass("navigation-logo--active");
})

/*Header navigation burger*/
$(".header-menu__text, .header-menu__burger").click(function(){
	$(".header-nav").toggleClass("header-nav--active");
	$(".header-menu__text").toggleClass("header-menu__text--disable");
	$(".header-menu__burger-item").toggleClass("header-menu__burger-item--active");
	$(".header-menu__burger").toggleClass("header-menu__burger--active");
	$(".header-top").toggleClass("header-top--active");
	$(".header-menu__burger").toggleClass("header-menu__burger--active-mob");
	$(".header-menu").toggleClass("header-menu--active");
});

/*Navigation fixed*/
$(window).scroll(function(){
	let aboutHeight = $(".about").offset().top;
	let sticky = $('.navigation'),
	scroll = $(window).scrollTop(),
	capture = $(".about-capture");
	if (scroll >= aboutHeight)sticky.addClass('navigation--active', 1000, 'easeOutBounce'),capture.addClass("about-capture--active");
	else sticky.removeClass('navigation--active'),
		capture.removeClass("about-capture--active");
});

/* Parallax*/
$(window).scroll("load",function(){
	let st = $(this).scrollTop();
	let parallax = $(".about").offset().top;
	if($(window).width()>=1200){
		$(".header").css({
			"background-position-y": "+" + st/3 + "px"
		});

		$(".header-top").css({
			"transform" : "translate(0%, " + st /2.0 +"%"
		});

		$(".header-bottom").css({
			"transform" : "translate(0%, " + st /15.7 +"%"
		});
	}if($(window).scrollTop()>= parallax){
		$(".header-top").css({
			"transform" : "translate(0%, " + st * 0 +"px"
		});
		$(".header").css({
			"background-position-y": "+" + st * 0 + "px"
		});

		$(".header-bottom").css({
			"transform" : "translate(0%, " + st * 0 +"%"
		});
	}
});

$(".header-nav__list a, .navigation-list a, .navigation--wrapper .navigation-logo").click(function(e){
	e.preventDefault();
	var element = $(this).attr("href");
	var dist = $(element).offset().top;

	$("html, body").animate({"scrollTop": dist}, 500);
	return
});

/*Map*/

$(".footer-map").click(function(e){
	e.preventDefault();
	$(".map").addClass("map--active");
})

$(".map-closer").click(function(e){
	$(".map").removeClass("map--active");
})

window.addEventListener("keydown", function(evt){
	if(evt.keyCode === 27){
		evt.preventDefault();
		$(".map").removeClass("map--active");
	}
})

$(document).mouseup(function(e){
	e.preventDefault();
	var container = $(".map--acitve");
	if (container.has(e.target).length === 0){
		$(".map").removeClass("map--active");

	}
});