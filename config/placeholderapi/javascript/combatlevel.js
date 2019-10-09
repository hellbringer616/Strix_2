//loads NTRPG Plugin
var RpgPlugin = Java.type("cz.neumimto.rpg.sponge.NtRpgPlugin");
  var className = "Combat" //must be a string
  var uid = player.getUUID(); //Get Player UUID string
  var JavaUUID = Java.type('java.util.UUID'); //problematic line...
  var character = RpgPlugin.GlobalScope.characterService.getCharacter(JavaUUID.fromString(uid)); //load NT-RPG Character service and get UUID than convert to Java UUID
  var classData = character.getClasses().get(className); //gets class data from character
  if(classData !== null) { //checks if classData returns null
    var out = classData.getLevel();
  }
