class Player {
  constructor(name, token, wins){
    this.id = name;
    this.token = token;
    this.wins = 0;
  }
  saveWinsToStorage(){
    localStorage.setItem(`${this.id} wins`, this.wins)
  }
  retreiveWinsFromStorage(){
    this.wins = parseInt(localStorage.getItem(`${this.id} wins`))
  }
}
