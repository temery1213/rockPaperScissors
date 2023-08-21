let playerScore = 0;
let computerScore = 0;
const roundsToPlay = 5;

// Function to update the result on the HTML page
function updateResult(resultText) {
  const resultDiv = document.getElementById("result");
  const resultParagraph = resultDiv.querySelector("p");
  resultParagraph.textContent = "Result: " + resultText;
}

// Function to update the final game result on the HTML page
function updateFinalResult(finalResultText) {
  const finalResultDiv = document.getElementById("final-result");
  finalResultDiv.textContent = finalResultText;
}

// Function to get the computer's choice
function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  let choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

// Function to play a single round
function playRound(playerSelection, computerSelection) {
  // Your existing playRound code here
  // Return the result of the round (e.g., "Player wins the round!", "Computer wins the round!", "It's a tie!")
}

// Function to handle player's choice and continue the game loop
function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const roundResult = playRound(playerChoice, computerChoice);

  updateResult(roundResult);

  if (roundResult.includes("Player wins")) {
    playerScore++;
  } else if (roundResult.includes("Computer wins")) {
    computerScore++;
  }

  // Check if the game should end after a certain number of rounds
  if (playerScore + computerScore === roundsToPlay) {
    if (playerScore > computerScore) {
      updateFinalResult("Player wins the game!");
    } else if (computerScore > playerScore) {
      updateFinalResult("Computer wins the game!");
    } else {
      updateFinalResult("It's a tie!");
    }
  }
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "Player wins the round!";
  } else {
    return "Computer wins the round!";
  }
}

// Attach event listeners to buttons for player choices
document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));
