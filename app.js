const incresBtn = document.getElementById('increse-button');
const decresBtn = document.getElementById('decrese-button');
const resetBtn = document.getElementById('reset-button');
const result = document.querySelector('.result');
let counter = 0

incresBtn.addEventListener('click' , (e)=>{
    counter += 1;
    result.innerHTML = counter;
})
decresBtn.addEventListener('click' , (e)=>{
    counter -= 1;
    result.innerHTML = counter;

})
resetBtn.addEventListener('click' , (e)=>{
    counter = 0;
    result.innerHTML = counter;
})