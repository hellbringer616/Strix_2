var RpgPlugin = new JavaImporter("cz.neumimto.rpg.NtRpgPlugin")
with(RpgPlugin) {
    var Combat = character.getClassByType("Combat");
    if (Combat !== null) {
       var level = Combat.getLevel();
    }
}
