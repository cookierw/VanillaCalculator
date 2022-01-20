/* Buttons! */
const digits = document.getElementsByClassName("calc-digit");
const digitsArr = Array.prototype.slice.call(digits);
digitsArr.forEach(element => {
    element.addEventListener("click", handleDigitEvent)
});

const actions = document.getElementsByClassName("action-button");
const actionsArr = Array.prototype.slice.call(actions);
actionsArr.forEach(element => {
    element.addEventListener("click", handleActionEvent)
});

document.getElementById("clear")
    .addEventListener("click", clearDisplay);

document.getElementById("equals")
    .addEventListener("click", handleEvaluateEvent)

/* Event handlers */
function handleDigitEvent(event) {
    let digit = event.target.innerText;
    display.innerText += digit;
}

function handleActionEvent(event) {
    let action = event.target.innerText;
    display.innerText += action;
}

function handleEvaluateEvent() {
    display.innerText = `${evaluate(display.innerText)}`
}

/** Helper functions */
function clearDisplay() {
    display.innerText = "";
}

// Credit to Ethan
function evaluate(string) {
    return new Function("return " + string)();
}