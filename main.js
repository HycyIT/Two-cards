const btn1 = document.querySelector('.first-btn');
const btn2 = document.querySelector('.second-btn');
const text = document.querySelector('.text1');
const text2 = document.querySelector('.text2');

let isInfoVisible = false;

const toggleInfoOne = () => {
  if (isInfoVisible) {
    text.style.clipPath = '';
    isInfoVisible = false;
  } else {
    text.style.clipPath = 'circle(50% at 50% 90%)';
    isInfoVisible = true;
  }
}
const toggleInfoTwo = () => {
    if (isInfoVisible) {
      text2.style.clipPath = '';
      isInfoVisible = false;
    } else {
      text2.style.clipPath = 'circle(50% at 50% 90%)';
      isInfoVisible = true;
    }
  }

btn1.addEventListener('click', toggleInfoOne);
btn2.addEventListener('click', toggleInfoTwo);
