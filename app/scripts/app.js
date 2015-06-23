$(document).ready(function() {
  $('.js-toggle-bio').on('click', function() {
    $('#bio').removeClass('util-hidden--still-accessible');
    $('.js-toggle-bio').hide();
  });
});
