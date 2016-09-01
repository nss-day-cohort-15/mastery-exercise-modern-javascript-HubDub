"use strict";
let BattleBotClass = require('./robots.js');
let BattleBot = {};

//base function for player or enemy - wanted to generate classes for both player and enemy and then have player overwrite their class with their class choice. Don't think it's working out quite the way I want it to. Perhaps move the generate class function into the Enemy object right after I create it.
BattleBot.Fighter = function() {
  this.weapon = null;
  this.playerName = name;
  this.health = Math.floor(Math.random() * 20 + 90);
  this.attack = Math.floor(Math.random() * 10 + 20);
  this.allowedClasses = ["BrownBear", "PolarBear", "Android", "Elf", "BlackWidow", "BrownRecluse"];
  this.generateClass = function () {
    let random = Math.round(Math.random() * (this.allowedClasses.length - 1));
    let randomClass = this.allowedClasses[random];
    this.class = randomClass;
  };
  this.class = this.generateClass();
  // this.class = null;
  this.toString = function() {
    let output = [
    "In this corner is ",
    this.playerName,
    ", a ",
    this.class,
    " style battlebot weilding ",
    this.weapon,
    " with an attack of ",
    this.attack,
    " and health of ",
    this.health
    ].join("");
      return output;
  };
};

//this should automatically generate the class of the enemy fighter...it doesn't recognize BattleBot
// BattleBot.Fighter.EnemyFighter = function() {
//   this.allowedClasses = ["BrownBear", "PolarBear", "Android", "Elf", "BlackWidow", "BrownRecluse"];
//   this.generateClass = function () {
//     let random = Math.round(Math.random() * (this.allowedClasses.length - 1));
//     let randomClass = this.allowedClasses[random];
//     this.class = new.BattleBot[randomClass]();
//     return randomClass;
//   };
//   this.class = this.generateClass();
// };

// BattleBot.Fighter.EnemyFighter.prototype = new BattleBotClass.Fighter();
//I am not inheriting the class or weapon correctly. it won't put them in the text without manipulation and when I manipulate one, the other doesn't work.
module.exports = BattleBot;