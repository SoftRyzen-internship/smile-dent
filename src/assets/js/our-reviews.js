$('.our-reviews__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    cssEase: 'ease-in-out',
    variableWidth: true,
    dots: true,
    nextArrow: '.our-reviews__next',
    prevArrow: '.our-reviews__prev',
    infinite: false,
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