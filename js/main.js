const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const humanScoreText = document.querySelector(".human-score");
const computerScoreText = document.querySelector(".computer-score");

const choices = document.querySelector(".choices");
const results = document.querySelector(".results");
const roundCounterText = document.querySelector(".round-text");

let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;

function getComputerChoice() {
  const min = 1;
  const max = 4;
  const generateRandomNumber = Math.floor(Math.random() * (max - min) + min);

  switch (generateRandomNumber) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
    default:
      computerChoice = "rock";
  }
  return computerChoice;
}

function playRound(humanChoice, computerChoice) {
  switch (true) {
    case humanChoice === computerChoice:
      results.innerText = "Game is tie want to play again?";
      break;

    case humanChoice === "rock" && computerChoice === "paper":
      computerScore++;
      results.innerText = `${computerChoice} beats ${humanChoice}`;
      break;
    case humanChoice === "rock" && computerChoice === "scissors":
      humanScore++;
      results.innerText = `${humanChoice} beats ${computerChoice}`;
      break;

    case humanChoice === "paper" && computerChoice === "rock":
      humanScore++;
      results.innerText = `${humanChoice} beats ${computerChoice}`;
      break;
    case humanChoice === "paper" && computerChoice === "scissors":
      computerScore++;
      results.innerText = `${computerChoice} beats ${humanChoice}`;
      break;

    case humanChoice === "scissors" && computerChoice === "rock":
      computerScore++;
      results.innerText = `${computerChoice} beats ${humanChoice}`;
      break;
    case humanChoice === "scissors" && computerChoice === "paper":
      humanScore++;
      results.innerText = `${humanChoice} beats ${computerChoice}`;
      break;

    default:
      results.innerText = "The game was not played!";
  }

  humanScoreText.innerText = humanScore;
  computerScoreText.innerText = computerScore;
}

rock.addEventListener("click", () => {
  humanChoice = "rock";
  getComputerChoice();
  playRound(humanChoice, computerChoice);
  choices.innerText = `Your choice: ${humanChoice}, 
  Computer choice: ${computerChoice}`;
  roundCounter++;
  if (roundCounter === 5) {
    if (humanScore > computerScore) {
      roundCounterText.innerText = "Human Wins!";
    } else if (computerScore > humanScore) {
      roundCounterText.innerText = "Computer Wins";
    } else {
      roundCounterText.innerText = "It's a tie";
    }

    rock.disabled = true;
  }
});

paper.addEventListener("click", () => {
  humanChoice = "paper";
  getComputerChoice();
  playRound(humanChoice, computerChoice);
  choices.innerText = `Your choice: ${humanChoice}, 
  Computer choice: ${computerChoice}`;
  roundCounter++;
  if (roundCounter === 5) {
    if (humanScore > computerScore) {
      roundCounterText.innerText = "Human Wins!";
    } else if (computerScore > humanScore) {
      roundCounterText.innerText = "Computer Wins";
    } else {
      roundCounterText.innerText = "It's a tie";
    }
    paper.disabled = true;
  }
});

scissors.addEventListener("click", () => {
  humanChoice = "scissors";
  getComputerChoice();
  playRound(humanChoice, computerChoice);
  choices.innerText = `Your choice: ${humanChoice}, 
  Computer choice: ${computerChoice}`;
  roundCounter++;
  if (roundCounter === 5) {
    if (humanScore > computerScore) {
      roundCounterText.innerText = "Human Wins!";
    } else if (computerScore > humanScore) {
      roundCounterText.innerText = "Computer Wins";
    } else {
      roundCounterText.innerText = "It's a tie";
    }

    scissors.disabled = true;
  }
});
