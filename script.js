console.log("Hello, World!");

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
/*
Step 6: Write the logic to play the entire game
Your game will play 5 rounds. You will write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.

Create a new function named playGame.
Move your playRound function and score variables so that they’re declared inside of the new playGame function
Play 5 rounds by calling playRound 5 times.
Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.
*/

/*

*/
