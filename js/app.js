$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
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