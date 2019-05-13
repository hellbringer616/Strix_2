//on NPC damaged
function damaged(event) {
   var damage = event.damage;
   event.damage=0
//if source is equal to "player" and they have an item in their main hand, and if it's not a pickaxe; set damage to 0
    if (event.source.getType() == EntityType_PLAYER && event.source.getMainhandItem() && event.source.getMainhandItem().getName().indexOf("pickaxe") != -1) {
        event.damage = damage;
    }
}
