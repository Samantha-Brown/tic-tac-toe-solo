class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.isDraw = false;
    this.wonGame = false;
    this.wins = 0;
    this.choices = [];
  }

  saveWinsToStorage(whoseTurn) {
  localStorage.setItem(this.id, JSON.stringify(this.wins));
  localStorage.setItem("whoseTurn", JSON.stringify(whoseTurn));
  }

  retrieveWinsFromStorage() {
    if (JSON.parse(localStorage.getItem(this.id))) {
      this.wins = JSON.parse(localStorage.getItem(this.id));
      anotherGame.whoseTurn = JSON.parse(localStorage.getItem("whoseTurn"));
      } else {
        this.wins = 0;
      }
      return this.wins;
    }
  }
