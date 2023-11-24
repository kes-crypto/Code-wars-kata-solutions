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
//sol3
/* for my future referencing,

  ^ = start of a line, 
  \d = [0-9], {4} specifies 4 digits, 
  {6} specifies 6 digits, $ - end of a line
  
  first alternative ^\d{4}$ - equivalent to [0-9], matches exactly 4 digits.
  second alternative ^\d{6}$ - "", matches previous token exactly 6 digits.
  
   use RegEx .test to search for these characters stored.
   
*/ 

const validatePIN = pin => /^\d{4}$|^\d{6}$/.test(pin);
