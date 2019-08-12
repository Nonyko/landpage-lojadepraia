var $navbar, 
$whitebrand, 
$searchbar, 
$cartbox,
$graybrand,
$iconuserwhite, 
$iconuserblack,
$iconbagwhite, 
$iconbagblack, 
$abrirbuscawhite, 
$fecharbuscawhite,
$abrirbuscablack, 
$fecharbuscablack,
$fecharbagblack,
$backtotop;
var position;
var searchisopen = false;
var bagisopen = false;
var userboxisopen = false;

$(document).ready(function(){
  //preenchendo variaveis pelos ids ao carregar documento.
   $navbar = $("#navbar");
   $navbarbox = $("#box-navbar");
   $whitebrand = $("#brand-white");
   $graybrand = $("#brand-gray");
   $shoshowTransparentMenuItem = $(".shoshowTransparentMenuItem");
   $shoshowTransparentMenuItem = $(".showWhiteMenuItem");
   $iconuserwhite = $("#user-white");
   $iconuserblack = $("#user-black");
   $iconbagwhite = $("#bag-white");
   $iconbagblack = $("#bag-black");
   $searchbar = $("#searchbar");
   $cartbox = $("#cart-box");
   $fecharbuscawhite = $("#fecharbusca-white");
   $abrirbuscawhite = $("#abrirbusca-white");
   $fecharbuscablack = $("#fecharbusca-black");
   $abrirbuscablack = $("#abrirbusca-black");
   $fecharbagblack = $("#fecharbag-black");
   $backtotop = $("#box-btn-backtop");

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
      fade: false,
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
      ]
    });
    
  
    //função referente ao botao de busca
    $(".busca").click(function(){
      $searchbar.fadeToggle();
      if(position > 120){
        $abrirbuscablack.toggle();
        $fecharbuscablack.toggle();
      }else{
        $abrirbuscawhite.toggle();
        $fecharbuscawhite.toggle();
      }
      if(searchisopen){$searchbar.addClass("scale-out-ver-top");}else{$searchbar.removeClass("scale-out-ver-top");}
      searchisopen = !searchisopen;
      
      $('.input-transparent').val('');
    });

    //função referente ao botao de sacola de compras
    $(".bag").click(function(){      
      $cartbox.fadeToggle();     
      if(position > 120){
        $("#bag-black").toggle();
        $fecharbagblack.toggle();
      }else{
        $("#bag-white").toggle();
        $fecharbagblack.toggle();
      }
      $('.badge').toggle();
      if(bagisopen){$cartbox.addClass("scale-out-ver-top");}else{$cartbox.removeClass("scale-out-ver-top");}
      bagisopen = !bagisopen;
    });

    //função referente ao botao de login/cadastro
    $(".user").click(function(){      
      $("#userbox").fadeToggle();
      if(userboxisopen){$("#userlogin").addClass("scale-out-ver-top");}else{$("#userlogin").removeClass("scale-out-ver-top");}
      userboxisopen = !userboxisopen;
    });

    //função referente ao botao de voltar ao topo
    $('#btn-backtop').on('click', function(event) {
      event.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, 'fast');         
    });
  

  });

  
  //função referente ao comportamento do menu de acordo com o scroll
  $(window).scroll(function()
  { 
    position = $(this).scrollTop();
    if( position > 120 ){
   
    $navbarbox.removeClass("position-absolute");
    $navbar.addClass("navbar-white");
    let itenstohide = [$whitebrand, $iconuserwhite, $iconbagwhite];
    let itenstoshow = [$graybrand, $iconuserblack, $iconbagblack, $backtotop];

    $.each(itenstohide, function( i, item ){
      item.addClass("d-none");
    });
    $.each(itenstoshow, function( i, item ){
      item.removeClass("d-none");
    });
    
    if(searchisopen){
      $fecharbuscablack.show();
      $fecharbuscawhite.hide();
    }else{
      $abrirbuscablack.show();
      $abrirbuscawhite.hide();
    }
    if(bagisopen){
      $fecharbagblack.show();
    }else{
      $iconbagblack.show();
      $iconbagwhite.hide();
    }
  } else {
    $navbarbox.addClass("position-absolute");    
    $navbar.removeClass("navbar-white"); 
    let itenstoshow = [$whitebrand, $iconuserwhite, $iconbagwhite];
    let itenstohide = [$graybrand, $iconuserblack, $iconbagblack, $backtotop];
    $.each(itenstohide, function( i, item ){
      item.addClass("d-none");
    });
    $.each(itenstoshow, function( i, item ){
      item.removeClass("d-none");
    });
    if(searchisopen){
      $fecharbuscablack.hide();
      $fecharbuscawhite.show();
    }else{
      $abrirbuscablack.hide();
      $abrirbuscawhite.show();
    }
    if(bagisopen){
      $fecharbagblack.show();
      $('.badge').hide();
    }else{
      $iconbagblack.hide();
      $iconbagwhite.show();
      $('.badge').show();
    }
   
  }
   
});




    