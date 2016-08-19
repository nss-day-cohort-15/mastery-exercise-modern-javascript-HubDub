//this is the base robot function
let Battlebot = Battlebot || {};
Battlebot.BotBarn = {};

//base for a battlebot class
Battlebot.BotBarn.BotClass = function() {
  this.name = "Vanilla";
  this.healthBonus = 0;
  this.attackBonus = 0;
}

Battlebot.BotBarn.