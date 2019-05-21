//on NPC damaged
function damaged(event) {
//if source is equal to "player" and the item in their main hand is a pickaxe; allow damage
  if (event.source.getType() == EntityType_PLAYER && event.source.getMainhandItem().getName().indexOf("pickaxe") != -1) {

  }else{ //cancel the event
      event.setCanceled(true)
    }
}
