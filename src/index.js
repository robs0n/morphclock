import 'styles/main.less';
import {
  isElement,
  pad
}
from './utils';
import assign from 'object-assign';

let defaultOptions = {
  animation: 'scale'
};

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

let createMarkup = function(target, options) {
  let el = document.createElement('div');
  el.innerHTML = `<div class="morphclock ` + options.animation + `">
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
  return target.appendChild(el.firstChild);
};

let updateDigits = function(target) {
  let date = new Date();
  let time = [pad(date.getHours(), 2), pad(date.getMinutes(), 2), pad(date.getSeconds(), 2)].join('');
  let digits = target.querySelectorAll('.digit');
  for (let i = 0; i < digits.length; i++) {
    digits[i].className = digits[i].className.replace(/\sdigit-\d+/g, '');
    digits[i].className += ' digit-' + time[i];
  }
};

// let test = function(el) {
//   let max = 9;
//   let min = 0;
//   let i = min;
//   setInterval(function() {
//     let digit = el.querySelector('.digit');
//     digit.className = digit.className.replace(/\sdigit-\d+/g, '');
//     digit.className += ' digit-' + i;
//     i = i === max ? min : i + 1;
//   }, 1500);
// };

export default function(targetIn, optionsIn) {
  let target = typeof targetIn === 'string' ? document.querySelector(targetIn) : targetIn;
  target = isElement(target) ? target : document.body;
  let options = assign({}, defaultOptions, optionsIn);
  let el = createMarkup(target, options);
  // test(el);
  // updateDigits(el);
  setInterval(function() {
    updateDigits(el);
  }, 1000);
  return this;
}
