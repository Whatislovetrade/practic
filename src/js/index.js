'use strict'

$(document).ready(function(){
    $('.carousel__inner').slick(
        {
            infinity: true,
            speed: 1200,
            adaptiveHeight: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="../icons/slider/arrowleft.svg"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="../icons/slider/arrowright.svg"></button>',
            responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    infinite: true,
                    dots: false
                  }
                },
              ]
        }
    )
})