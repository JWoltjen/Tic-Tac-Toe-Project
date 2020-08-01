class Player {
  constructor(name, token){
    this.id = name;
    this.token = token;
    this.wins = 0;
  }
  saveWinsToStorage(){
    localStorage.setItem('wins', this.wins)

  }
  retreiveWinsFromStorage(){
    localStorage.getItem('wins', this.wins)
  }
}
