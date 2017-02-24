
function main() {

(function () {
   'use strict';
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

	
    // Show Menu on Book
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 500;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });

	// Hide nav on click
  $(".navbar-nav li a").click(function (event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });
	
  	// Portfolio isotope filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

        $('#reservar').click(function() {
            if($('#contactForm div div div input').filter(function(){
                return !$(this).val();
            }).length === 0){
                $('#modal-message').text('Su reserva ha sido confirmada correctamente.Gracias.');
            }else{
                $('#modal-message').text('Para confirmar su reserva debe completar todos los campos.');
            }
            $('#modalReserva').modal('show');
        });

        $('#enviar').click(function() {
            if($('#contactForm div div div input').filter(function(){
                return !$(this).val();
            }).length === 0 && $('#contactForm div textarea').val() !== ''){
                $('#modal-message').text('Su mensaje ha sido enviado correctamente. ' + 
                    'Le responderemos lo antes posible. Gracias.');
            }
            $('#modalContacto').modal('show');
        });
        var currentDate = new Date();
        $('.media-body h4 small i').text(currentDate.getDate() + "/" + (currentDate.getMonth() + 1) + "/" +
            currentDate.getFullYear());
    });
	
    // Nivo Lightbox 
    $('.portfolio-item a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });

}());


}
main();