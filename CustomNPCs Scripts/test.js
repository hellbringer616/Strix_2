//When NPC is damaged
function damaged(event) {
  var mobName = event.target.getName(); //should be damaged mobs name
  var playerWeapon = event.player.getMainhandItem().getName(); //should be weapon in main hand of player.
        event.say.npc("Ow!"); //says a string
        event.say.npc(mobName); //says its own Name
        event.say.npc(playerWeapon); //says mainhand weapon of damaging player
        event.say.npc(event.damage()); //says the damage done to the mob.
}
