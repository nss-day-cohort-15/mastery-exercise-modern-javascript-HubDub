"use strict";
let $ = require('jquery');
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

// module.exports = BattleBot;