'use strict'

let owl

$(document).ready(function(){
  owl = $(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    items: 1,
    autoplay: true,
  });
});

$('#next').click(function() {
  owl.trigger('next.owl.carousel');
})

$('#prev').click(function() {
  owl.trigger('prev.owl.carousel');
})