class Game {
  constructor(player1, player2){
    this.player1 = player1;
    this.player2 = player2;
    this.player1turn = true;
    this.player2turn = false;
    this.turnCounter = 0;
    this.draw = false;
    this.grid = {row1: ["1", "2", "3" ], row2: ["4", "5", "6"], row3: ["7", "8", "9"]}
  }

    resetBoard(){
    this.draw = false;
    this.turnCounter = 0;
    this.grid = {row1: ["1", "2", "3" ], row2: ["4", "5", "6"], row3: ["7", "8", "9"]};
    this.retreiveWinsFromStorage();
    location.reload(); 
  }
  retreiveWinsFromStorage(){
    this.player1.retreiveWinsFromStorage()
    this.player2.retreiveWinsFromStorage();
  }
}
