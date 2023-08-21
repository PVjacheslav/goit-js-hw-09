import Notiflix from 'notiflix';

const elements = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
};

elements.form.addEventListener('submit', submit);

function submit(evt) {
  evt.preventDefault();
  const initialDelay = Number(elements.delay.value);
  const step = Number(elements.step.value);
  const amount = Number(elements.amount.value);
  let position = 1;
  let currentDelay = initialDelay;
  for (let i = 1; i <= amount; i += 1) {
    createPromise(position, currentDelay);
    position++;
    currentDelay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  })
    .then(({ position, delay }) => {
      console.log(`:white_tick: Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`:x: Rejected promise ${position} in ${delay}ms`);
    });
}
