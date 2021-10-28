const buttonСounterElem = document.querySelector('.number');
const inputCounterPeople = document.querySelector('#numbers');

const counterChange = (e) =>
  e.target.classList.contains('number__plus')
    ? inputCounterPeople.stepUp()
    : inputCounterPeople.stepDown();

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

buttonСounterElem.addEventListener('click', counterChange);
