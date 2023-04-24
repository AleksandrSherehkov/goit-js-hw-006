const ref = {
  inputEl: document.querySelector('#font-size-control'),
  textEl: document.querySelector('#text'),
};

const onFontSizeControl = event => {
  ref.textEl.style.fontSize = event.target.value + 'px';
};

ref.inputEl.addEventListener('input', onFontSizeControl);
