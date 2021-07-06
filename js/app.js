$(document).ready(function() {
    

    // navBtn
    $('.navBtn').click(function(){$('.nav-items').slideToggle(1000)})
    // magnifier
  $('.image-link').magnificPopup({type:'image'});
  //owl
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        769:{
            items:2,
            nav:false
        },
        1170:{
            items:3,
            nav:true,
            loop:true
        }
    }
})

});
// nav-fix
$(window).scroll(function(){
    let scroll = $(window).scrollTop();
    console.log(scroll);
    if(scroll > 70){
        console.log($('nav'));
        $('nav').addClass('nav-fixed');
    }
    else{
        $('nav').removeClass('nav-fixed');

    }
})

$('.nav-items a').click(function(link){

    link.preventDefault();
    let target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    },'slow')
})