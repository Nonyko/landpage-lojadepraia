
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
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  });
  
