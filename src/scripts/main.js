'use strict';

let totalPopulation = 0;

document.querySelectorAll('.population').forEach((el) => {
  totalPopulation += parseInt(el.innerText.replace(/,/g, ''), 10);
});

document.querySelector('.total-population').innerText =
  totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').innerText = (
  totalPopulation / document.querySelectorAll('.population').length
).toLocaleString('en-US');
