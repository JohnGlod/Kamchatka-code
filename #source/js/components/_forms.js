const buttonСounterElem = document.querySelector('.number');
const inputCounterPeople = document.querySelector('#numbers');

const counterChange = (e) =>
  e.target.classList.contains('number__plus')
    ? inputCounterPeople.stepUp()
    : inputCounterPeople.stepDown();

buttonСounterElem.addEventListener('click', counterChange);
