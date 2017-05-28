$(document).ready(function() {
  const burger = $('.hamburger');
  const menu = $('.menu');
  const time = 200;
  const activeBurgerClass = 'is-active';
  const activeMenuClass = 'active';

  function openMenu() {
    menu.show(time);
    burger.addClass(activeBurgerClass);
  }

  function closeMenu() {
    menu.hide(time);
    burger.removeClass(activeBurgerClass);
  }

  function toggleMenu() {
    return burger.hasClass(activeBurgerClass) ? closeMenu() : openMenu();
  }

  function clearActive() {
    $('li').removeClass(activeMenuClass);
  }

  function markAsDone(li) {
    li.addClass(activeMenuClass);
  }

  function scrollCallback(li) {
    closeMenu();
    clearActive();
    markAsDone(li);
  }

  burger.on('click touchstart', function() {
    toggleMenu();
  });

  // https://stackoverflow.com/questions/4198041/jquery-smooth-scroll-to-an-anchor/12714767#12714767
  let hashTagActive = '';
  $('.scroll').on('click touchstart' , function (event) {
    if ($(this).hasClass(activeMenuClass)) return;
    const hash = $(this).find('a')[0].hash;
    if (!hash) return;
    if (hashTagActive != hash) { // this will prevent if the user click several times the same link to freeze the scroll.
      event.preventDefault();
      // calculate destination place
      let dest = 0;
      if ($(hash).offset().top > $(document).height() - $(window).height()) {
        dest = $(document).height() - $(window).height();
      } else {
        dest = $(hash).offset().top;
      }
      // go to destination
      $('html,body').animate({
        scrollTop: dest
      }, 1000, 'swing', scrollCallback($(this)));
      hashTagActive = hash;
    }
  });
})
