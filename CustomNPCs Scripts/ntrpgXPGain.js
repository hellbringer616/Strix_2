//On NPC death
function died(event) {
    //set variables to get the Player Name that last damaged the NPC and the NPC's Maximum Health
    var attackerName = event.source.getName();
    var maxHealth = event.npc.getMaxHealth();
    //if the death event source and it's type are PLAYER run the command, else null
    if(event.source && event.source.getType() == EntityType_PLAYER){
      //is the damage source a projectile?
      if(event.source.isProjectile()){
        event.npc.executeCommand("nadmin exp add " + attackerName + " range " + maxHealth + "");
      }else{
        event.npc.executeCommand("nadmin exp add " + attackerName + " melee " + maxHealth + "");
    }
  }
}
