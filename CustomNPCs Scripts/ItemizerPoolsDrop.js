//script that runs on death and retrieve and item from itemizer itempool
//**NOTE** syntax for this will likely be all wrong; I need to keep better notes...

//Loads a seperate API, in this case Itemizers ItemService
var apiclass = Java.type("com.onaple.itemizer.ItemService");
//Anything within the brackets runs on the death of an NPC
function dies(event) {
  //Fetches from the Itemizer pools.conf file using the numarical string ID
  ItemService.fetch(1);
}
