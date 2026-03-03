let clicks = 0;

// Variable to store the click display h1 element
let clickDisplay = document.getElementById("click-display");

let clickValue = 1;

// Set the initial text for click count h1
clickDisplay.innerText = "Clicks: " + clicks; 

// Called each time the image is clicked
function handleClick() {
    console.log("click");

    clicks = clicks + 1;

clickDisplay.innerText = "Clicks: " + clicks;

if (clicks >= 10){
    alert("Nice job young blood. Now thousand more to go!");
    let clickValue = 2;
}

if (click >= 1000){
    alert("Nah not too fast young blood. Gimme a mil rn");
    let clickValue = 20;
}

}