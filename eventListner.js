import {nextStep, previousStep} from "./stepNavigation.js";

// Next button
const nextButton = document.querySelector("#nextButton");
console.log(nextButton);

nextButton.addEventListener("click", nextStep);

// Previous button
const previousButton = document.querySelector("#previousButton");
console.log(previousButton);

previousButton.addEventListener("click", previousStep);

export {nextButton, previousButton};