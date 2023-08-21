let computerSelection;
let playerSelection;

function getComputerChoice() {
    const computerChoices = ["Rock", "Paper", "Scissors"];

    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Write your choice!");
    computerSelection = getComputerChoice()
    switch (computerSelection) {
        case rock:
            if (playerSelection === scissors || playerSelection === "scissors" || playerSelection === "scissor") {
                return "You Lose! Rock beats Scissors!";
            } else if(playerSelection === rock || playerSelection === "rock" || playerSelection === "rocks") {
                return "It was a draw!";
            } else {
                return "You win! Paper beats Rock!";
            }
        case paper:
            if (playerSelection === scissors || playerSelection === "scissors" || playerSelection === "scissor") {
                return "You win! Scissors beat Paper!";
            }
            else if(playerSelection === paper || playerSelection === "paper" || playerSelection === "papers") {
                return "It was a draw!";
            }
            else {
                return "You Lose! Paper beats Rock!";
            }
        case scissors:
            if (playerSelection === paper || playerSelection === "paper" || playerSelection === "papers") {
                return "You lose! Scissors beats Paper!";
            }
            else if (playerSelection === scissors || playerSelection === "scissors" || playerSelection === "scissor") {
                return "It was a draw!";
            }
            else {
                return "You win! Rock beats Scissors!";
            }
    }
}

function game(playRound) {
    let round = 5;
    while (round < 5) {
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection))
        }
    }

    game();