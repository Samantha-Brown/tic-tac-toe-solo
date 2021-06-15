
// QUERY SELECTORS
var topOfPageText = document.querySelector(".display-turn");
var one = document.querySelector("#1");
var two = document.querySelector("#2");
var three = document.querySelector("#3");
var four = document.querySelector("#4");
var five = document.querySelector("#5");
var six = document.querySelector("#6");
var seven = document.querySelector("#7");
var eight = document.querySelector("#8");
var nine = document.querySelector("#9");
var gameBoard = document.querySelector("#game-board");
var player1WinsDisplay = document.querySelector("#display-1-wins");
var player2WinsDisplay = document.querySelector("#display-2-wins");
// GLOBAL VARIABLE

var anotherGame = new Game();

// EVENT LISTENERS

window.addEventListener("load", newGame);
gameBoard.addEventListener("click", placeToken);
// FUNCTIONS
function newGame() {
  if (localStorage["display-1-wins"] > 0) {
    game.player1.retrieveWinsFromStorage();
  };
  if (localStorage["display-2-wins"] > 0) {
    game.player2.retrieveWinsFromStorage();
  };

player1WinsDisplay.innerText = game.player1.wins || 0;
player2WinsDisplay.innerText = game.player2.wins || 0;
}
  // needs to clear/reset game board

function placeToken(event) {
  event.preventDefault()
  if (event.target.id === "one") {
    let num = 1;
  } else if (event.target.id === "two") {
    let num = 2;
  } else if (event.target.id === "three") {
    let num = 3;
  } else if (event.target.id === "four") {
    let num = 4;
  } else if (event.target.id === "five") {
    let num = 5;
  } else if (event.target.id === "six") {
    let num = 6;
  } else if (event.target.id === "seven") {
    let num = 7;
  } else if (event.target.id === "eight") {
    let num = 8;
  } else if (event.target.id === "nine") {
    let num = 9;
  }
}
  // var clickedSpace = event.target.id;
  // anotherGame.playTurn(gameBoard);
  // displayWhoseTurn();
  // checkForDraw();
  // checkForWin();

function displayWhoseTurn() {
  if (anotherGame.player1.turn === true) {
    topOfPageText.innerHTML = `It's ${anotherGame.player1.id}'s turn!`
  } else {
    topOfPageText.innerHTML = `It's ${anotherGame.player2.id}'s turn!`
  }
}

//  when??? invoke add win to player x scoreboard
