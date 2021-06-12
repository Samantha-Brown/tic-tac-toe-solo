class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = [];
  }

  saveWinsToStorage() {
//setItem JSON stringify
  localStorage.setItem(`${this.id}`, JSON.stringify(this.wins));
  }

  retrieveWinsFromStorage() {
// getItem JSON
// parse
// if/else statement??? return number of wins
    = JSON.parse(localStorage.getItem(this.wins));
}

}
