var sponge = Java.Type("org.spongepowered.api.Sponge");
var itemType = Java.Type("org.spongepowered.api.item.ItemType");

skillService.getById("itemTd").get().setIcon(sponge.getRegistry().getType(itemType.static, "minecraft:nether_star").get());
