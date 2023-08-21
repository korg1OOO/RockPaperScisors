let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    const computerChoices = ["Rock", "Paper", "Scissors"];

    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Write your choice!");
    computerSelection = getComputerChoice()
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    console.log("Player: " + playerSelection + "\nMachine: " + computerSelection);
    switch (computerSelection) {
        case "Rock":
            if (playerSelection === "Scissors") {
                console.log("You Lose! Rock beats Scissors!");
                computerScore++;
            } else if(playerSelection === "Rock" || playerSelection === "rock" || playerSelection === "rocks") {
                console.log("It was a draw!");
            } else {
                console.log("You win! Paper beats Rock!");
                playerScore++;
            }
            break;
        case "Paper":
            if (playerSelection === "Scissors") {
                console.log("You win! Scissors beat Paper!");
                playerScore++;
            }
            else if(playerSelection === "Paper") {
                console.log("It was a draw!");
            }
            else {
                console.log("You Lose! Paper beats Rock!");
                computerScore++;
            }
            break;
        case "Scissors":
            if (playerSelection === "Paper" || playerSelection === "paper" || playerSelection === "papers") {
                console.log("You lose! Scissors beats Paper!");
                computerScore++;
            }
            else if (playerSelection === "Scissors" || playerSelection === "scissors" || playerSelection === "scissor") {
                console.log("It was a draw!");
            }
            else {
                console.log("You win! Rock beats Scissors!");
                playerScore++;
            }
            break;
    }
}

function game(playRound) {
    let round = 1;
    while (round <= 5) {
        console.log("Round " + round);
        playRound();
        console.log("Your score: " + playerScore + "\nMachine score: " + computerScore);
        round++;
        }
    }

    game(playRound);
