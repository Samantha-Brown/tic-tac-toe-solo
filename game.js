class Game {
  constructor(player1, player2) { // Do I need these parameters???
    this.player1 = new Player("one","⭐"); //????
    this.player2 = new Player("two", "💗");
    this.whoseTurn = this.player1;
    this.clickedBoxes = 0;
    this.winningBoards = [[1,2,3], [4,5,6], [7, 8, 9], [1,4,7], [2,5,8], [3,6,9], [1,5,9],[3,5,7]];
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
  // gameWinner() {
  //   if ()
  // }
  checkForDraw() {
    if (this.clickedBoxes === 9) {
         this.clickedBoxes = 0;
         this.whoseTurn.isDraw = true;
         topOfPageText.innerText = "It's a Draw";
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
    // console.log(this.winningBoards);
     console.log(humanChoices);
    // if (this.winningBoards.includes(humanChoices)) {
    //   console.log('human wins');
    // }
    // if (this.winningBoards.includes(computerChoices)) {
    //   console.log('computer wins');
    // }
      for (var i = 0; i < this.winningBoards.length; i++) { // don't need this?
        if (this.winningBoards[i]) {
          console.log(humanChoices);
        }
      }
    // var winningSetup = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9],[3,5,7]];
    // for (var i = 0; i < this.winningBoards.length; i++) {
    //   if (this.winningBoards[winningSetup[i][0]] === this.whoseTurn &&
    //     this.winningBoards[winningSetup[i][1]] === this.whoseTurn &&
    //     this.winningBoards[winningSetup[i][2]] === this.whoseTurn) {
    //     return this.whoseTurn.wonGame = true; //does this make sense???
    //   }
   // }
  }
  // resetBoard() {
  //   if
  // }
}
