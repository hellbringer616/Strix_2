//script that runs on death and retrieve and item from itemizer itempool
//**NOTE** syntax for this will likely be all wrong; I need to keep better notes...

//Loads a seperate API, in this case Itemizers ItemService
var ItemService = Java.type("com.onaple.itemizer.ItemService");
//Anything within the brackets runs on the death of an NPC
function dies(event) {
  //Fetches from the Itemizer pools.conf file using the numarical string ID and sets it as the variable DroppedItem
  var DroppedItem = ItemService.fetch(1);
  //Sets the dropped item in slot 8 of CustomNPC to drop the itemizer item 100% of the time.
  setDropedItem(int 8, ItemStack DroppedItem(), int 100)
}
