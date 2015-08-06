import {
  isElement
}
from './utils';

let getDigitMarkup = function() {
  return `
    <div class="digit">
      <span class="top-left"></span>
      <span class="top-center"></span>
      <span class="top-right"></span>
      <span class="middle"></span>
      <span class="bottom-left"></span>
      <span class="bottom-center"></span>
      <span class="bottom-right"></span>
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
