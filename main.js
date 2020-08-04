var grid = document.querySelector('.d')
var announcer = document.querySelector('.announcer')
var button = document.querySelector('.button-box')
var currentGame = new Game(new Player("Player1", "X", 0), new Player("Player2","O", 0));

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
  //if there is nothing in local storage, this will return NaN for both player 1 and player 2 wins. This is because the game has not instiated yet.

var icon1 = (Object.values(currentGame.player1.token))
var icon2 = (Object.values(currentGame.player2.token))

function handleMainClick(event){
 if (currentGame.player1turn === true && event.target.classList.contains("active")){
    event.target.innerText = (icon1);
    event.target.classList.remove("active");
    dataModelUpdater1(event);
    announcer.innerText = "It's Player 2's Turn";
    return turnCounter();
  } if (currentGame.player2turn === true && event.target.classList.contains("active")){
    event.target.innerText = (icon2);
    event.target.classList.remove("active");
    dataModelUpdater2(event);
    announcer.innerText = "It's Player 1's Turn";
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
  currentGame.player1.wins++;
  currentGame.player1.saveWinsToStorage();
  currentGame.player2.saveWinsToStorage();
  announcer.innerText = "Player 1 Wins!!!";
  document.querySelector(".wincounter1").innerText = currentGame.player1.wins;
  createButton()
}

function player2wins(){
  currentGame.player2.wins++;
  currentGame.player2.saveWinsToStorage();
  currentGame.player1.saveWinsToStorage();
  announcer.innerText = "Player 2 Wins!!!";
  document.querySelector(".wincounter2").innerText = currentGame.player2.wins;
  createButton()
}

function createButton(){
  return button.innerHTML = "<button> Play Again? </button>"
  }

function resetGame(){
  currentGame.resetBoard()
}
