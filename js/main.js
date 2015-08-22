$(document).ready(function() {
  var parts, page;

  parts = window.location.href.split('/');
  page = parts[parts.length - 2];

  console.log(page);
  menuSelect(page);
  addSignature(page);
});

function menuSelect(page) {
  var links, abouts;

  links = $('#menu li a');

  // fix page name for GH pages
  abouts = ['septentrion', 's3pt3ntrion.com', 'localhost:4000', '0.0.0.0:4000', ''];
  if (abouts.indexOf(page) > -1) page = 'about';

  links.each(function() {
    var span = $(this).find('span').html().toLowerCase();

    if (span.indexOf(page) > -1) {
      $(this).addClass('selected');
    }
  });
}

function addSignature(page) {
  var sig, menu, noSig;

  menu = $('#menu');
  noSig = ['about', 'events', 'contact'];
  sig = '<div class="sig">Photograph courtesy of <a href="http://laurafusato.com">Laura Fusato</a></div>';

  if (noSig.indexOf(page) === -1) {
    menu.append(sig);
  }
}