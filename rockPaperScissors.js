// get computer choice
function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
  }
  
  // get player choice
  function getPlayerChoice() {
    let input = prompt("Rock, paper, or scissors?");
    let playerChoice = input.toLowerCase();
    return playerChoice;
  }
  
  // play a round
  function playRound(playerSelection, computerSelection) {
    let player = playerSelection;
    let computer = computerSelection;
    let winner;
  
    if (playerSelection === "rock") {
      if (computerSelection === "paper") {
        winner = "computer";
      } else if (computerSelection === "scissors") {
        winner = "player";
      } else {
        // It's a tie
        winner = "tie";
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "rock") {
        winner = "player";
      } else if (computerSelection === "scissors") {
        winner = "computer";
      } else {
        // It's a tie
        winner = "tie";
      }
    } else if (playerSelection === "scissors") {
      if (computerSelection === "rock") {
        winner = "computer";
      } else if (computerSelection === "paper") {
        winner = "player";
      } else {
        // It's a tie
        winner = "tie";
      }
    } else {
      // Invalid input, handle the error or tie as you see fit.
      winner = "invalid";
    }
  
    return winner;
  }
  
  // count rounds and sum up the score
  function gameLoop() {
    const roundsToPlay = 5;
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < roundsToPlay; i++) {
      const playerChoice = getPlayerChoice();
      const computerChoice = getComputerChoice();
      const roundWinner = playRound(playerChoice, computerChoice);
  
      // Update the scores based on the round winner
      if (roundWinner === "player") {
        playerScore++;
      } else if (roundWinner === "computer") {
        computerScore++;
      }
  
      console.log(`Round ${i + 1}: Player - ${playerChoice}, Computer - ${computerChoice}, Winner - ${roundWinner}`);
    }
  
    // Determine the overall winner based on the scores and display the result.
    if (playerScore > computerScore) {
      console.log("Player wins!");
    } else if (playerScore < computerScore) {
      console.log("Computer wins!");
    } else {
      console.log("It's a tie!");
    }
  }
  
  // Start the game
  gameLoop();
  