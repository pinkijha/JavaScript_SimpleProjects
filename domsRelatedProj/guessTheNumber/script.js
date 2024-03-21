const userInput = document.getElementById("guess");
const btn = document.getElementById("btn");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultparas");

const p = document.createElement("p");


let randomNumber = parseInt(Math.random() * 100+1);


 
/* btn.addEventListener("click",()=> {
    let numGuess = parseInt(guess.value);
    const randomNumber = parseInt(Math.random() * 100+1);
    if (randomNumber === numGuess){
        console.log("your guess is maych with computer guess");
        console.log(numGuess)
        console.log(randomNumber);
    }
    else if(randomNumber > numGuess){
        console.log("computer number bigger");
        console.log(randomNumber);
    }
    else if(randomNumber < numGuess){
        console.log("computer number smaller");
        console.log(randomNumber);
    }
})  */



let preGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    btn.addEventListener("click", function(e){
        const guess = parseInt(userInput.value);
        validateGuess(guess);
        console.log(guess)
    })
}

function validateGuess(guess){
if (isNaN(guess)){
    alert("Please enter a valid number");
}
else if (isNaN(guess < 1)){
    alert("Please enter a number greater than 1");
}
else if (isNaN(guess > 100)){
    alert("Please enter a number less than 100");
}
else{
    preGuess.push(guess);
    if(numGuess === 11){
        displayGuess(guess);
        displayMessage(`Game Over. Randome number was ${randomNumber}`);
        endGame();
    }else{
        displayGuess(guess);
        checkGuess(guess);
    }
}
}

function checkGuess(guess){
    if (guess === randomNumber ){
        displayMessage(`You guessed it right`);
        endGame();
    }
    else if(guess < randomNumber){
        displayMessage(`Number is Too low`);
    }
    else if(guess < randomNumber){
        displayMessage(`Number is Too high`);
    }
}

function displayGuess(guess){
    userInput.value = ``
    guessSlot.innerHTML += ` ${guess}  `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML =`<h2> ${message}</h2>`
}

function endGame(){
    userInput.innerHTML = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id=" newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
    }
    

function newGame(){
const newGameButton = document.querySelector("#newGame");
newGameButton.addEventListener('click', function(){
    randomNumber = parseInt(Math.random() * 100+1);
    preGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11-numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;

})
}

