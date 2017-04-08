$(function() {
  $('.hamburger-menu').click(function(){
  $(this).toggleClass('is-toggled');
  $('.nav-primary--links').toggleClass('is-toggled');
  });
});

$(function() {
  $(".carousel").slick({
    accessibility: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    infinite: true,
    cssEase: 'linear'
  });
});