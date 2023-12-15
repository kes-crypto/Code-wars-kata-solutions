
function duplicateCount(text) {
    var nText = text.toLowerCase(); //this changes every character to lower case 
    var myObj = {}; // Declaring an empty object
    var counter = 0;
    for (var i = 0; i < nText.length; i++) {
    // assigning character as property and giving value 1 
        if (!myObj[nText[i]]){
            myObj[nText[i]] = 1;
        }//checking if character already added
        else if (myObj[nText[i]] < 2) {
            myObj[nText[i]] += 1;
            counter++;
        }
    }
    return counter;
}
//sol1
function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}
//sol2
function duplicateCount(text){
  var lower = text.toLowerCase();
  var count = 0;
  var used = [];
  
  lower.split('').forEach(function(letter) {
    if (!used.includes(letter) && (lower.split(letter).length - 1) > 1) {
      count++;
      used.push(letter);
    }
  });
  
  return count;
}
