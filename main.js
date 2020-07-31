var grid = document.querySelector('.d')

// window.onload = function(){
  var test = new Game({"Player1": "PlayerOne", "Token": "x"}, {"Player2": "Player2", "Token": "o"})

grid.addEventListener('click', handleMainClick)

function handleMainClick(event){
 if (this.player1.turn === true && event.target.className === "square"){
   this.player1.turn = false;
   this.player2.turn = true;
   console.log("player1 has clicked a square")
 }
 if (this.player2.turn === true && event.target.className === "square"){
   this.player1.turn = true;
   this.player2.turn = false;
   console.log("player2 has clicked a square")
 }
}
