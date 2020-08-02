class Game {
  constructor(player1, player2){
    this.player1 = player1;
    this.player2 = player2;
    this.player1turn = true;
    this.player2turn = false;
    this.turnCounter = 0;
    this.gameCounter = 0;
    this.draw = false;
    this.grid = {row1: ["1", "2", "3" ], row2: ["4", "5", "6"], row3: ["7", "8", "9"]}
  }

    resetBoard(){
    this.gameCounter++;
    this.draw = false;
    this.turnCounter = 0;
    this.grid = {row1: ["1", "2", "3" ], row2: ["4", "5", "6"], row3: ["7", "8", "9"]};
    // this.firstTurnUpdater();
    this.retreiveWinsFromStorage();
  }
  firstTurnUpdater(){
  if (this.gameCounter%2 === 0 && this.turnCounter === 0){
      this.player1turn = true;
      this.player2turn = false;
    } else {
      this.player1turn = false;
      this.player2turn = true;
    }
  }
  retreiveWinsFromStorage(){
    this.player1.retreiveWinsFromStorage()
    console.log("Player1 Wins:", this.player1.wins)
    this.player2.retreiveWinsFromStorage();
    console.log("Player2 Wins:", this.player2.wins)
  }
}
