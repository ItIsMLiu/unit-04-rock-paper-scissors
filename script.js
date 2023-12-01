var play = confirm ("Fancy a game of 'Rock, Paper, Scissors'?")

if (play) {
    while (playAgain) {
        var playerScore =0;
        var computerScore = 0;
        var tieRounds = 0
        var rounds = 1;
        while (rounds<4) {
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