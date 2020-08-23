$(document).ready(function(){

	// BURGER

	let burger = document.getElementById("burger");
	let menu = document.getElementById("menu");

	if(innerWidth < 768)
	{
		burger.onclick = function() {
			burger.classList.toggle("header__burger_active");
			menu.classList.toggle("header-menu_active");
			if(burger.classList.contains('header__burger_active'))
				document.body.style.overflow = 'hidden';
			else
				document.body.style.overflow = 'visible';
		}
	}
	else
	{
		burger.classList.remove("header__burger_active");
		menu.classList.remove("header-menu_active");
		document.body.style.overflow = 'visible';
	}

	// SETTINGS OF SLICK SLIDER

	$('.slider').slick({
		autoplay: true,
		draggable: false
	})
	
});
