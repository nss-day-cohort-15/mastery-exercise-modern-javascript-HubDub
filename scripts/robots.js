"use strict";

//this is the base robot function
// let BattleBot = BattleBot || {};
let BattleBot = {};


//base for a BattleBot class - can get it returnining the inherited name of the class but not the weapon.
BattleBot.BotClass = function() {
  this.name = "";
  this.weapon = "";
  this.health = Math.floor(Math.random() * 20 + 90);
  this.attack = Math.floor(Math.random() * 10 + 20);
};

//Bear Class Bots
BattleBot.BearClass = function() {
  this.health = this.health - 20;
   this.attack = this.attack + 10;
};
BattleBot.BearClass.prototype = new BattleBot.BotClass();

//two types in the bear class
BattleBot.BrownBear = function() {
  this.className = "Brown Bear";
  this.weapon = "claws";
};
BattleBot.BrownBear.prototype = new BattleBot.BearClass();

BattleBot.PolarBear = function() {
  this.className = "Polar Bear";
  this.weapon = "fangs";
};
BattleBot.PolarBear.prototype = new BattleBot.BearClass();

//Humanoid Class Bots
BattleBot.HumanoidClass = function() {
 this.health = this.health + 0;
 this.attack = this.attack + 0;
};
BattleBot.HumanoidClass.prototype = new BattleBot.BotClass();

//two types in the Humanoid class
BattleBot.Android = function() {
  this.className = "Android";
  this.weapon = "Hammer";
};
BattleBot.Android.prototype = new BattleBot.HumanoidClass();

BattleBot.Elf = function() {
  this.className = "Elf";
  this.weapon = "Dagger";
};
BattleBot.Elf.prototype = new BattleBot.HumanoidClass();

//Spider Class Bots
BattleBot.SpiderClass = function() {
  this.health = this.health + 20;
  this.attack = this.attack - 10;
};
BattleBot.SpiderClass.prototype = new BattleBot.BotClass();

//two types in the spider class
BattleBot.BlackWidow = function() {
  this.className = "Black Widow";
  this.weapon = "acid";
};
BattleBot.BlackWidow.prototype = new BattleBot.SpiderClass();

BattleBot.BrownRecluse = function() {
  this.className = "Brown Recluse";
  this.weapon = "web-suffocation";
};
BattleBot.BrownRecluse.prototype = new BattleBot.SpiderClass();

module.exports = BattleBot;