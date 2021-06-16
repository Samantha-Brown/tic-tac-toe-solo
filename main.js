
// QUERY SELECTORS
var topOfPageText = document.querySelector("#winner-display");
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
// GLOBAL VARIABLE

var anotherGame = new Game();

// EVENT LISTENERS

// window.addEventListener("load", showWinsFromStorage);
gameBoard.addEventListener("click", placeToken);

// FUNCTIONS

// function showWinsFromStorage() {
//   if (localStorage["display-1-wins"] > 0) {
//     anotherGame.player1.retrieveWinsFromStorage();
//   };
//   if (localStorage["display-2-wins"] > 0) {
//     anotherGame.player2.retrieveWinsFromStorage();
//   };
//
//     player1WinsDisplay.innerText = anotherGame.player1.wins || 0;
//     player2WinsDisplay.innerText = anotherGame.player2.wins || 0;
// } // this function causes my side panels to disappear on the site

function playGame() {
  // // anotherGame.playToken?? .whoseTurn??
  // anotherGame.checkForWin();
  // anotherGame.checkForDraw();

}
  // needs to clear/reset game board
var numbers = [1,2,3,4,5,6,7,8,9];
var humanChoices = [];
var computerChoices = [];

function placeToken(event) {
  console.log(event.target.id);
  event.preventDefault()
  let num
  if (event.target.id === "one") {
    num = 1;
  } else if (event.target.id === "two") {
    num = 2;
  } else if (event.target.id === "three") {
    num = 3;
  } else if (event.target.id === "four") {
    num = 4;
  } else if (event.target.id === "five") {
    num = 5;
  } else if (event.target.id === "six") {
    num = 6;
  } else if (event.target.id === "seven") {
    num = 7;
  } else if (event.target.id === "eight") {
    num = 8;
  } else if (event.target.id === "nine") {
    num = 9;
  }
    let index = numbers.indexOf(num);
    numbers.splice(index, 1);
    humanChoices.push(num);
    // console.log(humanChoices);
    computerPick()
    anotherGame.checkForWin()
}

function computerPick() {
  computerChoices.push(numbers[0]);
  numbers.splice(0, 1);
  anotherGame.checkForWin()
}
  // var clickedSpace = event.target.id;
  // anotherGame.playTurn(gameBoard);
  // displayWhoseTurn();
  // checkForDraw();
  // checkForWin();

function displayWhoseTurn() {
  if (anotherGame.player1.turn === true) {
    topOfPageText.innerHTML = `It's ${anotherGame.player1.token}'s turn!`
  } else {
    topOfPageText.innerHTML = `It's ${anotherGame.player2.token}'s turn!`
  }
}

//  when??? invoke add win to player x scoreboard
