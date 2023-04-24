const ref = {
  inputEl: document.querySelector('#name-input'),
  outputSpanEL: document.querySelector('#name-output'),
};

const onInputChange = event =>
  (ref.outputSpanEL.textContent = event.target.value === '' ? 'Anonymous' : event.target.value);

ref.inputEl.addEventListener('input', onInputChange);

//!ВАРИАНТ 2

// let inputEl = document.querySelector('#name-input');
// let nameOutput = document.querySelector('#name-output');

// inputEl.oninput = function () {
//   nameOutput.innerHTML = inputEl.value === '' ? 'Anonymous' : inputEl.value;
// };
