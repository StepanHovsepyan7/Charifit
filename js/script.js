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

    let playicon = $('.fa-circle-play');
    playicon.click(function(){
        $('.avideo');
    })

   
    $({ countNum: 0 }).animate({ countNum: 120 }, {
        delay: 1500,
        duration: 4500,
        easing: 'linear',
        step: function(countNum) {
          $(".flexh4").text(Math.ceil(countNum))
        },
    });

});


