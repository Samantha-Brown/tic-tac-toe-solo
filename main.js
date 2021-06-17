
// QUERY SELECTORS

var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var five = document.querySelector("#five");
var six = document.querySelector("#six");
var seven = document.querySelector("#seven");
var eight = document.querySelector("#eight");
var nine = document.querySelector("#nine");
var gameBoard = document.querySelector("#game-board");
var player1WinsDisplay = document.querySelector("#display-1-wins");
var player2WinsDisplay = document.querySelector("#display-2-wins");
var whoWon = document.querySelector("#whoWon");

// GLOBAL VARIABLE

var anotherGame = new Game();

// EVENT LISTENERS

window.addEventListener("load", showWinsFromStorage);
gameBoard.addEventListener("click", placeToken);

// FUNCTIONS

function showWinsFromStorage() {
    anotherGame.player1.retrieveWinsFromStorage();
    anotherGame.player2.retrieveWinsFromStorage();
    player1WinsDisplay.innerText = `⭐  wins ${anotherGame.player1.wins}`;
    player2WinsDisplay.innerText = `💗 wins ${anotherGame.player2.wins}`;
 } // this function causes my side panels to disappear on the site

function playGame() {
  // // anotherGame.playToken?? .whoseTurn??
  // anotherGame.checkForWin();
  // anotherGame.checkForDraw();

}
  // needs to clear/reset game board

function placeToken(event) {
  event.preventDefault()
  let num
  if (event.target.id === "one") {
    num = 1;
    one.innerHTML = `${anotherGame.whoseTurn.token}`
    one.disabled = true;
  } else if (event.target.id === "two") {
    num = 2;
    two.innerHTML = `${anotherGame.whoseTurn.token}`
    two.disabled = true;
  } else if (event.target.id === "three") {
    num = 3;
    three.innerHTML = `${anotherGame.whoseTurn.token}`
    three.disabled = true;
  } else if (event.target.id === "four") {
    num = 4;
    four.innerHTML = `${anotherGame.whoseTurn.token}`
    four.disabled = true;
  } else if (event.target.id === "five") {
    num = 5;
    five.innerHTML = `${anotherGame.whoseTurn.token}`
    five.disabled = true;
  } else if (event.target.id === "six") {
    num = 6;
    six.innerHTML = `${anotherGame.whoseTurn.token}`
    six.disabled = true;
  } else if (event.target.id === "seven") {
    num = 7;
    seven.innerHTML = `${anotherGame.whoseTurn.token}`
    seven.disabled = true;
  } else if (event.target.id === "eight") {
    num = 8;
    eight.innerHTML = `${anotherGame.whoseTurn.token}`
    eight.disabled = true;
  } else if (event.target.id === "nine") {
    num = 9;
    nine.innerHTML = `${anotherGame.whoseTurn.token}`
    nine.disabled = true;
  }
    var index = anotherGame.possibleChoices.indexOf(num);
    anotherGame.possibleChoices.splice(index, 1);
    anotherGame.whoseTurn.choices.push(num);
    console.log(anotherGame.whoseTurn.id);
    console.log(anotherGame.whoseTurn.choices);
    displayWhoseTurn();
    anotherGame.checkForWin()
    anotherGame.changingPlayers();


}

function displayWhoseTurn() {
  if (anotherGame.whoseTurn === anotherGame.player1) {
    whoWon.innerText = `${anotherGame.player1.token} turn!`
  } else {
    whoWon.innerText = `${anotherGame.player2.token} turn!`
  }
}
