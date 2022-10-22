const computerRock = "rock";
const computerPaper = "paper";
const computerScissors = "scissors";
let playerScore = document.getElementById("playerScore")
let computerScore = document.getElementById("computerScore");
let shitTalk = document.getElementById("shitTalk");


function getComputerChoice() {
    let choices = [computerRock, computerPaper, computerScissors];
    let choice = choices[Math.floor(Math.random() * choices.length)]; 
    return choice.toString();
}


function playRound(val) {
    



    let playerSelection = val;
    computerSelection = getComputerChoice();
    alert(`You chose ${playerSelection}.\nYour opponent chose ${computerSelection}.`); 

    if ((playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")) {
        alert("You win, my G!");   
        playerScore.innerText = Number(playerScore.innerText) + 1;
    }
    else if (playerSelection === computerSelection) {
        alert("It's a draw");   
    }
    else {
        alert("You lose, loser");
        computerScore.innerText = Number(computerScore.innerText) + 1;
    }

    if (computerScore.innerText > 3 && playerScore < 3) {
        shitTalk.style.visibility = "visible";
    }

    if (playerScore.innerText == 5) {
        alert("You've won the game!");
        return;
    } else if (computerScore.innerText == 5) {
        alert("You've lost the game.");
        return;
    }

}

