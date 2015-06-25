$(document).ready(function() {
  $('.js-toggle-bio').on('click', function() {
    $('#bio').removeClass('util-hidden--still-accessible');
    $('#tell-me-more').hide();
  });
});
