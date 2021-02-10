$(document).ready(function () {
  $('#nav').on('click', 'a', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });
  $('.menu__btn').on('click', function () {
    $('.nav__menu').slideToggle();
  });
});
