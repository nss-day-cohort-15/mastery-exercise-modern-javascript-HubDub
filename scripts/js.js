"use strict";
// let battledomePlayer = require('./player.js');
// let battledomeRobotClass = require('./robots.js');


// let Player1 = new Battledome.Combatants.Player();
// console.log(Player1);

$("#welcome-page").show();
$(".card_link").click(function(e) {
  var nextCard = $(this).attr("next");
  var moveAlong = false;

  switch (nextCard) {
    case "card--class":
    moveAlong = ($("#getName").val() !== "");
        break;
      case "card--battleground":
        moveAlong = ($("#player-name").val() !== "");
  }
  if (moveAlong) {
    $(".card").hide();
    $("." + nextCard).show();
  }
});