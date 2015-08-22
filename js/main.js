$(document).ready(function() {
  var parts, page;

  parts = window.location.href.split('/');
  page = parts[parts.length - 2];

  console.log(page);
  menuSelect(page);
});

function menuSelect(page) {
  var links = $('#menu li a');

  links.each(function() {
    var span = $(this).find('span').html().toLowerCase();

    if (span.indexOf(page) > -1) {
      $(this).addClass('selected');
    }
  });
}