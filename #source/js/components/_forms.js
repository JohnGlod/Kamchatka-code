const buttonСounterElem = document.querySelector('.number');
const inputCounterPeople = document.querySelector('#numbers');

const counterChange = (e) =>
  e.target.classList.contains('number__plus')
    ? inputCounterPeople.stepUp()
    : inputCounterPeople.stepDown();


fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch()

buttonСounterElem.addEventListener('click', counterChange);
