// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = window.jQuery = require('jquery');
require('owl.carousel');
var Link = require('../_modules/link/link');

$(function() {
  new Link(); // Activate Link modules logic
  console.log('Welcome to Yeogurt!');
});

$(function() {
    var owlCustomer = $('.js-confidence-carousel');
    owlCustomer.owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
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
