const resultElement = document.getElementById("result");
const clearbtn = document.getElementById("clear-button");
const deleteButton = document.getElementById("delete-button");
const divideButton = document.getElementById("divide-button");
const multiButton = document.getElementById("multi-button");
const subsButton = document.getElementById("subs-button");
const addButton = document.getElementById("add-button");
const decimalButton = document.getElementById("decimal-button");
const equalButton = document.getElementById("equal-btn");
const numberBtn = document.querySelectorAll(".number");


//initialize the variables
let result = '';
let operations = '';
let previousOperand = 0;

// function to append number
const appendNumber = (number) => {
    if(number === "." && result.includes(".")) return;
 result += number;
 updateDisplay();
}

// Function to select operator
const selectOperator = (operatorValue) => {
    if (result === " ") return;

    if(operations !== "" && previousOperand !== ""){
        calculateResult();
    }

    operations = operatorValue;
    previousOperand = result;
    result = "";
    updateDisplay();
}

// function to calculate result
const calculateResult = () => {
    let evaluatedResult ;
    const pre = parseFloat(previousOperand);
    const current = parseFloat(result);
    if(isNaN(pre) || isNaN(current)) return;
    switch (operations) {
        case '+':
            evaluatedResult = pre + current;
            break;

            case '-':
            evaluatedResult = pre - current;
            break;

            case '*':
            evaluatedResult = pre * current;
            break;

            case '/':
            evaluatedResult = pre / current;
            break;
    
        default:
            return;
    }
    result = evaluatedResult.toString();
    operations="";
    previousOperand="";

}

// function to update display
const updateDisplay = () => {
    if(operations){
        resultElement.innerText = `${previousOperand} ${operations} ${result}`
    }
    else{

        resultElement.innerText = result;  
    }

}

// Add event listner to number Buttons
numberBtn.forEach(button => {
    button.addEventListener("click", () =>{
        appendNumber(button.innerText);
    });
});

// Function for clear button
const clearDisplay = () => {
    result = "";
    previousOperand = "";
    operations = "";
    updateDisplay();

}

//Function to delete last element
const deleteLastDigit = () => {
    if (operations !== "" && result === "") {
        operations = "";
        result = previousOperand;
        previousOperand = "";
        updateDisplay();
      } else {
        result = result.slice(0, -1);
        updateDisplay();
      }
    };

decimalButton.addEventListener("click", () => appendNumber("."))
addButton.addEventListener("click", () => selectOperator("+"));
subsButton.addEventListener("click", () => selectOperator("-"));
multiButton.addEventListener("click", () => selectOperator("*"));
divideButton.addEventListener("click", () => selectOperator("/"));
equalButton.addEventListener("click", () => {
    if(result === "") return;
    calculateResult();
    updateDisplay();
});

clearbtn.addEventListener("click", clearDisplay);
deleteButton.addEventListener("click",deleteLastDigit);
