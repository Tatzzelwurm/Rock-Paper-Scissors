let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const a = Math.floor(Math.random() * 3);
  if (a == 0) {
    return "Rock";
  } else if (a == 1) {
    return "Paper";
  } else if (a == 2) {
    return "Scissors";
  }
}

function updateScore() {
  scoreText.textContent = `Human score: ${humanScore} Computer score: ${computerScore}`;
}

function playRound(humanChoice, computerChoice) {
  if (humanScore === 5 || computerScore === 5) {
    return;
  }

  let x = humanChoice.at(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
  choiceText.innerHTML = `You: ${x}<br>Computer: ${computerChoice}`;

  let roundResult = "";

  if (x === "Rock" && computerChoice === "Paper") {
    computerScore++;
    roundResult = "You lose! Paper beats rock!";
  } else if (x === "Paper" && computerChoice === "Rock") {
    humanScore++;
    roundResult = "You win! Paper beats rock!";
  } else if (x === "Scissors" && computerChoice === "Rock") {
    computerScore++;
    roundResult = "You lose! Rock beats scissors!";
  } else if (x === "Rock" && computerChoice === "Scissors") {
    humanScore++;
    roundResult = "You win! Rock beats scissors!";
  } else if (x === "Paper" && computerChoice === "Scissors") {
    computerScore++;
    roundResult = "You lose! Scissors beat paper!";
  } else if (x === "Scissors" && computerChoice === "Paper") {
    humanScore++;
    roundResult = "You win! Scissors beat paper!";
  } else {
    roundResult = "It's a tie!";
  }

  updateScore();

  resultText.textContent = roundResult;

  if (humanScore === 5) {
    gameResultText.textContent =
      "||| Game over! Human defeated the machine! |||";
  } else if (computerScore === 5) {
    gameResultText.textContent =
      "||| Game over! This time the machine was smarter! |||";
  }
}

const rockSelection = document.querySelector("#rock");
const paperSelection = document.querySelector("#paper");
const scissorsSelection = document.querySelector("#scissors");
rockSelection.textContent = "Rock";
paperSelection.textContent = "Paper";
scissorsSelection.textContent = "Scissors";
const container = document.querySelector("#container");
container.style.margin = "auto";

const table = document.createElement("div");
table.style.backgroundColor = "whitesmoke";

const choiceText = document.createElement("p");
const resultText = document.createElement("p");
const scoreText = document.createElement("p");
const gameResultText = document.createElement("p");

table.append(choiceText, resultText, scoreText, gameResultText);

container.append(rockSelection, paperSelection, scissorsSelection, table);

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id, getComputerChoice());
  });
});
