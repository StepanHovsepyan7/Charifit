'use strict'

$(function(){

	$(window).bind('scroll', function() {
	   var navHeight = $( window ).height() - 860;
			if ($(window).scrollTop() > navHeight) {
				 $('.navBack').addClass('fixed');
                 $('.navBack').css({
                    width: '100%',
                    marginLeft: '0px',
                    marginTop: '0px',
                    borderRadius: '0px',
                })
			}
			 else {
				 $('.navBack').removeClass('fixed');
                 $('.navBack').css({
                    width: '90%',
                    marginTop: '0',
                    margin: "0 5%",
                    borderRadius: '10px',
               })
			}

            let scr = $(window).scrollTop() + $(window).height();
            let reasonSection = $(".reasonSection").offset().top + $(".reasonSection").height() / 2;

            if(scr >= reasonSection) {
                $(".reasonSection").css({
                    display: "block",
                })
            }
	});

});


