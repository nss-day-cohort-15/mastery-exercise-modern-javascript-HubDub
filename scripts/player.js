"use strict";

let BattleBot = {};

//base function for player or enemy
BattleBot.Fighter = function() {
  this.weapon = null;
  this.playerName = name || "Fem-Bot";
  this.health = Math.floor(Math.random() * 20 + 90);
  this.attack = Math.floor(Math.random() * 10 + 20);
  this.allowedClasses = ["BrownBear", "PolarBear", "Android", "Elf", "BlackWidow", "BrownRecluse"];
  this.generateClass = function () {
    let random = Math.round(Math.random() * (this.allowedClasses.length - 1));
    let randomClass = this.allowedClasses[random];
    return randomClass;
  };
  this.class = this.generateClass();
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

module.exports = BattleBot;