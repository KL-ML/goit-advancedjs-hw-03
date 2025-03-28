import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const datetimeInput = document.querySelector('#datetime-picker');
const startButton = document.querySelector('button[data-start]');
let userSelectedDate;

flatpickr(datetimeInput, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      startButton.disabled = true;
      iziToast.error({
        timeout: 3000,
        message: 'Please choose a date in the future',
        position: 'topRight',
        backgroundColor: 'rgba(239, 64, 64, 0.99)',
        messageColor: '#FFFFFF',
        icon: '',
        close: false,
      });
      return;
    }
    userSelectedDate = selectedDates[0];
    startButton.disabled = false;
    startButton.addEventListener('click', onTick);
  },
});

const onTick = () => {
  if (timer.timerId) {
    clearInterval(timer.timerId);
  }
  startButton.disabled = true;
  datetimeInput.disabled = true;
  timer.start();
};

const timer = {
  deadline: userSelectedDate,
  refs: {
    daysOnClockface: document.querySelector('span[data-days]'),
    hoursOnClockface: document.querySelector('span[data-hours]'),
    minutesOnClockface: document.querySelector('span[data-minutes]'),
    secondsOnClockface: document.querySelector('span[data-seconds]'),
  },
  timerId: null,

  start() {
    this.timerId = setInterval(() => {
      const deltaTime = userSelectedDate - Date.now();
      if (deltaTime <= 0) {
        this.stop();
        return;
      }
      const timeComponents = this.convertMs(deltaTime);
      this.updateClockface(timeComponents);
    }, 1000);
  },

  stop() {
    clearInterval(this.timerId);
    startButton.disabled = false;
    datetimeInput.disabled = false;
  },

  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    // console.log(days)
    return { days, hours, minutes, seconds };
  },

  updateClockface({ days, hours, minutes, seconds }) {
    // console.log(this.addLeadingZero(days));
    this.refs.daysOnClockface.textContent = this.addLeadingZero(days);
    this.refs.hoursOnClockface.textContent = this.addLeadingZero(hours);
    this.refs.minutesOnClockface.textContent = this.addLeadingZero(minutes);
    this.refs.secondsOnClockface.textContent = this.addLeadingZero(seconds);
  },

  addLeadingZero(value) {
    // console.log(value)
    return String(value).padStart(2, '0');
  },
};
