let inpt = document.querySelector(".inpt");
let btns = document.querySelectorAll(".btn1");

let string = "";
let arr = Array.from(btns);
arr.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            try {
                string = eval(string);
                inpt.value = string;
            } catch (error) {
                inpt.value = "Error";
            }
        } else if (e.target.innerHTML == "C") {
            string = "";
            inpt.value = string;
        } else if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            inpt.value = string;
        } else if (e.target.innerHTML == ".") {
            if (!string.endsWith(".") && !string.includes(".")) {
                string += e.target.innerHTML;
                inpt.value = string;
            }
        } else {
            string += e.target.innerHTML;
            inpt.value = string;
        }
    });
});
