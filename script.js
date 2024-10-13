var rock = document.querySelector(".rock")
var paper = document.querySelector(".paper")
var scissor = document.querySelector(".scissor")

var playerScore = document.querySelector("#player-score")
var computerScore = document.querySelector("#computer-score")
var playersc = 0;
var computersc = 0;

var comChoice;
var playerChoice;

var bool = 1;
var start = document.querySelector(".start");
start.addEventListener("click", function () {
  if (bool == 1) {
    start.innerHTML = "Reset";
    start.style.border = "2px solid  rgb(186, 13, 13)"
    start.style.color = " rgb(186, 13, 13)";
    bool = 0;

    // Add event listeners here
    rock.addEventListener("click", function () {
      playerChoice = "rock";
      playGame();
    });
    paper.addEventListener("click", function () {
      playerChoice = "paper";
      playGame();
    });
    scissor.addEventListener("click", function () {
      playerChoice = "scissors";
      playGame();
    });
  } else {


    // Remove event listeners here (if you want to reset the game)
    rock.removeEventListener("click", function () {
      playerChoice = "rock";
      playGame();
    });
    paper.removeEventListener("click", function () {
      playerChoice = "paper";
      playGame();
    });
    scissor.removeEventListener("click", function () {
      playerChoice = "scissors";
      playGame();
    });


    alert(`Final Score - Player: ${playersc}, Computer: ${computersc}`);

    playerChoice = null;
    comChoice = null;
    playerScore.innerHTML = 0;
    computerScore.innerHTML = 0;
  }
});



function playGame() {

  comChoice = Math.floor(Math.random() * 3);
  if (comChoice == 0) {
    comChoice = "rock";
  } else if (comChoice == 1) {
    comChoice = "paper";
  } else {
    comChoice = "scissors";
  }

  if (playerChoice == comChoice) {
    console.log("It's a tie!");
  } else if ((playerChoice == "rock" && comChoice == "scissor") ||
    (playerChoice == "scissor" && comChoice == "paper") ||
    (playerChoice = "paper" && comChoice == "rock")) {
    console.log("Player wins this round!");
    let currentScore = parseInt(playerScore.innerHTML); // Get the current score
    currentScore++;
    playerScore.innerHTML = currentScore;
    playersc = currentScore;
  } else {
    console.log("Computer wins this round!");
    let currentScore = parseInt(computerScore.innerHTML); // Get the current score
    currentScore++; // Increment the score
    computerScore.innerHTML = currentScore;
    computersc = currentScore;
  }



}




