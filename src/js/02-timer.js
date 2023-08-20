import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const elements = {
  input: document.querySelector('#datetime-picker'),
  btn: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

const currentDate = new Date();

elements.btn.disabled = true;
// let timerId;

const fp = flatpickr(elements.input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() - currentDate.getTime() < 0) {
      Notiflix.Report.warning(
        'WARNING!',
        'Please choose date in the future',
        'Ok'
      );
    } else {
      elements.btn.disabled = false;
      elements.btn.addEventListener('click', () => {
        const timerId = setInterval(() => {
          const currentTime = new Date();
          const ms = selectedDates[0].getTime - currentTime.getTime();
          elements.days.textContent = addLeadingZero(convertMs(ms).days);
          elements.hours.textContent = addLeadingZero(convertMs(ms).hours);
          elements.minutes.textContent = addLeadingZero(convertMs(ms).min);
          elements.seconds.textContent = addLeadingZero(convertMs(ms).sec);
          if (ms < 1000) {
            clearInterval(timerId);
          }
        }, 1000);
      });
    }
  },
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// function addLeadingZero(number) {
//   return ('0' + number).slice(-2);
// }
