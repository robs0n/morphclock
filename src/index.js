import 'styles/main.less';
import {
  isElement,
  pad
}
from './utils';

let target;
let getDigitMarkup = function() {
  return `
    <div class="digit">
      <div class="bar top left"></div>
      <div class="bar top center"></div>
      <div class="bar top right"></div>
      <div class="bar middle center"></div>
      <div class="bar bottom left"></div>
      <div class="bar bottom center"></div>
      <div class="bar bottom right"></div>
    </div>
  `;
};

let createMarkup = function() {
  target.innerHTML = `<div class="morphclock">
    <div class="part hours">
      ` + getDigitMarkup() + getDigitMarkup() + `
    </div>
    <div class="part minutes">
      ` + getDigitMarkup() + getDigitMarkup() + `
    </div>
    <div class="part seconds">
      ` + getDigitMarkup() + getDigitMarkup() + `
    </div>
  </div>`;
};

let updateDigits = function() {
  let date = new Date();
  let time = [pad(date.getHours(), 2), pad(date.getMinutes(), 2), pad(date.getSeconds(), 2)].join('');
  let digits = target.querySelectorAll('.digit');
  for (let i = 0; i < digits.length; i++) {
    digits[i].className = digits[i].className.replace(/\sdigit-\d+/g, '');
    digits[i].className += ' digit-' + time[i];
  }
};

// let test = function() {
//   let max = 9;
//   let i = 0;
//   setInterval(function() {
//     let digit = document.querySelector('.digit');
//     digit.className = digit.className.replace(/\sdigit-\d+/g, '');
//     digit.className += ' digit-' + i;
//     i = i === max ? 0 : i + 1;
//   }, 1500);
// };

export default function(targetIn) {
  target = typeof targetIn === 'string' ? document.querySelector(targetIn) : targetIn;
  target = isElement(target) ? target : document.body;
  createMarkup(target);
  // test();
  setInterval(updateDigits, 1000);
  return this;
}
