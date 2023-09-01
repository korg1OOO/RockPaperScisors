let computerSelection;
let playerSelection;
let result;
let computerScore = 0;
let playerScore = 0;
let round = 1;

function getComputerChoice() {
    const computerChoices = ["Rock", "Paper", "Scissors"];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function playRound() {
    computerSelection = getComputerChoice()
    switch (computerSelection) {
        case "Rock":
            if (playerSelection === "Scissors") {
                computerScore++;
                result = "You Lose! Rock beats Scissors!"
            } else if(playerSelection === "Rock") {
                result = "It was a draw!"
            } else {
                playerScore++;
                result = "You win! Paper beats Rock!"
            }
            break;
        case "Paper":
            if (playerSelection === "Scissors") {
                playerScore++;
                result = "You win! Scissors beat Paper!"
            }
            else if(playerSelection === "Paper") {
                result = "It was a draw!"
            }
            else {
                computerScore++;
                result = "You Lose! Paper beats Rock!"
            }
            break;
        case "Scissors":
            if (playerSelection === "Paper") {
                computerScore++;
                result = "You lose! Scissors beats Paper!"
            }
            else if (playerSelection === "Scissors") {
                result = "It was a draw!";
            }
            else {
                playerScore++;
                result = "You win! Rock beats Scissors!"
            }
            break;
    }
    showData();
}

function rockClick() {
    playerSelection = "Rock";
    playRound();
}

function scissorsClick() {
    playerSelection = "Scissors";
    playRound();
}

function paperClick() {
    playerSelection = "Paper";
    playRound();
}

const rockButton = document.querySelector('.rockButton');
rockButton.addEventListener('click', rockClick);

const paperButton = document.querySelector('.paperButton');
paperButton.addEventListener('click', paperClick);

const scissorsButton = document.querySelector('.scissorsButton');
scissorsButton.addEventListener('click', scissorsClick);

const roundText = document.getElementById('round');
roundText.innerHTML = "";

const playerChoiceText = document.getElementById('playerChoice');
playerChoiceText.innerHTML = "";

const computerChoiceText = document.getElementById('computerChoice');
computerChoiceText.innerHTML = ""; 

const playerPointsText = document.getElementById('playerPoints');
playerPointsText.innerHTML = "";

const computerPointsText = document.getElementById('computerPoints');
computerPointsText.innerHTML = "";

const resultText = document.getElementById('result');
resultText.innerHTML = "";

function showData() {
    resultText.textContent = result;
    computerPointsText.textContent = "Computer Score: " + computerScore;
    playerPointsText.textContent = "Player Score: " + playerScore;
    computerChoiceText.textContent = "Computer Choice: " + computerSelection;
    playerChoiceText.textContent = "Player Choice: " + playerSelection;
    roundText.textContent = "Round " + round;
    round++;

    if (playerScore > 4) {
        resultText.textContent = "You win the game!";
        endGame();
    } else if (computerScore > 4) {
        resultText.textContent = "Computer wins the game!";
        endGame();
    }
}

function endGame(){
    playerScore = 0;
    computerScore = 0;
    round = 1;
}
