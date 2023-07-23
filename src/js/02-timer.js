import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector('[data-start]');
const datDays = document.querySelector('[data-days]');
const datHours = document.querySelector('[data-hours]');
const datMinutes = document.querySelector('[data-minutes]');
const datSeconds = document.querySelector('[data-seconds]')

startBtn.disabled = true;




function convertMs(ms) {
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

  return { days, hours, minutes, seconds };
}




let userDate = null;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      
    userDate = selectedDates[0];    
    
    if (userDate > Date.now()) {
        
        startBtn.disabled = false;

    } else {
        flatpickr.warning("Please choose a date in the future");

        startBtn.disabled = true;
    }
  },
};

const input = document.querySelector('#datetime-picker');



flatpickr(input, options);

const addLeadingZero = function(value){
    return value.toString().padStart(2, '0')
}

const startTimer = function () {
    const dataId = setInterval(() => {

            const time = userDate - new Date;


    const convertTime = convertMs(time);

  
        if (time > 0) {
    
            startBtn.disabled = true;
            datDays.textContent = addLeadingZero(convertTime.days);
            datHours.textContent = addLeadingZero(convertTime.hours);
            datMinutes.textContent = addLeadingZero(convertTime.minutes);
            datSeconds.textContent = addLeadingZero(convertTime.seconds);
        } else {
            startBtn.disabled = false;
            clearInterval(dataId);
            alert("job done time is up")
        }
    }, 1000)
}

startBtn.addEventListener('click', startTimer);