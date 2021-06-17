
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
    one.innerHTML = `${anotherGame.player1.token}`
    one.disabled = true;
  } else if (event.target.id === "two") {
    num = 2;
    two.innerHTML = `${anotherGame.player1.token}`
    two.disabled = true;
  } else if (event.target.id === "three") {
    num = 3;
    three.innerHTML = `${anotherGame.player1.token}`
    three.disabled = true;
  } else if (event.target.id === "four") {
    num = 4;
    four.innerHTML = `${anotherGame.player1.token}`
    four.disabled = true;
  } else if (event.target.id === "five") {
    num = 5;
    five.innerHTML = `${anotherGame.player1.token}`
    five.disabled = true;
  } else if (event.target.id === "six") {
    num = 6;
    six.innerHTML = `${anotherGame.player1.token}`
    six.disabled = true;
  } else if (event.target.id === "seven") {
    num = 7;
    seven.innerHTML = `${anotherGame.player1.token}`
    seven.disabled = true;
  } else if (event.target.id === "eight") {
    num = 8;
    eight.innerHTML = `${anotherGame.player1.token}`
    eight.disabled = true;
  } else if (event.target.id === "nine") {
    num = 9;
    nine.innerHTML = `${anotherGame.player1.token}`
    nine.disabled = true;
  }
    let index = anotherGame.possibleChoices.indexOf(num);
    anotherGame.possibleChoices.splice(index, 1);
    anotherGame.player1.choices.push(num);
    anotherGame.checkForWin()
    if (anotherGame.currentGameWinner !== "⭐") {
      //computerPick();
    }
}

function computerPick() {
  let currentComputerPick = anotherGame.possibleChoices[0];
  anotherGame.player2.choices.push(anotherGame.possibleChoices[0]);
  anotherGame.possibleChoices.splice(0, 1);
  if (currentComputerPick === 1) {
    one.innerHTML = `${anotherGame.player2.token}`
    one.disabled = true;
  }
  if (currentComputerPick === 2) {
    two.innerHTML = `${anotherGame.player2.token}`
    two.disabled = true;
  }
  if (currentComputerPick === 3) {
    three.innerHTML = `${anotherGame.player2.token}`
    three.disabled = true;
  }
  if (currentComputerPick === 4) {
    four.innerHTML = `${anotherGame.player2.token}`
    four.disabled = true;
  }
  if (currentComputerPick === 5) {
    five.innerHTML = `${anotherGame.player2.token}`
    five.disabled = true;
  }
  if (currentComputerPick === 6) {
    six.innerHTML = `${anotherGame.player2.token}`
    six.disabled = true;
  }
  if (currentComputerPick === 7) {
    seven.innerHTML = `${anotherGame.player2.token}`
    seven.disabled = true;
  }
  if (currentComputerPick === 8) {
    eight.innerHTML = `${anotherGame.player2.token}`
    eight.disabled = true;
  }
  if (currentComputerPick === 9) {
    nine.innerHTML = `${anotherGame.player2.token}`
    nine.disabled = true;
  }
  anotherGame.checkForWin()
}
  // var clickedSpace = event.target.id;
  // anotherGame.playTurn(gameBoard);
  // displayWhoseTurn();
  // checkForDraw();
  // checkForWin();

function displayWhoseTurn() {
  if (anotherGame.whoseTurn === anotherGame.player1) {
    whoWon.innerHTML = `${anotherGame.player1.token} turn!`
  } else {
    whoWon.innerHTML = `${anotherGame.player2.token} turn!`
  }
}

//  when??? invoke add win to player x scoreboard
