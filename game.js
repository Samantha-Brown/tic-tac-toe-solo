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
     console.log(this.player1);
    var winningJSON = JSON.stringify(this.winningBoards)
    var humanJSON = JSON.stringify(humanChoices)
    if (winningJSON.includes(humanJSON)) {
      this.player1.wins++
      this.changingPlayers();
      this.player1.saveWinsToStorage(this.whoseTurn);
      return `human wins`
    } else {
      return `computer wins`
    }
  }
}

    // console.log(this.winningBoards);
     // console.log(humanChoices);
    // if (this.winningBoards.includes(humanChoices)) {
    //   console.log('human wins');
    // }
    // if (this.winningBoards.includes(computerChoices)) {
    //   console.log('computer wins');
    // }

      // for (var i = 0; i < this.winningBoards.length; i++) { // don't need this?
      //   if (this.winningBoards[i]) {
      //     console.log(humanChoices);
      //   }
      // }

    // var winningSetup = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9],[3,5,7]];
    // for (var i = 0; i < this.winningBoards.length; i++) {
    //   if (this.winningBoards[winningSetup[i][0]] === this.whoseTurn &&
    //     this.winningBoards[winningSetup[i][1]] === this.whoseTurn &&
    //     this.winningBoards[winningSetup[i][2]] === this.whoseTurn) {
    //     return this.whoseTurn.wonGame = true; //does this make sense???
    //   }
   // }

  // resetBoard() {
    // if (player1WinsDisplay.innerText = game.playerOne.wins) ||
    //    (player2WinsDisplay.innerText = game.playerTwo.wins);
    //    anotherGame = new Game(); //does this empty the spaces??

  //   resetBoard(player) {
  //     player.clickedBoxes = 0;
  //     player.isDraw = false;
  //     player.isWinner = false;
  // }

  // }
