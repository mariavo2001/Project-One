  // jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

form.onsubmit = submit;

function submit(event) {
  success.removeAttribute('hidden');