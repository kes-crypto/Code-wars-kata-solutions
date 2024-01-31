function toCamelCase(str){ 
  let arr = str.split('');
  for(i = 0; i < arr.length; i++){
    let letter = arr[i];
    if(letter == '_' || letter == '-') {
      arr[i + 1] = arr[i + 1].toUpperCase();
      arr[i] = '';
    } 
  }
  return arr.join('');
}
//sol1
function toCamelCase(str){
  var strArray;
  if (str.indexOf('-') !== -1){ //if delineated by -
    strArray = str.split('-');
  } else {
    strArray = str.split('_');  //if delineated by _
  }
  var camelCase = strArray[0]; //keeps first word value as is
  for (var i=1, len=strArray.length; i < len; i++){
    var capitalized = strArray[i].substr(0, 1).toUpperCase() + strArray[i].slice(1);
    camelCase += capitalized;
  }
  return camelCase;
  

}
