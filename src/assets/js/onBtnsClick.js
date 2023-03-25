const onBtnsClick = trigger => {
  const btns = document.querySelectorAll(trigger);

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
};

onBtnsClick('.slider__btn');
