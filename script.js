console.log("Script started");

let clicks = 0;
let clickValue = 1;


// Variable to store the click display h1 element
let clickDisplay = document.getElementById("click-display");

let levelDisplay = document.getElementById("level-display");

l

// Set the initial text for click count h1
clickDisplay.innerText = "Clicks: " + clicks; 

// Called each time the image is clicked
function handleClick() {
    console.log("click");

    clicks = clicks + clickValue;

    clickDisplay.innerText = "Clicks: " + clicks; 
    

if (clicks == 10) {
    alert("Nice job young blood. Now hundred more to go!");
    levelDisplay.innerText = "Level: Rookie";
    clickValue = 2;
}
if (clicks == 50) {
    alert("Yes, you reach the next level!!!");
    levelDisplay.innerText = "Level: Gooner";
    clickValue = 5;
}

}