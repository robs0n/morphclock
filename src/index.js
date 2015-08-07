import 'styles/main.less';
import {
  isElement
}
from './utils';

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

let createMarkup = function(target) {
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

export default function(targetIn) {
  let target = typeof targetIn === 'string' ? document.querySelector(targetIn) : targetIn;
  target = isElement(target) ? target : document.body;
  createMarkup(target);
}
