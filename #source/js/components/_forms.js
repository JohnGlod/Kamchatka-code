const buttonСounterElem = document.querySelector('.number');
const formFeedback = document.querySelector('#form-answer');
const form = document.forms['form'];

const counterChange = (e) =>
  e.target.classList.contains('number__plus')
    ? quantity.stepUp()
    : quantity.stepDown();

buttonСounterElem.addEventListener('click', counterChange);

const formAddError = (input) => {
  input.classList.add('_error');
  input.parentElement.classList.add('_error');
};
const formRemoveError = (input) => {
  input.classList.remove('_error');
  input.parentElement.classList.remove('_error');
};
const emailValidate = (input) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(input.value).toLowerCase());
};

const formValidate = (form) => {
  let error = 0;
  let formReq = document.querySelectorAll('._req');
  formReq.forEach((input) => {
    formRemoveError(input);

    if (input.classList.contains('_email')) {
      if (!emailValidate(input)) {
        formAddError(input);
        error++;
      }
    } else {
      if (input.value === '') {
        formAddError(input);
        error++;
      }
    }
  });
  return error;
};

const formSend = async (e) => {
  e.preventDefault();

  const email = document.querySelector('#email');
  const quantity = document.querySelector('#quantity');
  const date = document.querySelector('#date');
  const message = document.querySelector('#msg');
  const name = document.querySelector('#name');
  const tariff = document.querySelector('input[name="tariff"]:checked');

  const data = {
    email: email.value,
    name: name.value,
    date: date.value,
    message: message.value,
    tariff: tariff.value,
    quantity: quantity.value,
  };

  const error = formValidate(form);
  const formData = new FormData(form);
  console.log(`Данные с формы ${formData}`);

  if (!error) {
    const response = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      form.classList.add('_sending');
      const result = await response.json();
      /*
      дописать функционал
      */
    } else {
      alert('Ошибка!');
    }
  } else {
    alert('Заполните необходимые поля. ');
  }
};

form.addEventListener('submit', formSend);
