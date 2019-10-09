var RpgPlugin = new JavaImporter("cz.neumimto.rpg.NtRpgPlugin");
with(RpgPlugin) {
    var weaponsmith = character.getClassByType("Weaponsmith");
    if (weaponsmith !== null) {
       var out = weaponsmith.getLevel();
    }
}
