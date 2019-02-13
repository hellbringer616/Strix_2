var sponge = java.type("org.spongepowered.api.Sponge");
var itemType = java.type("org.spongepowered.api.item.ItemType");

skillService.getById("itemId").get().setIcon(sponge.getRegistry().getType(itemType.static, "minecraft:nether_star").get());
