const css = document.querySelector('h3');
const input1 = document.querySelector('.color1');
const input2 = document.querySelector('.color2');
const body = document.getElementById('gradient');

function setGradient(){
    body.style.background = 
    'linear-gradient(to right,' 
    + input1.value 
    + ',' 
    + input2.value 
    + ')';

    css.textContent = body.style.background + ";"; 

    // this is translating the css code to text for user ** compare w/ css
};


input1.addEventListener('input', setGradient);
input2.addEventListener('input', setGradient);