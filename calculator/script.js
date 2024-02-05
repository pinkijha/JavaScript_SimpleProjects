let inpt = document.querySelector(".inpt");
let btns = document.querySelectorAll(".btn1");

let string = "";
let arr = Array.from(btns);
arr.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            inpt.value = string;
        }
        else if (e.target.innerHTML == "C") {
            string = "";
            inpt.value = string;
        }
        else {
            string += e.target.innerHTML;
            inpt.value = string;
        }
    })
});

