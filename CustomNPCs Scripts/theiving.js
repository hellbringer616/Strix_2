//On interact with NPC
function interact(event) {
  var rng = Math.random();
  var itemService = Java.type("com.onaple.itemizer.ItemService");
  var playerName = event.source.getName();
  var itemPool = ItemService.fetch(1);
  
  if(event.source && event.source.getType() == EntityType_PLAYER && event.source.isSneaking()){
    if(rng >= 0.6){
      event.npc.executeCommand("fetch " itemPool + " 3 " playerName + "");
      event.npc.executeCommand("nadmin exp add " + playerName + " theiving " + maxHealth + "");
    }else{
      event.npc.executeCommand("tell " + playerName + "What are you doin in there?!"")
    }
  }
}
