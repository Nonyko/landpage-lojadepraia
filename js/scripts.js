
$(document).ready(function(){
    $('.slides').slick({
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      autoplay: true,
      autoplayspeed: 3000,
      focusOnSelect: true,
      accessibility: false,
      draggable: true,
      fade: true,
      cssEase: 'linear'
    });
    $('.slides-vitrine').slick({ 
        
      
      infinite: true,
      speed: 500,
      arrows: true,
      autoplay: true,
      autoplayspeed: 3000,
      focusOnSelect: true,
      draggable: true,
      cssEase: 'linear',
      slidesToShow: 5,
      slidesToScroll: 1,
      adaptiveHeight: true
    });
  });
  
  