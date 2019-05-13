//a script i found on the discord, saving it for reference
//When NPC is damaged
function damaged(event) {
    if (event.target.getName() == "Test" && event.player.getMainhandItem().getName().indexOf("pickaxe")==(-1)) { // if the attacker does not hold a pickaxe
        event.damage=0 //set damage to 0
    }
}
