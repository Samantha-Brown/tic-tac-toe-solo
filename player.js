class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.isDraw = false;
    this.wonGame = false;
    this.wins = [];
  }

  saveWinsToStorage() {
  localStorage.setItem(`${this.id}`, JSON.stringify(this.wins));
  }

  retrieveWinsFromStorage() {
    if (JSON.parse(localStorage.getItem(`${this.id}))) {
      this.wins = JSON.parse(localStorage.getItem(`${this.id or this.wins?));
      } else {
        this.wins = 0;
      }
    return this.wins;
  }
}
