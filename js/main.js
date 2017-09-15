$(document).ready(function() {
  var parallax = [
    { id: '#actions', img: '/img/03-6-1920.jpg' },
    { id: '#pastfuture', img: '/img/01-6-1920.jpg' },
    { id: '#contact', img: '/img/01-4-1920.jpg' }
  ];
  parallax.forEach(function(el) {
    $(el.id).parallax({ imageSrc: el.img });
  });
  $(document).on('click', '[data-toggle="lightbox"]', function(e) {
    e.preventDefault();
    $(this).ekkoLightbox();
  });
})
