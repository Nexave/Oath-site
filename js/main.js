$(document).ready(function(){
	$('.about__toggle').click(function(event){
		event.preventDefault()
		console.log('klik')




		$('.about-content__box').hide();
		var href = $(this).attr('href')
		$(href).fadeIn()
	});
	var windowheight=$(window).height()
	$(window).scroll(function(){
		console.log($(this).scrollTop());

		if($(this).scrollTop() > windowheight) {
			$('#scrollToTop').fadeIn();
		} else {
			$('#scrollToTop').fadeOut();
		}
	})
	$('#scrollToTop').click(function(event){
		event.preventDefault();
		$('html').animate({scrollTop:0},800)
	})

});