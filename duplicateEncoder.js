/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/
function duplicateEncode(str){
//create a var to hold string value that IGNORES case
var word = str.toLowerCase();
//create a var to hold the finished string to return after it's looped through 
var unique = '';
//loop through all letters in string
  for (var i = 0; i < word.length; i++) {
//check for any characters that repeat
    if (word.lastIndexOf(word[i]) === word.indexOf(word[i])) {
//for each character that never dupes, place (
      unique += '(';
    } else
//for each character that IS a dupe, place )
    unique += ')';
  }
//return the full string value where '(' are non duped and all')' are duped
  return unique;

}
//sol1
function duplicateEncode(word){
   
    var unique='';
    word = word.toLowerCase();
    for(var i=0; i<word.length; i++){
        if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
            unique += '(';
        }
        else{
            unique += ')';
        }
    }
    return unique;

}
//sol2
function duplicateEncode(word) {
  var letters = word.toLowerCase().split('')
  return letters.map(function(c, i) {
    return letters.some(function(x, j) { return x === c && i !== j }) ? ')' : '('
  }).join('')
}
//sol3
function duplicateEncode(word) {
        var str = '';
        var allData = [];
        var toolflag=false;
        for (var i = 0; i < word.length; i++) {
        //    if(word.charAt(i)>'A'&&word.charAt(i)<'Z'){
        //        toolflag=true;
        //    }
            if (allData.length) {
                for (var j = 0; j < allData.length; j++) {
                    if (word.charAt(i).toLowerCase() == allData[j][0].toLowerCase()) {
                        allData[j][1] = 1 + parseInt(allData[j][1]);
                        break;
                    } else if(j==(allData.length-1)){
                        var data = [];
                        data.push(word.charAt(i), 1);
                        allData.push(data);
                       break;
                    }else{continue;}
                }
            } else {
                var data = [];
                data.push(word.charAt(i), 1);
                allData.push(data);
            }
        }
        // console.log(allData)
        for (var i = 0; i < word.length; i++) {
          //  console.log(allData)
          for(var j=0;j<allData.length;j++){
            if(word.charAt(i).toLowerCase()==allData[j][0].toLowerCase()){
                if (allData[j][1] == 1) {
                str += '(';
            } else {
                str += ')';
            }
            }
          }
         
           
        }
        // if(toolflag){
        //     str+=",should ignore case";
        // }
        console.log(allData)
        return str;
    }
//sol4
function duplicateEncode(word){
  function count(word, char) {
    var result = 0;
    for (var index = 0, len = word.length; index < len; index++) {
      if (word[index] == char) result++;
    }
      
    return result;
  }
    
  var result = [];
  var lowerCasedWord = word.toLowerCase();
  for (var index = 0, len = lowerCasedWord.length; index < len; index++) {
    if (count(lowerCasedWord, lowerCasedWord[index]) > 1)
      result.push(")");
    else
      result.push("(");
  }  
  
  return result.join('');
}
//sol5
function duplicateEncode(word){
    //make word lowercase
    //create an empty string to return
    //initiate a count variable
    //nested loop to see if letter is duplicated
    //every time letter is duplicated add to count total
    //if count total > 1 add ) to the string
    //otherwise add ( to the string
    
    const lowercase = word.toLowerCase();
    let result = '';
    
    for (let i = 0; i < lowercase.length; i++) {
      let count = 0;
      for (let j = 0; j < lowercase.length; j++) {
        if (lowercase[i] === lowercase[j]) {
          count++
        }
      }
      if (count > 1) {
        result += ')'
      } else {
        result += '('
      }
    }
    return result 
}
