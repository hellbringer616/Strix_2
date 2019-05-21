//On interact with NPC
function interact(event) {
  var sneak = event.player.isSneaking(); //is the player sneaking

  if(sneak && event.player.getPotionEffect(2) != 2){ //checks if the player is sneaking
    var rng = Math.random(); //generates a random number between 0 and 1
    var playerName = event.player.getName(); //gets the interacting players name
    if(rng >= 0.6){
      event.npc.executeCommand("retrieve 9999 3 " + playerName + "") //retrieve itemizer item of quantity and give to player
      event.npc.executeCommand("ndadmin exp add " + playerName + "thieving 8")
    }else{
      event.npc.say("Beg your pardon?!");
      event.player.damage(2);
      event.player.addPotionEffect(2, 3, 6, true); //adds slowness of 3 seconds of level 6 (immobile) to player
    }
  }else{
    event.npc.say("Hello Adventurer");
  }
}
