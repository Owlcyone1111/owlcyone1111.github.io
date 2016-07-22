//var dice = {
//  sides: 6,
//  roll: function() {
//    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
//    return randomNumber;
//  }
//}

// Constructor function
function Dice(sides) {
  this.sides = sides;
}

// Instead of roll method defined for every instance, shared between all instances
Dice.prototype.roll = function diceRoll() {
  var randomNumber = Math.floor(Math.random() * this.sides) + 1;
  return randomNumber;
}

var dice = new Dice(6);