//This script looks for item ID's defined in itemizer in the players inventory and returns a retrieve command to give the player an item from itemizer
var ItemService = java.type(com.onaple.itemizer.ItemService); //Itemizer Itemservice API
var SpongeInventoryAPI = java.type(org.spongepowered.item.inventory); //Need to find this class!!
var SpongeCommandAPI = java.type(org.spongepowered.command.spec.CommandSpec); //Sponge Command API (I think..)
var SpongeTextAPI = java.type(org.spongepowered.api.text.Text); //Sponge Text API (I think...)
var Item1 = "CommandOutput"; //not yet finished
var Quantity1 = "CommandOutput" //not yet finished
var Item2 = "CommandOutput"; //not yet finished
var Quantity2 = "CommandOutput"; //not yet finished
var CraftedItem ="CommandOutput"; //not yet finished
var CraftedItemQuanity = "CommandOutput"; //not yet finished

if SpongeInventoryAPI.contains(ItemService(Item1 Quantity1)) && SpongeInventoryAPI.contains(ItemService(Item2 Quantity2)) && CanFit(CraftedItem CraftedItemQuanity); //Checks if the player has space in inventory //Checks if the player has Itemizer items in inventory{
  clear(ItemService(Item1 Quantity1)); //removes itemizer item from inventory
  clear(ItemService(Item2 Quantity2)); //removes itemizer item from inventory
  ItemService.retrieve(CraftedItem CraftedItemQuanity); //Gives player Itemizer item
} else {
  //Output Error Message here
}
