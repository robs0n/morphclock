import moment from 'moment';
import 'styles/main.less';
import {
  isElement
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
  let time = moment().format('HHmmss');
  let digits = target.querySelectorAll('.digit');
  for (let i = 0; i < digits.length; i++) {
    digits[i].className = digits[i].className.replace(/\sdigit-\d+/g, '');
    digits[i].className += ' digit-' + time[i];
  }
};

export default function(targetIn) {
  target = typeof targetIn === 'string' ? document.querySelector(targetIn) : targetIn;
  target = isElement(target) ? target : document.body;
  createMarkup(target);
  setInterval(updateDigits, 1000);
}
