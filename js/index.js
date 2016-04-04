$(document).ready(function(){
	$(window).scroll(function(event){

		var y = $(this).scrollTop();

		if(y >= 80){
			
			$('#custom-nav').addClass('main-menu-white');
			$('#menu-a-black').addClass('menu-a-black li a');
			$('#brand').addClass('brand-black');
			$('ul li span').addClass('brand-black');
		}

		if(y < 100){
			
			$('#custom-nav').removeClass('main-menu-white');
			$('#menu-a-black').removeClass('menu-a-black');
			$('#brand').removeClass('brand-black');
			$('ul li span').removeClass('brand-black');
		}


		
	});
});