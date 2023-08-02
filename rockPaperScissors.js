
   
// get computer choice //

function getComputerChoice() {
let options = ["rock", "paper", "scissors"];
let choice = options[Math.floor(Math.random()*options.length)];
return choice
}
const computerChoice = getComputerChoice();
console.log(computerChoice)

// get player choice //

function getPlayerChoice() {
    let input = prompt("Rock, paper, or scissors?");
    let playerChoice = input.toLowerCase();
    return playerChoice
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection;
    let computer = computerSelection;
    let winner;
  
    if (playerSelection === "rock") {
      if (computerSelection === "paper") {
        winner = computer;
      } else if (computerSelection === "scissors") {
        winner = player;
      } else {
        // It's a tie
        winner = "tie";
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "rock") {
        winner = player;
      } else if (computerSelection === "scissors") {
        winner = computer;
      } else {
        // It's a tie
        winner = "tie";
      }
    } else if (playerSelection === "scissors") {
      if (computerSelection === "rock") {
        winner = computer;
      } else if (computerSelection === "paper") {
        winner = player;
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


// count rounds //

// sum up the score //

// declare a winner // 
