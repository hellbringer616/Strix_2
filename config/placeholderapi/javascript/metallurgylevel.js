var RpgPlugin = new JavaImporter("cz.neumimto.rpg.NtRpgPlugin")
with(RpgPlugin) {
    var metallurgy = character.getClassByType("Metallurgy");
    if (metallurgy !== null) {
       var level = metallurgy.getLevel();
    }
}
