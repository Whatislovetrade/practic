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
  $('#next').click(function() {
    owl.trigger('next.owl.carousel');
  })
  
  $('#prev').click(function() {
    owl.trigger('prev.owl.carousel');
  })
  
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });
  
  function toggleSlide(item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault()
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active')
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
      })
    })
  }

  toggleSlide('.catalog-item__link')
  toggleSlide('.catalog-item__back')

});

