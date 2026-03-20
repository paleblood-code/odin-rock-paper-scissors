// console.log("Hello World");

// The game will be played against the computer.
// I need function that randomly choose and return either "rock", "paper", "scissors".
// Now I should get the human choice
// I should track with variable for each as score
// The logic for each round

// let humanScore = 0;
// let computerScore = 0;
let computerChoice;
let humanChoice;

// Math.random() => floating-point greater than or equal to 0 and less than 1
// 0 <= floating-point < 1
// here we need the computer to choos random number between 1 - 3
// also we need to round the number
// Math.floor
// Even thought the function works but code is repetitive LOOP would be nice

function getComputerChoice() {
  const min = 1;
  const max = 4;
  const generateRandomNumber = Math.floor(Math.random() * (max - min) + min);
  if (generateRandomNumber === 1) {
    computerChoice = "rock";
    return "The computer choice is: " + computerChoice;
  } else if (generateRandomNumber === 2) {
    computerChoice = "paper";
    return "The computer choice is: " + computerChoice;
  } else {
    computerChoice = "scissors";
    return "The computer choice is: " + computerChoice;
  }
}

console.log(getComputerChoice());

function getHumanChoice() {
  humanChoice = prompt("What is your choice: ").toLowerCase();
  return "The player choice is: " + humanChoice;
}

console.log(getHumanChoice());

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === computerChoice) {
      return "Game is tie want to play again?";

      // Rock
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore++;
      return computerChoice + " beats " + humanChoice;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      return humanChoice + " beats " + computerChoice;

      // Paper
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      return humanChoice + " beats " + computerChoice;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore++;
      return computerChoice + " beats " + humanChoice;

      // Scissors
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore++;
      return computerChoice + " beats " + humanChoice;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      return humanChoice + " beats " + computerChoice;
    }
  }
  return "Human: " + humanScore + " Computer: " + computerScore;
}

const playFiveTimes = playGame() * 5;
console.log(playFiveTimes);
