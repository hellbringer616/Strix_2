//loads NTRPG Plugin
var RpgPlugin = Java.type("cz.neumimto.rpg.sponge.NtRpgPlugin")
//on NPC interaction
function interact(event) {
//////////
  var className = "Thieving" //must be a string
//////////
  var uid = event.player.getUUID() //Get Player UUID string
  var JavaUUID = Java.type('java.util.UUID') //Magic?
  var character = RpgPlugin.GlobalScope.characterService.getCharacter(JavaUUID.fromString(uid)) //load NT-RPG Character service and get UUID than convert to Java UUID
  var classData = character.getClasses().get(className) //gets class data from character
  if(classData !== null) { //checks if classData returns null
    var classLevel = classData.getLevel()
    event.npc.say(classLevel)
  }
}
