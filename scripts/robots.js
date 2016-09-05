"use strict";

//this is the base robot function
// let BattleBot = BattleBot || {};
let BattleBot = {};


//base for a BattleBot class - can get it returnining the inherited name of the class but not the weapon.
BattleBot.BotClass = function() {
  this.name = "Vanilla";
  this.weapon = "bad breath";
  this.healthBonus = 0;
  this.attackBonus = 0;
  this.toString = function(){
    return this.class;
  };
};

//Bear Class Bots
BattleBot.BearClass = function() {
 this.healthBonus = this.healthBonus - 20;
 this.attackBonus = this.attackBonus + 10;
};
BattleBot.BearClass.prototype = new BattleBot.BotClass();

//two types in the bear class
BattleBot.BrownBear = function() {
 this.name = "Brownie";
 this.weapon = "claws";
 // this.toString = function(){
 //    return this.weapon;
 //  };
};
BattleBot.BrownBear.prototype = new BattleBot.BearClass();

BattleBot.PolarBear = function() {
 this.name = "Paul";
 this.weapon = "fangs";
};
BattleBot.PolarBear.prototype = new BattleBot.BearClass();

//Humanoid Class Bots
BattleBot.HumanoidClass = function() {
 this.healthBonus = this.healthBonus + 0;
 this.attackBonus = this.attackBonus + 0;
};
BattleBot.BearClass.prototype = new BattleBot.BotClass();

//two types in the Humanoid class
BattleBot.Android = function() {
 this.name = "Bob the Android";
 this.weapon = "Hammer";
};
BattleBot.Android.prototype = new BattleBot.HumanoidClass();

BattleBot.Elf = function() {
 this.name = "Legolas the Elf";
 this.weapon = "Dagger";
};
BattleBot.Elf.prototype = new BattleBot.HumanoidClass();

//Spider Class Bots
BattleBot.SpiderClass = function() {
 this.healthBonus = this.healthBonus + 20;
 this.attackBonus = this.attackBonus - 10;
};
BattleBot.SpiderClass.prototype = new BattleBot.BotClass();

//two types in the spider class
BattleBot.BlackWidow = function() {
 this.name = "Charlotte";
 this.weapon = "acid";
};
BattleBot.BlackWidow.prototype = new BattleBot.SpiderClass();

BattleBot.BrownRecluse = function() {
 this.name = "Sylvia the Spider";
 this.weapon = "web-suffocation";
};
BattleBot.BrownRecluse.prototype = new BattleBot.SpiderClass();

module.exports = BattleBot;