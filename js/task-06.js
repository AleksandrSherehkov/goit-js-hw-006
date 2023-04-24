const refInputEl = document.querySelector('#validation-input');

const onFocusInputValidation = event => {
  const inputSimvolLength = event.target.value.length;
  const validDataLength = Number(event.target.dataset.length);

  if (inputSimvolLength !== validDataLength) {
    refInputEl.classList.add('invalid');
    refInputEl.classList.remove('valid');
  }
  if (inputSimvolLength === validDataLength) {
    refInputEl.classList.add('valid');
    refInputEl.classList.remove('invalid');
  }
  if (!inputSimvolLength) {
    refInputEl.classList.remove('invalid');
    refInputEl.classList.remove('valid');
  }
};

refInputEl.addEventListener('blur', onFocusInputValidation);
