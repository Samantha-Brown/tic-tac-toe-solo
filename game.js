class Game {
  constructor(player1, player2) { // Do I need these parameters???
    this.player1 = new Player("one","⭐"); //????
    this.player2 = new Player("two", "💗");
    this.whoseTurn = this.player1;
    this.winningBoards = [[1,2,3], [4,5,6], [7, 8, 9], [1,4,7], [2,5,8], [3,6,9], [1,5,9],[3,5,7]];
    this.possibleChoices = [1,2,3,4,5,6,7,8,9];
    this.currentGameWinner
  }
  changingPlayers() {
    if (this.whoseTurn === this.player1) {
      this.whoseTurn = this.player2.id;
    } else {
      this.whoseTurn = this.player1.id;
    }
  }
  // playTurn() {
  //
  // }
  // gameWinner() {
  //   if ()
  // }
  checkForDraw() {
    if (this.clickedBoxes === 9) {
         this.clickedBoxes = 0;
         this.whoseTurn.isDraw = true;
         topOfPageText.innerText = "It's a Draw";
         setTimeOut(resetBoard, 1000);
       }
     }

     updateBoard() {
       for (var i = 0; i < this.winningBoards.length; i++) {
         if (this.winningBoards[i] === event.target.id) {
           this.winningBoards.splice(i, 1);
         }
       }
     }

   checkForWin() {
    var winningJSON = JSON.stringify(this.winningBoards)
    var humanJSON = JSON.stringify(anotherGame.player1.choices)
    var computerJSON = JSON.stringify(anotherGame.player2.choices)
    if (winningJSON.includes(humanJSON)) {
      this.player1.wins++
      this.currentGameWinner = "human";
      this.changingPlayers();
      this.player1.saveWinsToStorage(this.whoseTurn);
      showWinsFromStorage();
      resetBoard();
    } else if (winningJSON.includes(computerJSON)) {
      this.player2.wins++
      this.currentGameWinner = "computer";
      this.changingPlayers();
      this.player2.saveWinsToStorage(this.whoseTurn);
      showWinsFromStorage();
      resetBoard();
    }
  }
  // resetBoard() {
    // if (player1WinsDisplay.innerText = game.playerOne.wins) ||
    //    (player2WinsDisplay.innerText = game.playerTwo.wins);
    //    anotherGame = new Game(); //does this empty the spaces??

    resetBoard() {
      this.player1.choices = [];
      this.player2.choices = [];
      this.possibleChoices = [1,2,3,4,5,6,7,8,9];
  }
}
