class Game {
  constructor(player1, player2) {
    this.player1 = new Player('one');
    this.player2 = new Player('two');
    this.whoseTurn = this.player; // needs to be player1/2??
    this.winningBoards = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9],[3,5,7]]; // maybe object instead
  }
  changingPlayers() {
    if (this.whoseTurn === this.player1) {
      this.activePlayer = this.player2;
    }
  }

  gameWinner() {
    var winningPlayer =
  }

}


// will need methods for:
//1. changing players,
//2. logging tokins on board,
// 3. determine winner of game, or if draw
//4. displaying each players wins,
//5. reseting board after game,
