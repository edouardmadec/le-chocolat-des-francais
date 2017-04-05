$(function() {
  $('.hamburger-menu').click(function(){
  $(this).toggleClass('is-toggled');
  $('.nav-primary--links').toggleClass('is-toggled');
  });
});