var currentGame = new Game
var grid = document.querySelector('.d')
var announcer = document.querySelector('.announcer')
var button = document.querySelector('.button-box')

grid.addEventListener('click', handleMainClick)
grid.addEventListener('click', dataModelUpdater1)
grid.addEventListener('click', dataModelUpdater2)
grid.addEventListener('click', winChecker1)
grid.addEventListener('click', winChecker2)
button.addEventListener('click', resetGame)

window.onload = function (){
  currentGame.player1.retreiveWinsFromStorage();
  document.querySelector(".winCounter1").innerHTML = currentGame.player1.wins;
  currentGame.player2.retreiveWinsFromStorage();
  document.querySelector(".winCounter2").innerHTML = currentGame.player2.wins;
}

function handleMainClick(event){
if (currentGame.win === false && currentGame.player1turn === true && event.target.classList.contains("active")){
    event.target.innerText = currentGame.player1.token;
    event.target.classList.remove("active");
    dataModelUpdater1(event);
    announcer.innerText = "It's " + currentGame.player1.token +"'s Turn";
    return turnCounter();
  } if (currentGame.win === false && currentGame.player2turn === true && event.target.classList.contains("active")){
    event.target.innerText = currentGame.player2.token;
    event.target.classList.remove("active");
    dataModelUpdater2(event);
    announcer.innerText = "It's " + currentGame.player2.token + " 's Turn";
    return turnCounter();
  }
}

function dataModelUpdater1(event){
  if (currentGame.player1turn === true && event.target.id === "1"){
    return currentGame.grid.row1[0] = "O"}
  if (currentGame.player1turn === true && event.target.id === "2"){
     return currentGame.grid.row1[1] = "O"}
  if (currentGame.player1turn === true && event.target.id === "3"){
    return currentGame.grid.row1[2] = "O"}
  if (currentGame.player1turn === true && event.target.id === "4"){
    return  currentGame.grid.row2[0] = "O"}
  if (currentGame.player1turn === true && event.target.id === "5"){
    return  currentGame.grid.row2[1] = "O"}
  if (currentGame.player1turn === true && event.target.id === "6"){
      return currentGame.grid.row2[2] = "O"}
  if (currentGame.player1turn === true && event.target.id === "7"){
    return currentGame.grid.row3[0] = "O"}
  if (currentGame.player1turn === true && event.target.id === "8"){
     return currentGame.grid.row3[1] = "O"}
  if (currentGame.player1turn === true && event.target.id === "9"){
    return currentGame.grid.row3[2] = "O"}
  }

function dataModelUpdater2(event){
  if (currentGame.player2turn === true && event.target.id === "1"){
     return currentGame.grid.row1[0] = "X"}
  if (currentGame.player2turn === true && event.target.id === "2"){
     return currentGame.grid.row1[1] = "X"}
  if (currentGame.player2turn === true && event.target.id === "3"){
     return currentGame.grid.row1[2] = "X"}
  if (currentGame.player2turn === true && event.target.id === "4"){
      return currentGame.grid.row2[0] = "X"}
  if (currentGame.player2turn === true && event.target.id === "5"){
      return currentGame.grid.row2[1] = "X"}
  if (currentGame.player2turn === true && event.target.id === "6"){
      return currentGame.grid.row2[2] = "X"}
  if (currentGame.player2turn === true && event.target.id === "7"){
      return currentGame.grid.row3[0] = "X"}
  if (currentGame.player2turn === true && event.target.id === "8"){
      return currentGame.grid.row3[1] = "X"}
  if (currentGame.player2turn === true && event.target.id === "9"){
      return currentGame.grid.row3[2] = "X"}
  }

function winChecker1(event){
  if ((currentGame.grid.row1[0] === "X" && currentGame.grid.row1[1] === "X" && currentGame.grid.row1[2] === "X") ||
     (currentGame.grid.row2[0] === "X" && currentGame.grid.row2[1] === "X" && currentGame.grid.row2[2] === "X") ||
     (currentGame.grid.row3[0] === "X" && currentGame.grid.row3[1] === "X" && currentGame.grid.row3[2] === "X") ||
     (currentGame.grid.row1[0] === "X" && currentGame.grid.row2[0] === "X" && currentGame.grid.row3[0] === "X") ||
     (currentGame.grid.row1[0] === "X" && currentGame.grid.row2[1] === "X" && currentGame.grid.row3[2] === "X") ||
     (currentGame.grid.row1[1] === "X" && currentGame.grid.row2[1] === "X" && currentGame.grid.row3[1] === "X") ||
     (currentGame.grid.row1[2] === "X" && currentGame.grid.row2[2] === "X" && currentGame.grid.row3[2] === "X") ||
     (currentGame.grid.row1[2] === "X" && currentGame.grid.row2[1] === "X" && currentGame.grid.row3[0] === "X")){
   player1wins()}
  }

function winChecker2(event){
  if ((currentGame.grid.row1[0] === "O" && currentGame.grid.row1[1] === "O" && currentGame.grid.row1[2] === "O") ||
     (currentGame.grid.row2[0] === "O" && currentGame.grid.row2[1] === "O" && currentGame.grid.row2[2] === "O") ||
     (currentGame.grid.row3[0] === "O" && currentGame.grid.row3[1] === "O" && currentGame.grid.row3[2] === "O") ||
     (currentGame.grid.row1[0] === "O" && currentGame.grid.row2[0] === "O" && currentGame.grid.row3[0] === "O") ||
     (currentGame.grid.row1[0] === "O" && currentGame.grid.row2[1] === "O" && currentGame.grid.row3[2] === "O") ||
     (currentGame.grid.row1[1] === "O" && currentGame.grid.row2[1] === "O" && currentGame.grid.row3[1] === "O") ||
     (currentGame.grid.row1[2] === "O" && currentGame.grid.row2[2] === "O" && currentGame.grid.row3[2] === "O") ||
     (currentGame.grid.row1[2] === "O" && currentGame.grid.row2[1] === "O" && currentGame.grid.row3[0] === "O")){
   player2wins()}
  }

function turnCounter(){
  currentGame.turnCounter++;
  currentGame.player1turn = !currentGame.player1turn;
  currentGame.player2turn = !currentGame.player2turn;
  if (currentGame.turnCounter > 8){
    announcer.innerText = "Game is Drawn!";
    createButton()
  }
}

function player1wins(){
    if (currentGame.win === false){
    currentGame.player1.wins++;
    currentGame.player1.saveWinsToStorage();
    currentGame.player2.saveWinsToStorage();
    announcer.innerText = "Player 1 Wins!!!";
    document.querySelector(".wincounter1").innerText = currentGame.player1.wins;
    currentGame.win = true;
    createButton()
  } else {
    return
  }
}

function player2wins(){
  if (currentGame.win === false){
  currentGame.player2.wins++;
  currentGame.player2.saveWinsToStorage();
  currentGame.player1.saveWinsToStorage();
  announcer.innerText = "Player 2 Wins!!!";
  document.querySelector(".wincounter2").innerText = currentGame.player2.wins;
  currentGame.win = true;
  createButton()
  } else {
    return
  }
}

function createButton(){
  return button.innerHTML = "<button> Play Again? </button>"
}

function resetGame(){
  currentGame.resetBoard()
}
