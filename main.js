var grid = document.querySelector('.d')
var test = new Game(new Player({"Player1": "PlayerOne"}, {"Token": "X"}), new Player({"Player2": "PlayerTwo"}, {"Token": "O"}))

grid.addEventListener('click', handleMainClick)
grid.addEventListener('click', dataModelUpdater1)
grid.addEventListener('click', dataModelUpdater2)

function handleMainClick(event){
 if (test.player1turn === true && event.target.classList.contains("active")){
  event.target.innerText = (Object.values(test.player1.token))
  winChecker1()
  turnCounter()
  event.target.classList.remove("active")
  test.player1turn = false;
  test.player2turn = true;
} else if
  (test.player2turn === true && event.target.classList.contains("active")){
   event.target.innerText = ("O")
   winChecker2()
   turnCounter()
   event.target.classList.remove("active")
   test.player2turn = false;
   test.player1turn = true;
 }
}

function dataModelUpdater1(event){
if (test.player1turn === true && event.target.id === "1"){
   test.grid.row1[0] = "X"}
if (test.player1turn === true && event.target.id === "2"){
   test.grid.row1[1] = "X"}
if (test.player1turn === true && event.target.id === "3"){
   test.grid.row1[2] = "X"}
if (test.player1turn === true && event.target.id === "4"){
    test.grid.row2[0] = "X"}
if (test.player1turn === true && event.target.id === "5"){
    test.grid.row2[1] = "X"}
if (test.player1turn === true && event.target.id === "6"){
    test.grid.row2[2] = "X"}
if (test.player1turn === true && event.target.id === "7"){
   test.grid.row3[0] = "X"}
if (test.player1turn === true && event.target.id === "8"){
   test.grid.row3[1] = "X"}
if (test.player1turn === true && event.target.id === "9"){
  test.grid.row3[2] = "X"}
}

function dataModelUpdater2(event){
if (test.player2turn === true && event.target.id === "1"){
   test.grid.row1[0] = "O"}
if (test.player2turn === true && event.target.id === "2"){
   test.grid.row1[1] = "O"}
if (test.player2turn === true && event.target.id === "3"){
   test.grid.row1[2] = "O"}
if (test.player2turn === true && event.target.id === "4"){
    test.grid.row2[0] = "O"}
if (test.player2turn === true && event.target.id === "5"){
    test.grid.row2[1] = "O"}
if (test.player2turn === true && event.target.id === "6"){
    test.grid.row2[2] = "O"}
if (test.player2turn === true && event.target.id === "7"){
   test.grid.row3[0] = "O"}
if (test.player2turn === true && event.target.id === "8"){
   test.grid.row3[1] = "O"}
if (test.player2turn === true && event.target.id === "9"){
  test.grid.row3[2] = "O"}
}

function winChecker1(){
  if (test.grid.row1[0] === "X" && test.grid.row1[1] === "X" && test.grid.row1[2] ==="X"){
  return player1wins()}
  if (test.grid.row2[0] === "X" && test.grid.row2[1] === "X" && test.grid.row2[2] === "X"){
  player1wins()}
  if (test.grid.row3[0] === "X" && test.grid.row3[1] === "X" && test.grid.row3[2] === "X"){
  player1wins()}
  if (test.grid.row1[0] === "X" && test.grid.row2[0] === "X" && test.grid.row3[0] === "X"){
  player1wins()}
  if (test.grid.row1[0] === "X" && test.grid.row2[1] === "X" && test.grid.row3[2] === "X"){
  player1wins()}
  if (test.grid.row1[1] === "X" && test.grid.row2[1] === "X" && test.grid.row3[1] === "X"){
  player1wins()}
  if (test.grid.row1[2] === "X" && test.grid.row2[2] === "X" && test.grid.row3[2] === "X"){
  player1wins()}
  if (test.grid.row1[2] === "X" && test.grid.row2[1] === "X" && test.grid.row3[0] === "X"){
  player1wins()}
  }

function winChecker2(){
  if (test.grid.row1[0] === "O" && test.grid.row1[1] === "O" && test.grid.row1[2] ==="O"){
  player2wins()}
  if (test.grid.row2[0] === "O" && test.grid.row2[1] === "O" && test.grid.row2[2] === "O"){
  player2wins()}
  if (test.grid.row3[0] === "O" && test.grid.row3[1] === "O" && test.grid.row3[2] === "O"){
  player2wins()}
  if (test.grid.row1[0] === "O" && test.grid.row2[0] === "O" && test.grid.row3[0] === "O"){
  player2wins()}
  if (test.grid.row1[0] === "O" && test.grid.row2[1] === "O" && test.grid.row3[2] === "O"){
  player2wins()}
  if (test.grid.row1[1] === "O" && test.grid.row2[1] === "O" && test.grid.row3[1] === "O"){
  player2wins()}
  if (test.grid.row1[2] === "O" && test.grid.row2[2] === "O" && test.grid.row3[2] === "O"){
  player2wins()}
  if (test.grid.row1[2] === "O" && test.grid.row2[1] === "O" && test.grid.row3[0] === "O"){
  player2wins()}
  }

function turnCounter(){
    test.turnCounter++
    if (test.turnCounter === 9){
      console.log("The game is drawn!")
  }
}

function player1wins(){
  test.player1wins++
  alert("Player 1 Wins!")
  game.reset()
}

function player2wins(){
  test.player2wins++
  alert("Player 2 Wins!")
  game.reset()
}
