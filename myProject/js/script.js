$(document).ready(function() {
    $('.menu__btn-burger').click(function(event) {
        $('.menu__btn-burger,.header__menu').toggleClass('active');
    })
});

$('.team__slider').slick({
    slidesToShow: 1,
    slidesToScrol: 1,
    dots: true,
    arrows: false,
});

$('.testimonials__slider').slick({
    slidesToShow: 1,
    slidesToScrol: 1,
    dots: true,
    arrows: false,
});

$('.latest__slider').slick({
    slidesToShow: 1,
    slidesToScrol: 1,
    dots: true,
    arrows: false,
});
