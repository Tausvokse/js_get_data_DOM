'use strict';

const populationNodes = document.querySelectorAll('.population');
const validPopulations = [];

populationNodes.forEach((el) => {
  const cleanedText = el.innerText.replace(/[^0-9.]/g, '');
  const number = Number(cleanedText);

  if (Number.isFinite(number)) {
    validPopulations.push(number);
  }
});

const totalPopulation = validPopulations.reduce((sum, num) => sum + num, 0);

const totalPopulationElement = document.querySelector('.total-population');

if (totalPopulationElement) {
  totalPopulationElement.innerText = totalPopulation.toLocaleString('en-US');
}

const averagePopulationElement = document.querySelector('.average-population');

if (averagePopulationElement) {
  const average =
    validPopulations.length > 0 ? totalPopulation / validPopulations.length : 0;

  averagePopulationElement.innerText =
    Math.round(average).toLocaleString('en-US');
}
