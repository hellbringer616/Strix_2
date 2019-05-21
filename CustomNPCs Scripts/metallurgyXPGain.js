//On NPC death
function died(event) {
//////////////////////////////////////////
//these are your configurable variables//
var experience = 10
var itemizerOre = 1
//////////////////////////////////////////
    var attackerName = event.source.getName(); //set variables to get the Player Name that last damaged the NPC and the NPC's Maximum Health
    //if the death event source and it's type are PLAYER run the command, else null
    if(event.source && event.source.getType() == EntityType_PLAYER){
        event.npc.executeCommand("nadmin exp add " + attackerName + " metallurgy " + experience + "");
        event.npc.executeCommand("retrieve " + itemizerOre + " 1 " + attackerName + "")
  }
}
