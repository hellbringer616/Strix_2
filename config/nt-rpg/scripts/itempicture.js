var sponge = Java.type("org.spongepowered.api.Sponge");
var itemType = Java.type("org.spongepowered.api.item.ItemType");

skillService.getById("itemId").get().setIcon(sponge.getRegistry().getType(itemType.static, "minecraft:nether_star").get());
