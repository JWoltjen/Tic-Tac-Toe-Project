var grid = document.querySelector('.d')

var test = new Game(new Player({"Player1": "PlayerOne"}, {"Token": "X"}, {"Wins": 0}), new Player({"Player2": "PlayerTwo"}, {"Token": "O"}, {"Wins": 0}))

var icon1 = (Object.values(test.player1.token))
var icon2 = (Object.values(test.player2.token))

grid.addEventListener('click', handleMainClick)
grid.addEventListener('click', dataModelUpdater1)
grid.addEventListener('click', dataModelUpdater2)


function handleMainClick(event){
 if (test.player1turn === true && event.target.classList.contains("active")){
  event.target.innerText = (icon1)
  winChecker1()
  turnCounter()
  event.target.classList.remove("active")
  test.player1turn = false;
  test.player2turn = true;
} else if
  (test.player2turn === true && event.target.classList.contains("active")){
   event.target.innerText = (icon2)
   winChecker2()
   turnCounter()
   event.target.classList.remove("active")
   test.player2turn = false;
   test.player1turn = true;
 }
}

function dataModelUpdater1(event){
  if (test.player1turn === true && event.target.id === "1"){
     test.grid.row1[0] = icon1}
  if (test.player1turn === true && event.target.id === "2"){
     test.grid.row1[1] = icon1}
  if (test.player1turn === true && event.target.id === "3"){
     test.grid.row1[2] = icon1}
  if (test.player1turn === true && event.target.id === "4"){
      test.grid.row2[0] = icon1}
  if (test.player1turn === true && event.target.id === "5"){
      test.grid.row2[1] = icon1}
  if (test.player1turn === true && event.target.id === "6"){
      test.grid.row2[2] = icon1}
  if (test.player1turn === true && event.target.id === "7"){
     test.grid.row3[0] = icon1}
  if (test.player1turn === true && event.target.id === "8"){
     test.grid.row3[1] = icon1}
  if (test.player1turn === true && event.target.id === "9"){
    test.grid.row3[2] = icon1}
  }

function dataModelUpdater2(event){
  if (test.player2turn === true && event.target.id === "1"){
     test.grid.row1[0] = icon2}
  if (test.player2turn === true && event.target.id === "2"){
     test.grid.row1[1] = icon2}
  if (test.player2turn === true && event.target.id === "3"){
     test.grid.row1[2] = icon2}
  if (test.player2turn === true && event.target.id === "4"){
      test.grid.row2[0] = icon2}
  if (test.player2turn === true && event.target.id === "5"){
      test.grid.row2[1] = icon2}
  if (test.player2turn === true && event.target.id === "6"){
      test.grid.row2[2] = icon2}
  if (test.player2turn === true && event.target.id === "7"){
     test.grid.row3[0] = icon2}
  if (test.player2turn === true && event.target.id === "8"){
     test.grid.row3[1] = icon2}
  if (test.player2turn === true && event.target.id === "9"){
    test.grid.row3[2] = icon2}
  }

function winChecker1(){
  if (test.grid.row1[0] === icon1 && test.grid.row1[1] === icon1 && test.grid.row1[2] === icon1){
  return player1wins()}
  if (test.grid.row2[0] === icon1 && test.grid.row2[1] === icon1 && test.grid.row2[2] === icon1){
  player1wins()}
  if (test.grid.row3[0] === icon1 && test.grid.row3[1] === icon1 && test.grid.row3[2] === icon1){
  player1wins()}
  if (test.grid.row1[0] === icon1 && test.grid.row2[0] === icon1 && test.grid.row3[0] === icon1){
  player1wins()}
  if (test.grid.row1[0] === icon1 && test.grid.row2[1] === icon1 && test.grid.row3[2] === icon1){
  player1wins()}
  if (test.grid.row1[1] === icon1 && test.grid.row2[1] === icon1 && test.grid.row3[1] === icon1){
  player1wins()}
  if (test.grid.row1[2] === icon1 && test.grid.row2[2] === icon1 && test.grid.row3[2] === icon1){
  player1wins()}
  if (test.grid.row1[2] === icon1 && test.grid.row2[1] === icon1 && test.grid.row3[0] === icon1){
  player1wins()}
  }

function winChecker2(){
  if (test.grid.row1[0] === icon2 && test.grid.row1[1] === icon2 && test.grid.row1[2] === icon2){
  player2wins()}
  if (test.grid.row2[0] === icon2 && test.grid.row2[1] === icon2 && test.grid.row2[2] === icon2){
  player2wins()}
  if (test.grid.row3[0] === icon2 && test.grid.row3[1] === icon2 && test.grid.row3[2] === icon2){
  player2wins()}
  if (test.grid.row1[0] === icon2 && test.grid.row2[0] === icon2 && test.grid.row3[0] === icon2){
  player2wins()}
  if (test.grid.row1[0] === icon2 && test.grid.row2[1] === icon2 && test.grid.row3[2] === icon2){
  player2wins()}
  if (test.grid.row1[1] === icon2 && test.grid.row2[1] === icon2 && test.grid.row3[1] === icon2){
  player2wins()}
  if (test.grid.row1[2] === icon2 && test.grid.row2[2] === icon2 && test.grid.row3[2] === icon2){
  player2wins()}
  if (test.grid.row1[2] === icon2 && test.grid.row2[1] === icon2 && test.grid.row3[0] === icon2){
  player2wins()}
  }

function turnCounter(){
    test.turnCounter++
    if (test.turnCounter === 9){
    alert("The game is drawn!")
    test.resetBoard()
  }
}

function player1wins(){
  test.player1.wins++
  test.player1.saveWinsToStorage()
  alert("Player 1 Wins!")
  test.resetBoard()
}

function player2wins(){
  test.player2wins++
  test.player2.saveWinsToStorage()
  alert("Player 2 Wins!")
  test.resetBoard()
}
