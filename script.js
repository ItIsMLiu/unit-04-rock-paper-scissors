var play = confirm ("Fancy a game of 'Rock, Paper, Scissors'?")

if (play) {
    while (playAgain){
        var playerScore =0;
        var computerScore = 0;
        var tieRounds = 0
        var rounds = 1;
        while (rounds<11) {
            var playerChoices = prompt ("Enter R, P or S to play the game 'Rock, Paper, Scissors'.\nEnter 'STOP' or click 'Cancel' to end the game.")
            var computerChoices = ["R", "P", "S"];
            var computerRandom = computerChoices[Math.floor(Math.random()*computerChoices.length)]

            console.log ("Choice - Computer vs player: " + computerRandom + " / " + playerChoices.toUpperCase())

            if (computerRandom == playerChoices.toUpperCase()) {
                tieRounds++
                alert("Round: " + rounds + "/10\nChoice - Computer vs player: " + computerRandom + " / " + playerChoices.toUpperCase() + "\nIt's a tie!\nScore - Computer vs player: " + computerScore + " / " + playerScore + ". Tie: " + tieRounds + ".")
            } else if (playerChoices == null || playerChoices.trim().toUpperCase() == "STOP") {
                break
            } else if ((computerRandom == "R" && playerChoices.toUpperCase() == "S") || (computerRandom == "P" && playerChoices.toUpperCase() == "R") ||(computerRandom == "S" && playerChoices.toUpperCase() == "P")) {
                computerScore++;
                alert("Round: " + rounds + "/10\nChoice - Computer vs player: " + computerRandom + " / " + playerChoices.toUpperCase() + "\nYou lost!\nScore - Computer vs player: " + computerScore + " / " + playerScore + ". Tie: " + tieRounds + ".");
            } else if ((computerRandom == "R" && playerChoices.toUpperCase() == "P") || (computerRandom == "P" && playerChoices.toUpperCase() == "S") ||(computerRandom == "S" && playerChoices.toUpperCase() == "R")) {
                playerScore++;
                alert("Round: " + rounds + "/10\nChoice - Computer vs player: " + computerRandom + " / " + playerChoices.toUpperCase() + "\nYou won!\nScore - Computer vs player: " + computerScore + " / " + playerScore + ". Tie: " + tieRounds + ".");
            } else {
                alert("ERROR! Round Not counted, please enter letter R, P or S to play. Try Again!");
                rounds--;
            }
            rounds++;
        }

        if (computerScore > playerScore) {
            alert("Game over!\nScore - Computer vs player: " + computerScore + " / " + playerScore + "\nUh-oh, you lost!")
        } else if (computerScore < playerScore) {
            alert("Game over!\nScore - Computer vs player: " + computerScore + " / " + playerScore + "\nHoo-ray, you won!")
        } else {
            alert("Game over!\nScore - Computer vs player: " + computerScore + " / " + playerScore + "\nIt's a tie!")
        }

        var playAgain = confirm ("Play again?")
    } 
}



































/*
var choices = ["R", "P", "S"];
var userChoice; 
var compChoice; 
var userScore = 0; 
var compScore = 0;

while(true) {
  var userChoice = prompt("Choose R P S (or type stop)?"); // r, R
  var compChoice = choices[Math.floor(Math.random() * choices.length)];

  if (userChoice == null || userChoice.trim().toUpperCase() == "STOP") {
    break;
  }

  console.log(userChoice.toUpperCase());
  console.log(compChoice);

  if (compChoice == userChoice.toUpperCase()) {
    alert("It's a draw\nUser: " + userChoice + " Comp: " + compChoice);
  } else if (
    (compChoice == "R" && userChoice.toUpperCase() == "P") ||
    (compChoice == "P" && userChoice.toUpperCase() == "S") ||
    (compChoice == "S" && userChoice.toUpperCase() == "R")) {
      alert("You Won!!!\nUser: " + userChoice + " Comp: " + compChoice);
      userScore++;
  } else if (
    (compChoice == "R" && userChoice.toUpperCase() == "S") ||
    (compChoice == "P" && userChoice.toUpperCase() == "R") ||
    (compChoice == "S" && userChoice.toUpperCase() == "P")) {
      alert("You Lost!!!\nUser: " + userChoice + " Comp: " + compChoice);
      compScore++
  } else {
    alert("Invalid input");
  }
}

alert("Final Score:\nUser: " + userScore + " Comp: " + compScore);






for (rounds = 1; rounds < 5; rounds++) {
    var random = Math.floor(Math.random() * 3);
    var userChoice = prompt("Enter R, P or S to choose between rock, paper or scissors");
    alert("Computer's choice is " + computerChoices[random] + " your choice is " + userChoice);
    var computerRandom = computerChoices[random];
    if (computerRandom == userChoice) {
        alert("It's a tie. The score is (computer/player): " + computerScore + "/" + playerScore + ". " + rounds + "rounds.");
    }
    else if (computerRandom == "R" && userChoice == "S") {
        computerScore++; alert("Computer won. The score is (computer/player): " + computerScore + "/" + playerScore + ". " + rounds + "rounds.");
    }
    else if (computerRandom == "R" && userChoice == "P") {
        playerScore++; alert("Player won. The score is (computer/player): " + computerScore + "/" + playerScore + ". " + rounds + "rounds.");
    }
    else if (computerRandom == "P" && userChoice == "R") {
        computerScore++; alert("Computer won. The score is (computer/player): " + computerScore + "/" + playerScore + ". " + rounds + "rounds.");
    }
    else if (computerRandom == "P" && userChoice == "S") {
        playerScore++; alert("Player won. The score is (computer/player): " + computerScore + "/" + playerScore + ". " + rounds + "rounds.");
    }
    else if (computerRandom == "S" && userChoice == "P") {
        computerScore++; alert("Computer won. The score is (computer/player): " + computerScore + "/" + playerScore + ". " + rounds + "rounds.");
    }
    else if (computerRandom == "S" && userChoice == "R") {
        playerScore++; alert("Player won. The score is (computer/player): " + computerScore + "/" + playerScore + ". " + rounds + "rounds.");
    }
    else { rounds--; alert("Enter a correct letter") };
}
if (computerScore > playerScore) { alert("Computer Won!") }
else if (computerScore < playerScore) { alert("Player Won") }
else { alert("Its a tie!") }








*/