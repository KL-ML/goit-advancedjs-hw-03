import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.snackbar-form');

function createPromise(delay, result) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (result) {
        resolve({ delay });
      } else {
        reject({ delay });
      }
    }, delay);
  });
}

function onFormSubmit(event) {
  event.preventDefault();
  if (!event.target.tagName === 'BUTTON') return;

  const {
    elements: { delay, state },
  } = event.currentTarget;

  const delayInp = Number(delay.value);
  const resultInp = state.value === 'fulfilled' ? true : false;

  createPromise(delayInp, resultInp)
    .then(({ delay }) => {
      iziToast.success({
        title: 'OK',
        titleColor: '#FFFFFF',
        timeout: 4000,
        message: `Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        backgroundColor: 'rgba(89, 161, 13, 0.99)',
        messageColor: '#FFFFFF',
        icon: '',
        close: false,
      });
    })
    .catch(({ delay }) => {
      iziToast.error({
        title: 'Error',
        titleColor: '#FFFFFF',
        timeout: 4000,
        message: `Rejected promise in ${delay}ms`,
        position: 'topRight',
        backgroundColor: 'rgba(239, 64, 64, 0.99)',
        messageColor: '#FFFFFF',
        icon: '',
        close: false,
      });
    });

  event.currentTarget.reset();
}

formEl.addEventListener('submit', onFormSubmit);
