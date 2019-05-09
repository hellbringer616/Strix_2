//a script i found on the discord, saving it for reference
//When NPC is damaged
function damagedEntity(event) {
    if (event.target.getName() == "NPC Name" && event.player.getMainhandItem().getName().indexOf("pickaxe")==(-1)) { // if the attacker does not hold a pickaxe set damage to 0
        event.damage=0
    }
}
