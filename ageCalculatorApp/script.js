const result = document.getElementById("result");
const userInput = document.getElementById("date");
const btn = document.getElementsByClassName("btn");

userInput.max = new Date().toISOString().split("T")[0];

const calculate = Array.from(btn);
calculate.forEach(button => {
    button.addEventListener("click", () => {
        // Add your calculation logic here
        
        let birthDate = new Date(userInput.value);
        let y1 = birthDate.getFullYear();
        let m1 = birthDate.getMonth();
        let d1 = birthDate.getDate();

        let today = new Date();
        let y2 = today.getFullYear();
        let m2 = today.getMonth();
        let d2 = today.getDate();

        let y3, m3, d3;

        y3 = y2 - y1;

        if(m2 >= m1){
            m3 = m2 - m1;
        }
        else{
            y3--;
            m3 = 12 + m2 - m1;
        }

        if(d2 >= d1){
            d3 = d2 - d1;
        }
        else{
            m3--;
            d3 = getDaysInMonth(y1, m1)+d2 - d1;
        }
        if(m3<0){
            m3=11;
            y3--;
        }
        result.innerHTML = ` You are <span>${y3}</span> years, <span>${m3}</span> months & <span>${d3}</span> days old.`;

    });
});

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}