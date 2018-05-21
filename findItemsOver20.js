module.exports = function(items){
  var results = [];
  for(var i=0; i<items.length; i++){
    if(items[i].qty > 20){
       results.push(items[i]);

     }
  }
  return results;
}
