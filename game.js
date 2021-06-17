class Game {
  constructor() {
    this.player1 = new Player("one","⭐");
    this.player2 = new Player("two", "💗");
    this.whoseTurn = this.player1;
    this.winningBoards = [[1,2,3], [4,5,6], [7, 8, 9], [1,4,7], [2,5,8], [3,6,9], [1,5,9],[3,5,7]];
    this.possibleChoices = [1,2,3,4,5,6,7,8,9];
    this.currentGameWinner
  }
  changingPlayers() {
    if (this.whoseTurn === this.player1) {
      this.whoseTurn = this.player2;
    } else {
      this.whoseTurn = this.player1;
    }
  }

   checkForWin() {
    for (var i =0; i < this.winningBoards.length; i++) {
      var currentWinningCombo = this.winningBoards[i];
      if (currentWinningCombo.every(currentNumber =>
        this.whoseTurn.choices.includes(currentNumber))) {
          this.whoseTurn.wins++
          this.currentGameWinner = this.whoseTurn;
          this.whoseTurn.saveWinsToStorage();
          showWinsFromStorage();
          whoWon.innerHTML = `${this.whoseTurn.token} Won!`
          this.changingPlayers();
          this.resetBoard();
      }
     if (this.currentGameWinner === undefined && this.possibleChoices.length === 0) {
        whoWon.innerHTML = "It's a Draw"
        this.resetBoard();
     }
    }
  }

  resetBoard() {
    this.player1.choices = [];
    this.player2.choices = [];
    this.possibleChoices = [1,2,3,4,5,6,7,8,9];
    this.currentGameWinner = "";
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].innerHTML = "";
      buttons[i].disabled = false;
    }
    setTimeout(() => {
      whoWon.innerHTML = "Play Game!";
    }, 4000);
  }
}
