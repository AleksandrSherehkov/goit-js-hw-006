const ref = {
  spanEl: document.querySelector('.color'),
  buttonEl: document.querySelector('.change-color'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const onChangeColorBtn = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  ref.spanEl.textContent = document.body.style.backgroundColor;
};
ref.buttonEl.addEventListener('click', onChangeColorBtn);
