let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#Computer");

const genComChoice = () => {
// rock , paper, scissors
const options = ["rock", "paper", "scissor"];
const randomInd = Math.floor(Math.random()*3);
return options[randomInd];
}

const drawGame = () => {
    console.log("Game Draw");
    msg.innerHTML = "Game was Draw,  Play Again";
    msg.style.backgroundColor = "rgb(6, 6, 84)";
}

const showWinner = (userWin, userChoice, compChoice) =>{
 if(userWin){
    userScore++;
    userScorePara.innerHTML = userScore;
    console.log("user Win");
    msg.innerHTML = `You Win!, Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
 }
 else{
    compScore++;
    compScorePara.innerHTML = compScore;
    console.log("user lose");
    msg.innerHTML = `You lost,   ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
 }
}

const playGame = (userChoice) => {
    console.log("user choice =", userChoice ); 
    //genarate computer choice ==> Modular way of programming
    const compChoice = genComChoice();
    console.log("computer choice =", compChoice ); 
    
    if( userChoice === compChoice){
        // Draw Game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissor, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            // scissor, rock
            userWin = compChoice === "scissor" ? false: true;
        }
        else{
            //rock, paper
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};  

choices.forEach((choice) => {
    const userChoice = choice.getAttribute("id");
    choice.addEventListener("click", () => {
        playGame(userChoice);
    })
})