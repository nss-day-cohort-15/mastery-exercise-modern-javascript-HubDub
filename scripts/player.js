"use strict";

let BattleBot = BattleBot || {};
BattleBot.Combatants = {};

//base function for player or enemy
BattleBot.Combatants.Fighters = function() {
  this.class = null;
  this.weapon = null;
  this.playerName = name || "Fem-Bot";
  this.health = Math.floor(Math.random() * 20 + 90);
  this.attack = Math.floor(Math.random() * 10 + 20);
  this.toString = function() {
    let output = [
    "In this corner is ",
    this.playerName,
    ", a ",
    this.class,
    " style battlebot with an attack of ",
    this.attack,
    " and health of ",
    this.health
    ].join("");
      return output;
  };
};

BattleBot.Combatants.Player = function() {
};

BattleBot.Combatants.Player.prototype = new BattleBot.Combatants.Fighters();

BattleBot.Combatants.Enemy = function() {

};

BattleBot.Combatants.Enemy.prototype = new BattleBot.Combatants.Fighters();