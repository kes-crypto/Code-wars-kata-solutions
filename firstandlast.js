function removeChar(str){
 //You got this!
  let newStr = ""
  for(i = 0 ; i < str.length ; i++){
    if(i == 0){
      newStr += ""
    }else if(i > 0 && i < (str.length-1)){
      newStr += str[i]
    }else if (i == str.length){
      newStr += ""
    }
  }
  return newStr
};
//sol1
function removeChar(str) {
  return str.slice(1, -1);
}
