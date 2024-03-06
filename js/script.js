function hideModals() {
    $('.modal').removeClass('is_active').fadeOut(200);
    $('body, .modal').removeClass('is_active');
};

$(function () {
    function showModal(id) {
        hideModals();
        $(id).addClass('is_active').fadeIn(100);
        $('body, .modal').addClass('is_active');
    }

    $('[data-modal]').on('click', function (e) {
        e.preventDefault();
        showModal('#' + $(this).attr("data-modal"));
    });

    $('.modal__back, .modal_close').on('click', () => { hideModals(); });

    $(document).on('click', function (e) {
        if (!(
            ($(e.target).parents('.modal').length) ||
            ($(e.target).parents('.nav__item').length) ||
            ($(e.target).hasClass('nav__item')) ||
            ($(e.target).hasClass('btn')) ||
            ($(e.target).hasClass('modal'))
        )) {
            hideModals();
        }
    });
});


$('.dropdown__btn').on('click', function (e) {
    if ($(this).hasClass('is_active')) {
         $('.dropdown__btn').removeClass('is_active').next().slideUp(200); 
         $('.dropdown').removeClass('is_active')
        }
    else {
        $(this).parent('.dropdown').addClass('is_active')
        $('.dropdown__btn').removeClass('is_active').next().slideUp(200);
        $(this).toggleClass('is_active').next().slideToggle(200);
    }
});

