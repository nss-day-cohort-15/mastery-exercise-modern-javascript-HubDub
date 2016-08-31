"use strict";
let BattleBotPlayer = require('./player.js');
let BattleBotRobotClass = require('./robots.js');


let Player1 = new BattleBotPlayer.BattleBot.Fighters();
console.log(Player1);
console.log("welcome to BattleDome");
// let player1 = new battleBotPlayer.BattleBot.Combatants.Player();

$(document).ready( () => {
  $(".welcome-page").show();
  $(".choose-bot").hide();
  $(".battleground").hide();
});


$("#name_button").click(function(e) {
  let playerName = $("#getName").val();
  console.log(playerName);
  let enemyName = $("#opponentName").val();
  console.log(enemyName);
  if (playerName === "" || enemyName === "") {
      window.alert("please fill in both your player's name and your opponent's name!");
    } else {
    console.log("you clicked the button ", playerName, "and will fight ", enemyName);
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
});

$("#polarBear").click( () =>{
  console.log("you clicked polar bear");
});

$("#android").click( () =>{
  console.log("you clicked android");
});

$("#elf").click( () =>{
  console.log("you clicked elf");
});

$("#blackWidow").click( () =>{
  console.log("you clicked black widow");
});

$("#brownRecluse").click( () =>{
  console.log("you clicked brown recluse");
});


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