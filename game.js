class Game {
  constructor() {
    this.player1 = new Player("one","⭐");
    this.player2 = new Player("two", "💗");
    this.whoseTurn = this.player1;
    this.winningBoards = [[1,2,3], [4,5,6], [7, 8, 9], [1,4,7], [2,5,8], [3,6,9], [1,5,9],[3,5,7]];
    this.possibleChoices = [1,2,3,4,5,6,7,8,9];
    //this.currentGameWinner
  }
  changingPlayers() {
    if (this.whoseTurn === this.player1) {
      this.whoseTurn = this.player2;
    } else {
      this.whoseTurn = this.player1;
    }
  }
  // playTurn() {
  //
  // }

    updateBoard() {
       for (var i = 0; i < this.winningBoards.length; i++) {
         if (this.winningBoards[i] === event.target.id) {
           this.winningBoards.splice(i, 1);
         }
       }
     }

   checkForWin() {
    // var winningJSON = JSON.stringify(this.winningBoards)
    // var player1JSON = JSON.stringify(anotherGame.player1.choices)
    // var player2JSON = JSON.stringify(anotherGame.player2.choices)
    // if (winningJSON.includes(player1JSON)) {
    //   this.player1.wins++
    //   this.currentGameWinner = "⭐";
    //   this.changingPlayers();
    //   this.player1.saveWinsToStorage(this.whoseTurn);
    //   showWinsFromStorage();
    //   whoWon.innerHTML = "⭐ Won"
    //   this.resetBoard();
    // } else if (winningJSON.includes(player2JSON)) {
    //   this.player2.wins++
    //   this.currentGameWinner = "💗";
    //   this.changingPlayers();
    //   this.player2.saveWinsToStorage(this.whoseTurn);
    //   showWinsFromStorage();
    //   whoWon.innerHTML = "💗 Won"
    //   this.resetBoard();
    // } else if (this.currentGameWinner === undefined && this.possibleChoices.length === 0) {
    //   whoWon.innerHTML = "It's a Draw"
    //   this.resetBoard();
    // }
    for (var i =0; i < this.winningBoards.length; i++) {
      var currentWinningCombo = this.winningBoards[i];
      if (currentWinningCombo.every(currentNumber =>
        this.whoseTurn.choices.includes(currentNumber))) {
          this.whoseTurn.wins++
        //  this.currentGameWinner = "⭐";
          this.changingPlayers();
          this.whoseTurn.saveWinsToStorage();
          showWinsFromStorage();
          whoWon.innerHTML = `${this.whoseTurn.token} Won!`
          this.resetBoard();
      }
    }
  }

  resetBoard() {
    this.player1.choices = [];
    this.player2.choices = [];
    this.possibleChoices = [1,2,3,4,5,6,7,8,9];
    this.currentGameWinner = ""
    one.innerHTML = ""
    two.innerHTML = ""
    three.innerHTML = ""
    four.innerHTML = ""
    five.innerHTML = ""
    six.innerHTML = ""
    seven.innerHTML = ""
    eight.innerHTML = ""
    nine.innerHTML = ""
    one.disabled = false;
    two.disabled = false;
    three.disabled = false;
    four.disabled = false;
    five.disabled = false;
    six.disabled = false;
    seven.disabled = false;
    eight.disabled = false;
    nine.disabled = false;
    setTimeout(() => {
      whoWon.innerHTML = "Play Game!";
    }, 4000);
  }
}
