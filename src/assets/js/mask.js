class Mask {
  setCursorPosition(pos, elem) {
    elem.focus();

    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();

      range.collapse = true;
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  }

  createMask(event) {
    let matrix = '+44 ____ ______',
      i = 0,
      def = matrix.replace(/\D/g, ''),
      val = this.value.replace(/\D/g, '');

    if (def.length >= val.length) {
      val = def;
    }

    this.value = matrix.replace(/./g, a => {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });

    if (event.type === 'blur') {
      if (this.value.length == 2) {
        this.value = '';
      }
    } else {
      this.setCursorPosition(this.value.length, this);
    }
  }
}

const mask = () => {
  let forms = document.getElementsByTagName('form');
  for (let i = 0; i < forms.length; i++) {
    let inputs = forms[i].querySelectorAll('[name="phone"]');
    for (let j = 0; j < inputs.length; j++) {
      let input = inputs[j];
      let maskObj = new Mask();
      input.addEventListener('input', maskObj.createMask.bind(input));
      input.addEventListener('blur', maskObj.createMask.bind(input));
      input.addEventListener('focus', maskObj.createMask.bind(input));
    }
  }
};

mask();
