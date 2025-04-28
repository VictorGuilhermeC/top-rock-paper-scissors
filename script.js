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

function getHumanChoice() {
  let answer = prompt("Rock, paper, scissors, GO!");
  return answer.toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let round = 0;

  function playRound(humanChoice, computerChoice) {
    const picks = `Your pick: ${humanChoice}. The Computer's pick: ${computerChoice}. `;

    if (humanChoice === computerChoice) {
      return console.log(picks + `It's a tie!`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      humanScore++;
      return console.log(picks + `You win this round!`);
    } else {
      computerScore++;
      return console.log(picks + `You lose this round!`);
    }
  }

  while (round < 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    round++;
  }

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
