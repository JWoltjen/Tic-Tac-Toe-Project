class Player {
  constructor(name, token){
    this.id = name;
    this.token = token;
    this.wins = 0;
  }
  saveWinsToStorage(){
    localStorage.setItem(`${this.id} wins`, this.wins)
  }
  retreiveWinsFromStorage(){
   this.wins = localStorage.getItem(`${this.id} wins`)

  }
}
