const delayForm = document.querySelector('[name="delay"]');
const stepForm = document.querySelector('[name="step"]');
const amountForm = document.querySelector('[name="amount"]');
const form = document.querySelector('.form');


function createPromise(position, delay) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
    
        resolve({ position, delay });
      } else {
    
        reject({ position, delay })
      }
    
    }, delay)
  })

};

const startPromise = function (amount) {
  
  
  for (let i = 1; i <= amount; i += 1) {
    
    const delay = Number(delayForm.value) + Number(stepForm.value)*(i-1);

    createPromise(i, delay).then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    
  }
};

form.addEventListener('submit', (event) => { event.preventDefault(); return startPromise(amountForm.value) });
