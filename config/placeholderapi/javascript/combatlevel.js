var RpgPlugin = new JavaImporter("cz.neumimto.rpg.NtRpgPlugin"); //load NT-RPG
var JavaUUID = new JavaImporter('java.util.UUID'); //Magic?
var uid = event.player.getUUID(); //Get Player UUID string
var character = RpgPlugin.GlobalScope.characterService.getCharacter(JavaUUID.fromString(uid)); //load NT-RPG Character service and get UUID than convert to Java UUID
var combat = character.getClassByType("Combat");
    if (combat !== null) {
       var level = combat.getLevel();

}
