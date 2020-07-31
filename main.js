var grid = document.querySelector('.d')
var test = new Game(new Player({"Player1": "PlayerOne", "Token": "X"}), new Player({"Player2": "Player2", "Token": "O"}))

grid.addEventListener('click', handleMainClick)

function handleMainClick(event){
 if (test.player1turn === true && event.target.classList.contains("active")){
  event.target.innerText = ("X")
  dataModelUpdater()
  turnCounter()
  event.target.classList.remove("active")
  test.player1turn = false;
  test.player2turn = true;
} else if
  (test.player2turn === true && event.target.classList.contains("active")){
   event.target.innerText = ("O")
   dataModelUpdater()
   turnCounter()
   event.target.classList.remove("active")
   test.player2turn = false;
   test.player1turn = true;
 }
}
function dataModelUpdater(){

}
function turnCounter(){
    test.turnCounter++
    if (test.turnCounter === 9){
      console.log("The game is drawn!")
    }
}
