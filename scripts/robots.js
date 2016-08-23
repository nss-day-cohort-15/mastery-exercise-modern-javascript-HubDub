"use strict";
//this is the base robot function
let Battlebot = Battlebot || {};
Battlebot.BotBarn = {};

//base for a battlebot class
Battlebot.BotBarn.BotClass = function() {
  this.name = "Vanilla";
  this.healthBonus = 0;
  this.attackBonus = 0;
};

//Bear Class Bots
Battlebot.BotBarn.BearClass = function() {
 this.healthBonus = this.healthBonus - 20;
 this.attackBonus = this.attackBonus + 10;
};
Battlebot.BotBarn.BearClass.prototype = new Battlebot.BotBarn.BotClass();

//two types in the bear class
Battlebot.BotBarn.BrownBear = function() {
 this.name = "Brown Bear";
 this.weapon = "claws";
};
Battlebot.BotBarn.BrownBear.prototype = new Battlebot.BotBarn.BearClass();

Battlebot.BotBarn.PolarBear = function() {
 this.name = "Polar Bear";
 this.weapon = "fangs";
};
Battlebot.BotBarn.PolarBear.prototype = new Battlebot.BotBarn.BearClass();

//Humanoid Class Bots
Battlebot.BotBarn.HumanoidClass = function() {
 this.healthBonus = this.healthBonus + 0;
 this.attackBonus = this.attackBonus + 0;
};
Battlebot.BotBarn.BearClass.prototype = new Battlebot.BotBarn.BotClass();

//two types in the Humanoid class
Battlebot.BotBarn.Android = function() {
 this.name = "Bob the Android";
 this.weapon = "Hammer";
};
Battlebot.BotBarn.Android.prototype = new Battlebot.BotBarn.HumanoidClass();

Battlebot.BotBarn.Elf = function() {
 this.name = "Legolas the Elf";
 this.weapon = "Dagger";
};
Battlebot.BotBarn.Elf.prototype = new Battlebot.BotBarn.HumanoidClass();

//Spider Class Bots
Battlebot.BotBarn.SpiderClass = function() {
 this.healthBonus = this.healthBonus + 20;
 this.attackBonus = this.attackBonus - 10;
};
Battlebot.BotBarn.SpiderClass.prototype = new Battlebot.BotBarn.BotClass();

//two types in the spider class
Battlebot.BotBarn.BlackWidow = function() {
 this.name = "Charlotte";
 this.weapon = "acid";
};
Battlebot.BotBarn.BlackWidow.prototype = new Battlebot.BotBarn.SpiderClass();

Battlebot.BotBarn.BrownRecluse = function() {
 this.name = "Sylvia the Spider";
 this.weapon = "web-suffocation";
};
Battlebot.BotBarn.BrownRecluse.prototype = new Battlebot.BotBarn.SpiderClass();
