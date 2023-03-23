$(document).ready(function () {
  function initializeSlider() {
    if ($(window).width() < 768) {
      $('.our-service__slider:not(.slick-initialized)').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        cssEase: 'ease-in-out',
        variableWidth: true,
        dots: true,
        nextArrow: false,
        prevArrow: false,
        infinite: true,
        autoplay: true,
        pauseOnHover: true,
        slide: '.our-service__img-wrapper',
      });
    } else {
      $('.our-service__slider.slick-initialized').slick('unslick');
    }
  }

  initializeSlider();

  $(window).on('resize', function () {
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout(function () {
      initializeSlider();
    }, 250);
  });
});
