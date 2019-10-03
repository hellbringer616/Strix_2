var RpgPlugin = new JavaImporter("cz.neumimto.rpg.NtRpgPlugin")
with(RpgPlugin) {
    var combat = character.getClassByType("Combat");
    if (combat !== null) {
       var level = combat.getLevel();
    }
}
