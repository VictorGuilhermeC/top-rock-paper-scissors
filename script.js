const buttons = document.querySelector("#buttons");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const message = document.createElement("p");
const display = document.querySelector("#display");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
let playerScoreValue = Number(playerScore.textContent);
let computerScoreValue = Number(computerScore.textContent);
const gameOver = document.createElement("h2");
const restartButton = document.querySelector("#restartButton");
restartButton.classList.add("hidden");

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

function playRound(humanChoice, computerChoice) {
  const picks = `Your pick: ${humanChoice}. The Computer's pick: ${computerChoice}. `;

  if (humanChoice === computerChoice) {
    message.textContent = picks + `It's a tie!`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    playerScoreValue++;
    playerScore.textContent = playerScoreValue;
    message.textContent = picks + `You win this round!`;
  } else {
    computerScoreValue++;
    computerScore.textContent = computerScoreValue;
    message.textContent = picks + `You lose this round!`;
  }
  display.appendChild(message);

  if (playerScoreValue === 5 || computerScoreValue === 5) {
    rock.classList.add("hidden");
    paper.classList.add("hidden");
    scissors.classList.add("hidden");
    restartButton.classList.remove("hidden");
    playerScoreValue > computerScoreValue
      ? (gameOver.textContent = "Congratulations! You won the game!")
      : (gameOver.textContent = "You lost the game! Better luck next time!");
    return display.appendChild(gameOver);
  }
}

function gameReset() {
  playerScore.textContent = 0;
  computerScore.textContent = 0;
  playerScoreValue = Number(playerScore.textContent);
  computerScoreValue = Number(computerScore.textContent);
  restartButton.classList.add("hidden");
  rock.classList.remove("hidden");
  paper.classList.remove("hidden");
  scissors.classList.remove("hidden");
  display.removeChild(message);
  display.removeChild(gameOver);
}

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () =>
  playRound("scissors", getComputerChoice())
);
restartButton.addEventListener("click", () => gameReset());
