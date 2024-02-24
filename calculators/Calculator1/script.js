const inputRes = document.querySelector(".result");
const deleteButton = document.getElementsByClassName("delete-btn");
const divideButton = document.getElementsByClassName("divid-btn");
const multiButton = document.getElementsByClassName("multi-btn");
const subsButton = document.getElementsByClassName("subs-btn");
const addButton = document.getElementsByClassName("add-btn");
const decimalButton = document.getElementsByClassName("decimal-btn");
const equalButton = document.getElementsByClassName("equal-btn");
const numberBtn = document.querySelectorAll(".number");

// Convert numberBtn NodeList to an array
const numberBtnArray = Array.from(numberBtn);

//initialize the variables
let result = '';
let operations = '';
let previousOperand = 0;

// function to append number
const appendNumber = (number) => {
 result += number;
 inputRes.value = result;  
}

// Add event listner to number Buttons
numberBtnArray.forEach(button => {
    button.addEventListener("click", () =>{
        appendNumber(button.innerText);
    });
});



