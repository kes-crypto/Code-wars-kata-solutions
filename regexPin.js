function validatePIN(pin) {
var isNumber = /^\d+$/.test(pin) && (pin.length == 4 || pin.length == 6)
return isNumber
}
//sol2
function validatePIN (pin) {
  
  var pinlen = pin.length;
  var isCorrectLength = (pinlen == 4 || pinlen == 6);
  var hasOnlyNumbers = pin.match(/^\d+$/);
    
  if(isCorrectLength && hasOnlyNumbers){
    return true;
  }
  
  return false;

}
//sol2
function validatePIN (pin) {
  //return true or false
	var n = pin.length;
  if( n != 4 && n != 6)
  		return false;
  for (var i in pin)
  		if (pin[i] > '9' || pin[i] < '0')
      		return false;
  return true;
}
