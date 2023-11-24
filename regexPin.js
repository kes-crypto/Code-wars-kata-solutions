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
