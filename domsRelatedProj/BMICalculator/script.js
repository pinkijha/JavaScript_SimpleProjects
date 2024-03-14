const heights = document.getElementById("height");
const weight = document.getElementById("weight");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

function calculateBMI() {
    // Get the values of height and weight inputs
    const heightValue = parseFloat(heights.value);
    const weightValue = parseFloat(weight.value);

    console.log(heightValue);
    console.log(weightValue);

    // Check if the inputs are valid numbers and greater than zero
    if (isNaN(heightValue) || isNaN(weightValue) || heightValue <= 0 || weightValue <= 0) {
        result.textContent = "Please enter valid height and weight values.";
        return; // Exit the function early if inputs are invalid
    }

    // Convert height to meters (assuming the input is in centimeters)
    const heightInMeters = heightValue / 100;

    console.log(heightInMeters);

    // Calculate BMI using the formula
    const bmi = weightValue / (heightInMeters * heightInMeters);

    console.log(bmi);

    // Display the calculated BMI with two decimal places
    result.textContent = "Your BMI is: " + bmi.toFixed(2);

    if (bmi <= 18.5) {
        result.textContent += ". You are in the underweight range.";
        result.style.color = "red";
    } else if (bmi <= 24.9) {
        result.textContent += ". You are in the healthy weight range.";
        result.style.color = "green";
    } else {
        result.textContent += ". You are in the overweight range.";
        result.style.color = "orange";
    }
}


// Attach the calculateBMI function to the click event of the button
btn.addEventListener("click", calculateBMI);