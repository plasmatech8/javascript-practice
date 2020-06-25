const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

// Set show CTA and hide ALERT
CTA.classList.remove("hide");
ALERT.classList.add("hide");

// Toggle function
function reveal(e){
    e.preventDefault();
    CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");
}

/*onclick we want to toggle the ALERT and CTA hide attribute so we only see one
at a time.*/
//CTA.onclick = reveal;

// Via event listener (allows multiple)
CTA.addEventListener("click", reveal);
CTA.addEventListener("click", function() {console.log("Button was clicked!")});
