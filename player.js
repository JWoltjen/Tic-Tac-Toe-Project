class Player {
  constructor(name, token, wins){
    this.id = name;
    this.token = token;
    if (this.wins === undefined){
      this.wins = 0
  } else {
    this.wins = wins;
  }
}
  saveWinsToStorage(){
    localStorage.setItem(`${this.id} wins`, this.wins)
  }
  retreiveWinsFromStorage(){
   this.wins = parseInt(localStorage.getItem(`${this.id} wins`))
   if (this.wins === undefined){
    return this.wins = 0
   }
  }
}
