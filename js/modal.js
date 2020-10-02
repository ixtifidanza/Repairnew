$(function () {

    // Slider

    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right'),
    
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
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

    // Modal

    var button = $('#btn');
    var modal = $('#modal');
    var close = $('#close');
    var dialog = $('.modal-dialog');

    modal.hide();    

    button.on('click', function () {
        modal.show();
        dialog.toggleClass('modal-dialog__active');
    });

    close.on('click', function () {
        modal.hide();
        dialog.toggleClass('modal-dialog__active');
    });

});