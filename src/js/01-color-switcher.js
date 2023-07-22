const buttonStart = document.querySelector('[data-start]');
console.log(buttonStart);

const buttonStop = document.querySelector('[data-stop]');
console.log(buttonStop);

const body = document.querySelector('body');

let timId = null

buttonStop.disabled = true;

const getRandomHexColor = function() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function changeColorStart () {
    
    buttonStop.disabled = false;
    buttonStart.disabled = true;
    timId = setInterval(() => body.style.backgroundColor = getRandomHexColor(), 1000);
};


function changeColorStop () {

    buttonStart.disabled = false;
    buttonStop.disabled = true;
    clearInterval(timId);
};


buttonStart.addEventListener('click', changeColorStart);

buttonStop.addEventListener('click', changeColorStop);