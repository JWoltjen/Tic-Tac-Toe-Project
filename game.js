class Game {
  constructor(player1, player2){
    this.player1 = new Player("Player1",  "\u{1F607}")
    this.player2 =  new Player("Player2", "\u{1F608}")
    this.player1turn = true;
    this.player2turn = false;
    this.turnCounter = 0;
    this.draw = false;
    this.win = false;
    this.grid = {row1: ["1", "2", "3" ], row2: ["4", "5", "6"], row3: ["7", "8", "9"]}
  }
  resetBoard(){
    this.draw = false;
    this.win = false;
    this.turnCounter = 0;
    this.grid = {row1: ["1", "2", "3" ], row2: ["4", "5", "6"], row3: ["7", "8", "9"]};
    this.retreiveWinsFromStorage();
    location.reload();
    return false;
  }

  retreiveWinsFromStorage(){
    this.player1.retreiveWinsFromStorage()
    document.querySelector(".winCounter1").innerHTML = this.player1.wins;
    this.player2.retreiveWinsFromStorage();
    document.querySelector(".winCounter2").innerHTML = this.player2.wins;
  }
}
