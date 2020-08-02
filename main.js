var grid = document.querySelector('.d')
var announcer = document.querySelector('.announcer')
var button = document.querySelector('.button-box')
var test = new Game(new Player("Player1", "X", 0), new Player("Player2","O", 0))

var icon1 = (Object.values(test.player1.token))
var icon2 = (Object.values(test.player2.token))

grid.addEventListener('click', handleMainClick)
grid.addEventListener('click', dataModelUpdater1)
grid.addEventListener('click', dataModelUpdater2)
grid.addEventListener('click', winChecker1)
grid.addEventListener('click', winChecker2)
button.addEventListener('click', resetGame)


function handleMainClick(event){
 if (test.player1turn === true && event.target.classList.contains("active")){
    event.target.innerText = (icon1)
    event.target.classList.remove("active")
    dataModelUpdater1(event)
    announcer.innerText = "It's Player 2's Turn"
    return turnCounter();
  } if (test.player2turn === true && event.target.classList.contains("active")){
    event.target.innerText = (icon2)
    event.target.classList.remove("active")
    dataModelUpdater2(event)
    announcer.innerText = "It's Player 1's Turn"
    return turnCounter();
  }
}

function dataModelUpdater1(event){
  if (test.player1turn === true && event.target.id === "1"){
    return test.grid.row1[0] = "O"}
  if (test.player1turn === true && event.target.id === "2"){
     return test.grid.row1[1] = "O"}
  if (test.player1turn === true && event.target.id === "3"){
    return test.grid.row1[2] = "O"}
  if (test.player1turn === true && event.target.id === "4"){
    return  test.grid.row2[0] = "O"}
  if (test.player1turn === true && event.target.id === "5"){
    return  test.grid.row2[1] = "O"}
  if (test.player1turn === true && event.target.id === "6"){
      return test.grid.row2[2] = "O"}
  if (test.player1turn === true && event.target.id === "7"){
    return test.grid.row3[0] = "O"}
  if (test.player1turn === true && event.target.id === "8"){
     return test.grid.row3[1] = "O"}
  if (test.player1turn === true && event.target.id === "9"){
    return test.grid.row3[2] = "O"}
  }

function dataModelUpdater2(event){
  if (test.player2turn === true && event.target.id === "1"){
     return test.grid.row1[0] = "X"}
  if (test.player2turn === true && event.target.id === "2"){
     return test.grid.row1[1] = "X"}
  if (test.player2turn === true && event.target.id === "3"){
     return test.grid.row1[2] = "X"}
  if (test.player2turn === true && event.target.id === "4"){
      return test.grid.row2[0] = "X"}
  if (test.player2turn === true && event.target.id === "5"){
      return test.grid.row2[1] = "X"}
  if (test.player2turn === true && event.target.id === "6"){
      return test.grid.row2[2] = "X"}
  if (test.player2turn === true && event.target.id === "7"){
      return test.grid.row3[0] = "X"}
  if (test.player2turn === true && event.target.id === "8"){
      return test.grid.row3[1] = "X"}
  if (test.player2turn === true && event.target.id === "9"){
      return test.grid.row3[2] = "X"}
  }

function winChecker1(event){
  if ((test.grid.row1[0] === "X" && test.grid.row1[1] === "X" && test.grid.row1[2] === "X") ||
     (test.grid.row2[0] === "X" && test.grid.row2[1] === "X" && test.grid.row2[2] === "X") ||
     (test.grid.row3[0] === "X" && test.grid.row3[1] === "X" && test.grid.row3[2] === "X") ||
     (test.grid.row1[0] === "X" && test.grid.row2[0] === "X" && test.grid.row3[0] === "X") ||
     (test.grid.row1[0] === "X" && test.grid.row2[1] === "X" && test.grid.row3[2] === "X") ||
     (test.grid.row1[1] === "X" && test.grid.row2[1] === "X" && test.grid.row3[1] === "X") ||
     (test.grid.row1[2] === "X" && test.grid.row2[2] === "X" && test.grid.row3[2] === "X") ||
     (test.grid.row1[2] === "X" && test.grid.row2[1] === "X" && test.grid.row3[0] === "X")){
   player1wins()}
  }

function winChecker2(event){
  if ((test.grid.row1[0] === "O" && test.grid.row1[1] === "O" && test.grid.row1[2] === "O") ||
     (test.grid.row2[0] === "O" && test.grid.row2[1] === "O" && test.grid.row2[2] === "O") ||
     (test.grid.row3[0] === "O" && test.grid.row3[1] === "O" && test.grid.row3[2] === "O") ||
     (test.grid.row1[0] === "O" && test.grid.row2[0] === "O" && test.grid.row3[0] === "O") ||
     (test.grid.row1[0] === "O" && test.grid.row2[1] === "O" && test.grid.row3[2] === "O") ||
     (test.grid.row1[1] === "O" && test.grid.row2[1] === "O" && test.grid.row3[1] === "O") ||
     (test.grid.row1[2] === "O" && test.grid.row2[2] === "O" && test.grid.row3[2] === "O") ||
     (test.grid.row1[2] === "O" && test.grid.row2[1] === "O" && test.grid.row3[0] === "O")){
   player2wins()}
  }

function turnCounter(){
  test.turnCounter++
  test.player1turn = !test.player1turn;
  test.player2turn = !test.player2turn;
  }

function player1wins(){
  test.player1.wins++
  test.player1.saveWinsToStorage()
  test.player2.saveWinsToStorage()
  announcer.innerText = "Player 1 Wins!!!"
  document.querySelector(".wincounter1").innerText = test.player1.wins
  createButton()
}

function player2wins(){
  test.player2.wins++
  test.player2.saveWinsToStorage()
  test.player1.saveWinsToStorage()
  announcer.innerText = "Player 2 Wins!!!"
  document.querySelector(".wincounter2").innerText = test.player2.wins
  //onclick interpolate the button with innerHTML
  // document.createElement('button');
  // document.querySelector(".button-box").appendChild(newButton)
  createButton()
}

function createButton(){
  return button.innerHTML = "<button> Play Again? </button>"
  }

function resetGame(){
  test.resetBoard()
}
