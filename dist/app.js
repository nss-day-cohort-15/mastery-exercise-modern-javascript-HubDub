(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
let battledomePlayer = require('./player.js');
let battledomeRobotClass = require('./robots.js');

},{"./player.js":2,"./robots.js":3}],2:[function(require,module,exports){
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

module.exports = Battlebot;
},{}],3:[function(require,module,exports){
"use strict";
//this is the base robot function
let BattleBot = BattleBot || {};
BattleBot.BotBarn = {};

//base for a BattleBot class
BattleBot.BotBarn.BotClass = function() {
  this.name = "Vanilla";
  this.healthBonus = 0;
  this.attackBonus = 0;
};

//Bear Class Bots
BattleBot.BotBarn.BearClass = function() {
 this.healthBonus = this.healthBonus - 20;
 this.attackBonus = this.attackBonus + 10;
};
BattleBot.BotBarn.BearClass.prototype = new BattleBot.BotBarn.BotClass();

//two types in the bear class
BattleBot.BotBarn.BrownBear = function() {
 this.name = "Brown Bear";
 this.weapon = "claws";
};
BattleBot.BotBarn.BrownBear.prototype = new BattleBot.BotBarn.BearClass();

BattleBot.BotBarn.PolarBear = function() {
 this.name = "Polar Bear";
 this.weapon = "fangs";
};
BattleBot.BotBarn.PolarBear.prototype = new BattleBot.BotBarn.BearClass();

//Humanoid Class Bots
BattleBot.BotBarn.HumanoidClass = function() {
 this.healthBonus = this.healthBonus + 0;
 this.attackBonus = this.attackBonus + 0;
};
BattleBot.BotBarn.BearClass.prototype = new BattleBot.BotBarn.BotClass();

//two types in the Humanoid class
BattleBot.BotBarn.Android = function() {
 this.name = "Bob the Android";
 this.weapon = "Hammer";
};
BattleBot.BotBarn.Android.prototype = new BattleBot.BotBarn.HumanoidClass();

BattleBot.BotBarn.Elf = function() {
 this.name = "Legolas the Elf";
 this.weapon = "Dagger";
};
BattleBot.BotBarn.Elf.prototype = new BattleBot.BotBarn.HumanoidClass();

//Spider Class Bots
BattleBot.BotBarn.SpiderClass = function() {
 this.healthBonus = this.healthBonus + 20;
 this.attackBonus = this.attackBonus - 10;
};
BattleBot.BotBarn.SpiderClass.prototype = new BattleBot.BotBarn.BotClass();

//two types in the spider class
BattleBot.BotBarn.BlackWidow = function() {
 this.name = "Charlotte";
 this.weapon = "acid";
};
BattleBot.BotBarn.BlackWidow.prototype = new BattleBot.BotBarn.SpiderClass();

BattleBot.BotBarn.BrownRecluse = function() {
 this.name = "Sylvia the Spider";
 this.weapon = "web-suffocation";
};
BattleBot.BotBarn.BrownRecluse.prototype = new BattleBot.BotBarn.SpiderClass();

module.exports = BattleBot;
},{}]},{},[1]);
