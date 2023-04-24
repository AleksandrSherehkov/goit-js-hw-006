const form = document.querySelector('.login-form');

const onFormSubmit = event => {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  const dataForm = {
    email: email.value,
    password: password.value.trim(),
  };

  if (!dataForm.email || !dataForm.password) {
    alert('Будь ласка, заповніть всі поля!');
    return;
  }
  console.log(dataForm);
  event.currentTarget.reset();
};

form.addEventListener('submit', onFormSubmit);

//!ВАРИАНТ 2 через const formData = new FormData(event.currentTarget);
// const form = document.querySelector('.login-form');

// const onFormSubmit = event => {
//   event.preventDefault();

//   const formData = new FormData(event.currentTarget);

//   const dataFormObject = Object.fromEntries(formData);

//   if (!dataFormObject.email || !dataFormObject.password) {
//     alert('Будь ласка, заповніть всі поля!');
//     return;
//   }
//   console.log(dataFormObject);
//   event.currentTarget.reset();
// };

// form.addEventListener('submit', onFormSubmit);
