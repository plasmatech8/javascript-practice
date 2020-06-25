const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let startDate = new Date();
var sec = startDate.getSeconds();
var min = startDate.getMinutes() + sec/60;
var hr = startDate.getHours() + min/60 + sec/360;

function runClock(){
    sec = sec + 1;
    min = min + 1/60;
    hr = hr + 1/360;
    let hrPosition = (hr/12)*360;
    let minPosition = (min/60)*360;
    let secPosition = (sec/60)*360;
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition  + "deg)";
    HOURHAND.style.transform = "rotate(" + hrPosition  + "deg)";
}

var interval = setInterval(runClock, 1000);
