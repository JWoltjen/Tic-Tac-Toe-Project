var grid = document.querySelector('.d')
var test = new Game(new Player({"Player1": "PlayerOne", "Token": "X"}), new Player({"Player2": "Player2", "Token": "O"}))

grid.addEventListener('click', handleMainClick)
grid.addEventListener('click', dataModelUpdater1)
grid.addEventListener('click', dataModelUpdater2)

function handleMainClick(event){
 if (test.player1turn === true && event.target.classList.contains("active")){
  event.target.innerText = ("X")
  turnCounter()
  event.target.classList.remove("active")
  test.player1turn = false;
  test.player2turn = true;
} else if
  (test.player2turn === true && event.target.classList.contains("active")){
   event.target.innerText = ("O")
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

function turnCounter(){
    test.turnCounter++
    if (test.turnCounter === 9){
      console.log("The game is drawn!")
    }
}
function player1Clicker(){

}
