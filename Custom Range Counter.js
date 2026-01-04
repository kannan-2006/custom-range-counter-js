let fromValueInput = document.getElementById("fromUserInput");
let toValueInput = document.getElementById("toUserInput");
let startBtn = document.getElementById("startBtn");
let counterEl = document.getElementById("counterText");
let intervalId = null;
let counter;

function increaseCountValue() {
    let fromvalue = fromValueInput.value;
    let tovalue = toValueInput.value;
    if (fromvalue === "") {
        alert("enter from value");
        return;
    }
    if (tovalue === "") {
        alert("enter to value");
        return;
    }
    counterEl.textContent = fromvalue;
    intervalId = setInterval(function() {
        counter = parseInt(counterEl.textContent) + 1;
        counterEl.textContent = counter;
        if (counter >= parseInt(tovalue)) {
            clearInterval(intervalId);
        }
    }, 1000);
}
startBtn.addEventListener("click", increaseCountValue);