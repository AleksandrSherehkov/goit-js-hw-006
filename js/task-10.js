function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divEl = document.querySelector('#controls');

const ref = {
  inputEl: divEl.querySelector('input'),
  buttonCreateEL: divEl.querySelector('button[data-create]'),
  buttonDestroyEl: divEl.querySelector('button[data-destroy]'),
  divBoxesEl: divEl.nextElementSibling,
};

let sizaDivBox = 30;
let boxes = '';

const createBoxes = amount => {
  for (let i = 1; i <= amount; i += 1) {
    const box = `<div style="background-color: ${getRandomHexColor()} ; width: ${sizaDivBox}px; height: ${sizaDivBox}px"></div>`;
    boxes += box;
    sizaDivBox += 10;
  }

  ref.divBoxesEl.innerHTML = boxes;
};

const onCreateBoxes = () => {
  createBoxes(ref.inputEl.value);
  ref.inputEl.value = '';
};

const destroyBoxes = () => {
  ref.divBoxesEl.innerHTML = '';
  boxes = '';
  sizaDivBox = 30;
};

ref.buttonCreateEL.addEventListener('click', onCreateBoxes);
ref.buttonDestroyEl.addEventListener('click', destroyBoxes);
