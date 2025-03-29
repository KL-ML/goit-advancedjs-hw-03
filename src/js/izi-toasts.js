import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function errorAllert(message) {
  iziToast.error({
    timeout: 3000,
    message: `${message}`,
    position: 'topRight',
    backgroundColor: 'rgba(239, 64, 64, 0.99)',
    messageColor: '#FFFFFF',
    icon: '',
    close: false,
  });
}

export { errorAllert };
