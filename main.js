var grid = document.querySelector('.d')

window.onload = function(){
  var newGame = new Game(new Player({id: 'Player1', token: 'o', wins: 0, turn: true}),new Player({id: 'Player2', token: 'x', wins: 0, turn: false}) )
}
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
