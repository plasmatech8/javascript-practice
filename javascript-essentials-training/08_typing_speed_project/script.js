const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0,0,0];
var interval;
var timerStarted = false;

// Add leading zero to numbers 9 or below (purely for aesthetics):
function pad(n) {
    if(n <= 9)
        n = "0" + n;
    return n;
}

// Run a standard minute/second/hundredths timer:
function runTimer(){
    let currentTime = timer.reduce((a, b) => pad(a) + ":" + pad(b));
    theTimer.innerHTML = currentTime;
    timer[2]++;
    if (timer[2] >= 100){
        timer[2] = 0;
        timer[1]++;
    }
    if (timer[1] >= 60){
        timer[1] = 0;
        timer[0]++;
    }
}

// Match the text entered with the provided text on the page:
function spellCheck(){
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0, textEntered.length);
    if(textEntered == originText){
        testWrapper.style.borderColor = "#429890"; // Finished
        clearInterval(interval);
    }else if(textEntered == originTextMatch){
        testWrapper.style.borderColor = "#e9af0f"; // In progress
    }else{
        testWrapper.style.borderColor = "#E05D0F"; // Incorrect
    }
}

// Start the timer:
function start(){
    let textEnteredLength = testArea.value.length;
    if (textEnteredLength === 0 && !timerStarted){
        timerStarted = true;
        timer = [0,0,0];
        interval = setInterval(runTimer, 10);
    }
}

// Reset everything:
function reset(){
    clearInterval(interval);
    interval = null;
    timer = [0,0,0];
    timerStarted = false;
    testArea.value = "";
    testWrapper.style.borderColor = "grey";
    theTimer.innerHTML = "00:00:00";
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);