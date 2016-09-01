"use strict";
let BattleBotPlayer = require('./player.js');
let BattleBotClass = require('./robots.js');


let Player1 = new BattleBotPlayer.Fighter();
let Enemy = new BattleBotPlayer.Fighter();
console.log(Player1);
console.log(Enemy);
console.log("welcome to BattleDome");
// let player1 = new battleBotPlayer.BattleBot.Combatants.Player();

$(document).ready( () => {
  $(".welcome-page").show();
  $(".choose-bot").hide();
  $(".battleground").hide();
  $("#getName").focus();
});



$("#name_button").click(function(e) {
  let playerNameInput = $("#getName").val();
  console.log(playerNameInput);
  Player1.playerName = playerNameInput;
  console.log(Player1);
  let enemyNameInput = $("#opponentName").val();
  console.log(enemyNameInput);
  Enemy.playerName = enemyNameInput;
  console.log(Enemy);
  if (playerNameInput === "" || enemyNameInput === "") {
      window.alert("please fill in both your player's name and your opponent's name!");
    } else {
    console.log("you clicked the button ", playerNameInput, "and will fight ", enemyNameInput);
        transitionToRobotSelect();
    }
});

function transitionToRobotSelect () {
  console.log("you are moving on to select your robot");
  $(".welcome-page").hide();
  $(".choose-bot").show();
  $(".battleground").hide();
}

//can we put the event listener on the big div and then have it pull the robot type by the actual button clicked? check his music FB to see.
$("#brownBear").click( () =>{
  console.log("you clicked brown bear");
  Player1.class = new BattleBotClass.BrownBear();
  console.log(Player1);
  transitionToBattleground();
});

$("#polarBear").click( () =>{
  console.log("you clicked polar bear");
  Player1.class = new BattleBotClass.PolarBear();
  console.log(Player1);
  transitionToBattleground();
});

$("#android").click( () =>{
  console.log("you clicked android");
  Player1.class = new BattleBotClass.Android();
  console.log(Player1);
  transitionToBattleground();
});

$("#elf").click( () =>{
  console.log("you clicked elf");
  Player1.class = new BattleBotClass.Elf();
  console.log(Player1);
  transitionToBattleground();
});

$("#blackWidow").click( () =>{
  console.log("you clicked black widow");
  Player1.class = new BattleBotClass.BlackWidow();
  console.log(Player1);
  transitionToBattleground();
});

$("#brownRecluse").click( () =>{
  console.log("you clicked brown recluse");
  Player1.class = new BattleBotClass.BrownRecluse();
  console.log(Player1);
  transitionToBattleground();
});

function transitionToBattleground () {
  console.log("you are moving on to the battleground");
  $(".welcome-page").hide();
  $(".choose-bot").hide();
  $(".battleground").show();
}

$(".fight").click( () =>{
  console.log("you clicked to fight");
  battle();
});

function battle() {
  console.log("player one: ", Player1);
  console.log("enemy: ", Enemy);
  console.log("player one health: ", Player1.health);
  console.log("enemy health: ", Enemy.health);

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