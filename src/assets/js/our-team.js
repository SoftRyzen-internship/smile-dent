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
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1279,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});

const btns = document.querySelectorAll('.slider__btn');

function changeBtnClass(buttons, event, className, action = '') {
  buttons.forEach(btn => {
    btn.addEventListener(event, () => {
      action === 'add' ? btn.classList.add(className) : btn.classList.remove(className);
    });
  });
}

changeBtnClass(btns, 'mousedown', 'slider__btn-click', 'add');
changeBtnClass(btns, 'mouseup', 'slider__btn-click');

changeBtnClass(btns, 'mouseover', 'slider__btn-hover', 'add');
changeBtnClass(btns, 'mouseout', 'slider__btn-hover');

changeBtnClass(btns, 'focus', 'slider__btn-hover', 'add');
changeBtnClass(btns, 'blur', 'slider__btn-hover');


/* function disableBtns({ windowWidth, prevBtn, nextBtn, slides, currentSlide, initialSlide }) {
  if (window.innerWidth <= windowWidth) {
    prevBtn.disabled = true;
    prevBtn.classList.add('slider__btn-disabled');

    function updateButtons() {
      if (currentSlide === initialSlide) {
        prevBtn.disabled = true;
        prevBtn.classList.add('slider__btn-disabled');
      } else {
        prevBtn.disabled = false;
        prevBtn.classList.remove('slider__btn-disabled');
      }
      if (currentSlide === slides.length - 1) {
        nextBtn.disabled = true;
        nextBtn.classList.add('slider__btn-disabled');
      } else {
        nextBtn.disabled = false;
        nextBtn.classList.remove('slider__btn-disabled');
      }
    }

    prevBtn.addEventListener('click', () => {
      currentSlide--;
      updateButtons();
    });

    nextBtn.addEventListener('click', () => {
      currentSlide++;
      updateButtons();
    });
  }
}

disableBtns({
  windowWidth: window.innerWidth,
  prevBtn: document.querySelector('.our-team__prev'),
  nextBtn: document.querySelector('.our-team__next'),
  slides: document.querySelectorAll('.our-team__img-wrapper'),
  currentSlide: 0,
  initialSlide: 0
})
 */

