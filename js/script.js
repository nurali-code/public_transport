function hideModals() {
    $('.modal').removeClass('is_active').fadeOut(200);
    $('body, .modal').removeClass('is_active');
};

$(function () {
    function showModal(id) {
        $(id).addClass('is_active').fadeIn(200);
        $('body, .modal').addClass('is_active');
    }

    $('[data-modal]').on('click', function (e) {
        e.preventDefault();
        showModal('#' + $(this).attr("data-modal"));
    });

    $('.modal__back').on('click', () => { hideModals(); });

    $(document).on('click', function (e) {
        if (!(
            ($(e.target).parents('.modal').length) ||
            ($(e.target).hasClass('btn')) ||
            ($(e.target).hasClass('modal'))
        )) {
            hideModals();
        }
    });
});

