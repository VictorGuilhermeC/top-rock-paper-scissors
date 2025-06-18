const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const message = document.createElement("p");
const div = document.querySelector("div");

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);

  switch (randomNum) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  const picks = `Your pick: ${humanChoice}. The Computer's pick: ${computerChoice}. `;

  if (humanChoice === computerChoice) {
    message.textContent = picks + `It's a tie!`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    message.textContent = picks + `You win this round!`;
  } else {
    computerScore++;
    message.textContent = picks + `You lose this round!`;
  }
  return div.appendChild(message);
}

function playGame() {
  rock.addEventListener("click", () => playRound("rock", getComputerChoice()));

  paper.addEventListener("click", () =>
    playRound("paper", getComputerChoice())
  );

  scissors.addEventListener("click", () =>
    playRound("scissors", getComputerChoice())
  );

  console.log(
    `Your score: ${humanScore}. The Computer's score: ${computerScore}.`
  );

  if (humanScore > computerScore) {
    return console.log("You won the game! Congratulations!");
  } else if (humanScore < computerScore) {
    return console.log("You lost the game! Try again another time.");
  } else {
    return console.log("It's a tie!");
  }
}

playGame();
