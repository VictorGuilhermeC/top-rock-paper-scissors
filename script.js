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
    if (humanChoice === computerChoice) {
      return console.log(`It's a tie! Both picked ${humanChoice}!`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      humanScore++;
      return console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
    } else {
      computerScore++;
      return console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
    }
  }

  while (round < 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    round++;
  }
}

playGame();
