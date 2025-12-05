let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
 const a = Math.floor(Math.random() * 3);
  if (a == 0) {
    return "Rock"
 
  } else if (a == 1) {
    return "Paper"
  
  } else if (a == 2) {
    return "Scissors"
   
  }
}

function getHumanChoice() {
  return prompt("Rock, paper or scissors?");
}


function playRound(humanChoice, computerChoice) {
     let x = humanChoice.at(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    console.log(`You: ${x}\nComputer: ${computerChoice}`);

if (x == "Rock" && computerChoice == "Paper") {
    computerScore++;
    return console.log("You lose! Paper beats rock!");
}
else if (x == "Paper" && computerChoice == "Rock") {
    humanScore++;
    return console.log("You win! Paper beats rock!");
}
else if (x == "Scissors" && computerChoice == "Rock") {
    computerScore++;
    return console.log("You lose! Rock beats scissors!");
}
else if (x == "Rock" && computerChoice == "Scissors") {
    humanScore++;
    return console.log("You win! Rock beats scissors!");
}
else if (x == "Paper" && computerChoice == "Scissors") {
    computerScore++;
    return console.log("You lose! Scissors beat paper!");
}
else if (x == "Scissors" && computerChoice == "Paper") {
    humanScore++;
    return console.log("You win! Scissors beat paper!");
}
else {
    return console.log("It's a tie!");
}

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
