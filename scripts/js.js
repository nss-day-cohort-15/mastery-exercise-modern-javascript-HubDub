"use strict";
let BattleBotPlayer = require('./player.js');
let BattleBotClass = require('./robots.js');

//this creates the player and enemy objects
let player1 = new BattleBotPlayer.Fighter();
let enemy = new BattleBotPlayer.Fighter();
console.log(player1);
console.log(enemy);
console.log("welcome to BattleDome");

//this tells app what to hide/show at load
$(document).ready( () => {
  $(".welcome-page").show();
  $(".choose-bot").hide();
  $(".battleground").hide();
  $("#getName").focus();
});


//upon click this function grabs player and enemy name and puts it in player1 and enemy object created earlier. if text boxes do not have a name, it prompts for name.
$("#name_button").click(function(e) {
  let playerNameInput = $("#getName").val();
  console.log(playerNameInput);
  player1.playerName = playerNameInput;
  console.log(player1);
  let enemyNameInput = $("#opponentName").val();
  console.log(enemyNameInput);
  enemy.playerName = enemyNameInput;
  console.log(enemy);
  if (playerNameInput === "" || enemyNameInput === "") {
      window.alert("please fill in both your player's name and your opponent's name!");
    } else {
    console.log("you clicked the button ", playerNameInput, "and will fight ", enemyNameInput);
        transitionToRobotSelect();
    }
});

//this hides/shows div to move to class choice screen
function transitionToRobotSelect () {
  console.log("you are moving on to select your robot");
  $(".welcome-page").hide();
  $(".choose-bot").show();
  $(".battleground").hide();
}

//these are the event listeners for the player to choose their class. it adds the class to the player object and then transitions calls the function that transitions to battleground. Can we make this more effecient and put an EL on the div then just pull the id of the actual button?
$("#brownBear").click( () =>{
  console.log("you clicked brown bear");
  player1.class = new BattleBotClass.BrownBear();
  console.log(player1);
  transitionToBattleground();
});

$("#polarBear").click( () =>{
  console.log("you clicked polar bear");
  player1.class = new BattleBotClass.PolarBear();
  console.log(player1);
  transitionToBattleground();
});

$("#android").click( () =>{
  console.log("you clicked android");
  player1.class = new BattleBotClass.Android();
  console.log(player1);
  transitionToBattleground();
});

$("#elf").click( () =>{
  console.log("you clicked elf");
  player1.class = new BattleBotClass.Elf();
  console.log(player1);
  transitionToBattleground();
});

$("#blackWidow").click( () =>{
  console.log("you clicked black widow");
  player1.class = new BattleBotClass.BlackWidow();
  console.log(player1);
  transitionToBattleground();
});

$("#brownRecluse").click( () =>{
  console.log("you clicked brown recluse");
  player1.class = new BattleBotClass.BrownRecluse();
  console.log(player1);
  transitionToBattleground();
});

//function to hide/show divs and show fighter's stats in battleground
function transitionToBattleground () {
  console.log("you are moving on to the battleground");
  $(".welcome-page").hide();
  $(".choose-bot").hide();
  $(".battleground").show();
  console.log(player1.toString());
  console.log(enemy.toString());
  $("#inputPlayerStats").text(player1.toString());
  $("#inputEnemyStats").append(enemy.toString());
}
//fight button event listener
$("#fight").click( () =>{
  console.log("you clicked to fight");
  battle();
});
//this calculates attack damage using player attack as base then generating random number on top
function playerAttack () {
  return Math.floor(Math.random() * 10 + player1.attack);
}
function enemyAttack () {
  return Math.floor(Math.random() * 10 + player1.attack);
}


 //this function is the battle and is called by the fight button event listener
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


}
//couldn't get this show page thing to work. may just dump it.
// $(".welcome-page").show();
// $(".card_link").click(function(e) {
//   var nextCard = $(this).attr("next");
//   var moveAlong = false;

//   switch (nextCard) {
//     case "choose-bot":
//       moveAlong = ($("#getName").val() !== "");
//       break;
//     case "battleground":
//       moveAlong = ($("#player-name").val() !== "");
//   }
//   if (moveAlong) {
//     $(".card").hide();
//     $("." + nextCard).show();
//   }
// });