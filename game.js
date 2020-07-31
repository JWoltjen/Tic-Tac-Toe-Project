class Game {
  constructor(player1, player2){
    this.player1 = player1
    this.player2 = player2
    this.player1turn = true;
    this.player2turn = false;
    this.draw = false;
    this.player1win = false;
    this.player1wins = 0;
    this.player2wins = 0;
    this.player2win = false;
    this.turnCounter = 0;
    this.grid = {row1: ["", "", "" ], row2: ["", "", ""], row3: ["", "", ""]}
  }
  recordPlayer1win(){
    this.player1wins++
    this.player1.saveWinsToStorage()
  }
  recordPlayer2win(){
    this.player2wins++
    this.player2.savesWinsToStorage()
  }
  resetBoard(){
    this.player1turn = true;
    this.player2turn = false;
    this.draw = false;
    this.player1win = false;
    this.player2win = false;
    this.turnCounter = 0;
    this.grid = {row1: ["", "", "" ], row2: ["", "", ""], row3: ["", "", ""]}
    this.player1.retreiveWinsFromStorage()
    this.player2.retreiveWinsFromStorage(); 
  }
}
