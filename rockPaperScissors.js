
   
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

function playRound(playerSelection, computerSelection){

}
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

// count rounds //

// sum up the score //

// declare a winner // 
