const currentRound = document.querySelector(".current-round");
const roundResult = document.querySelector(".round-result");
const playerScore = document.querySelector(".player-score");
const cpuScore = document.querySelector(".cpu-score");
const buttons = document.querySelector(".button-container");
const gameRecord = document.querySelector("ul");

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}
getComputerChoice();

buttons.addEventListener("click", function (event) {
  if (gameOver) {
    return;
  }
  const humanChoice = event.target.className;
  const computerChoice = getComputerChoice();

  playRound(humanChoice, computerChoice);

  if (humanScore === 5 || computerScore === 5) {
    gameOver = true;
    currentRound.textContent = "Game Over! Refresh to play again.";
    if (humanScore === 5) {
      gameScore.textContent = "🎉 Overall Winner: Human! 🎉";
    } else {
      gameScore.textContent = "💻 Overall Winner: Computer! 💻";
    }
  }
});

let humanScore = 0;
let computerScore = 0;
let gameRound = 0;
let gameOver = false;

function playRound(humanChoice, computerChoice) {
  gameRound++;
  currentRound.textContent = `Round ${gameRound}`;
  //humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    roundResult.textContent = `It's a tie! Both chose ${humanChoice}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  } else {
    const invalid = `Invalid input! you lose`;
    computerScore++;
    return invalid;
  }
  playerScore.textContent = `${humanScore}`;
  cpuScore.textContent = `${computerScore}`;
  const roundRecord = document.createElement("li");
  roundRecord.textContent = `${currentRound.textContent}: ${roundResult.textContent}`;
  gameRecord.appendChild(roundRecord);
}
