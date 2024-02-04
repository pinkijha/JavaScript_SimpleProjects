let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let newgame = document.querySelector(".newgame");
let msg = document.querySelector(".msg");
let winner = document.querySelector("#winner");

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]  
];

let turnO = true;



boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turnO){ //turn O
            box.innerText = "O";
            turnO = false;
        }
        else{ // Turn X
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();

    });
});

const resetGame = () =>{
    turnO = true;
    enabledBox();
    msg.classList.add("hide");
}

const enabledBox =() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}

const disabledBox =() =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner1) =>{
 winner.innerHTML =` Congratualations! You Won the Game. ${winner1}`;
 msg.classList.remove("hide");
 disabledBox();
}

const checkWinner = () => {
    for(let pattern of winPatterns){

             let pos1 = boxes[pattern[0]].innerText;
             let pos2 = boxes[pattern[1]].innerText;
             let pos3 = boxes[pattern[2]].innerText;
             if(pos1 != "" && pos2 != "" && pos3 != ""){
                if(pos1 === pos2 && pos2 === pos3){
                    console.log("winner",pos1);
                    showWinner(pos1);
                }
             }
    }
};

newgame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);