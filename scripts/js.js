"use strict";
let BattleBotClass = require('./robots.js');

//this creates the player and enemy variables
let player1;
let enemy;
//this tells app what to hide/show at load.
  $(".choose-bot").hide();
  $(".battleground").hide();
  $("#getName").focus();

//upon click this function grabs player and enemy name, chosen class and puts them in battlebot objects. if text boxes do not have a name, it prompts for name.
$("#name_button").click(function(e) {
  let playerNameInput = $("#getName").val();
  let enemyNameInput = $("#opponentName").val();
  if (playerNameInput === "" || enemyNameInput === "") {
    window.alert("Please enter both your name and the name of your enemy!");
    } else {
    // console.log(playerNameInput);
    // player1.playerName = playerNameInput;
    // console.log(enemyNameInput);
    // enemy.playerName = enemyNameInput;
    let playerClassInput = $("#playerClass").val();
    // console.log(playerClassInput);
    player1 = new BattleBotClass[playerClassInput]();
    player1.name = playerNameInput;
    console.log(player1);
    let enemyClassInput = $("#enemyClass").val();
    // console.log(enemyClassInput);
    enemy = new BattleBotClass[enemyClassInput]();
    enemy.name = enemyNameInput;
    console.log(enemy);
    transitionToBattleground();
    }
});

//this hides/shows div to move to class choice screen
function transitionToRobotSelect () {
  console.log("you are moving on to select your robot");
  $(".welcome-page").hide();
  $(".choose-bot").show();
  $(".battleground").hide();
}

//I had a slew of event listeners on buttons but redid it to follow the directions and removed all of the event listeners.

//function to hide/show divs and show fighter's stats in battleground
function transitionToBattleground () {
  // console.log("you are moving on to the battleground");
  $(".welcome-page").hide();
  $(".choose-bot").hide();
  $(".battleground").show();
  // console.log(player1.toString());
  // console.log(enemy.toString());
  $("#inputPlayerStats").append("<h3>In this corner</h3><p>" + player1.name + " a " + player1.className + " type bot</p><p>" + "with " + player1.health + " hit points and wielding " + player1.weapon + "</p>");
  $("#inputEnemyStats").append("<h3>In this corner</h3><p>" + enemy.name + " a " + enemy.className + " type bot</p><p>" + "with " + enemy.health + " hit points and wielding " + enemy.weapon + "</p>");
}

//fight button event listener
$("#fight").click( () =>{
  // console.log("you clicked to fight");
  battle();
});
//this calculates attack damage using player attack as base then generating random number on top
function playerAttack () {
  return Math.floor(Math.random() * 10 + player1.attack);
}
function enemyAttack () {
  return Math.floor(Math.random() * 10 + enemy.attack);
}


 //this function is the battle and is called by the fight button event listener. after each round it calls the function to check if anyone's health is below zero.
function battle() {
  console.log("player one: ", player1);
  console.log("enemy: ", enemy);
  console.log("player one health: ", player1.health);
  console.log("enemy health: ", enemy.health);
  let enemyAttackDamage = enemyAttack();
  let playerAttackDamage = playerAttack();
  console.log("player attacks for ", playerAttackDamage);
  console.log("enemy attacks for ", enemyAttackDamage);
  player1.health = player1.health - enemyAttackDamage;
  enemy.health = enemy.health - playerAttackDamage;
  console.log("player health after round: ", player1.health);
  console.log("enemy health after round: ", enemy.health);
  $("#battlePlayerStats").text("enemy hits player for " + enemyAttackDamage + " hit points with " + enemy.weapon +"! After this round, the player has " + player1.health + " hit points!");
  $("#battleEnemyStats").text("player hits enemy for " + playerAttackDamage + " hit points! After this round the enemy has " + enemy.health + " hit points!");
  gameOverCheck();
}

//this function checks to see if health < 0 and removes the attack button if it is.
function gameOverCheck() {
  // console.log("gameOverCheck: player one: ", player1.health);
  // console.log("gameOverCheck: enemy: ", enemy.health);
  if (player1.health <=0 && enemy.health <=0) {
    // console.log("you are both dead!");
    $("#fight").hide();
    $("#gameOver").text("You have killed each other!");
  } else if (player1.health <=0) {
    $("#fight").hide();
    $("#gameOver").text("You have been killed!");
  } else if (enemy.health <=0) {
    $("#fight").hide();
    $("#gameOver").text("You have defeated the enemy! Congratulations!");
  }
}