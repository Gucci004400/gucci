// scripts.js

/****************** YOUR NAME: XYZ */

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */
let modelName = "XYZ"; // Assuming XYZ is the default model
let duration = 7; // Assuming the default duration is 7 days

/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element.
    - check the value of the modelName variable, and use that to calculate the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/
function recalculate() {
    let costLabel = document.getElementById("calculated-cost");
    let totalCost = 0;
    if (modelName === "XYZ") {
        totalCost = duration * 100;
    } else if (modelName === "CPRG") {
        totalCost = duration * 213;
    }
    costLabel.innerHTML = totalCost.toFixed(2); // Display the cost with two decimal places
}

/****************** model button logic ******************/
/* 
- first, create a variable to represent the "Switch Model" pseudo-button.
- second, create a function called changeModel() which checks the value of the model name variable.
- then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked:
*/
// modelButton.addEventListener("click", changeModel);

let modelButton = document.getElementById("model-button");

function changeModel() {
    let modelText = document.getElementById("model-text");
    if (modelName === "XYZ") {
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
    } else if (modelName === "CPRG") {
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ";
    }
    recalculate(); // Recalculate the cost whenever the model is changed
}

modelButton.addEventListener("click", changeModel);

/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/
let durationButton = document.getElementById("duration-button");

function changeDuration() {
    console.log("changeDuration() function called.");
    var durationText = document.getElementById("duration-text");
    var newDuration = prompt("Enter the new duration in days.");
    console.log("newDuration:", newDuration);
    duration = parseInt(newDuration, 10) || 0;
    console.log("duration:", duration);
    durationText.innerHTML = duration;
    recalculate();
}

durationButton.addEventListener("click", changeDuration);
