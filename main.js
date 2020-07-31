var grid = document.querySelector('.d')

// window.onload = function(){
  var test = new Game(new Player({"Player1": "PlayerOne", "Token": "x"}), new Player({"Player2": "Player2", "Token": "o"}))

grid.addEventListener('click', handleMainClick)

function handleMainClick(event){
 if (test.player1turn === true && event.target.className === "square"){
   return test.player1turn = false,test.player2turn = true
   console.log("player1 has clicked a square")
 }
 if (test.player2turn === true && event.target.className === "square"){
   test.player1turn = true;
   test.player2turn = false;
   console.log("player2 has clicked a square")
 }
}
