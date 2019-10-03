var RpgPlugin = new JavaImporter("cz.neumimto.rpg.NtRpgPlugin")
with(RpgPlugin) {
    var armorer = character.getClassByType("Armorer");
    if (armorer !== null) {
       var level = armorer.getLevel();
    }
}
