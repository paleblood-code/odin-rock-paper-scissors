// console.log("Hello World");

// The game will be played against the computer.
// I need function that randomly choose and return either "rock", "paper", "scissors".
// Now I should get the human choice
// I should track with variable for each as score
// The logic for each round
// Math.random() => floating-point greater than or equal to 0 and less than 1
// 0 <= floating-point < 1
// here we need the computer to choos random number between 1 - 3
// also we need to round the number
// Math.floor
// Even thought the function works but code is repetitive LOOP would be nice

// If statment was in generateComputerChoice function

// If statment was in playgame function
// if (humanChoice.toLowerCase() === computerChoice) {
//   return "Game is tie want to play again?";

//   // Rock
// } else if (humanChoice === "rock" && computerChoice === "paper") {
//   computerScore++;
//   return computerChoice + " beats " + humanChoice;
// } else if (humanChoice === "rock" && computerChoice === "scissors") {
//   humanScore++;
//   return humanChoice + " beats " + computerChoice;

//   // Paper
// } else if (humanChoice === "paper" && computerChoice === "rock") {
//   humanScore++;
//   return humanChoice + " beats " + computerChoice;
// } else if (humanChoice === "paper" && computerChoice === "scissors") {
//   computerScore++;
//   return computerChoice + " beats " + humanChoice;

//   // Scissors
// } else if (humanChoice === "scissors" && computerChoice === "rock") {
//   computerScore++;
//   return computerChoice + " beats " + humanChoice;
// } else if (humanChoice === "scissors" && computerChoice === "paper") {
//   humanScore++;
//   return humanChoice + " beats " + computerChoice;
// }

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

function getHumanChoice() {
  humanChoice = prompt("What is your choice: ").toLowerCase();
  return humanChoice;
}

function playGame() {
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice();
  let computerScore = 0;
  let humanScore = 0;

  function playRound(humanChoice, computerChoice) {
    switch (true) {
      // Tie game
      case humanChoice === computerChoice:
        console.log("Game is tie want to play again?");
        break;

      // Rock
      case humanChoice === "rock" && computerChoice === "paper":
        computerScore++;
        console.log(computerChoice + " beats " + humanChoice);
        break;
      case humanChoice === "rock" && computerChoice === "scissors":
        humanScore++;
        console.log(humanChoice + " beats " + computerChoice);
        break;

      // Paper
      case humanChoice === "paper" && computerChoice === "rock":
        humanScore++;
        console.log(humanChoice + " beats " + computerChoice);
        break;
      case humanChoice === "paper" && computerChoice === "scissors":
        computerScore++;
        console.log(computerChoice + " beats " + humanChoice);
        break;

      // Scissors
      case humanChoice === "scissors" && computerChoice === "rock":
        computerScore++;
        console.log(computerChoice + " beats " + humanChoice);
        break;
      case humanChoice === "scissors" && computerChoice === "paper":
        humanScore++;
        console.log(humanChoice + " beats " + computerChoice);
        break;

      default:
        console.log("Game not played abort.");
    }
  }

  // Round 1
  getComputerChoice();
  getHumanChoice();
  playRound(humanChoice, computerChoice);

  // Round 2
  getComputerChoice();
  getHumanChoice();
  playRound(humanChoice, computerChoice);

  // Round 3
  getComputerChoice();
  getHumanChoice();
  playRound(humanChoice, computerChoice);

  // Round 4
  getComputerChoice();
  getHumanChoice();
  playRound(humanChoice, computerChoice);

  // Round 5
  getComputerChoice();
  getHumanChoice();
  playRound(humanChoice, computerChoice);

  return "Human: " + humanScore + " Computer " + computerScore;
}

console.log(playGame());

// console.log(getComputerChoice());
// console.log(getHumanChoice());
// console.log(playRound(humanChoice, computerChoice));
