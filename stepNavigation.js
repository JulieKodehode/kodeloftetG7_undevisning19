let currentStep = 1;

// Next step
function nextStep() {
    event.preventDefault();

    console.log("Is next button clicked?")

    if ( currentStep < 4) {
        document.querySelector(`#step${currentStep}`).classList.add("hidden");

        currentStep = currentStep + 1;

        document.querySelector(`#step${currentStep}`).classList.remove("hidden");
    }
}

// Previous step
function previousStep() {
    event.preventDefault();

    console.log("Is previous button clicked?")

    if ( currentStep > 1) {
        document.querySelector(`#step${currentStep}`).classList.add("hidden");

        currentStep = currentStep - 1;

        document.querySelector(`#step${currentStep}`).classList.remove("hidden");
    }
}

export {nextStep, previousStep};