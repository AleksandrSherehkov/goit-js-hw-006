const ref = {
  btnActions: document.querySelectorAll('button'),
  scoreEl: document.querySelector('#value'),
};

let counterValue = 0;

const onActionsCounts = event => {
  counterValue =
    event.target.dataset.action === 'increment' ? (counterValue += 1) : (counterValue -= 1);
  ref.scoreEl.textContent = counterValue;
};
ref.btnActions.forEach(btnAction => btnAction.addEventListener('click', onActionsCounts));

//!ВАРИАНТ 2

// const ref = {
//   btnIncrement: document.querySelector("[data-action='increment']"),
//   btnDecrement: document.querySelector("[data-action='decrement']"),
//   scoreEl: document.querySelector('#value'),
// };

// let counterValue = 0;

// const onActionsCounts = event => {
//   counterValue =
//     event.target.dataset.action === 'increment' ? (counterValue += 1) : (counterValue -= 1);
//   ref.scoreEl.textContent = counterValue;
// };

// ref.btnIncrement.addEventListener('click', onActionsCounts);
// ref.btnDecrement.addEventListener('click', onActionsCounts);
