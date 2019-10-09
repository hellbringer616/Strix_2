function damaged(event) {
  var attackerName = event.source.getName();
  var arrayHasStruck = getTempData(array);
  if(!arrayHasStruck.includes(attackerName())){
    arrayHasStruck.push (attackerName());
  }
}
