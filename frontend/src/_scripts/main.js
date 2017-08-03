// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = window.jQuery = require('jquery');
require('owl.carousel');
require('magnific-popup');

$(function() {
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

$(function() {
    var fromData = {
        name: $('.js-cooperation-field-name'),
        email: $('.js-cooperation-field-email'),
        phone: $('.js-cooperation-field-phone')
    };

    var $blockError = $('.js-cooperation-error');
    var $blockSuccess = $('.js-cooperation-success');

    $('.js-cooperation-button').on('click', function() {
        if (!fromData.name.val()) {
            $blockError.find('.ui-alert').text('Введите ваше имя').show(100);
            return;
        }
        else if (!fromData.email.val() && !fromData.phone.val()) {
            $blockError.find('.ui-alert').text('Введите адрес вашей электронной почты или телефон').show(100);
            return;
        }
        else {
            $blockError.find('.ui-alert').text('').hide();
            $('.js-cooperation-form, .js-cooperation-button').hide();
            $blockSuccess.find('.ui-alert').show();
        }
    });
});

$(function() {
    var fromData = {
        name: $('.js-request-field-name'),
        email: $('.js-request-field-email'),
        phone: $('.js-request-field-phone')
    };

    var $blockError = $('.js-request-error');
    var $blockSuccess = $('.js-request-success');

    $('.js-request-button').on('click', function() {
        if (!fromData.name.val()) {
            $blockError.find('.ui-alert').text('Введите ваше имя').show(100);
            return;
        }
        else if (!fromData.email.val() && !fromData.phone.val()) {
            $blockError.find('.ui-alert').text('Введите адрес вашей электронной почты или телефон').show(100);
            return;
        }
        else {
            $blockError.find('.ui-alert').text('').hide();
            $('.js-request-form, .js-request-button').hide();
            $blockSuccess.find('.ui-alert').show();
        }
    });
});

$(function() {
    var fromData = {
        name: $('.js-feedback-field-name'),
        email: $('.js-feedback-field-email'),
        phone: $('.js-feedback-field-phone'),
        text: $('.js-feedback-field-text')
    };

    var $blockError = $('.js-feedback-error');
    var $blockSuccess = $('.js-feedback-success');

    $('.js-feedback-button').on('click', function() {
        if (!fromData.name.val()) {
            $blockError.find('.ui-alert').text('Введите ваше имя').show(100);
            return;
        }
        else if (!fromData.email.val() && !fromData.phone.val()) {
            $blockError.find('.ui-alert').text('Введите адрес вашей электронной почты или телефон').show(100);
            return;
        }
        else if (!fromData.text.val() ) {
            $blockError.find('.ui-alert').text('Введите текст вашего вопроса').show(100);
            return;
        }
        else {
            $blockError.find('.ui-alert').text('').hide();
            $('.js-feedback-form, .js-feedback-button').hide();
            $blockSuccess.find('.ui-alert').show();
        }
    });
});

$(function() {
    var fromData = {
        name: $('.js-contact-field-name'),
        email: $('.js-contact-field-email'),
        phone: $('.js-contact-field-phone'),
        text: $('.js-contact-field-text')
    };

    var $blockError = $('.js-contact-error');
    var $blockSuccess = $('.js-contact-success');

    $('.js-contact-button').on('click', function() {
        if (!fromData.name.val()) {
            $blockError.find('.ui-alert').text('Введите ваше имя').show(100);
            return;
        }
        else if (!fromData.email.val() && !fromData.phone.val()) {
            $blockError.find('.ui-alert').text('Введите адрес вашей электронной почты или телефон').show(100);
            return;
        }
        else if (!fromData.text.val() ) {
            $blockError.find('.ui-alert').text('Введите текст вашего вопроса').show(100);
            return;
        }
        else {
            $blockError.find('.ui-alert').text('').hide();
            $('.js-contact-form, .js-contact-button').hide();
            $blockSuccess.find('.ui-alert').show();
        }
    });
});

$(function() {
    $('.js-open-popup').magnificPopup({
        type: 'inline'
    });
});
