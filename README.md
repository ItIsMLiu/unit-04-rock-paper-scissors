# rock-paper-scissors
Browser game of Rock, Paper, Scissors - player against computer.

## Rock-Paper-Scissors Pseudocode

1. Prompt player to confirm if they would like a game of Rock, Paper, Scissors. If yes, start game. If no, cancel prompt.

2. Prompt player to enter their `choices` - r, p, s. representing rock, paper, or scissors.

3. Store computer's choices in an array.

4. Computer chooses **randomly** from a list of "r," "p," or "s."

5. We determine if the user wins or not.

   * Initialize `playerScore`, `computerScore`, `tieRounds` variables to 0. `rounds` variable to 1.

   * If player picks the same as computer, then they tie.

   * Computer wins: if player picks rock and if computer picks paper; If player picks scissors and if computer picks rock; If player picks paper and if computer picks scissors.

   * Player wins: if player picks rock and if computer picks scissors; If player picks scissors and if computer picks paper; If player picks paper and if computer picks rock.

5. After each round, add to their score.

   * If player wins, then we add one to playerScore.
    
   * If computer wins, then we add one to computerScore.
    
   * If a tie, then we add one to tieRounds.

   * add one to 'rounds'.

6. Prompt user to play again.