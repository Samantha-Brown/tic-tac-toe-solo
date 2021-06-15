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
    if (JSON.parse(localStorage.getItem(`${this.id}))) {
      this.wins = JSON.parse(localStorage.getItem(`${this.id or this.wins?));
      } else {
        this.wins = //nothing????;
      }
      return //wins from storage
    }
