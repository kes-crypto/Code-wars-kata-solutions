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
//sol2
function removeChar(str){
 //You got this!
  str1 = str.split('');
  str1.shift();
  str1.pop();
  return str1.join('');
    
};
