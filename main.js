var grid = document.querySelector('.d')
var test = new Game(new Player({"Player1": "PlayerOne", "Token": "X"}), new Player({"Player2": "Player2", "Token": "O"}))

grid.addEventListener('click', handleMainClick)

function handleMainClick(event){
 if (test.player1turn === true && event.target.className === "square"){
  event.target.innerText = ("X")
  test.player1turn = false;
  console.log("player1 has clicked a square")
 test.player2turn = true;
} else if
  (test.player2turn === true && event.target.className === "square"){
   event.target.innerText = ("O")
   test.player2turn = false;
   console.log("player2 has clicked a square")
   test.player1turn = true;
 }
}
