// Example use :
//
// sport.playerNames();
// returns ["Lebron James plays basketball", "Kevin Durant plays basketball"]

var sport = {
  name: 'basketball',
  players: [
    { name: 'LeBron James', age: 31 },
    { name: 'Kevin Durant', age: 28 }
  ],
  playerNames: function () {
    let newArr = [];
    for(let i=0; i<this.players.length; i++){
      newArr.push(this.players[i].name + " plays " + this.name);
    }
    return newArr;
  }
};

module.exports = sport;