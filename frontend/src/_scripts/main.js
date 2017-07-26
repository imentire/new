// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = window.jQuery = require('jquery');
require('owl.carousel');
var Link = require('../_modules/link/link');

$(function() {
    new Link(); // Activate Link modules logic
    $('.ui-price-cart').hover(function() {
        $('.ui-price-cart').removeClass('ui-price-cart__item--active');
        $(this).addClass('ui-price-cart__item--active');
    });
});
$(function() {
    var owlMake = $('.js-make-carousel');
    owlMake.owlCarousel({
        items: 1,
        loop: true,
        dotData: true,
        dots: true,
        dotsContainer: '.ui-make-slider__dots'
    });
    $('.js-make-carousel-next').on('click', function() {
        owlMake.trigger('next.owl.carousel');
    });
    $('.js-make-carousel-prew').on('click', function() {
        owlMake.trigger('prev.owl.carousel');
    });
});

$(function() {
    var owlCustomer = $('.js-confidence-carousel');
    owlCustomer.owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        dots: true,
        dotsContainer: '#customDots',
        responsive: {
            0: {
                items: 1
            },
            544: {
                items: 3
            },
            940: {
                items: 4
            }
        }
    });

    $('.js-confidence-carousel-next').on('click', function() {
        owlCustomer.trigger('next.owl.carousel');
    });
    $('.js-confidence-carousel-prew').on('click', function() {
        owlCustomer.trigger('prev.owl.carousel');
    });
});
