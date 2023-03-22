$('.our-team__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    cssEase: 'ease-in-out',
    variableWidth: true,
    dots: true,
    nextArrow: '.our-team__next',
    prevArrow: '.our-team__prev',
    infinite: false,
    slide: '.our-team__img-wrapper',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
    ],
  });